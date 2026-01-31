import { motion } from 'framer-motion';

interface FloatingShapesProps {
  className?: string;
}

export default function FloatingShapes({ className = '' }: FloatingShapesProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute w-64 h-64 opacity-[0.03]"
        style={{
          top: '10%',
          right: '15%',
          background: 'linear-gradient(135deg, var(--color-primary) 0%, transparent 50%)',
          clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          y: [0, -30, 0],
        }}
        transition={{
          rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute w-48 h-48 opacity-[0.04]"
        style={{
          bottom: '20%',
          left: '10%',
          background: 'linear-gradient(45deg, var(--color-primary-light) 0%, transparent 60%)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        }}
        animate={{
          rotate: [0, -360],
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
        }}
        transition={{
          rotate: { duration: 50, repeat: Infinity, ease: 'linear' },
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute w-32 h-32 rounded-full opacity-[0.06]"
        style={{
          top: '40%',
          left: '25%',
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.06, 0.1, 0.06],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-96 h-96 opacity-[0.02]"
        style={{
          top: '5%',
          left: '50%',
          border: '1px solid var(--color-primary)',
          borderRadius: '50%',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <motion.div
        className="absolute w-72 h-72 opacity-[0.03]"
        style={{
          top: '12%',
          left: '53%',
          border: '1px solid var(--color-primary-light)',
          borderRadius: '50%',
        }}
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute w-20 h-20 opacity-[0.08]"
        style={{
          bottom: '30%',
          right: '20%',
          background: 'var(--color-primary)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        }}
        animate={{
          rotate: [0, 180, 360],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="10%"
          y1="20%"
          x2="30%"
          y2="80%"
          stroke="var(--color-primary)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.line
          x1="70%"
          y1="10%"
          x2="90%"
          y2="60%"
          stroke="var(--color-primary-light)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        <motion.circle
          cx="80%"
          cy="30%"
          r="40"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: [0, 1], opacity: [0, 0.1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>

      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[var(--color-primary)]"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 1.2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}
