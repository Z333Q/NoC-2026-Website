import { motion } from 'framer-motion';

interface MolecularOrbProps {
  size?: number;
  className?: string;
  delay?: number;
}

export default function MolecularOrb({ size = 400, className = '', delay = 0 }: MolecularOrbProps) {
  const electronCount = 5;
  const rings = 4;

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%,
            rgba(74, 144, 217, 0.4) 0%,
            rgba(74, 144, 217, 0.2) 30%,
            rgba(74, 144, 217, 0.05) 60%,
            transparent 80%)`,
          filter: 'blur(40px)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      />

      {[...Array(rings)].map((_, i) => {
        const ringSize = 0.3 + i * 0.18;
        const duration = 20 + i * 8;
        const direction = i % 2 === 0 ? 1 : -1;
        const tilt = i * 15;

        return (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full"
            style={{
              width: size * ringSize,
              height: size * ringSize,
              top: `${50 - ringSize * 50}%`,
              left: `${50 - ringSize * 50}%`,
              border: `1px solid rgba(74, 144, 217, ${0.15 - i * 0.02})`,
              transform: `rotateX(${60 + tilt}deg) rotateY(${tilt}deg)`,
              transformStyle: 'preserve-3d',
            }}
            animate={{ rotate: 360 * direction }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + i * 0.5,
            }}
          >
            {i < 3 && (
              <motion.div
                className="absolute rounded-full bg-[var(--color-primary)]"
                style={{
                  width: 6 - i,
                  height: 6 - i,
                  top: -(3 - i / 2),
                  left: '50%',
                  marginLeft: -(3 - i / 2),
                  boxShadow: `0 0 ${10 - i * 2}px var(--color-primary)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
              />
            )}
          </motion.div>
        );
      })}

      {[...Array(electronCount)].map((_, i) => {
        const angle = (i / electronCount) * Math.PI * 2;
        const radius = size * 0.35;
        const duration = 8 + i * 2;

        return (
          <motion.div
            key={`electron-${i}`}
            className="absolute"
            style={{
              width: 4,
              height: 4,
              top: '50%',
              left: '50%',
              marginTop: -2,
              marginLeft: -2,
            }}
            animate={{
              x: [
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius,
                Math.cos(angle) * radius,
              ],
              y: [
                Math.sin(angle) * radius * 0.4,
                Math.sin(angle + Math.PI) * radius * 0.4,
                Math.sin(angle) * radius * 0.4,
              ],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + i * 0.5,
            }}
          >
            <div
              className="w-full h-full rounded-full bg-[var(--color-primary-light)]"
              style={{
                boxShadow: '0 0 8px var(--color-primary-light), 0 0 16px var(--color-primary)',
              }}
            />
            <motion.div
              className="absolute rounded-full bg-[var(--color-primary)]"
              style={{
                width: 20,
                height: 20,
                top: -8,
                left: -8,
                filter: 'blur(8px)',
              }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        );
      })}

      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.08,
          height: size * 0.08,
          top: '50%',
          left: '50%',
          marginTop: -size * 0.04,
          marginLeft: -size * 0.04,
          background: 'radial-gradient(circle, var(--color-primary-light) 0%, var(--color-primary) 60%, transparent 100%)',
          boxShadow: `
            0 0 20px var(--color-primary),
            0 0 40px rgba(74, 144, 217, 0.5),
            0 0 60px rgba(74, 144, 217, 0.3)
          `,
        }}
        animate={{
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 20px rgba(74, 144, 217, 0.6), 0 0 40px rgba(74, 144, 217, 0.3)',
            '0 0 40px rgba(74, 144, 217, 0.8), 0 0 80px rgba(74, 144, 217, 0.5)',
            '0 0 20px rgba(74, 144, 217, 0.6), 0 0 40px rgba(74, 144, 217, 0.3)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      />

      <motion.div
        className="absolute rounded-full border border-[var(--color-primary)]/10"
        style={{
          width: size * 0.9,
          height: size * 0.9,
          top: '5%',
          left: '5%',
        }}
        animate={{
          scale: [1, 1.02, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
      />
    </div>
  );
}
