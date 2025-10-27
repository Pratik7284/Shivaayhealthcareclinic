import React, { useEffect, useState } from 'react';

// Mock framer-motion for environments where it might not be available.
// In a real project, you would `npm install framer-motion`.
const motion = {
  div: ({ children, ...props }: { children: React.ReactNode;[key: string]: any }) => {
    const [style, setStyle] = useState({ opacity: 0, transform: 'translateY(20px)' });

    useEffect(() => {
      const timer = setTimeout(() => {
        setStyle({ opacity: 1, transform: 'translateY(0px)' });
      }, 50); // Small delay to trigger transition
      return () => clearTimeout(timer);
    }, []);

    return (
      <div
        {...props}
        style={{ ...props.style, ...style, transition: 'opacity 0.5s ease, transform 0.5s ease' }}
      >
        {children}
      </div>
    );
  },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
