import React from 'react';

interface ProgressProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)' }}>
      <div 
        style={{ 
          width: `${percentage}%`, 
          height: '100%', 
          background: 'linear-gradient(to right, var(--color-purple), var(--color-purple-lighter))',
          transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }} 
      />
    </div>
  );
};

export default ProgressBar;
