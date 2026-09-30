import React, { useState } from 'react';
import { MonitorPlay, Minimize } from 'lucide-react';
import styles from './NavigationBar.module.css';

interface NavProps {
  slides: { id: number; title: string }[];
  currentSlide: number;
  onNavigate: (index: number) => void;
}

const NavigationBar: React.FC<NavProps> = ({ slides, currentSlide, onNavigate }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(err => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullscreen(false));
      }
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.logoText}>KRU SQL <span className="text-gradient">AI</span></span>
      </div>
      <div className={styles.menu}>
        {slides.map((slide, index) => (
          <button 
            key={slide.id}
            onClick={() => onNavigate(index)}
            className={`${styles.navItem} ${currentSlide === index ? styles.active : ''}`}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <div className={styles.actions}>
        <button onClick={toggleFullscreen} className={styles.fullscreenBtn} title="Fullscreen">
          {isFullscreen ? <Minimize size={20} /> : <MonitorPlay size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
