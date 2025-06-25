import React from 'react';
import { motion } from 'framer-motion';
import './SlideRenderer.css';

// Day 1 Morning components
import TitleSlide from '../sessions/day1-morning/components/TitleSlide';
import TimelineSlide from '../sessions/day1-morning/components/TimelineSlide';
import PresentationSlide from '../sessions/day1-morning/components/PresentationSlide';
import BreakSlide from '../sessions/day1-morning/components/BreakSlide';
import PromptEngineeringSlide from '../sessions/day1-morning/components/PromptEngineeringSlide';

// Day 1 Afternoon components
import AfternoonTitleSlide from '../sessions/day1-afternoon/components/AfternoonTitleSlide';
import ToolCategorySlide from '../sessions/day1-afternoon/components/ToolCategorySlide';
import ToolShowcaseSlide from '../sessions/day1-afternoon/components/ToolShowcaseSlide';
import AfternoonBreakSlide from '../sessions/day1-afternoon/components/AfternoonBreakSlide';
import ToolLinksSlide from '../sessions/day1-afternoon/components/ToolLinksSlide';

// Day 2 Morning components
import WorkflowSlide from '../sessions/day2-morning/components/WorkflowSlide';
import RecapSlide from '../sessions/day2-morning/components/RecapSlide';
import WorkshopSlide from '../sessions/day2-morning/components/WorkshopSlide';
import ConceptClarificationSlide from '../sessions/day2-morning/components/ConceptClarificationSlide';

const slideComponents = {
  title: TitleSlide,
  timeline: TimelineSlide,
  presentation: PresentationSlide,
  break: BreakSlide,
  'prompt-engineering': PromptEngineeringSlide,
  // Afternoon components
  'afternoon-title': AfternoonTitleSlide,
  'tool-category': ToolCategorySlide,
  'tool-showcase': ToolShowcaseSlide,
  'afternoon-break': AfternoonBreakSlide,
  'tool-links': ToolLinksSlide,
  // Day 2 Morning components
  'workflow-presentation': WorkflowSlide,
  'workflow-intro': WorkflowSlide,
  'workflow-detail': WorkflowSlide,
  'recap-slide': RecapSlide,
  'concept-clarification': ConceptClarificationSlide,
  'practical-workshop': WorkshopSlide,
  'group-presentations': WorkshopSlide,
  'conclusion': WorkshopSlide,
  // Fallback component for any missing slide types
  default: PresentationSlide
};

const SlideRenderer = ({ slide, tools }) => {
  const SlideComponent = slideComponents[slide.type] || slideComponents.default;
  
  return (
    <motion.div
      className="slide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SlideComponent slide={slide} tools={tools} />
    </motion.div>
  );
};

export default SlideRenderer;