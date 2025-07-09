import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, query, onSnapshot, addDoc, serverTimestamp, getDocs, deleteDoc } from 'firebase/firestore';
import { FaLightbulb, FaTools, FaListOl, FaUserAstronaut, FaRobot, FaCheckCircle } from 'react-icons/fa';

const appId = 'faithline-workshop-app';
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
const initialAuthToken = null;

const promptSteps = [
  {
    title: 'Defining your problem',
    desc: 'Identifying the core issue to address.',
    icon: <FaLightbulb className="text-yellow-300" />,
    color: 'bg-yellow-400'
  },
  {
    title: 'Understand the resources available',
    desc: 'Assessing tools and information at hand.',
    icon: <FaTools className="text-cyan-300" />,
    color: 'bg-cyan-400'
  },
  {
    title: 'Deciding on the type of prompt needed',
    desc: 'Choosing the appropriate prompt format.',
    icon: <FaListOl className="text-green-300" />,
    color: 'bg-green-400'
  },
  {
    title: 'Setting a persona',
    desc: 'Establishing a character or role for the prompt.',
    icon: <FaUserAstronaut className="text-blue-300" />,
    color: 'bg-blue-400'
  },
  {
    title: 'Considering the model in use',
    desc: "Evaluating the AI model's capabilities.",
    icon: <FaRobot className="text-purple-300" />,
    color: 'bg-purple-400'
  },
  {
    title: 'Structure the prompt',
    desc: 'Organizing the prompt for clarity and effectiveness.',
    icon: <FaCheckCircle className="text-pink-200 animate-pulse" />,
    color: 'bg-pink-500 animate-pulse'
  }
];

export default function ChatbotWorkshop() {
  const [db, setDb] = useState(null);
  const [auth, setAuth] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [view, setView] = useState('home');
  const [chatbots, setChatbots] = useState([]);
  const [selectedChatbot, setSelectedChatbot] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      const firebaseAuth = getAuth(app);
      setDb(firestore);
      setAuth(firebaseAuth);
      const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
        if (user) {
          setUserId(user.uid);
        } else {
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(firebaseAuth, initialAuthToken);
            } else {
              await signInAnonymously(firebaseAuth);
            }
          } catch (error) {
            console.error("Error signing in:", error);
            showCustomModal("Error signing in. Please try again.");
          }
        }
        setIsAuthReady(true);
      });
      return () => unsubscribe();
    } catch (error) {
      console.error("Error initializing Firebase:", error);
      showCustomModal("Error initializing app. Please refresh.");
    }
  }, []);

  useEffect(() => {
    if (isAuthReady && db && userId) {
      const userChatbotsCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/chatbots`);
      const unsubscribe = onSnapshot(userChatbotsCollectionRef, (snapshot) => {
        const fetchedChatbots = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setChatbots(fetchedChatbots);
      }, (error) => {
        console.error("Error fetching chatbots:", error);
        showCustomModal("Error loading your chatbots.");
      });
      return () => unsubscribe();
    }
  }, [isAuthReady, db, userId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const showCustomModal = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  // Chatbot creation state and handlers (same as before)
  const [chatbotName, setChatbotName] = useState('');
  const [chatbotPurpose, setChatbotPurpose] = useState('');
  const [chatbotPersona, setChatbotPersona] = useState('');
  const [chatbotInstructions, setChatbotInstructions] = useState('');

  const handleCreateChatbot = async (e) => {
    e.preventDefault();
    if (!db || !userId) {
      showCustomModal("Authentication not ready. Please wait.");
      return;
    }
    if (!chatbotName || !chatbotPurpose || !chatbotPersona) {
      showCustomModal("Please fill in all required fields for your chatbot.");
      return;
    }
    setLoading(true);
    try {
      const newChatbot = {
        name: chatbotName,
        purpose: chatbotPurpose,
        persona: chatbotPersona,
        instructions: chatbotInstructions,
        createdAt: serverTimestamp(),
        userId: userId,
      };
      await addDoc(collection(db, `artifacts/${appId}/users/${userId}/chatbots`), newChatbot);
      showCustomModal("Chatbot created successfully!");
      setChatbotName('');
      setChatbotPurpose('');
      setChatbotPersona('');
      setChatbotInstructions('');
      setView('home');
    } catch (error) {
      console.error("Error creating chatbot:", error);
      showCustomModal("Failed to create chatbot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteChatbot = async (chatbotId, chatbotName) => {
    if (!db || !userId) {
      showCustomModal("Authentication not ready. Please wait.");
      return;
    }
    const confirmed = window.confirm(`Are you sure you want to delete "${chatbotName}"? This action cannot be undone and will delete all associated messages.`);
    if (!confirmed) return;
    setLoading(true);
    try {
      await deleteDoc(doc(db, `artifacts/${appId}/users/${userId}/chatbots/${chatbotId}`));
      showCustomModal("Chatbot deleted successfully!");
      if (selectedChatbot && selectedChatbot.id === chatbotId) {
        setSelectedChatbot(null);
        setMessages([]);
        setView('home');
      }
    } catch (error) {
      console.error("Error deleting chatbot:", error);
      showCustomModal("Failed to delete chatbot. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectChatbot = async (chatbot) => {
    setSelectedChatbot(chatbot);
    setView('chat');
    if (db && userId && chatbot.id) {
      const messagesCollectionRef = collection(db, `artifacts/${appId}/users/${userId}/chatbots/${chatbot.id}/messages`);
      const q = query(messagesCollectionRef);
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const fetchedMessages = snapshot.docs.map(doc => doc.data());
        fetchedMessages.sort((a, b) => (a.timestamp?.toDate() || 0) - (b.timestamp?.toDate() || 0));
        setMessages(fetchedMessages);
      }, (error) => {
        console.error("Error fetching messages:", error);
        showCustomModal("Error loading chat history.");
      });
      return () => unsubscribe();
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedChatbot || !db || !userId) return;
    setLoading(true);
    const userMessage = {
      text: newMessage,
      sender: 'user',
      timestamp: serverTimestamp(),
    };
    try {
      await addDoc(collection(db, `artifacts/${appId}/users/${userId}/chatbots/${selectedChatbot.id}/messages`), userMessage);
      setNewMessage('');
      const chatHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));
      chatHistory.push({ role: "user", parts: [{ text: newMessage }] });
      const fullPrompt = `You are a chatbot named "${selectedChatbot.name}". Your purpose is: "${selectedChatbot.purpose}". Your persona is: "${selectedChatbot.persona}". Additional instructions: "${selectedChatbot.instructions}".\n\nBased on this, respond to the following conversation:\n\n${chatHistory.map(m => `${m.role}: ${m.parts[0].text}`).join('\n')}`;
      const payload = {
        contents: [{ role: "user", parts: [{ text: fullPrompt }] }],
      };
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        showCustomModal("API Key is missing. Please set your Gemini API Key in the code.");
        setLoading(false);
        return;
      }
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.candidates && result.candidates.length > 0 &&
        result.candidates[0].content && result.candidates[0].content.parts &&
        result.candidates[0].content.parts.length > 0) {
        const botResponseText = result.candidates[0].content.parts[0].text;
        const botMessage = {
          text: botResponseText,
          sender: 'model',
          timestamp: serverTimestamp(),
        };
        await addDoc(collection(db, `artifacts/${appId}/users/${userId}/chatbots/${selectedChatbot.id}/messages`), botMessage);
      } else {
        console.error("Unexpected API response structure:", result);
        showCustomModal("Failed to get a response from the chatbot. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message or getting AI response:", error);
      showCustomModal("Error communicating with the chatbot. Check your API key and network.");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthReady) {
    return (
      <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-xl font-semibold text-gray-300">Loading application...</div>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-72 md:h-80 flex flex-col items-center justify-center text-center">
        <motion.h1 className="text-4xl md:text-5xl font-bold mb-2 mt-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Create Your Own AI Chatbot
        </motion.h1>
  
        <motion.p className="text-lg text-gray-300 max-w-xl mx-auto px-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          In this activity, you’ll learn how to design and interact with your own AI chatbot—no coding required!
        </motion.p>
      </div>

      {/* Prompt Engineering Steps as Stepper */}
      <div className="px-2 py-6 max-w-md mx-auto w-full mt-2 md:mt-4">
        <motion.h2 className="text-2xl md:text-2xl font-semibold text-cyan-400 mb-6 text-center mt-2 md:mt-4">Steps to Develop an AI Prompt</motion.h2>
        <div className="flex flex-col gap-0 relative">
          {promptSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start gap-4 relative z-10 mb-2"
            >
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg ${step.color} mb-1`}>
                  {step.icon}
                </div>
                {idx < promptSteps.length - 1 && (
                  <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-gray-700 mx-auto"></div>
                )}
              </div>
              <div className="flex-1">
                <div className="font-bold text-base md:text-lg text-white leading-tight mb-1">{step.title}</div>
                <div className="text-gray-300 text-sm leading-snug">{step.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chatbot Creation Activity */}
      <div className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">Activity: Build Your Own Chatbot</motion.h2>
          <p className="text-gray-200 text-center mb-8 max-w-2xl mx-auto">
            Use the form below to design your chatbot’s personality and purpose. Then, chat with your bot and see how it responds! Try different prompts and see what happens.
          </p>
          {/* --- Chatbot Builder UI (same as before) --- */}
          {view === 'home' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <motion.button
                onClick={() => setView('createChatbot')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 mb-8 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create New Chatbot
              </motion.button>
              <h2 className="text-3xl font-semibold text-cyan-400 mb-8">Your Chatbots</h2>
              {chatbots.length === 0 ? (
                <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-8 text-center">
                  <p className="text-gray-400 text-lg">No chatbots created yet. Click "Create New Chatbot" to get started!</p>
                </div>
              ) : (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {chatbots.map((chatbot, index) => (
                    <motion.div
                      key={chatbot.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-cyan-400 mb-3">{chatbot.name}</h3>
                        <p className="text-sm text-gray-300 mb-2">Purpose: {chatbot.purpose}</p>
                        <p className="text-sm text-gray-300">Persona: {chatbot.persona}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <button 
                          onClick={() => handleDeleteChatbot(chatbot.id, chatbot.name)}
                          className="bg-red-500 hover:bg-red-600 text-white text-sm py-2 px-3 rounded-lg transition-all duration-300"
                          disabled={loading}
                        >
                          {loading ? 'Deleting...' : 'Delete'}
                        </button>
                        <button 
                          onClick={() => handleSelectChatbot(chatbot)}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm py-2 px-4 rounded-lg transition-all duration-300"
                        >
                          Chat Now
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {view === 'createChatbot' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <form onSubmit={handleCreateChatbot} className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-8">
                <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-center">Design Your Chatbot</h2>
                <p className="text-gray-300 mb-8 text-center">
                  Use these fields to define your AI's personality and purpose, based on prompt engineering basics!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="chatbotName" className="block text-gray-300 text-sm font-bold mb-2">
                      Chatbot Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="chatbotName"
                      value={chatbotName}
                      onChange={(e) => setChatbotName(e.target.value)}
                      className="w-full py-3 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="e.g., 'History Helper', 'Creative Writer Bot'"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="chatbotPurpose" className="block text-gray-300 text-sm font-bold mb-2">
                      Defining Your Problem / Purpose <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="chatbotPurpose"
                      value={chatbotPurpose}
                      onChange={(e) => setChatbotPurpose(e.target.value)}
                      className="w-full py-3 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-24 resize-none"
                      placeholder="What is the core issue your chatbot will address?"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="chatbotPersona" className="block text-gray-300 text-sm font-bold mb-2">
                    Setting a Persona <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="chatbotPersona"
                    value={chatbotPersona}
                    onChange={(e) => setChatbotPersona(e.target.value)}
                    className="w-full py-3 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-24 resize-none"
                    placeholder="Establish a character or role for your chatbot"
                    required
                  ></textarea>
                </div>
                <div className="mt-6">
                  <label htmlFor="chatbotInstructions" className="block text-gray-300 text-sm font-bold mb-2">
                    Additional Instructions (Optional)
                  </label>
                  <textarea
                    id="chatbotInstructions"
                    value={chatbotInstructions}
                    onChange={(e) => setChatbotInstructions(e.target.value)}
                    className="w-full py-3 px-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent h-24 resize-none"
                    placeholder="Any other specific rules or guidelines for your chatbot's behavior"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between mt-8">
                  <button
                    type="button"
                    onClick={() => setView('home')}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300"
                  >
                    Back to Home
                  </button>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Chatbot'}
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {view === 'chat' && selectedChatbot && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-xl border border-cyan-500/20 p-6">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-600">
                  <h2 className="text-2xl font-semibold text-cyan-400">Chat with {selectedChatbot.name}</h2>
                  <button
                    onClick={() => {
                      setView('home');
                      setSelectedChatbot(null);
                      setMessages([]);
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
                  >
                    Back to Chatbots
                  </button>
                </div>
                <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-800 rounded-lg mb-4">
                  {messages.length === 0 && (
                    <p className="text-center text-gray-400 italic">Start a conversation with your chatbot!</p>
                  )}
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[70%] p-3 rounded-lg ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            : 'bg-gray-700 text-gray-200'
                        }`}
                      >
                        <p className="text-sm md:text-base">{msg.text}</p>
                        <span className="block text-xs opacity-75 mt-1">
                          {msg.timestamp?.toDate().toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                  {loading && (
                    <div className="flex justify-start">
                      <div className="max-w-[70%] p-3 rounded-lg bg-gray-700 text-gray-200">
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 mr-2"></div>
                          <span>Typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <form onSubmit={handleSendMessage} className="flex">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-3 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-6 rounded-r-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-300"
                    disabled={loading}
                  >
                    Send
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Resources for Students */}
      <div className="px-6 py-8 max-w-3xl mx-auto">
        <motion.h2 className="text-2xl font-semibold text-cyan-400 mb-2">Resources for Students</motion.h2>
        <ul className="list-disc list-inside text-gray-200 mb-4">
          <li>
            <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Google Teachable Machine</a> – Train your own AI models with images, sounds, or poses.
          </li>
          <li>Explore more beginner AI tools: Scratch with AI extensions, Experiments with Google, AI for Oceans by Code.org</li>
        </ul>
        <div className="text-center text-cyan-200 font-bold mt-6">
          AI is for everyone. You have the power to shape the future of technology!
        </div>
      </div>

      {/* Custom Modal for Alerts */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 m-4 max-w-sm w-full text-center rounded-xl border border-cyan-500/20">
            <p className="text-lg font-semibold text-white mb-4">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center items-center py-4 mt-8">
        <span className="text-xs md:text-sm text-cyan-200 bg-cyan-900/40 px-3 py-1 rounded font-mono break-all" style={{wordBreak: 'break-all'}}>
          Your User ID: {userId}
        </span>
      </div>
    </section>
  );
} 