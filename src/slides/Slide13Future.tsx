import React from 'react';
import styles from './Slide.module.css';

const timelineData = [
  { step: '01', title: 'Knowledge Base', desc: 'เพิ่มเนื้อหาและตัวอย่าง SQL ให้ครอบคลุมมากขึ้น' },
  { step: '02', title: 'Intent Recognition', desc: 'ปรับปรุงการวิเคราะห์ประเภทคำถาม' },
  { step: '03', title: 'SQL Playground', desc: 'ให้ผู้เรียนทดลองเขียนและรัน SQL' },
  { step: '04', title: 'Learning Analytics', desc: 'เก็บข้อมูลการเรียนรู้และวิเคราะห์จุดที่ผู้เรียนมีปัญหา' },
  { step: '05', title: 'Personalized Learning', desc: 'แนะนำเนื้อหาให้เหมาะกับผู้เรียนแต่ละคน' }
];

const Slide13Future: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>แนวทาง<span className="text-gradient">พัฒนาต่อ</span> (Future Development)</h2>
      </div>
      
      <div className={styles.slideContent} style={{ justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
          
          {timelineData.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ 
                  width: '50px', height: '50px', borderRadius: '50%', 
                  background: 'var(--color-purple-light)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.2rem', color: 'white',
                  boxShadow: '0 0 15px rgba(139, 92, 246, 0.4)'
                }}>
                  {item.step}
                </div>
                {index < timelineData.length - 1 && (
                  <div style={{ width: '2px', height: '40px', background: 'var(--color-purple-light)', margin: '5px 0' }}></div>
                )}
              </div>
              
              <div className="glass-panel" style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ color: 'white', marginBottom: '5px', fontSize: '1.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>{item.desc}</p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Slide13Future;
