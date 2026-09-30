import React from 'react';
import { AlertCircle, Cpu, GraduationCap } from 'lucide-react';
import styles from './Slide.module.css';

const Slide02Background: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>ที่มาและ<span className="text-gradient">ความสำคัญของโครงงาน</span></h2>
      </div>
      
      <div className={styles.slideContent}>
        <div className={styles.grid3}>
          <div className={`glass-panel-glow ${styles.card}`}>
            <AlertCircle size={50} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>ปัญหา</h3>
            <p className={styles.cardText}>
              การเรียนรู้ระบบฐานข้อมูลและภาษา SQL มีเนื้อหาหลายด้าน ผู้เรียนอาจมีข้อสงสัยระหว่างเรียนและต้องใช้เวลาในการค้นหาคำตอบ
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card}`}>
            <Cpu size={50} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>แนวทางแก้ไข</h3>
            <p className={styles.cardText}>
              พัฒนา Chatbot ที่สามารถตอบคำถามเกี่ยวกับ Database Management และ SQL โดยใช้ AI และฐานความรู้เฉพาะด้าน
            </p>
          </div>
          
          <div className={`glass-panel-glow ${styles.card}`}>
            <GraduationCap size={50} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>ผลที่ต้องการ</h3>
            <p className={styles.cardText}>
              ช่วยให้ผู้เรียนสามารถสอบถาม ทำความเข้าใจ และเรียนรู้เกี่ยวกับฐานข้อมูลและ SQL ได้สะดวกมากขึ้น
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide02Background;
