import { day1MorningSlides } from '../sessions/day1-morning/slides';
import { afternoonSlides } from '../sessions/day1-afternoon/slides';
import { day2MorningSlides } from '../sessions/day2-morning/slides';
import { day2AfternoonSlides } from '../sessions/day2-afternoon/slides';

// Slide de titre principal
const titleSlide = {
  id: 'main-title',
  type: 'title',
  title: 'Formation Intelligence Artificielle',
  subtitle: 'Institut Français du Cambodge',
  presenter: 'Formation Professionnelle',
  date: '2025'
};

// Export de tous les slides
export const allSlides = [
  titleSlide,
  ...day1MorningSlides,
  ...afternoonSlides,
  ...day2MorningSlides,
  ...day2AfternoonSlides
];

// Export par défaut pour la compatibilité
export default allSlides; 