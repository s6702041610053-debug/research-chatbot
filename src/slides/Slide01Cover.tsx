import React from 'react';
import { Bot, ArrowRight, Play } from 'lucide-react';
import styles from './Slide.module.css';

const Slide01Cover: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  return (
    <div className={styles.centerLayout}>
      <div className={styles.coverVisual}>
        <div className={styles.glowOrb}></div>
        <Bot size={100} className={styles.coverIcon} />
      </div>
      
      <h2 className={styles.subtitle}>การพัฒนาแชทบอทตอบคำถามเรื่อง<br/>การจัดการระบบฐานข้อมูลและภาษา SQL</h2>
      <h1 className={styles.mainTitle}>ChatBot <span className="text-gradient">ครูเอสคิว</span></h1>
      
      <p className={styles.description}>
        AI Chatbot ผู้ช่วยเรียนรู้ด้าน Database Management และ SQL
      </p>

      <div className={styles.buttonGroup}>
        <button className="btn-primary" onClick={onNext}>
          เริ่มนำเสนอ <ArrowRight size={20} />
        </button>
        <a href="https://chat-bot-eight-pied.vercel.app" target="_blank" rel="noreferrer" className="btn-secondary">
          <Play size={20} /> ทดลองใช้ ChatBot
        </a>
      </div>
    </div>
  );
};

export default Slide01Cover;
