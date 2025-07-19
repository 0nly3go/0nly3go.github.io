import { motion } from 'framer-motion';

export default function BeginnersGuideToAI() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16 text-white">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 text-left"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        Beginner's Guide to Artificial Intelligence
      </motion.h1>
      <div className="flex items-center text-gray-400 text-sm mb-8">
        <span>By Joshua Mason</span>
        <span className="mx-2">•</span>
        <span>July 19th, 2025</span>
      </div>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">Introduction</h2>
        <p className="text-gray-200 mb-2">By the end of this guide, you’ll have a fundamental knowledge of what artificial intelligence is, what it should and should not be used for, and opportunities to profit from a new and innovative technology.</p>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">What is AI?</h2>
        <p className="text-gray-200 mb-2">AI refers to machines that can do tasks which usually require human intelligence. They are machines with abilities to learn from data, identify patterns, and make decisions with minimal human intervention. However, not all AI is truly "intelligent" as they are still capable of mistakes an average human would be unlikely to make. This is evident in tests such as ARC reasoning, LLM's tendacy to halucinate, Will Smith not being able to eat spaghetti, and other funny use cases. These will likely be outdated soon as the technology progresses, but it is currently considered AGI or ASI (which we'll touch on later) if these computer can understnd the world at large.</p>
        <p className="text-gray-200 mb-2">AI is commonly broken down into subcategories:</p>
        <ul className="list-disc list-inside text-gray-400 mb-2">
          <li><b>Machine Learning (ML):</b> Computers being trained with data, rather than instructions. This allows for the potential of computers to draw conclusions from data a human-eye would have missed, but can also find unimportant patterns.</li>
          <li><b>Deep Learning:</b> A subset of ML using neural networks to process complex data.</li>
          <li><b>Neural Nets:</b> Neural nets break down data and rebuild them using complex algorithms to assign them to categories. It’s a math intensive process, but the first iterations are just the models guessing what the output is and adjusting from there through reinforcement learning.</li>
        </ul>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">How Large Language Models (LLMs) Work</h2>
        <p className="text-gray-200 mb-2">LLMs like ChatGPT, Copilot, and Claude are neural networks trained on text data to predict the next word in a sequence. They use tokens (word pieces) to generate new sentences, and similar logic applies to music, audio, and images. Generative AI refers to these models creating new data based on existing data.</p>
        <p className="text-gray-200 mb-2">GPT stands for Generative Pretrained Transformer, based on the Transformer architecture from Google’s 2017 paper "Attention is All You Need." This architecture allows for more efficient and powerful language models.</p>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">Risks, Limitations, and Ethics</h2>
        <ul className="list-disc list-inside text-gray-400 mb-2">
          <li><b>Dependence on Data:</b> AI systems rely heavily on vast amounts of data for training and decision-making. They struggle when data is incomplete, biased, or unrepresentative of real-world conditions (Lu et al., 2017).</li>
          <li><b>Lack of Generalization:</b> Unlike humans, AI lacks the ability to generalize knowledge across different contexts or domains, making it unsuitable for tasks requiring flexible thinking (Shevlin et al., 2019).</li>
          <li><b>Explainability Issues:</b> AI models, especially deep learning systems, often function as "black boxes" without transparent decision-making processes. This limits their adoption in critical applications like healthcare and law (Topol, 2019).</li>
          <li><b>Ethical and Bias Challenges:</b> AI systems may inherit biases present in their training data, leading to unfair or discriminatory outcomes, particularly in social or judicial contexts (Chowdhury & Sadek, 2012).</li>
          <li><b>Energy and Computational Costs:</b> Modern AI systems require significant computational power and energy resources, making them environmentally and economically costly (Ivanov et al., 2022).</li>
          <li><b>Limited Autonomy and Innovation:</b> AI cannot independently generate novel ideas or solutions beyond the scope of its training, which limits its capacity for creativity and autonomous decision-making (Walton, 2018).</li>
          <li><b>Robustness to Adversarial Attacks:</b> AI systems, especially in critical areas like cybersecurity, remain vulnerable to adversarial inputs that can manipulate outcomes (Zhang et al., 2021).</li>
        </ul>
      </motion.section>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">The Future: AGI and ASI</h2>
        <p className="text-gray-200 mb-2"><b>Artificial General Intelligence (AGI):</b> Artificial General Intelligence is what many believe to be the next breakthrough in the world of AI. This is defined as a system which is able to complete tasks of a wide variety having very generalized capabilities as opposed to narrow ones. An example would be as we have machines that are fine tuned for specific tasks (chess playing bot) to extrapolate its existing knowledge to make the best prediction in any given scenario. This generalized reasoning is suspected to be the key to bring these machines into the realm of human intelligence. While many machines can solve problems accurately when their data matches the queries, it is difficult for them to compose novel solutions to ideas most people would deem simple as in the ARC reasoning test. </p>
        <p className="text-gray-200 mb-2"><b>Artificial Super Intelligence (ASI):</b> Artificial Super Intelligence is a step up from AGI, and is defined as a system which not only meets the full capabilities of human intelligence, but far surpasses it. Many fear if a state actor achieved such power it would mirror the nuclear arms race and have humanity scrambling for computing power only for a fighting chance. Others believe a machine this intelligent would be able to achieve world peace, a predictable economy, or infinite energy allowing for humans to devote the rest of their time to leisure activities or personal enrichment. I have also seen some imagine a dystopian future where corporations achieve this first and layoff their workforce to maximize profits where the majority is left to suffer. Either way, futurists believe that any of these realities are a long ways away - well, most of them anyway.</p>
      </motion.section>
  
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-cyan-400">Conclusion</h2>
        <p className="text-gray-200 mb-2">AI is a powerful tool, but it’s not magic. With a solid understanding of its strengths and limitations, you can make informed decisions and spot real opportunities. If you enjoyed this guide, check out our other resources or book a free consultation!</p>
      </motion.section>
    </article>
  );
} 