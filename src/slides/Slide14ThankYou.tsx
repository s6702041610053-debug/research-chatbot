import React from 'react';
import { Play } from 'lucide-react';
import styles from './Slide.module.css';

const Slide14ThankYou: React.FC = () => {
  return (
    <div className={styles.centerLayout} style={{ background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.2) 0%, transparent 60%)' }}>
      
      <h1 className={styles.mainTitle} style={{ fontSize: '6.5rem', letterSpacing: '5px', marginBottom: '10px' }}>
        <span className="text-gradient">THANK YOU</span>
      </h1>
      
      <h2 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '30px' }}>
        ChatBot ครูเอสคิว
      </h2>
      
      <p className={styles.description} style={{ fontSize: '1.5rem', marginBottom: '60px', padding: '15px 40px' }}>
        AI Assistant for Database Management & SQL Learning
      </p>

      <a href="https://chat-bot-eight-pied.vercel.app" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1.3rem', padding: '15px 40px' }}>
        ทดลองใช้ ChatBot <Play size={20} style={{ marginLeft: '10px' }} />
      </a>
      
    </div>
  );
};

export default Slide14ThankYou;
