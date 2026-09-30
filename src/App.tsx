import { useState, useEffect, useCallback } from 'react';
import NavigationBar from './components/NavigationBar';
import ProgressBar from './components/ProgressBar';
import SlideRouter from './components/SlideRouter';
import { slidesData } from './data/slidesData';
import styles from './App.module.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slidesData.length) {
      setCurrentSlide(index);
    }
  }, []);

  const nextSlide = useCallback(() => {
    if (currentSlide < slidesData.length - 1) {
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
        goToSlide(slidesData.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, goToSlide]);

  return (
    <div className="app-container">
      <ProgressBar current={currentSlide + 1} total={slidesData.length} />
      <NavigationBar 
        currentSlideIndex={currentSlide}
        onNavigate={goToSlide}
      />
      
      <main className={styles.slideContainer}>
        {/* Key forces re-mount for animation */}
        <div key={currentSlide} className={`slide-enter ${styles.slideWrapper}`}>
          <SlideRouter slide={slidesData[currentSlide]} onNext={nextSlide} />
        </div>
      </main>

      <div className={styles.controls}>
        <button onClick={prevSlide} disabled={currentSlide === 0} className={styles.navButton}>
          ←
        </button>
        <span className={styles.slideIndicator}>{currentSlide + 1} / {slidesData.length}</span>
        <button onClick={nextSlide} disabled={currentSlide === slidesData.length - 1} className={styles.navButton}>
          →
        </button>
      </div>
    </div>
  );
}

export default App;
