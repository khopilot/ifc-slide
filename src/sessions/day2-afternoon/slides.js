// ===================================
//   DAY 2 AFTERNOON - SESSION CONFIGURATION
//   Projets Communs, Présentations et Clôture
// ===================================

export const day2AfternoonSlides = [
  // Titre de l'après-midi
  {
    id: 'day2-afternoon-title',
    type: 'afternoon-title',
    title: '🚀 Jour 2 - Après-midi',
    subtitle: 'Projets Collaboratifs et Clôture',
    content: {
      overview: [
        '13h30 - 15h00 : Continuation des projets en équipes',
        '15h00 - 15h15 : Pause café',
        '15h15 - 16h30 : Présentations des projets',
        '16h30 - 17h00 : Questions/Réponses et conclusion'
      ],
      objectives: [
        'Finaliser les workflows créés en équipes',
        'Présenter les solutions développées',
        'Partager les apprentissages',
        'Clôturer la formation avec perspectives futures'
      ]
    },
    duration: '5 min'
  },

  // Continuation des projets
  {
    id: 'day2-project-continuation',
    type: 'project-workshop',
    title: '👥 Finalisation des Projets d\'Équipe',
    subtitle: 'Perfectionnement et préparation des présentations',
    content: {
      duration: '1h30',
      phases: [
        {
          title: 'Phase 1 : Finalisation (45 min)',
          tasks: [
            'Terminer l\'implémentation du workflow',
            'Tester avec des cas concrets',
            'Documenter les étapes clés',
            'Préparer les démos'
          ]
        },
        {
          title: 'Phase 2 : Préparation présentation (30 min)',
          elements: [
            'Créer un support visuel (5-7 slides max)',
            'Définir qui présente quoi',
            'Préparer une démo live si possible',
            'Anticiper les questions'
          ]
        },
        {
          title: 'Phase 3 : Répétition (15 min)',
          checklist: [
            'Chronométrer (10 min max par équipe)',
            'Vérifier la clarté du message',
            'Tester les transitions',
            'Préparer plan B si démo échoue'
          ]
        }
      ],
      supportTools: {
        title: 'Outils de support disponibles',
        tools: [
          {
            name: 'Gamma',
            usage: 'Création rapide de présentations',
            prompt: 'Crée une présentation de 7 slides pour présenter notre workflow [NOM] qui [DESCRIPTION]. Structure : intro, problème, solution, démo, résultats, apprentissages, next steps.'
          },
          {
            name: 'Canva',
            usage: 'Design de slides visuels',
            templates: ['Pitch Deck', 'Project Showcase', 'Tech Presentation']
          },
          {
            name: 'Miro/FigJam',
            usage: 'Schémas de workflow visuels',
            tip: 'Utilisez les templates de process flow'
          }
        ]
      },
      evaluationCriteria: [
        'Pertinence du workflow pour le département',
        'Facilité d\'adoption par l\'équipe',
        'Gain de temps estimé',
        'Créativité dans l\'utilisation de l\'IA',
        'Qualité de la présentation'
      ]
    },
    notes: 'Circuler entre les équipes pour support et conseils'
  },

  // Pause café
  {
    id: 'day2-afternoon-break',
    type: 'afternoon-break',
    title: '☕ Pause Café',
    icon: '☕',
    time: '15h00 - 15h15',
    duration: '15 min',
    message: 'Dernière pause avant les présentations finales !',
    tips: [
      'Finalisez vos supports de présentation',
      'Détendez-vous avant de présenter',
      'Échangez avec les autres équipes'
    ]
  },

  // Présentations des projets
  {
    id: 'day2-project-presentations',
    type: 'presentations',
    title: '🎯 Présentations des Projets',
    subtitle: 'Showcase des workflows créés par les équipes',
    content: {
      format: {
        duration: '10 min par équipe',
        structure: [
          '2 min : Contexte et problématique',
          '5 min : Démonstration du workflow',
          '2 min : Résultats et métriques attendus',
          '1 min : Prochaines étapes'
        ]
      },
      lottery: {
        title: '🎲 Tirage au Sort de l\'Ordre de Passage',
        description: 'Chaque équipe tire un numéro pour déterminer son ordre de présentation',
        teams: 8,
        instructions: [
          'Chaque équipe envoie un représentant',
          'Tirage d\'un numéro entre 1 et 8',
          'L\'ordre détermine le passage',
          'Préparation pendant que les autres présentent'
        ]
      },
      feedbackGrid: {
        title: 'Grille de feedback constructif',
        criteria: [
          {
            aspect: 'Innovation',
            questions: ['Quelle est l\'idée la plus créative ?', 'Comment pourrait-on aller plus loin ?']
          },
          {
            aspect: 'Faisabilité',
            questions: ['Est-ce réaliste avec nos ressources ?', 'Quels obstacles anticipez-vous ?']
          },
          {
            aspect: 'Impact',
            questions: ['Quel sera le gain principal ?', 'Combien de personnes en bénéficieront ?']
          },
          {
            aspect: 'Adoption',
            questions: ['L\'équipe adoptera-t-elle facilement ?', 'Quelle formation sera nécessaire ?']
          }
        ]
      },
      recognitions: [
        '🏆 Prix Innovation : Workflow le plus créatif',
        '⚡ Prix Efficacité : Plus grand gain de temps',
        '🤝 Prix Collaboration : Meilleure synergie IA-Humain',
        '🌟 Prix Impact : Transformation la plus significative',
        '💡 Prix Simplicité : Solution la plus élégante'
      ]
    },
    duration: '75 min',
    notes: 'Encourager les questions constructives entre équipes'
  },

  // Session Q&R
  {
    id: 'day2-qa-session',
    type: 'qa-session',
    title: '❓ Questions & Réponses',
    subtitle: 'Clarifications, approfondissements et échanges',
    content: {
      themes: [
        {
          category: 'Implémentation pratique',
          sampleQuestions: [
            'Comment convaincre ma direction d\'adopter l\'IA ?',
            'Quel budget prévoir pour les outils ?',
            'Comment former les collègues réticents ?',
            'Par où commencer concrètement ?'
          ]
        },
        {
          category: 'Aspects techniques',
          sampleQuestions: [
            'Quelle sécurité pour nos données ?',
            'Comment intégrer avec nos systèmes existants ?',
            'Peut-on utiliser l\'IA hors ligne ?',
            'Comment mesurer le ROI ?'
          ]
        },
        {
          category: 'Évolution et futur',
          sampleQuestions: [
            'Comment rester à jour avec l\'IA ?',
            'Quelles nouvelles fonctionnalités arrivent ?',
            'L\'IA va-t-elle remplacer nos emplois ?',
            'Quelles compétences développer ?'
          ]
        }
      ],
      resources: {
        title: 'Ressources pour continuer',
        items: [
          {
            type: 'Newsletter',
            suggestions: ['AI Tool Report', 'The Neuron', 'Ben\'s Bites']
          },
          {
            type: 'Communautés',
            suggestions: ['AI Cambodia', 'ChatGPT Users Group', 'Forums spécialisés']
          },
          {
            type: 'Formation continue',
            suggestions: ['Coursera AI courses', 'YouTube tutorials', 'Documentation officielle']
          },
          {
            type: 'Veille',
            suggestions: ['Product Hunt AI', 'There\'s an AI for That', 'Future Tools']
          }
        ]
      },
      nextSteps: [
        'Implémenter un workflow cette semaine',
        'Former 2 collègues aux bases',
        'Documenter vos cas d\'usage',
        'Rejoindre la communauté IFC IA',
        'Planifier session de suivi dans 1 mois'
      ]
    },
    duration: '20 min'
  },

  // Conclusion et clôture
  {
    id: 'day2-conclusion',
    type: 'conclusion',
    title: '🎊 Conclusion & Clôture',
    subtitle: 'Merci pour votre participation active !',
    content: {
      keyTakeaways: {
        title: '🎯 Points Clés à Retenir',
        points: [
          'L\'IA est un outil, pas une solution magique',
          'Commencez petit, itérez rapidement',
          'L\'humain reste au centre du processus',
          'La collaboration IA-Humain est la clé',
          'L\'apprentissage continu est essentiel'
        ]
      },
      achievements: {
        title: '🏆 Vos Accomplissements',
        items: [
          'Maîtrise des prompts efficaces',
          'Découverte de 20+ outils IA',
          'Création de workflows personnalisés',
          'Collaboration en équipes mixtes',
          'Vision claire pour implémenter l\'IA'
        ]
      },
      commitments: {
        title: '📋 Vos Engagements',
        personal: [
          'Je vais implémenter [WORKFLOW] d\'ici [DATE]',
          'Je vais former [NOMBRE] collègues',
          'Je vais économiser [HEURES] par semaine',
          'Je vais explorer [OUTIL] en profondeur'
        ]
      },
      certificate: {
        title: '📜 Certificat de Participation',
        text: 'Félicitations ! Vous avez complété la formation "IA pour Tous : Optimisez votre travail à l\'IFC"',
        elements: [
          'Attestation de participation',
          'Badge LinkedIn "IA Practitioner"',
          'Accès au groupe alumni',
          'Resources exclusives'
        ]
      },
      finalMessage: {
        title: '💫 Message Final',
        quote: '"L\'IA ne remplace pas l\'intelligence humaine, elle l\'amplifie. Votre créativité, votre empathie et votre jugement restent irremplaçables. Utilisez l\'IA pour libérer votre potentiel et vous concentrer sur ce qui compte vraiment : créer de la valeur et faire la différence."',
        signature: 'L\'équipe Formation IFC'
      },
      contacts: {
        title: '📞 Restons en Contact',
        items: [
          'Email support : ia-support@ifc.com',
          'Groupe WhatsApp : IFC IA Community',
          'Sessions de suivi mensuelles',
          'Hotline IA : Tous les vendredis 14h-16h'
        ]
      }
    },
    duration: '10 min',
    notes: 'Terminer sur une note inspirante et motivante'
  }
]; 