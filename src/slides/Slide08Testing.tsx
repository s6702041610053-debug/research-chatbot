import React from 'react';
import styles from './Slide.module.css';

const Slide08Testing: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>การทดสอบและ<span className="text-gradient">ประเมินความถูกต้อง</span></h2>
      </div>
      
      <div className={styles.slideContent} style={{ display: 'flex', flexDirection: 'column', gap: '40px', justifyContent: 'center' }}>
        
        {/* Top Numbers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <div className={styles.bigNumber} style={{ fontSize: '4.5rem' }}>6</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>ผู้ทดสอบ</div>
          </div>
          <div className="glass-panel" style={{ padding: '30px', textAlign: 'center' }}>
            <div className={styles.bigNumber} style={{ fontSize: '4.5rem' }}>110</div>
            <div style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>คำถาม / คน</div>
          </div>
          <div className="glass-panel-glow" style={{ padding: '30px', textAlign: 'center' }}>
            <div className={styles.bigNumber} style={{ fontSize: '4.5rem', background: 'linear-gradient(to right, #A78BFA, #fff)', WebkitBackgroundClip: 'text' }}>660</div>
            <div style={{ fontSize: '1.2rem', color: 'white' }}>คำถามทั้งหมด</div>
          </div>
        </div>

        {/* Confusion Matrix */}
        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--color-purple-lighter)' }}>Confusion Matrix</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="glass-panel" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <span style={{ fontSize: '1.2rem', color: '#10B981' }}>True Positive (TP)</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>378</span>
            </div>
            <div className="glass-panel" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <span style={{ fontSize: '1.2rem', color: '#EF4444' }}>False Positive (FP)</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>75</span>
            </div>
            <div className="glass-panel" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <span style={{ fontSize: '1.2rem', color: '#EF4444' }}>False Negative (FN)</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>69</span>
            </div>
            <div className="glass-panel" style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <span style={{ fontSize: '1.2rem', color: '#10B981' }}>True Negative (TN)</span>
              <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'white' }}>138</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slide08Testing;
