import React from 'react';
import { Database, Network } from 'lucide-react';
import styles from './Slide.module.css';

const Slide07KnowledgeBase: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}><span className="text-gradient">Knowledge Base</span> ของ ChatBot</h2>
      </div>
      
      <div className={styles.slideContent} style={{ flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
        
        <div style={{ flex: 1.5, position: 'relative' }}>
          <div className="glass-panel-glow" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ color: 'var(--color-purple-lighter)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem' }}>
              <Database size={28} /> โครงสร้างข้อมูลองค์ความรู้
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              <div className="glass-panel" style={{ padding: '15px' }}>เอกสารการเรียนการสอน</div>
              <div className="glass-panel" style={{ padding: '15px' }}>เนื้อหาระบบฐานข้อมูล</div>
              <div className="glass-panel" style={{ padding: '15px' }}>SQL Examples</div>
              <div className="glass-panel" style={{ padding: '15px' }}>Relational Database</div>
              <div className="glass-panel" style={{ padding: '15px' }}>Database Concepts</div>
              <div className="glass-panel" style={{ padding: '15px' }}>SELECT / WHERE / JOIN</div>
              <div className="glass-panel" style={{ padding: '15px' }}>GROUP BY / HAVING</div>
              <div className="glass-panel" style={{ padding: '15px' }}>INSERT / UPDATE / DELETE</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 20px' }}>
          <Network size={80} style={{ color: 'var(--color-purple)', marginBottom: '30px' }} />
          <h3 style={{ fontSize: '2rem', lineHeight: 1.4, color: 'white' }}>
            "เปลี่ยนข้อมูลการเรียนรู้<br/>ให้กลายเป็นองค์ความรู้"
          </h3>
          <p style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}>
            ที่ ChatBot สามารถค้นหาและนำมาตอบคำถามได้อย่างถูกต้องและแม่นยำ
          </p>
        </div>

      </div>
    </div>
  );
};

export default Slide07KnowledgeBase;
