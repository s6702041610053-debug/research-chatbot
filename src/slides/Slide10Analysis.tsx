import React from 'react';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import styles from './Slide.module.css';

const Slide10Analysis: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}><span className="text-gradient">การวิเคราะห์ผล</span>การทดลอง</h2>
      </div>
      
      <div className={styles.slideContent}>
        <div className={styles.grid3}>
          <div className={`glass-panel-glow ${styles.card}`}>
            <CheckCircle size={45} className={styles.cardIcon} style={{ color: '#10B981' }} />
            <h3 className={styles.cardTitle}>จุดที่ระบบทำได้ดี</h3>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>สามารถตอบคำถามด้าน Database และ SQL</li>
              <li>สามารถแยกคำถามที่อยู่ในขอบเขตความรู้</li>
              <li>สามารถให้คำอธิบายและตัวอย่างประกอบ</li>
            </ul>
          </div>
          
          <div className={`glass-panel-glow ${styles.card}`}>
            <AlertTriangle size={45} className={styles.cardIcon} style={{ color: '#F59E0B' }} />
            <h3 className={styles.cardTitle}>ประเด็นที่พบ</h3>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>ยังมีคำตอบบางส่วนที่ไม่ถูกต้อง</li>
              <li>Intent Recognition ยังสามารถปรับปรุงได้</li>
              <li>Knowledge Base สามารถเพิ่มข้อมูลได้</li>
            </ul>
          </div>
          
          <div className={`glass-panel-glow ${styles.card}`}>
            <Lightbulb size={45} className={styles.cardIcon} style={{ color: 'var(--color-purple-lighter)' }} />
            <h3 className={styles.cardTitle}>แนวทางพัฒนา</h3>
            <ul style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '20px' }}>
              <li>เพิ่มและปรับปรุง Knowledge Base</li>
              <li>ปรับปรุง Intent Recognition</li>
              <li>เพิ่มชุดคำถามสำหรับการทดสอบ</li>
              <li>ปรับปรุงความแม่นยำของคำตอบ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10Analysis;
