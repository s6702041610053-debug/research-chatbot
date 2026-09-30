import React from 'react';
import styles from './Slide.module.css';

const Slide09Results: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>ผลการประเมิน<span className="text-gradient">ความถูกต้องของ ChatBot</span></h2>
      </div>
      
      <div className={styles.slideContent} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Gauge Chart Simulation */}
        <div style={{ position: 'relative', width: '320px', height: '320px', marginBottom: '50px' }}>
          <svg viewBox="0 0 100 100" width="320" height="320">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
            <circle 
              cx="50" cy="50" r="45" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="8" 
              strokeDasharray="282.7" 
              strokeDashoffset={282.7 - (282.7 * 78.18) / 100} 
              strokeLinecap="round" 
              transform="rotate(-90 50 50)" 
              style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-purple-light)" />
                <stop offset="100%" stopColor="var(--color-purple-lighter)" />
              </linearGradient>
            </defs>
          </svg>
          <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '4.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>78.18<span style={{ fontSize: '2rem' }}>%</span></span>
            <span style={{ color: 'var(--color-purple-lighter)', fontSize: '1.2rem', marginTop: '-5px' }}>Overall Accuracy</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
          <div className="glass-panel" style={{ padding: '20px 40px', textAlign: 'center', minWidth: '200px' }}>
            <div style={{ color: 'var(--color-text-muted)', marginBottom: '5px' }}>กลุ่มภายใน</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>77.88%</div>
          </div>
          <div className="glass-panel" style={{ padding: '20px 40px', textAlign: 'center', minWidth: '200px' }}>
            <div style={{ color: 'var(--color-text-muted)', marginBottom: '5px' }}>กลุ่มภายนอก</div>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>78.48%</div>
          </div>
        </div>

        <p className={styles.description} style={{ maxWidth: '800px', fontSize: '1.3rem', lineHeight: 1.6 }}>
          "ผลการทดลองพบว่า ChatBot สามารถตอบคำถามได้ถูกต้องโดยมีความแม่นยำโดยรวมที่ 78.18%"
        </p>

      </div>
    </div>
  );
};

export default Slide09Results;
