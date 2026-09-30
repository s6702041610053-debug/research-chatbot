import React, { useState, useMemo } from 'react';
import { MonitorPlay, Minimize, ChevronDown } from 'lucide-react';
import styles from './NavigationBar.module.css';
import { slidesData } from '../data/slidesData';

interface NavProps {
  currentSlideIndex: number;
  onNavigate: (index: number) => void;
}

const NavigationBar: React.FC<NavProps> = ({ currentSlideIndex, onNavigate }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Group slides by chapter for the dropdown
  const chapters = useMemo(() => {
    const grouped = new Map<string, { title: string, startIndex: number, slides: { title: string, index: number }[] }>();
    
    slidesData.forEach((slide, index) => {
      if (!grouped.has(slide.chapterId)) {
        grouped.set(slide.chapterId, { title: slide.chapterTitle, startIndex: index, slides: [] });
      }
      grouped.get(slide.chapterId)!.slides.push({ title: slide.title, index });
    });
    
    return Array.from(grouped.values());
  }, []);

  const currentSlideData = slidesData[currentSlideIndex];
  const currentChapterIndex = chapters.findIndex(c => c.title === currentSlideData.chapterTitle);

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
      
      {/* Chapter Dropdown and Sub-menu */}
      <div className={styles.centerMenu}>
        
        <div className={styles.dropdownContainer}>
          <button 
            className={styles.dropdownTrigger} 
            onClick={() => setShowDropdown(!showDropdown)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          >
            {currentSlideData.chapterTitle} <ChevronDown size={16} />
          </button>
          
          {showDropdown && (
            <div className={styles.dropdownMenu}>
              {chapters.map((chapter, idx) => (
                <button
                  key={idx}
                  className={`${styles.dropdownItem} ${chapter.title === currentSlideData.chapterTitle ? styles.activeChapter : ''}`}
                  onClick={() => {
                    onNavigate(chapter.startIndex);
                    setShowDropdown(false);
                  }}
                >
                  {chapter.title}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Horizontal scrollable sub-items for the current chapter */}
        <div className={styles.submenu}>
          {chapters[currentChapterIndex]?.slides.map((slide) => (
            <button 
              key={slide.index}
              onClick={() => onNavigate(slide.index)}
              className={`${styles.navItem} ${currentSlideIndex === slide.index ? styles.active : ''}`}
              title={slide.title}
            >
              {slide.title.includes(' ') ? slide.title.split(' ')[0] : slide.title}
            </button>
          ))}
        </div>
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
