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
import RecapSlide from '../sessions/day2-morning/components/RecapSlide';
import WorkshopSlide from '../sessions/day2-morning/components/WorkshopSlide';
import ConceptClarificationSlide from '../sessions/day2-morning/components/ConceptClarificationSlide';
import WorkshopScenarioSlide from '../sessions/day2-morning/components/WorkshopScenarioSlide';
import LegalWorkflowSlide from '../sessions/day2-morning/components/LegalWorkflowSlide';
import CDLRecruitmentSlide from '../sessions/day2-morning/components/CDLRecruitmentSlide';
import CommunicationWorkflowSlide from '../sessions/day2-morning/components/CommunicationWorkflowSlide';
import MaintenanceWorkflowSlide from '../sessions/day2-morning/components/MaintenanceWorkflowSlide';
import ITWorkspaceSlide from '../sessions/day2-morning/components/ITWorkspaceSlide';
import EventWorkflowSlide from '../sessions/day2-morning/components/EventWorkflowSlide';
import MetaWorkflowSlide from '../sessions/day2-morning/components/MetaWorkflowSlide';
import TeamFormationSlide from '../sessions/day2-morning/components/TeamFormationSlide';
import LunchSlide from '../sessions/day2-morning/components/LunchSlide';

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
  'workflow-presentation': PresentationSlide,
  'workflow-intro': PresentationSlide,
  'workflow-detail': PresentationSlide,
  'recap-slide': RecapSlide,
  'concept-clarification': ConceptClarificationSlide,
  'legal-workflow': LegalWorkflowSlide,
  'cdl-recruitment': CDLRecruitmentSlide,
  'communication-workflow': CommunicationWorkflowSlide,
  'maintenance-workflow': MaintenanceWorkflowSlide,
  'it-workspace': ITWorkspaceSlide,
  'event-workflow': EventWorkflowSlide,
  'team-formation': TeamFormationSlide,
  'meta-workflow': MetaWorkflowSlide,
  'lunch': LunchSlide,
  'workshop-scenarios': WorkshopScenarioSlide,
  'practical-workshop': WorkshopSlide,
  'group-presentations': WorkshopSlide,
  'conclusion': WorkshopSlide,
  // Fallback component for any missing slide types
  default: PresentationSlide
};

const SlideRenderer = ({ slide, tools }) => {
  const SlideComponent = slideComponents[slide.type] || slideComponents.default;
  
  // Check if this is a workflow slide that needs full width
  const fullWidthSlides = [
    'maintenance-workflow',
    'it-workspace', 
    'event-workflow',
    'communication-workflow',
    'legal-workflow',
    'cdl-recruitment',
    'meta-workflow',
    'lunch',
    'team-formation'
  ];
  
  const isFullWidth = fullWidthSlides.includes(slide.type);
  
  return (
    <motion.div
      className={`slide ${isFullWidth ? 'slide-full-width' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SlideComponent slide={slide} tools={tools} />
    </motion.div>
  );
};

export default SlideRenderer;