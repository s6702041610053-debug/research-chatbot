import React from 'react';
import styles from './Slide.module.css';

const Slide03Objectives: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}><span className="text-gradient">วัตถุประสงค์</span>ของโครงงาน</h2>
      </div>
      
      <div className={styles.slideContent}>
        <div className={styles.grid3}>
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <div className={styles.bigNumber}>01</div>
            <h3 className={styles.cardTitle}>พัฒนา Chatbot</h3>
            <p className={styles.cardText}>
              พัฒนา AI Chatbot สำหรับตอบคำถามเกี่ยวกับการจัดการระบบฐานข้อมูลและภาษา SQL
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <div className={styles.bigNumber}>02</div>
            <h3 className={styles.cardTitle}>ประเมินประสิทธิภาพ</h3>
            <p className={styles.cardText}>
              ประเมินความถูกต้องและประสิทธิภาพของการตอบคำถาม
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card} ${styles.bigNumberCard}`}>
            <div className={styles.bigNumber}>03</div>
            <h3 className={styles.cardTitle}>ศึกษาความพึงพอใจ</h3>
            <p className={styles.cardText}>
              ศึกษาความพึงพอใจของผู้ใช้งานระบบ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide03Objectives;
