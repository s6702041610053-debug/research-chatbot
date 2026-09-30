import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './Slide.module.css';

const Slide11Demo: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);
  const demoUrl = "https://chat-bot-eight-pied.vercel.app";

  return (
    <div className={styles.contentLayout} style={{ paddingBottom: '0' }}>
      <div className={styles.slideHeader} style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '10px' }}>
          ทดลองใช้ <span className="text-gradient">ChatBot ครูเอสคิว</span>
        </h1>
        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
          ทดลองใช้งานระบบจริง เพื่อดูการตอบคำถามด้าน Database Management และ SQL
        </p>
      </div>
      
      <div className={styles.slideContent} style={{ justifyContent: 'center', alignItems: 'center' }}>
        {!iframeError ? (
          <div style={{ width: '100%', height: '80%', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(124, 58, 237, 0.3)', boxShadow: '0 0 30px rgba(124, 58, 237, 0.2)', position: 'relative' }}>
            <iframe
              src={demoUrl}
              title="ChatBot Kru SQL"
              style={{ width: '100%', height: '100%', border: 'none' }}
              onError={() => setIframeError(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
            {/* Fallback button over iframe in case it's small or user wants full window */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
               <a href={demoUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '8px 16px', fontSize: '1rem', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                 เปิดเต็มจอ <ExternalLink size={16} />
               </a>
            </div>
          </div>
        ) : (
          <div className="glass-panel-glow" style={{ padding: '50px', textAlign: 'center', maxWidth: '600px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>พร้อมให้คุณทดลองใช้งาน</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
              สามารถเปิด ChatBot ครูเอสคิวในแท็บใหม่เพื่อประสบการณ์การใช้งานที่สมบูรณ์แบบ
            </p>
            <a href={demoUrl} target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: '1.3rem', padding: '15px 30px' }}>
              🚀 เปิด ChatBot ครูเอสคิว <ExternalLink size={20} style={{ marginLeft: '10px' }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide11Demo;
