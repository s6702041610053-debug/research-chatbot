import React, { useState, useEffect, useCallback } from 'react';
import NavigationBar from './components/NavigationBar';
import ProgressBar from './components/ProgressBar';
import Slide01Cover from './slides/Slide01Cover';
import Slide02Background from './slides/Slide02Background';
import Slide03Objectives from './slides/Slide03Objectives';
import Slide04Scope from './slides/Slide04Scope';
import Slide05Architecture from './slides/Slide05Architecture';
import Slide06Workflow from './slides/Slide06Workflow';
import Slide07KnowledgeBase from './slides/Slide07KnowledgeBase';
import Slide08Testing from './slides/Slide08Testing';
import Slide09Results from './slides/Slide09Results';
import Slide10Analysis from './slides/Slide10Analysis';
import Slide11Demo from './slides/Slide11Demo';
import Slide12Summary from './slides/Slide12Summary';
import Slide13Future from './slides/Slide13Future';
import Slide14ThankYou from './slides/Slide14ThankYou';
import styles from './App.module.css';

const slides = [
  { id: 1, title: 'บทนำ', component: Slide01Cover },
  { id: 2, title: 'ที่มาและความสำคัญ', component: Slide02Background },
  { id: 3, title: 'วัตถุประสงค์', component: Slide03Objectives },
  { id: 4, title: 'ขอบเขต', component: Slide04Scope },
  { id: 5, title: 'แนวคิดและเทคโนโลยี', component: Slide05Architecture },
  { id: 6, title: 'การทำงานของ ChatBot', component: Slide06Workflow },
  { id: 7, title: 'Knowledge Base', component: Slide07KnowledgeBase },
  { id: 8, title: 'การทดสอบ', component: Slide08Testing },
  { id: 9, title: 'ผลการทดลอง', component: Slide09Results },
  { id: 10, title: 'วิเคราะห์ผล', component: Slide10Analysis },
  { id: 11, title: 'ทดลองใช้ ChatBot', component: Slide11Demo },
  { id: 12, title: 'สรุปผล', component: Slide12Summary },
  { id: 13, title: 'แนวทางพัฒนาต่อ', component: Slide13Future },
  { id: 14, title: 'Thank You', component: Slide14ThankYou },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="app-container">
      <ProgressBar current={currentSlide + 1} total={slides.length} />
      <NavigationBar 
        slides={slides.map(s => ({ title: s.title, id: s.id }))} 
        currentSlide={currentSlide}
        onNavigate={goToSlide}
      />
      
      <main className={styles.slideContainer}>
        {/* Key forces re-mount for animation */}
        <div key={currentSlide} className={`slide-enter ${styles.slideWrapper}`}>
          <CurrentSlideComponent onNext={nextSlide} />
        </div>
      </main>

      <div className={styles.controls}>
        <button onClick={prevSlide} disabled={currentSlide === 0} className={styles.navButton}>
          ←
        </button>
        <span className={styles.slideIndicator}>{currentSlide + 1} / {slides.length}</span>
        <button onClick={nextSlide} disabled={currentSlide === slides.length - 1} className={styles.navButton}>
          →
        </button>
      </div>
    </div>
  );
}

export default App;
