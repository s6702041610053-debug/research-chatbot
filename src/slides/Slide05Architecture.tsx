import React from 'react';
import { User, Globe, Cpu, Database, Server, MessageSquare } from 'lucide-react';
import styles from './Slide.module.css';

const Slide05Architecture: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}><span className="text-gradient">เทคโนโลยีและองค์ประกอบ</span>ของระบบ</h2>
      </div>
      
      <div className={styles.slideContent} style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
        
        {/* Flow Diagram */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <div className="glass-panel" style={{ padding: '12px 30px', width: '250px', textAlign: 'center' }}>
            <User size={24} style={{ color: 'var(--color-purple-lighter)' }} />
            <div style={{ marginTop: '5px' }}>User</div>
          </div>
          <div style={{ color: 'var(--color-purple)' }}>↓</div>
          <div className="glass-panel" style={{ padding: '12px 30px', width: '250px', textAlign: 'center' }}>
            <Globe size={24} style={{ color: 'var(--color-purple-lighter)' }} />
            <div style={{ marginTop: '5px' }}>Web Interface</div>
          </div>
          <div style={{ color: 'var(--color-purple)' }}>↓</div>
          <div className="glass-panel-glow" style={{ padding: '12px 30px', width: '250px', textAlign: 'center' }}>
            <MessageSquare size={24} style={{ color: 'var(--color-purple-light)' }} />
            <div style={{ marginTop: '5px', fontWeight: 'bold' }}>ChatBot Engine</div>
          </div>
          <div style={{ color: 'var(--color-purple)' }}>↓</div>
          <div style={{ display: 'flex', gap: '15px', width: '350px', justifyContent: 'center' }}>
             <div className="glass-panel" style={{ padding: '12px', flex: 1, textAlign: 'center' }}>
               <Cpu size={24} style={{ color: 'var(--color-purple-lighter)' }} />
               <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>LLM / AI</div>
             </div>
             <div className="glass-panel" style={{ padding: '12px', flex: 1, textAlign: 'center' }}>
               <Server size={24} style={{ color: 'var(--color-purple-lighter)' }} />
               <div style={{ fontSize: '0.9rem', marginTop: '5px' }}>Knowledge Base</div>
             </div>
          </div>
          <div style={{ color: 'var(--color-purple)' }}>↓</div>
          <div className="glass-panel" style={{ padding: '12px 30px', width: '250px', textAlign: 'center' }}>
            <Database size={24} style={{ color: 'var(--color-purple-lighter)' }} />
            <div style={{ marginTop: '5px' }}>Answer + Explanation</div>
          </div>
        </div>

        {/* Tech Cards */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {[
            { title: 'LLM API', desc: 'เชื่อมต่อโมเดลภาษาขนาดใหญ่' },
            { title: 'Prompt Engineering', desc: 'ออกแบบคำสั่งควบคุม AI' },
            { title: 'RAG', desc: 'ดึงข้อมูลประกอบการสร้างคำตอบ' },
            { title: 'Knowledge Base', desc: 'ฐานความรู้เฉพาะด้าน SQL' },
            { title: 'Web Application', desc: 'ส่วนติดต่อผู้ใช้งาน' },
            { title: 'Database Sandbox', desc: 'PostgreSQL / MySQL / SQLite' }
          ].map((tech, i) => (
             <div key={i} className="glass-panel" style={{ padding: '20px' }}>
               <h4 style={{ color: 'var(--color-purple-light)', marginBottom: '5px' }}>{tech.title}</h4>
               <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{tech.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide05Architecture;
