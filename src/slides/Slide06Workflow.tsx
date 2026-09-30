import React from 'react';
import { MessageCircle, Zap, Search, Brain, CheckCircle2 } from 'lucide-react';
import styles from './Slide.module.css';

const steps = [
  { id: '01', title: 'ผู้ใช้ส่งคำถาม', desc: 'เช่น "SELECT ใช้ทำอะไร?"', icon: MessageCircle },
  { id: '02', title: 'วิเคราะห์คำถาม', desc: 'ตรวจสอบ Intent และเนื้อหา', icon: Zap },
  { id: '03', title: 'ค้นหาความรู้', desc: 'ค้นข้อมูลจาก Knowledge Base', icon: Search },
  { id: '04', title: 'ประมวลผลด้วย AI', desc: 'นำข้อมูลมาสร้างคำตอบ', icon: Brain },
  { id: '05', title: 'แสดงคำตอบ', desc: 'ตอบพร้อมคำอธิบายและตัวอย่าง', icon: CheckCircle2 }
];

const Slide06Workflow: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>ChatBot <span className="text-gradient">ทำงานอย่างไร?</span></h2>
      </div>
      
      <div className={styles.slideContent} style={{ justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          
          {/* Connecting Line */}
          <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', background: 'rgba(124, 58, 237, 0.3)', zIndex: 0 }}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} style={{ zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '18%' }}>
                <div className="glass-panel-glow" style={{ width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-navy)', marginBottom: '20px' }}>
                  <Icon size={35} style={{ color: 'var(--color-purple-lighter)' }} />
                </div>
                <div style={{ color: 'var(--color-purple-light)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '10px' }}>Step {step.id}</div>
                <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.1rem' }}>{step.title}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slide06Workflow;
