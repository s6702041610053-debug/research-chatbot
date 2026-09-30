import React from 'react';
import { SlideData } from '../data/slidesData';
import Slide01Cover from '../slides/Slide01Cover';
import Slide02Background from '../slides/Slide02Background';
import Slide03Objectives from '../slides/Slide03Objectives';
import Slide04Scope from '../slides/Slide04Scope';
import Slide05Architecture from '../slides/Slide05Architecture';
import Slide06Workflow from '../slides/Slide06Workflow';
import Slide07KnowledgeBase from '../slides/Slide07KnowledgeBase';
import Slide08Testing from '../slides/Slide08Testing';
import Slide09Results from '../slides/Slide09Results';
import Slide10Analysis from '../slides/Slide10Analysis';
import Slide11Demo from '../slides/Slide11Demo';
import Slide12Summary from '../slides/Slide12Summary';
import Slide13Future from '../slides/Slide13Future';
import Slide14ThankYou from '../slides/Slide14ThankYou';
import SlideText from '../slides/SlideText';

interface SlideRouterProps {
  slide: SlideData;
  onNext: () => void;
}

const SlideRouter: React.FC<SlideRouterProps> = ({ slide, onNext }) => {
  switch (slide.type) {
    case 'cover': return <Slide01Cover onNext={onNext} />;
    case 'background': return <Slide02Background />;
    case 'objectives': return <Slide03Objectives />;
    case 'scope': return <Slide04Scope />;
    case 'architecture': return <Slide05Architecture />;
    case 'workflow': return <Slide06Workflow />;
    case 'knowledgeBase': return <Slide07KnowledgeBase />;
    case 'testing': return <Slide08Testing />;
    case 'results': return <Slide09Results />;
    case 'analysis': return <Slide10Analysis />;
    case 'demo': return <Slide11Demo />;
    case 'summary': return <Slide12Summary />;
    case 'future': return <Slide13Future />;
    case 'thankYou': return <Slide14ThankYou />;
    case 'text': return <SlideText title={slide.title} content={slide.content} />;
    default: return <SlideText title={slide.title} content={slide.content} />;
  }
};

export default SlideRouter;
