import React from 'react';
import styles from './Slide.module.css';

const scopeItems = [
  "พื้นฐานฐานข้อมูล",
  "แนวคิดและทฤษฎีฐานข้อมูล",
  "สถาปัตยกรรมฐานข้อมูล",
  "Relational Model",
  "ER Diagram",
  "การแปลง ER Diagram เป็น Relation",
  "Normalization",
  "SQL CREATE / ALTER / DROP",
  "SQL SELECT",
  "SQL JOIN",
  "แนวโน้มเทคโนโลยีฐานข้อมูล",
  "ความปลอดภัยของฐานข้อมูล"
];

const Slide04Scope: React.FC = () => {
  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}><span className="text-gradient">ขอบเขตความรู้</span>ของ ChatBot</h2>
      </div>
      
      <div className={styles.slideContent} style={{ justifyContent: 'center' }}>
        <div className={styles.grid12}>
          {scopeItems.map((item, index) => (
            <div key={index} className={`glass-panel-glow ${styles.card}`} style={{ padding: '25px', alignItems: 'center', textAlign: 'center', justifyContent: 'center', minHeight: '130px' }}>
              <h4 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 500 }}>{item}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide04Scope;
