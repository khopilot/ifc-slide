// Jour 1 - Matinée : De Turing à ChatGPT
// 9h00 - 12h00

// Import all timeline images
import img1936 from './images/1936.png';
import img1950 from './images/1950.png';
import img1956 from './images/1956.png';
import img1957 from './images/1957.png';
import img1966 from './images/1966.png';
import img1969 from './images/1969.png';
import img1972 from './images/1972.png';
import img1980 from './images/1980.png';
import img1986 from './images/1986.png';
import img1997 from './images/1997.png';
import img2002 from './images/2002.png';
import img2004 from './images/2004.png';
import img2011 from './images/2011.png';
import img2012 from './images/2012.png';
import img2014 from './images/2014.png';
import img2016 from './images/2016.png';
import img2017 from './images/2017.png';
import img2018 from './images/2018.png';
import img2019 from './images/2019.png';
import img2020 from './images/2020.png';
import img2021 from './images/2021.png';
import img2022 from './images/2022.png';
import img2023 from './images/2023.png';
import img2025 from './images/2025.png';

export const day1MorningSlides = [
  // Slide de bienvenue
  {
    id: 'morning-1-welcome',
    type: 'title',
    title: 'Formation Intelligence Artificielle',
    subtitle: 'De Turing à ChatGPT : Comprendre et Maîtriser l\'IA',
    presenter: 'Institut Français du Cambodge',
    organization: 'Formation Professionnelle',
    date: 'Jour 1 - Matinée (9h00 - 12h00)'
  },

  // Slide de présentation de la formation
  {
    id: 'morning-1-presentation',
    type: 'presentation',
    title: 'Chronologie de l\'Intelligence Artificielle',
    subtitle: 'Un voyage de 1936 à 2025',
    content: 'Découvrons ensemble l\'évolution fascinante de l\'intelligence artificielle, des premiers concepts théoriques aux applications modernes qui transforment notre quotidien.',
    objectives: [
      'Comprendre les étapes clés de l\'évolution de l\'IA',
      'Identifier les innovations révolutionnaires',
      'Saisir l\'impact sur notre société actuelle',
      'Préparer l\'avenir avec les agents IA'
    ]
  },

  // CHRONOLOGIE COMPLÈTE (21 dates)
  {
    id: 'timeline-1936',
    type: 'timeline',
    title: '1936 : La Machine de Turing',
    year: '1936',
    event: 'La machine de Turing',
    description: 'Alan Turing imagine une machine abstraite qui pose les bases de l\'ordinateur moderne. Cette « machine de Turing » est un modèle théorique capable d\'exécuter n\'importe quel calcul si on lui fournit la bonne suite d\'instructions. On peut la voir comme une idée abstraite, mais elle est fondamentale pour comprendre comment les ordinateurs fonctionnent.',
    significance: 'Fondement théorique de l\'informatique moderne',
    image: img1936
  },

  {
    id: 'timeline-1950',
    type: 'timeline',
    title: '1950 : Le Test de Turing',
    year: '1950',
    event: 'Le test de Turing',
    description: 'Alan Turing propose un test pour déterminer si une machine peut faire preuve d\'intelligence. Si un observateur humain ne peut pas distinguer les réponses d\'une machine de celles d\'un humain lors d\'une conversation, alors la machine a réussi le test.',
    significance: 'Premier critère d\'évaluation de l\'intelligence artificielle',
    image: img1950
  },

  {
    id: 'timeline-1956',
    type: 'timeline',
    title: '1956 : Conférence de Dartmouth – Naissance de l\'IA',
    year: '1956',
    event: 'Conférence de Dartmouth',
    description: 'Cet événement est considéré comme l\'acte de naissance officiel de l\'intelligence artificielle en tant que domaine de recherche. Des scientifiques comme John McCarthy, Marvin Minsky et Claude Shannon se réunissent pour discuter de la possibilité de créer des machines capables de simuler l\'intelligence humaine.',
    significance: 'Création officielle du domaine de l\'IA',
    image: img1956
  },

  {
    id: 'timeline-1957',
    type: 'timeline',
    title: '1957 : Le Perceptron',
    year: '1957',
    event: 'Le perceptron (réseau de neurones artificiel)',
    description: 'Frank Rosenblatt développe le Perceptron, un modèle de réseau de neurones artificiel capable d\'apprendre à classer des données. Bien que limité, il est une étape cruciale vers les réseaux de neurones modernes.',
    significance: 'Premier réseau de neurones artificiel fonctionnel',
    image: img1957
  },

  {
    id: 'timeline-1966',
    type: 'timeline',
    title: '1966 : ELIZA, le Premier Chatbot',
    year: '1966',
    event: 'ELIZA, le premier chatbot',
    description: 'Joseph Weizenbaum crée ELIZA, un programme capable de simuler une conversation en utilisant des techniques simples de reconnaissance de mots-clés. ELIZA est l\'un des premiers exemples de traitement du langage naturel.',
    significance: 'Premier chatbot de l\'histoire',
    image: img1966
  },

  {
    id: 'timeline-1969',
    type: 'timeline',
    title: '1969 : Le Robot Shakey',
    year: '1969',
    event: 'Le robot Shakey et les limites des premiers réseaux',
    description: 'Shakey est le premier robot mobile capable de raisonner sur ses propres actions. Il utilise l\'IA pour planifier ses mouvements et interagir avec son environnement, mais il met aussi en lumière les limites des systèmes de l\'époque.',
    significance: 'Premier robot autonome intelligent',
    image: img1969
  },

  {
    id: 'timeline-1972',
    type: 'timeline',
    title: '1972 : MYCIN et les Systèmes Experts',
    year: '1972',
    event: 'MYCIN et les systèmes experts en médecine',
    description: 'MYCIN est un système expert conçu pour diagnostiquer des maladies infectieuses et recommander des traitements. Il démontre le potentiel de l\'IA dans des domaines spécialisés, en utilisant des règles basées sur l\'expertise humaine.',
    significance: 'Application médicale réussie de l\'IA',
    image: img1972
  },

  {
    id: 'timeline-1980',
    type: 'timeline',
    title: '1980 : L\'Âge d\'Or des Systèmes Experts',
    year: '1980',
    event: 'L\'âge d\'or des systèmes experts',
    description: 'Les systèmes experts connaissent un essor important, étant utilisés dans divers secteurs comme la finance, l\'ingénierie et la médecine. Ils permettent de modéliser le savoir-faire humain pour résoudre des problèmes complexes.',
    significance: 'Expansion industrielle de l\'IA',
    image: img1980
  },

  {
    id: 'timeline-1986',
    type: 'timeline',
    title: '1986 : Renaissance des Réseaux de Neurones',
    year: '1986',
    event: 'Renaissance des réseaux de neurones (backpropagation)',
    description: 'La découverte de l\'algorithme de rétropropagation (backpropagation) relance l\'intérêt pour les réseaux de neurones. Cet algorithme permet d\'entraîner des réseaux plus profonds et plus complexes, ouvrant la voie au deep learning.',
    significance: 'Foundation du deep learning moderne',
    image: img1986
  },

  {
    id: 'timeline-1997',
    type: 'timeline',
    title: '1997 : Deep Blue',
    year: '1997',
    event: 'Deep Blue, l\'ordinateur champion d\'échecs',
    description: 'L\'ordinateur Deep Blue d\'IBM bat le champion du monde d\'échecs Garry Kasparov. C\'est une victoire symbolique majeure pour l\'IA, montrant la capacité des machines à surpasser l\'humain dans des tâches complexes.',
    significance: 'Première victoire majeure de l\'IA contre l\'intelligence humaine',
    image: img1997
  },

  {
    id: 'timeline-2002',
    type: 'timeline',
    title: '2002 : Roomba, le Robot Domestique',
    year: '2002',
    event: 'Roomba, le robot domestique',
    description: 'Le premier aspirateur robot Roomba est commercialisé, marquant l\'entrée de l\'IA dans les foyers. Il utilise des capteurs et des algorithmes simples pour naviguer et nettoyer de manière autonome.',
    significance: 'Démocratisation de la robotique domestique',
    image: img2002
  },

  {
    id: 'timeline-2004',
    type: 'timeline',
    title: '2004 : Le Défi DARPA',
    year: '2004',
    event: 'Le défi DARPA (voitures autonomes)',
    description: 'Le DARPA Grand Challenge encourage le développement de véhicules autonomes. Bien qu\'aucun véhicule ne termine la course en 2004, cet événement stimule la recherche et l\'innovation dans le domaine des voitures sans conducteur.',
    significance: 'Lancement de la course aux véhicules autonomes',
    image: img2004
  },

  {
    id: 'timeline-2011',
    type: 'timeline',
    title: '2011 : Watson',
    year: '2011',
    event: 'Watson, l\'IA championne de quiz',
    description: 'IBM Watson remporte le jeu télévisé Jeopardy! en battant les champions humains. Watson démontre des capacités avancées de compréhension du langage naturel et de raisonnement.',
    significance: 'Percée dans la compréhension du langage naturel',
    image: img2011
  },

  {
    id: 'timeline-2012',
    type: 'timeline',
    title: '2012 : AlexNet et la Révolution du Deep Learning',
    year: '2012',
    event: 'AlexNet et la révolution du deep learning',
    description: 'AlexNet, un réseau de neurones profond, remporte le concours ImageNet, réduisant considérablement le taux d\'erreur dans la reconnaissance d\'images. Cela marque le début de la révolution du deep learning dans la vision par ordinateur.',
    significance: 'Début de l\'ère du deep learning',
    image: img2012
  },

  {
    id: 'timeline-2014',
    type: 'timeline',
    title: '2014 : Les GANs',
    year: '2014',
    event: 'Les GANs (réseaux antagonistes génératifs)',
    description: 'Ian Goodfellow et ses collègues introduisent les Generative Adversarial Networks (GANs), des modèles capables de générer des données (images, sons, textes) très réalistes. Les GANs ouvrent de nouvelles perspectives pour la création de contenu.',
    significance: 'Révolution dans la génération de contenu',
    image: img2014
  },

  {
    id: 'timeline-2016',
    type: 'timeline',
    title: '2016 : AlphaGo',
    year: '2016',
    event: 'AlphaGo, champion au jeu de Go',
    description: 'AlphaGo de DeepMind bat le champion du monde de Go, Lee Sedol. Cette victoire est encore plus significative que celle de Deep Blue aux échecs, car le Go est un jeu beaucoup plus complexe pour l\'IA.',
    significance: 'Démonstration de la puissance du deep learning',
    image: img2016
  },

  {
    id: 'timeline-2017',
    type: 'timeline',
    title: '2017 : Transformers',
    year: '2017',
    event: 'Transformers – Nouvelle ère pour le langage',
    description: 'Le modèle Transformer est introduit, révolutionnant le traitement du langage naturel. Basé sur le mécanisme d\'attention, il permet de créer des modèles de langage beaucoup plus performants et de gérer de longues séquences de texte.',
    significance: 'Architecture révolutionnaire pour le NLP',
    image: img2017
  },

  {
    id: 'timeline-2018',
    type: 'timeline',
    title: '2018 : BERT',
    year: '2018',
    event: 'BERT et la compréhension contextuelle',
    description: 'Google lance BERT (Bidirectional Encoder Representations from Transformers), un modèle de langage qui améliore considérablement la compréhension du contexte dans le texte. BERT permet des avancées majeures dans la recherche d\'informations et la réponse aux questions.',
    significance: 'Amélioration majeure de la compréhension contextuelle',
    image: img2018
  },

  {
    id: 'timeline-2019',
    type: 'timeline',
    title: '2019 : GPT-2',
    year: '2019',
    event: 'GPT-2 et la génération avancée de textes',
    description: 'OpenAI publie GPT-2, un modèle de langage capable de générer des textes cohérents et de haute qualité. Sa capacité à produire du contenu réaliste soulève des questions sur son utilisation éthique.',
    significance: 'Première inquiétude éthique majeure sur l\'IA générative',
    image: img2019
  },

  {
    id: 'timeline-2020',
    type: 'timeline',
    title: '2020 : GPT-3',
    year: '2020',
    event: 'GPT-3, un modèle de langage géant',
    description: 'OpenAI présente GPT-3, un modèle de langage avec 175 milliards de paramètres, capable de réaliser une grande variété de tâches linguistiques avec une performance impressionnante, même sans entraînement spécifique pour chaque tâche.',
    significance: 'Démonstration du potentiel des modèles à grande échelle',
    image: img2020
  },

  {
    id: 'timeline-2021',
    type: 'timeline',
    title: '2021 : DALL·E',
    year: '2021',
    event: 'DALL·E et la génération d\'images par IA',
    description: 'OpenAI lance DALL·E, un modèle capable de générer des images à partir de descriptions textuelles. Cela ouvre de nouvelles possibilités pour la création artistique et le design, en rendant l\'IA accessible aux artistes.',
    significance: 'Démocratisation de la création visuelle par IA',
    image: img2021
  },

  {
    id: 'timeline-2022',
    type: 'timeline',
    title: '2022 : ChatGPT',
    year: '2022',
    event: 'ChatGPT, l\'IA conversationnelle grand public',
    description: 'OpenAI rend public ChatGPT, un chatbot basé sur GPT-3.5, capable de tenir des conversations fluides et de répondre à une multitude de questions. Son succès fulgurant popularise l\'IA auprès du grand public.',
    significance: 'Démocratisation de l\'IA pour le grand public',
    image: img2022
  },

  {
    id: 'timeline-2023',
    type: 'timeline',
    title: '2023 : GPT-4 et les Modèles Multimodaux',
    year: '2023',
    event: 'GPT-4 et les modèles multimodaux',
    description: 'OpenAI lance GPT-4, un modèle multimodal capable de traiter non seulement du texte, mais aussi des images en entrée. Il démontre des capacités de raisonnement encore plus avancées et une meilleure compréhension du monde réel.',
    significance: 'Avènement des modèles multimodaux avancés',
    image: img2023
  },

  {
    id: 'timeline-2025',
    type: 'timeline',
    title: '2025 : L\'Ère des Agents IA',
    year: '2025',
    event: 'L\'Ère des Agents IA et l\'Optimisation',
    description: 'L\'année 2025 marque un tournant où l\'attention se déplace des grands modèles de langage (LLMs) vers les agents IA autonomes. Ces agents sont perçus comme la prochaine génération d\'applications, capables de gérer des tâches complexes de manière autonome, d\'optimiser les flux de travail et de simplifier la vie quotidienne et professionnelle.',
    significance: 'Passage vers l\'IA autonome et spécialisée',
    image: img2025
  },

  // Pause café après la timeline
  {
    id: 'coffee-break',
    type: 'break',
    title: 'Pause Café',
    icon: '☕',
    duration: '15 minutes',
    time: '10h30 - 10h45',
    message: 'Profitez de cette pause pour échanger sur l\'histoire fascinante de l\'IA !'
  },

  // Introduction au Prompt Engineering
  {
    id: 'prompt-intro-slide',
    type: 'presentation',
    title: 'Introduction au Prompt Engineering',
    subtitle: 'L\'art de communiquer avec l\'IA',
    content: 'Le prompt engineering est devenu une compétence essentielle pour tirer le meilleur parti des modèles d\'IA générative. C\'est l\'art de formuler des instructions claires et précises pour obtenir des résultats optimaux.',
    objectives: [
      'Comprendre l\'importance du prompt engineering',
      'Maîtriser les techniques de base',
      'Apprendre à structurer ses prompts',
      'Optimiser les résultats de l\'IA'
    ]
  },

  // SECTION PROMPT ENGINEERING
  {
    id: 'prompt-engineering-intro',
    type: 'prompt-engineering',
    title: 'Prompt Engineering',
    definition: 'L\'IA générative (comme ChatGPT) peut créer automatiquement du texte, des images, etc., ouvrant de nouvelles possibilités pour le travail quotidien. Pour l\'utiliser efficacement, il faut maîtriser le prompt : c\'est la consigne (instruction) que vous donnez à l\'IA pour la guider. En contexte d\'Institut Français du Cambodge (IFC), on peut ainsi demander à l\'IA de générer un communiqué de presse, un post Facebook promotionnel pour un événement culturel, ou un plan de cours de français.',
    bestPractices: [
      'CLARTÉ : "Rédige un email" → "Rédige un email de 150 mots pour inviter des partenaires à notre gala"',
      'CONTEXTE : "Tu es un expert IFC spécialisé en événements culturels franco-cambodgiens depuis 10 ans"', 
      'STRUCTURE : Utilisez des puces, numéros ou sections pour organiser votre demande',
      'EXEMPLES : "Voici un exemple du style attendu : [exemple]" guide mieux l\'IA',
      'ITÉRATION : Commencez simple, puis affinez - "Rends-le plus formel" ou "Ajoute des statistiques"'
    ]
  },

  {
    id: 'prompt-simple',
    type: 'prompt-engineering', 
    title: 'Prompts Simples ("Small Prompts")',
    definition: 'Les prompts simples sont des requêtes très courtes, sans contexte additionnel. Il s\'agit souvent d\'une question directe ou d\'une consigne basique. Ces prompts courts donnent généralement une réponse factuelle ou concise, mais sans personnalisation.',
    examples: [
      {
        label: 'Exemple 1',
        text: 'Prompt — « Donne-moi une courte biographie du fondateur de l\'IFC (100 mots). »'
      },
      {
        label: 'Exemple 2', 
        text: 'Prompt — « Écris un tweet (280 caractères max) en français pour annoncer le prochain concert de musique classique à l\'IFC. »'
      }
    ],
    exercise: 'Rédige un prompt simple pour demander à l\'IA de lister cinq activités culturelles organisées par l\'IFC cette année.'
  },

  {
    id: 'prompt-intermediaire',
    type: 'prompt-engineering',
    title: 'Prompts Intermédiaires ("Mid Prompts")', 
    definition: 'Les prompts intermédiaires apportent quelques détails supplémentaires (contexte léger, rôle ou format) sans pour autant devenir extrêmement longs. Ils sont plus structurés qu\'un prompt simple : on précise par exemple le rôle que l\'IA doit jouer, le style de réponse, ou on donne un petit exemple.',
    examples: [
      {
        label: 'Exemple 1',
        text: 'Prompt — « Tu es le responsable pédagogique de l\'Institut Français du Cambodge. Nous lançons un nouveau programme de cours de français pour professionnels cambodgiens (niveau B1-B2).\n\nRédige un article de présentation de 250-300 mots qui inclut :\n- Une introduction accrocheuse sur l\'importance du français dans le contexte professionnel cambodgien\n- Les 4 objectifs principaux du programme (communication professionnelle, rédaction de documents, présentation orale, négociation)\n- Les méthodes d\'enseignement innovantes utilisées\n- Les débouchés professionnels\n\nTon : professionnel mais accessible\nStyle : informatif et motivant »'
      },
      {
        label: 'Exemple 2',
        text: 'Prompt — « Agis comme le community manager de l\'IFC. Contexte : nous organisons un atelier de cuisine française "Les secrets de la pâtisserie parisienne" le samedi 15 février de 14h à 17h.\n\nCrée une publication Facebook engageante qui :\n- Commence par une accroche gourmande avec emojis appropriés\n- Présente l\'atelier en 3-4 phrases enthousiastes\n- Mentionne le chef français invité (Chef Pierre Dubois)\n- Indique le prix (25$) et le nombre de places limitées (12 participants)\n- Termine par un call-to-action clair et une question pour engager la communauté\n\nLongueur : 150-200 mots\nTon : convivial et gourmand »'
      }
    ],
    exercise: 'Proposez un prompt intermédiaire pour générer une liste d\'idées d\'animations pour un atelier artistique à l\'IFC. Par exemple : « Tu es un animateur culturel. Donne-moi 5 idées originales d\'activités pour un atelier de calligraphie française destiné aux adolescents. »'
  },

  {
    id: 'prompt-complexe',
    type: 'prompt-engineering',
    title: 'Prompts Complexes ("Mega Prompts")',
    definition: 'Les prompts complexes (ou méga-prompts) contiennent de nombreuses consignes détaillées : on y trouve souvent un contexte riche, un persona (rôle assigné à l\'IA), plusieurs objectifs ou étapes, et des contraintes précises. L\'avantage est d\'avoir un contrôle plus grand sur le contenu : l\'IA répondra de façon ciblée et structurée.',
    examples: [
      {
        label: 'Exemple 1',
        text: 'Prompt — « CONTEXTE :\nVous êtes le directeur pédagogique de l\'Institut Français du Cambodge (IFC), expert en didactique du FLE et en animation théâtrale. L\'IFC souhaite lancer un atelier de théâtre innovant pour débutants cambodgiens (niveau A1) combinant apprentissage du français et expression artistique.\n\nPUBLIC CIBLE :\n- 12-15 participants cambodgiens, 16-25 ans\n- Niveau A1 (50-100 heures de français)\n- Motivés par l\'expression créative\n- Disponibles chaque samedi 14h-16h\n\nOBJECTIF GÉNÉRAL :\nCréer un programme progressif sur 4 semaines permettant aux participants de monter une courte saynète en français tout en développant leurs compétences linguistiques et leur confiance.\n\nTÂCHE :\nConcevez un programme détaillé de 4 séances (2h chacune) incluant :\n\nPOUR CHAQUE SÉANCE, structurez ainsi :\n1. TITRE ACCROCHEUR de la séance\n2. OBJECTIFS (3-4 objectifs SMART)\n   - Linguistiques (vocabulaire, grammaire, phonétique)\n   - Théâtraux (techniques, expression)\n   - Interculturels\n3. DÉROULÉ CHRONOMÉTRÉ :\n   - Échauffement (15 min)\n   - Activité principale 1 (30 min)\n   - Pause active (10 min)\n   - Activité principale 2 (35 min)\n   - Mini-représentation (20 min)\n   - Bilan participatif (10 min)\n4. MATÉRIEL NÉCESSAIRE (détaillé)\n5. VOCABULAIRE CLÉ (10-15 mots/expressions)\n6. PHRASES MODÈLES (5 structures réutilisables)\n7. CRITÈRES D\'ÉVALUATION\n8. DEVOIR CRÉATIF pour la semaine\n\nCONTRAINTES :\n- Progression du simple au complexe\n- 70% pratique, 30% théorie\n- Intégration d\'éléments culturels cambodgiens\n- Activités adaptées aux timides\n- Préparation d\'une saynète finale de 5 minutes\n\nFORMAT DE RÉPONSE :\nUtilisez des titres clairs, puces, tableaux si nécessaire. Soyez créatif dans les titres et engageant dans les descriptions. Incluez des conseils pratiques pour l\'animateur.\n\nTON : Professionnel, bienveillant et dynamique »'
      },
      {
        label: 'Exemple 2',
        text: 'Prompt — « RÔLE : Vous êtes un scénariste professionnel spécialisé dans les vidéos institutionnelles, avec 10 ans d\'expérience en communication culturelle.\n\nCONTEXTE DU PROJET :\nL\'IFC souhaite produire une vidéo promotionnelle de 3 minutes pour sa médiathèque moderne qui attire 500+ visiteurs/mois. Objectif : augmenter la fréquentation de 30% chez les 18-35 ans cambodgiens.\n\nÉLÉMENTS CLÉS À VALORISER :\n- Collection : 15,000 ouvrages, 2,000 DVD, accès numérique\n- Espaces : coin lecture, salle multimédia, espace jeunesse\n- Services : wifi gratuit, ateliers hebdomadaires, club de lecture\n- Équipe : 3 bibliothécaires francophones passionnés\n\nLIVRABLE ATTENDU :\n\n1. SYNOPSIS (100 mots)\n2. PERSONNAGES DÉTAILLÉS :\n   - Profil complet (âge, profession, motivation)\n   - Arc narratif\n   - Style vestimentaire\n3. STRUCTURE EN 5 ACTES :\n   - Acte 1 (30s) : Accroche/problématique\n   - Acte 2 (45s) : Découverte des espaces\n   - Acte 3 (45s) : Rencontres et témoignages\n   - Acte 4 (45s) : Activités dynamiques\n   - Acte 5 (15s) : Call-to-action\n4. SCRIPT DÉTAILLÉ par scène :\n   - Lieu précis et ambiance\n   - Indications de mise en scène\n   - Dialogues naturels (français/khmer)\n   - Musique et effets sonores\n5. PLAN DE TOURNAGE :\n   - 8 lieux différents\n   - Moments de la journée\n   - Matériel nécessaire\n6. MESSAGES CLÉS à transmettre\n7. ÉLÉMENTS VISUELS MARQUANTS (10)\n\nTON : Moderne, dynamique, inclusif\nSTYLE : Storytelling émotionnel\nCIBLE : Jeunes professionnels cambodgiens urbains »'
      }
    ],
    exercise: 'Rédigez un méga-prompt qui demande la création d\'un calendrier de formations en français pour les employés de l\'IFC sur six mois. Par exemple : « Vous êtes formateur linguistique. Préparez le planning de six ateliers (date, durée, thème, objectifs et support) pour améliorer le français professionnel du personnel de l\'IFC. Répondez sous forme de tableau. »'
  },

  // Slide de pause déjeuner
  {
    id: 'lunch-break',
    type: 'break',
    title: 'Pause Déjeuner',
    icon: '🍽️',
    duration: '1h30',
    time: '12h00 - 13h30',
    message: 'Rendez-vous à 13h30 pour découvrir la création visuelle avec l\'IA !',
    menu: {
      title: 'Menu du jour',
      items: [
        'Tomates burrata (de Siem Reap), réduction de vinaigre balsamique et pesto au poivre vert et galanga',
        'Filet mignon de porc à l\'italienne (tomate, olive, oignons) et polenta croustillante',
        'Riz au lait brun, au sucre de palme raffiné et mangue'
      ]
    }
  }
]; 