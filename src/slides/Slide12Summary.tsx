import React from 'react';
import { Target, SearchCheck, Award } from 'lucide-react';
import styles from './Slide.module.css';

const Slide12Summary: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>สรุปผล<span className="text-gradient">การพัฒนา</span></h2>
      </div>
      
      <div className={styles.slideContent}>
        <div className={styles.grid3}>
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <Target size={60} className={styles.cardIcon} style={{ marginBottom: '20px' }} />
            <h3 className={styles.cardTitle}>Development</h3>
            <p className={styles.cardText}>
              พัฒนา AI Chatbot สำหรับตอบคำถาม Database และ SQL
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <SearchCheck size={60} className={styles.cardIcon} style={{ marginBottom: '20px' }} />
            <h3 className={styles.cardTitle}>Evaluation</h3>
            <p className={styles.cardText}>
              ทดสอบทั้งหมด 660 คำถาม
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <Award size={60} className={styles.cardIcon} style={{ marginBottom: '20px' }} />
            <h3 className={styles.cardTitle}>Result</h3>
            <p className={styles.cardText}>
              Accuracy = <span style={{ color: 'var(--color-purple-lighter)', fontWeight: 700, fontSize: '1.5rem' }}>78.18%</span>
            </p>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <p className={styles.description} style={{ display: 'inline-block', maxWidth: '800px', fontSize: '1.2rem', lineHeight: 1.6 }}>
            "ChatBot ครูเอสคิวสามารถนำมาใช้เป็นเครื่องมือช่วยเรียนรู้เกี่ยวกับระบบฐานข้อมูลและภาษา SQL ผ่าน Web Application ได้"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide12Summary;
