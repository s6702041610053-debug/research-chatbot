import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import styles from './Slide.module.css';

interface SlideTextProps {
  title: string;
  content?: string | string[];
}

const SlideText: React.FC<SlideTextProps> = ({ title, content }) => {
  const contentArray = Array.isArray(content) ? content : (content ? content.split('\n') : []);

  return (
    <div className={styles.contentLayout}>
      <div className={styles.slideHeader}>
        <h2 className={styles.slideTitle}>
          {title.includes(' ') ? (
            <>
              {title.split(' ')[0]} <span className="text-gradient">{title.substring(title.indexOf(' ') + 1)}</span>
            </>
          ) : (
            <span className="text-gradient">{title}</span>
          )}
        </h2>
      </div>
      
      <div className={styles.slideContent} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '900px', margin: '0 auto', width: '100%', justifyContent: 'center' }}>
        {contentArray.map((text, index) => {
          if (!text.trim()) return null;
          return (
            <div key={index} className="glass-panel" style={{ padding: '25px', display: 'flex', alignItems: 'flex-start', gap: '20px', borderLeft: '4px solid var(--color-purple-light)' }}>
              <div style={{ marginTop: '3px', color: 'var(--color-purple-lighter)' }}>
                 <CheckCircle2 size={24} />
              </div>
              <div style={{ fontSize: '1.3rem', color: 'white', lineHeight: 1.6 }}>
                {text.replace(/^- /, '')}
              </div>
            </div>
          );
        })}
        {contentArray.length === 0 && (
          <div className="glass-panel-glow" style={{ padding: '50px', textAlign: 'center' }}>
            <FileText size={50} style={{ color: 'var(--color-purple)', marginBottom: '20px' }} />
            <h3 style={{ color: 'var(--color-text-muted)' }}>รอข้อมูลเพิ่มเติมสำหรับหัวข้อนี้</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlideText;
