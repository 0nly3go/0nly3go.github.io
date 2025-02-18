import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        background: {
          opacity: 0
        },
        particles: {
          color: {
            value: "#06b6d4" // Cyan color matching your theme
          },
          links: {
            color: "#06b6d4",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800
            }
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out"
          },
          size: {
            value: { min: 1, max: 3 }
          },
          opacity: {
            value: 0.3
          }
        }
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    />
  );
};