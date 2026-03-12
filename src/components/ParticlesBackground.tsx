'use client';

import Particles from '@tsparticles/react';
import { useCallback } from 'react';
import type { Container, Engine } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await import('@tsparticles/slim'); // slim bundle
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: '#000000' } },
        fpsLimit: 60,
        particles: {
          number: { value: 150, density: { enable: true, value_area: 800 } },
          color: { value: '#c8dcff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: true },
          size: { value: 1.5, random: true },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: { events: { onHover: { enable: false } } },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}