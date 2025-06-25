// Jour 2 - Matinée : Workflows IA Optimisés
// 9h00 - 12h00

export const day2MorningSlides = [
  // Slide de titre principal
  {
    id: 'day2-morning-title',
    type: 'title',
    title: 'Jour 2 - Workflows IA',
    subtitle: 'Optimiser votre quotidien à l\'Institut Français du Cambodge',
    presenter: 'Institut Français du Cambodge',
    organization: 'Formation Professionnelle IA',
    date: 'Jour 2 - Matinée (9h00 - 12h00)',
    duration: '3h00'
  },



  // Récapitulatif jour 1
  {
    id: 'day2-recap',
    type: 'recap-slide',
    title: 'Récapitulatif Jour 1',
    subtitle: 'Ce que nous avons appris hier',
    content: {
      categories: [
        {
          title: 'IA Conversationnelle',
          icon: '💬',
          color: 'blue',
          tools: [
            { name: 'ChatGPT', purpose: 'pour créer' },
            { name: 'Claude', purpose: 'pour analyser' },
            { name: 'Perplexity', purpose: 'pour rechercher' }
          ]
        },
        {
          title: 'IA Créative',
          icon: '🎨',
          color: 'purple',
          tools: [
            { name: 'DALL-E', purpose: 'pour illustrer' },
            { name: 'Midjourney', purpose: 'pour l\'art' },
            { name: 'Canva AI', purpose: 'pour designer' }
          ]
        },
        {
          title: 'Outils Spécialisés',
          icon: '🛠️',
          color: 'green',
          tools: [
            { name: 'Heygen', purpose: 'pour les vidéos' },
            { name: 'ElevenLabs', purpose: 'pour l\'audio' },
            { name: 'Gamma', purpose: 'pour présenter' }
          ]
        }
      ],
      conclusion: 'Aujourd\'hui : Comment combiner ces outils pour votre travail quotidien à l\'IFC'
    },
    duration: '15 min',
    notes: 'Faire un tour rapide pour voir si des questions sont restées en suspens'
  },

  // Re-explication des concepts clés
  {
    id: 'day2-concept-clarification',
    type: 'concept-clarification',
    title: 'Re-explication : Outils · Prompts · Agents',
    subtitle: 'Clarifier des concepts clés avant les ateliers',
    time: '09h15 - 09h30',
    content: {
      objective: 'S\'assurer que tout le monde comprend bien les termes essentiels avant de passer aux workflows',
      concepts: [
        {
          term: 'Outil IA',
          definition: 'Application unique répondant à un besoin précis (chat, image, traduction).',
          example: 'ChatGPT rédige un e-mail ; DALL·E crée un visuel.',
          metaphor: 'Tournevis'
        },
        {
          term: 'Prompt',
          definition: 'Texte d\'instruction qu\'on envoie à l\'IA. Plus il est clair, meilleure est la réponse.',
          example: '« Résumé ce texte en khmer de 100 mots. »',
          metaphor: 'Instructions "visser ceci"'
        },
        {
          term: 'Agent',
          definition: 'IA qui enchaîne plusieurs actions via prompts successifs, guidée par l\'humain.',
          example: 'Perplexity → ChatGPT → Canva dans nos scénarios.',
          metaphor: 'Ouvrier'
        },
        {
          term: 'Agent autonome',
          definition: 'IA qui décide elle-même des étapes, appelle des outils, vérifie le résultat.',
          example: 'Manus génère un site complet à partir d\'un brief.',
          metaphor: 'Chef de chantier qui planifie et fait tout seul'
        }
      ],
      summary: 'Outil = tournevis ; Prompt = instructions « visser ceci » ; Agent = ouvrier ; Agent autonome = chef de chantier'
    },
    duration: '15 min',
    notes: 'Utiliser des exemples très concrets et vérifier la compréhension avec des questions simples'
  },

  // Workflow Communication Complet
  {
    id: 'day2-communication-workflow',
    type: 'communication-workflow',
    title: 'Workflow Communication IFC',
    subtitle: 'Campagne Multi-Canal avec l\'IA',
    content: {
      steps: [
        {
          title: 'Stratégie avec Perplexity',
          duration: '15 min',
          objective: 'Rechercher tendances et benchmarks pour campagne multi-canal',
          prompts: [
            'Meilleures pratiques communication culturelle Asie du Sud-Est 2024',
            'Engagement réseaux sociaux centres culturels Cambodge',
            'Formats viraux TikTok/Instagram pour éducation'
          ],
          outputs: [
            'Heures de pointe par plateforme',
            'Formats performants',
            'Hashtags tendance'
          ],
          tool: 'Perplexity',
          icon: '🔍',
          color: '#3b82f6'
        },
        {
          title: 'Messages Clés avec ChatGPT',
          duration: '20 min',
          objective: 'Définir les messages principaux adaptés à chaque public',
          prompts: [
            'Génère 5 messages clés pour promouvoir cours de français IFC : jeunes cambodgiens, professionnels, parents, partenaires, médias',
            'Adapte ton et style pour chaque audience'
          ],
          outputs: [
            'Messages personnalisés par cible',
            'Angles d\'approche différenciés',
            'Arguments convaincants'
          ],
          tool: 'ChatGPT',
          icon: '💬',
          color: '#10b981'
        },
        {
          title: 'Contenus Multilingues avec Claude',
          duration: '25 min',
          objective: 'Créer contenus cohérents en FR/KH/EN pour tous canaux',
          prompts: [
            'Développe ce message en 3 versions : Facebook (200 mots), Instagram (50 mots + émojis), LinkedIn (150 mots pro)',
            'Traduis et adapte culturellement en khmer et anglais'
          ],
          outputs: [
            'Posts adaptés par plateforme',
            'Versions trilingues',
            'CTAs spécifiques'
          ],
          tool: 'Claude',
          icon: '✍️',
          color: '#8b5cf6'
        },
        {
          title: 'Visuels avec DALL-E',
          duration: '20 min',
          objective: 'Créer visuels accrocheurs cohérents avec l\'identité IFC',
          prompts: [
            'Modern French language classroom in Cambodia, students engaged, bright natural light, positive atmosphere',
            'Abstract design mixing French and Khmer cultural elements, blue and red palette'
          ],
          outputs: [
            'Images hero pour posts',
            'Visuels stories',
            'Bannières événements'
          ],
          tool: 'DALL-E',
          icon: '🎨',
          color: '#f59e0b'
        },
        {
          title: 'Design avec Canva',
          duration: '30 min',
          objective: 'Assembler visuels et textes selon charte graphique IFC',
          outputs: [
            'Posts finalisés tous formats',
            'Stories animées',
            'Bannières web',
            'Affiches print'
          ],
          tool: 'Canva',
          icon: '🎭',
          color: '#06b6d4'
        },
        {
          title: 'Newsletter avec ChatGPT',
          duration: '15 min',
          objective: 'Rédiger newsletter mensuelle engageante',
          prompts: [
            'Newsletter IFC : intro accrocheuse, 3 actualités, agenda culturel, témoignage étudiant, CTA inscription'
          ],
          outputs: [
            'Structure complète',
            'Contenus sections',
            'Liens et CTAs'
          ],
          tool: 'ChatGPT',
          icon: '📧',
          color: '#10b981'
        },
        {
          title: 'Planning avec Claude',
          duration: '15 min',
          objective: 'Créer calendrier de publication optimal',
          prompts: [
            'Calendrier publication 2 semaines : répartition posts par canal, heures optimales Cambodge, cohérence messages'
          ],
          outputs: [
            'Planning détaillé',
            'Checklist pré-publication',
            'Alertes et rappels'
          ],
          tool: 'Claude',
          icon: '📅',
          color: '#8b5cf6'
        },
        {
          title: 'Analyse avec Perplexity',
          duration: '10 min',
          objective: 'Définir KPIs et préparer suivi performance',
          prompts: [
            'KPIs essentiels campagne digitale centre culturel : engagement, conversions, notoriété'
          ],
          outputs: [
            'Tableau de bord KPIs',
            'Objectifs mesurables',
            'Plan d\'optimisation'
          ],
          tool: 'Perplexity',
          icon: '📊',
          color: '#3b82f6'
        }
      ],
      calendar: [
        {
          day: 'J-14',
          title: 'Phase Stratégie',
          actions: [
            'Analyse tendances et benchmarks',
            'Définition objectifs SMART',
            'Validation messages clés'
          ]
        },
        {
          day: 'J-10',
          title: 'Phase Création',
          actions: [
            'Production contenus multilingues',
            'Création visuels et vidéos',
            'Préparation templates réutilisables'
          ]
        },
        {
          day: 'J-5',
          title: 'Phase Finalisation',
          actions: [
            'Assemblage dans Canva',
            'Relecture et validation',
            'Programmation publications'
          ]
        },
        {
          day: 'J-0',
          title: 'Lancement',
          actions: [
            'Publication coordonnée multi-canal',
            'Animation communauté',
            'Monitoring temps réel'
          ]
        },
        {
          day: 'J+7',
          title: 'Optimisation',
          actions: [
            'Analyse performances',
            'Ajustements stratégie',
            'Capitalisation apprentissages'
          ]
        }
      ],
      automations: [
        {
          title: 'Traduction instantanée',
          prompt: 'Traduis ce texte en khmer et anglais, garde le ton [formel/décontracté/inspirant]'
        },
        {
          title: 'Génération hashtags',
          prompt: 'Génère 10 hashtags pertinents pour [événement/cours/exposition] au Cambodge'
        },
        {
          title: 'Variations de titres',
          prompt: 'Propose 5 variations accrocheuses de ce titre pour différents canaux'
        },
        {
          title: 'Adaptation tonalité',
          prompt: 'Réécris ce message pour [Gen Z/professionnels/parents] en gardant l\'info clé'
        }
      ],
      templates: {
        hooks: [
          {
            type: 'Nouveau cours',
            fr: '🎯 Nouveau départ ! Inscrivez-vous à nos cours de français',
            kh: '🎯 ការចាប់ផ្តើមថ្មី! ចុះឈ្មោះរៀនភាសាបារាំង',
            en: '🎯 Fresh start! Join our French courses'
          },
          {
            type: 'Événement culturel',
            fr: '🎭 Vivez la culture française au cœur de Phnom Penh',
            kh: '🎭 រស់នៅវប្បធម៌បារាំងនៅបេះដូងភ្នំពេញ',
            en: '🎭 Experience French culture in the heart of Phnom Penh'
          },
          {
            type: 'Témoignage',
            fr: '💬 "Apprendre le français a changé ma vie professionnelle"',
            kh: '💬 "ការរៀនភាសាបារាំងបានផ្លាស់ប្តូរជីវិតការងាររបស់ខ្ញុំ"',
            en: '💬 "Learning French transformed my career"'
          }
        ],
        storyFormats: [
          {
            type: 'Question Quiz',
            description: 'Testez vos connaissances avec emoji réponse'
          },
          {
            type: 'Avant/Après',
            description: 'Progression étudiants ou transformation espace'
          },
          {
            type: 'Behind the Scenes',
            description: 'Coulisses cours ou préparation événement'
          },
          {
            type: 'Countdown',
            description: 'Compte à rebours inscription ou événement'
          },
          {
            type: 'Tips du jour',
            description: 'Astuce langue française ou culture'
          }
        ]
      },
      checklist: [
        {
          category: 'Contenu',
          items: [
            'Orthographe et grammaire vérifiées',
            'Traductions validées par natifs',
            'Informations pratiques complètes',
            'Call-to-action clair'
          ]
        },
        {
          category: 'Visuel',
          items: [
            'Logo IFC visible',
            'Couleurs charte respectées',
            'Texte lisible sur mobile',
            'Format adapté plateforme'
          ]
        },
        {
          category: 'Technique',
          items: [
            'Liens testés et fonctionnels',
            'Hashtags pertinents ajoutés',
            'Géolocalisation activée',
            'Programmation vérifiée'
          ]
        }
      ],
      kpis: [
        {
          metric: 'Taux d\'engagement',
          objective: '+25% vs mois précédent',
          tool: 'Meta Business Suite'
        },
        {
          metric: 'Portée organique',
          objective: '10K personnes/semaine',
          tool: 'Analytics natifs'
        },
        {
          metric: 'Conversions (inscriptions)',
          objective: '50 leads qualifiés/mois',
          tool: 'Google Analytics'
        },
        {
          metric: 'Taux ouverture newsletter',
          objective: '>30%',
          tool: 'Mailchimp'
        },
        {
          metric: 'Partages et saves',
          objective: '+40% sur contenu éducatif',
          tool: 'Insights réseaux'
        }
      ],
      proTips: [
        {
          title: 'Heure dorée cambodgienne',
          description: 'Publier entre 19h-21h pour engagement maximum'
        },
        {
          title: 'Mix 70-20-10',
          description: '70% valeur ajoutée, 20% partage communauté, 10% promotion directe'
        },
        {
          title: 'User Generated Content',
          description: 'Encourager et resharer contenus étudiants avec #IFCambodia'
        },
        {
          title: 'Stories interactives',
          description: 'Utiliser polls, questions, quiz pour engagement temps réel'
        },
        {
          title: 'Cross-promotion',
          description: 'Mentionner partenaires locaux pour étendre la portée'
        }
      ]
    },
    duration: '30 min',
    notes: 'Présenter avec exemples concrets de campagnes IFC réussies'
  },

  // Workflow Maintenance Complet
  {
    id: 'day2-maintenance-workflow',
    type: 'maintenance-workflow',
    title: 'Workflow Maintenance IFC',
    subtitle: 'Gestion Technique et Bâtiments avec l\'IA',
    content: {
      steps: [
        {
          title: 'Diagnostic et Priorisation avec ChatGPT',
          duration: '10 min',
          objective: 'Analyser et classer les demandes d\'intervention',
          prompts: [
            'Voici les demandes de maintenance de la semaine :\n[LISTE DES PROBLÈMES]\n\nClasse par :\n1. Urgence (sécurité/critique/normal/préventif)\n2. Zone (salles cours/admin/espaces publics/extérieur)\n3. Type (électrique/plomberie/climatisation/informatique)\n4. Temps estimé intervention\n5. Matériel nécessaire\n\nCrée planning optimisé par jour'
          ],
          outputs: [
            'Planning hebdomadaire priorisé',
            'Liste matériel à prévoir',
            'Temps total estimé par jour'
          ],
          tools: ['ChatGPT']
        },
        {
          title: 'Recherche Solutions avec Perplexity',
          duration: '10 min',
          objective: 'Trouver solutions techniques adaptées au contexte local',
          prompts: [
            'Réparer climatiseur [MARQUE] erreur E4 climat tropical',
            'Fournisseurs pièces détachées [ÉQUIPEMENT] Phnom Penh',
            'Anti-termites bâtiments publics Cambodge normes',
            'Entretien sol carrelage mousson humidité'
          ],
          focus: 'Solutions adaptées climat cambodgien',
          outputs: [
            'Procédures de réparation',
            'Liste fournisseurs locaux',
            'Produits recommandés'
          ],
          tools: ['Perplexity']
        },
        {
          title: 'Procédures Illustrées avec Claude + DALL-E',
          duration: '15 min',
          objective: 'Créer guides maintenance visuels',
          prompts: [
            'Crée procédure maintenance pour [ÉQUIPEMENT] :\n1. Check-list sécurité avant intervention\n2. Étapes détaillées avec points d\'attention\n3. Outils et pièces nécessaires\n4. Tests de validation\n5. Périodicité maintenance préventive\n\nAdapte pour technicien niveau intermédiaire\nBilingue français/khmer',
            'Technical diagram showing [EQUIPMENT] maintenance steps, clean professional style, numbered parts, safety highlights'
          ],
          outputs: [
            'Procédures détaillées bilingues',
            'Diagrammes techniques',
            'Check-lists sécurité'
          ],
          tools: ['Claude', 'DALL-E']
        },
        {
          title: 'Gestion Inventaire avec ChatGPT',
          duration: '10 min',
          objective: 'Optimiser stock pièces et consommables',
          prompts: [
            'Analyse consommation maintenance 6 derniers mois :\n[DONNÉES EXCEL]\n\nIdentifie :\n- Top 10 pièces plus utilisées\n- Saisonnalité (mousson vs saison sèche)\n- Stock minimum recommandé\n- Prévisions 3 mois\n- Alertes réapprovisionnement'
          ],
          outputs: [
            'Tableau analyse stock',
            'Alertes réapprovisionnement',
            'Bons de commande'
          ],
          tools: ['ChatGPT']
        },
        {
          title: 'Rapports d\'Intervention avec Claude',
          duration: '10 min',
          objective: 'Documentation professionnelle et traçabilité',
          prompts: [
            'Génère rapport intervention maintenance :\n- Date/heure/durée\n- Problème constaté (avec photos possibles)\n- Diagnostic technique\n- Actions réalisées\n- Pièces utilisées\n- Recommandations suivi\n- Signature technicien/responsable\n\nFormat : PDF avec logo IFC\nLangues : FR/KH selon destinataire'
          ],
          outputs: [
            'Rapports PDF professionnels',
            'Base de données interventions',
            'Statistiques maintenance'
          ],
          tools: ['Claude']
        },
        {
          title: 'Communication avec Canva + ChatGPT',
          duration: '5 min',
          objective: 'Informer les usagers efficacement',
          prompts: [
            'Crée panneau "Zone en maintenance" :\n- Trilingue FR/KH/EN\n- Durée estimée\n- Zone alternative suggérée\n- Contact urgence\n- Design visible et professionnel'
          ],
          outputs: [
            'Panneaux temporaires',
            'Emails automatiques',
            'SMS notifications'
          ],
          tools: ['Canva', 'ChatGPT']
        },
        {
          title: 'Maintenance Préventive avec ChatGPT',
          duration: '15 min/mois',
          objective: 'Anticiper et planifier',
          prompts: [
            'Crée calendrier maintenance préventive IFC :\n\nMENSUEL :\n- Filtres climatisation (saison)\n- Tests alarmes/sécurité\n- Vérification éclairage secours\n\nTRIMESTRIEL :\n- Révision complète climatiseurs\n- Contrôle installations électriques\n- Traitement anti-nuisibles\n\nANNUEL :\n- Peinture zones usure\n- Révision toiture avant mousson\n- Audit sécurité complet'
          ],
          outputs: [
            'Planning annuel détaillé',
            'Check-lists par période',
            'Budget prévisionnel'
          ],
          tools: ['ChatGPT']
        }
      ],
      cases: [
        {
          title: 'Gestion Climatisation (Critique au Cambodge)',
          steps: [
            'Perplexity : "Optimisation climatisation bâtiment public tropiques"',
            'ChatGPT : Planning nettoyage filtres par zone',
            'Claude : Check-list maintenance mensuelle',
            'DALL-E : Guide visuel nettoyage filtres',
            'Suivi : Tableau consommation électrique'
          ]
        },
        {
          title: 'Préparation Saison des Pluies',
          steps: [
            'Perplexity : "Préparation bâtiments mousson Cambodge"',
            'ChatGPT : Check-list 50 points à vérifier',
            'Claude : Plan d\'action sur 4 semaines',
            'Canva : Infographie conseils personnel',
            'Budget : Estimation travaux préventifs'
          ]
        },
        {
          title: 'Gestion Urgences Techniques',
          steps: [
            'ChatGPT : Arbre décision par type urgence',
            'Claude : Protocoles sécurité immédiats',
            'Canva : Fiches réflexe plastifiées',
            'WhatsApp : Messages types urgence',
            'Suivi : Base incidents avec analyses'
          ]
        }
      ],
      digitalTools: [
        {
          title: 'QR Codes Équipements',
          features: [
            'Scanner = historique maintenance',
            'Lien vers procédures',
            'Signalement problème direct'
          ]
        },
        {
          title: 'Formulaire Google Forms',
          features: [
            'Localisation (menu déroulant salles)',
            'Type problème (cases à cocher)',
            'Urgence (échelle 1-5)',
            'Photo optionnelle',
            'Auto-envoi email maintenance'
          ]
        },
        {
          title: 'WhatsApp Bot Maintenance',
          features: [
            'Urgence → Protocole sécurité',
            'Clim → Vérifications basiques',
            'Fuite → Actions immédiates',
            'Électrique → Ne pas toucher + appel'
          ]
        }
      ],
      dashboard: [
        { indicator: 'Interventions urgentes', target: '<5', actual: '3', status: '✅' },
        { indicator: 'Délai moyen résolution', target: '<24h', actual: '18h', status: '✅' },
        { indicator: 'Préventif réalisé', target: '100%', actual: '95%', status: '⚠️' },
        { indicator: 'Budget consommé', target: '<80%', actual: '72%', status: '✅' },
        { indicator: 'Satisfaction usagers', target: '>4/5', actual: '4.3/5', status: '✅' }
      ],
      dailyChecklist: [
        'Éclairages extérieurs éteints',
        'Climatiseurs salles cours OFF',
        'Pas de fuites visibles',
        'Toilettes fonctionnelles',
        'Ascenseur opérationnel'
      ],
      weeklyChecklist: [
        'Niveau produits entretien',
        'État filtres climatisation',
        'Pression eau correcte',
        'Éclairage secours OK',
        'Dates péremption extincteurs'
      ],
      emergencyProcedures: [
        {
          title: 'Coupure Électrique',
          icon: '⚡',
          steps: [
            { action: 'SMS automatique', detail: '"Coupure secteur X, générateur en route"' },
            { action: 'Check-list', detail: 'Priorités rétablissement' },
            { action: 'Communication', detail: 'Durée estimée' }
          ]
        },
        {
          title: 'Fuite d\'Eau Majeure',
          icon: '💧',
          steps: [
            { action: 'WhatsApp groupe', detail: 'Photo + localisation' },
            { action: 'Actions immédiates', detail: 'Fermer vannes' },
            { action: 'Canva', detail: 'Panneaux "Zone fermée"' }
          ]
        }
      ],
      ecoActions: [
        { tool: 'Perplexity', action: 'Solutions économie énergie bâtiment tropical' },
        { tool: 'ChatGPT', action: 'Calcul ROI panneaux solaires' },
        { tool: 'Claude', action: 'Plan réduction consommation eau' },
        { tool: 'Tracking', action: 'Tableau bord empreinte carbone' }
      ]
    },
    duration: '30 min',
    notes: 'Présenter avec exemples concrets d\'interventions réussies à l\'IFC'
  },

  // Workflow IT/Google Workspace Complet
  {
    id: 'day2-it-workspace',
    type: 'it-workspace',
    title: 'Workflow IT/Google Workspace',
    subtitle: 'Gestion et Support Informatique avec l\'IA',
    content: {
      steps: [
        {
          title: 'Gestion des Comptes avec ChatGPT + Google Admin',
          duration: '15 min',
          objective: 'Automatiser création/modification comptes',
          prompts: [
            'Génère un CSV pour import Google Admin avec :\n- Liste nouveaux employés : [NOMS, FONCTIONS]\n- Format : firstname.lastname@ifc-cambodge.org\n- Groupes : selon département (cours@, admin@, com@)\n- Mots de passe temporaires sécurisés\n- Unités organisationnelles appropriées\n\nInclure script Google Apps Script pour :\n- Email de bienvenue automatique\n- Partage dossiers département\n- Ajout calendriers partagés'
          ],
          tools: ['ChatGPT', 'Google Admin']
        },
        {
          title: 'Support Utilisateurs avec Claude',
          duration: '10 min/ticket',
          objective: 'Résoudre rapidement les problèmes courants',
          prompts: [
            'Crée guide de dépannage Google Workspace en FR/KH :\n\nPROBLÈMES FRÉQUENTS :\n1. "Je ne reçois plus mes emails"\n2. "Mon Drive est plein"\n3. "Je ne peux pas rejoindre la réunion Meet"\n4. "J\'ai perdu l\'accès à un document"\n5. "Mon calendrier ne se synchronise pas"\n\nPour chaque problème :\n- Diagnostic rapide (3 questions)\n- Solutions pas-à-pas avec captures\n- Quand escalader vers IT'
          ],
          tools: ['Claude']
        },
        {
          title: 'Sécurité et Conformité avec Perplexity',
          duration: '20 min/semaine',
          objective: 'Maintenir la sécurité des données',
          prompts: [
            'Nouvelles menaces Google Workspace 2024',
            'Best practices sécurité email organisations Cambodge',
            'RGPD établissement culturel données étudiants',
            'Phishing tendances Asie Sud-Est éducation'
          ],
          tools: ['Perplexity', 'ChatGPT']
        },
        {
          title: 'Automatisation avec Google Apps Script + ChatGPT',
          duration: '30 min',
          objective: 'Créer des scripts pour tâches répétitives',
          scripts: [
            {
              name: 'INSCRIPTION COURS',
              features: [
                'Form → Sheet → Calendar prof',
                'Email confirmation étudiant',
                'Rappel J-1'
              ]
            },
            {
              name: 'RAPPORT HEBDO',
              features: [
                'Compile stats utilisation',
                'Graphiques automatiques',
                'Envoi direction lundi 9h'
              ]
            },
            {
              name: 'ARCHIVAGE',
              features: [
                'Docs +1 an → dossier Archive',
                'Compression automatique',
                'Notification propriétaire'
              ]
            }
          ],
          tools: ['ChatGPT', 'Apps Script']
        },
        {
          title: 'Formation Utilisateurs avec Gamma + Loom',
          duration: '45 min',
          objective: 'Autonomiser les équipes',
          modules: [
            {
              level: 'DÉBUTANT (2h)',
              topics: [
                'Gmail : Libellés, filtres, recherche',
                'Drive : Organisation, partage, collaboration',
                'Calendar : Planification, salles, invitations'
              ]
            },
            {
              level: 'AVANCÉ (2h)',
              topics: [
                'Docs : Styles, sommaire, suggestions',
                'Sheets : Formules, TCD, graphiques',
                'Forms : Questionnaires, quiz auto-corrigés'
              ]
            }
          ],
          tools: ['Gamma', 'Loom']
        },
        {
          title: 'Optimisation Stockage avec Claude',
          duration: '20 min',
          objective: 'Gérer efficacement l\'espace Drive',
          prompts: [
            'Script audit stockage Google Drive IFC :\n\n1. Identifier :\n- Top 10 utilisateurs (Go utilisés)\n- Fichiers >100 Mo non modifiés +6 mois\n- Doublons potentiels\n- Dossiers partagés orphelins\n\n2. Recommandations :\n- Politique de rétention par type\n- Archivage cloud secondaire\n- Quotas par département'
          ],
          tools: ['Claude']
        },
        {
          title: 'Intégrations avec Manus/ChatGPT',
          duration: '30 min',
          objective: 'Connecter Google Workspace aux autres outils',
          prompts: [
            'Configure intégrations pour IFC :\n\n1. SITE WEB ↔ CALENDAR :\n- Événements auto-publiés\n- Inscriptions → Google Sheets\n- Confirmations automatiques\n\n2. FORMS → CRM :\n- Nouveaux contacts\n- Segmentation auto\n- Suivi inscriptions cours\n\n3. MEET → YOUTUBE :\n- Enregistrement cours\n- Upload automatique\n- Playlist par niveau'
          ],
          tools: ['Manus', 'ChatGPT']
        },
        {
          title: 'Tableau de Bord IT avec Google Data Studio',
          duration: '30 min',
          objective: 'Visualiser les métriques clés',
          prompts: [
            'Crée dashboard Google Data Studio pour IT :\n\nMÉTRIQUES TEMPS RÉEL :\n- Utilisateurs actifs\n- Stockage utilisé/disponible\n- Tickets support (ouvert/résolu)\n- Performances Meet\n\nTENDANCES MENSUELLES :\n- Adoption nouvelles fonctionnalités\n- Incidents sécurité\n- Coûts licences\n- Satisfaction utilisateurs'
          ],
          tools: ['Data Studio', 'ChatGPT']
        }
      ],
      quickWins: [
        {
          title: 'Templates Email IFC',
          items: [
            'Réponse absence bureau FR/KH/EN',
            'Signature standardisée avec logo',
            'Invitation événement IFC',
            'Confirmation inscription cours',
            'Relance paiement'
          ]
        },
        {
          title: 'Calendriers Partagés',
          items: [
            'IFC Public (événements ouverts)',
            'IFC Salles (réservations)',
            'IFC Équipe (réunions internes)',
            'IFC Maintenance (interventions)',
            'IFC Cours (planning formations)'
          ]
        },
        {
          title: 'Drive Organisation',
          items: [
            '01_Administration',
            '02_Communication',
            '03_Cours',
            '04_Événements',
            '05_Templates',
            '06_Archives_[ANNÉE]'
          ]
        }
      ],
      kpis: [
        { indicator: 'Temps résolution ticket', target: '<4h', measure: 'Google Forms + Sheets' },
        { indicator: 'Uptime services', target: '>99.5%', measure: 'Monitoring automatique' },
        { indicator: 'Adoption 2FA', target: '100%', measure: 'Admin Console' },
        { indicator: 'Formation complétée', target: '>80%', measure: 'LMS tracking' },
        { indicator: 'Satisfaction support', target: '>4.5/5', measure: 'Survey mensuel' }
      ],
      incidentResponse: [
        {
          type: 'Compte compromis',
          steps: [
            'Script suspension immédiate',
            'Audit activités 30 jours',
            'Reset et formation utilisateur'
          ]
        },
        {
          type: 'Fuite de données',
          steps: [
            'Identifier documents concernés',
            'Révoquer accès externes',
            'Notification RGPD si nécessaire'
          ]
        }
      ],
      securityThreats: [
        'Nouvelles menaces Google Workspace 2024',
        'Best practices sécurité email organisations Cambodge',
        'RGPD établissement culturel données étudiants',
        'Phishing tendances Asie Sud-Est éducation'
      ],
      automations: [
        {
          title: 'Onboarding Automatique',
          steps: [
            'Compte créé',
            'Email bienvenue',
            'Accès dossiers département',
            'Invitation formation IT',
            'Checklist manager'
          ]
        },
        {
          title: 'Rapports Automatiques',
          steps: [
            'Stats utilisation hebdo',
            'Alertes stockage >80%',
            'Comptes inactifs',
            'Licences non utilisées'
          ]
        },
        {
          title: 'Workflows Pédagogiques',
          steps: [
            'Inscription',
            'Confirmation',
            'Rappel',
            'Présence',
            'Certificat'
          ]
        }
      ],
      essentialScripts: [
        {
          title: 'Auto-archivage emails anciens',
          code: 'function archiveOldEmails() {\n  // Archive emails >1 an automatiquement\n}',
          description: 'Archive automatiquement les emails de plus d\'un an'
        },
        {
          title: 'Rapport utilisation Drive',
          code: 'function driveUsageReport() {\n  // Email rapport mensuel direction\n}',
          description: 'Envoie un rapport mensuel d\'utilisation à la direction'
        },
        {
          title: 'Création comptes en masse',
          code: 'function bulkUserCreation() {\n  // Import CSV → création comptes\n}',
          description: 'Importe un CSV et crée les comptes utilisateurs'
        }
      ],
      integrations: [
        {
          name: 'SITE WEB ↔ CALENDAR',
          features: [
            'Événements auto-publiés',
            'Inscriptions → Google Sheets',
            'Confirmations automatiques'
          ]
        },
        {
          name: 'FORMS → CRM',
          features: [
            'Nouveaux contacts',
            'Segmentation auto',
            'Suivi inscriptions cours'
          ]
        },
        {
          name: 'MEET → YOUTUBE',
          features: [
            'Enregistrement cours',
            'Upload automatique',
            'Playlist par niveau'
          ]
        }
      ],
      deviceSupport: [
        {
          type: 'BYOD (Bring Your Own Device)',
          configs: [
            'Configuration MDM basique',
            'Politiques par type appareil',
            'Guide config iOS/Android',
            'Séparation données pro/perso'
          ]
        },
        {
          type: 'Salles de Cours Connectées',
          configs: [
            'Chromebooks partagés config',
            'Comptes génériques salle',
            'Réinitialisation auto',
            'Restrictions navigation'
          ]
        }
      ],
      commonIssues: [
        {
          problem: 'Je ne reçois plus mes emails',
          diagnosis: [
            'Vérifier dossier spam',
            'Filtres trop restrictifs ?',
            'Quota boîte atteint ?'
          ],
          solution: 'Réinitialiser filtres et vérifier stockage disponible',
          escalate: 'Problème persiste après vérifications'
        },
        {
          problem: 'Mon Drive est plein',
          diagnosis: [
            'Identifier gros fichiers',
            'Vérifier corbeille',
            'Fichiers partagés comptent ?'
          ],
          solution: 'Nettoyer corbeille et archiver anciens fichiers',
          escalate: 'Besoin augmentation quota'
        },
        {
          problem: 'Je ne peux pas rejoindre la réunion Meet',
          diagnosis: [
            'Navigateur compatible ?',
            'Caméra/micro autorisés ?',
            'Lien valide ?'
          ],
          solution: 'Utiliser Chrome et vérifier permissions',
          escalate: 'Erreur technique persistante'
        },
        {
          problem: 'J\'ai perdu l\'accès à un document',
          diagnosis: [
            'Document supprimé ?',
            'Permissions changées ?',
            'Propriétaire parti ?'
          ],
          solution: 'Vérifier activité du document et demander accès',
          escalate: 'Document critique sans propriétaire'
        },
        {
          problem: 'Mon calendrier ne se synchronise pas',
          diagnosis: [
            'Sync activée mobile ?',
            'Bon compte sélectionné ?',
            'Connexion internet stable ?'
          ],
          solution: 'Réinitialiser sync dans paramètres compte',
          escalate: 'Erreur sync après réinitialisation'
        }
      ],
      sharedCalendars: [
        { name: 'IFC Public', description: 'événements ouverts' },
        { name: 'IFC Salles', description: 'réservations' },
        { name: 'IFC Équipe', description: 'réunions internes' },
        { name: 'IFC Maintenance', description: 'interventions' },
        { name: 'IFC Cours', description: 'planning formations' }
      ]
    },
    duration: '30 min',
    notes: 'Présenter avec démos live Google Admin Console si possible'
  },

  // Workflow Événementiel Complet
  {
    id: 'day2-event-workflow',
    type: 'event-workflow',
    title: 'Workflow Événementiel IFC',
    subtitle: 'Festival de la Francophonie avec l\'IA',
    content: {
      steps: [
        {
          title: 'Conception et Brainstorming avec ChatGPT',
          duration: '30 min',
          objective: 'Créer un concept unique France-Cambodge',
          prompt: 'Crée concept Festival Francophonie IFC Cambodge :\n\nThème : "Confluences - Là où le Mékong rencontre la Seine"\nDurée : 3 jours\nPublic : 500-800 personnes/jour\n\nPropose :\n- 10 activités mélange culturel FR-KH\n- Programme par jour et par public\n- Partenaires potentiels locaux\n- Éléments différenciants\n- Budget estimatif par poste',
          tools: ['ChatGPT']
        },
        {
          title: 'Planning et Logistique avec Claude',
          duration: '45 min',
          objective: 'Organiser chaque détail',
          prompt: 'Crée planning opérationnel Festival Francophonie :\n\nPRÉ-ÉVÉNEMENT (J-30 à J-1) :\n- Timeline préparation équipes\n- Checklist autorisations administratives\n- Plan de communication\n- Coordination prestataires\n\nPENDANT (3 jours) :\n- Planning horaire détaillé\n- Rotation équipes/bénévoles\n- Plan B météo/technique\n- Gestion flux visiteurs\n\nPOST-ÉVÉNEMENT :\n- Démontage\n- Bilan et remerciements\n- Archivage et retours',
          tools: ['Claude']
        },
        {
          title: 'Communication Visuelle avec DALL-E + Canva',
          duration: '45 min',
          objective: 'Créer identité visuelle cohérente',
          prompts: [
            'Festival poster mixing French and Cambodian cultural elements, Angkor temple silhouette with Eiffel tower, Mekong river flowing with French impressionist style, Vibrant colors, modern artistic design'
          ],
          deliverables: [
            'Affiche A2 principale',
            'Bannières réseaux sociaux',
            'Programme dépliant 3 volets',
            'Badges équipe/VIP/presse',
            'Signalétique sur site',
            'T-shirts bénévoles'
          ],
          tools: ['DALL-E', 'Canva']
        },
        {
          title: 'Billetterie et Inscriptions avec Manus',
          duration: '30 min',
          objective: 'Système de réservation fluide',
          prompt: 'Manus : "Crée site one-page Festival Francophonie IFC avec :\n- Header animé avec compte à rebours\n- Programme interactif par jour\n- Billetterie intégrée (gratuit/VIP)\n- Plan d\'accès interactif\n- Galerie partenaires\n- FAQ pratique\n- Formulaire bénévoles\nMobile-first, bilingue FR/KH"',
          tools: ['Manus']
        },
        {
          title: 'Gestion Partenaires avec ChatGPT',
          duration: '30 min',
          objective: 'Maximiser les partenariats',
          prompt: 'Crée 3 offres partenariat Festival :\n\nMÉCÈNE (>5000$) :\n- Naming espace principal\n- Logo sur tous supports\n- 20 invitations VIP\n- Stand privilégié\n\nPARTENAIRE (2000-5000$) :\n- Logo taille moyenne\n- 10 invitations\n- Mention réseaux sociaux\n\nSOUTIEN (<2000$) :\n- Logo partenaires\n- 5 invitations\n- Remerciements\n\nAvec contreparties créatives',
          tools: ['ChatGPT']
        },
        {
          title: 'Programme Détaillé avec Gamma',
          duration: '30 min',
          objective: 'Présentation interactive du programme',
          content: 'JOUR 1 - Patrimoine Croisé :\n- 9h : Ouverture officielle\n- 10h : Expo photo "Angkor par photographes français"\n- 14h : Atelier cuisine fusion\n- 16h : Table ronde écrivains\n- 19h : Concert jazz khmer-français\n\nJOUR 2 - Innovation et Jeunesse :\n- Hackathon Franco-Khmer\n- Battle hip-hop bilingue\n- Cinéma plein air\n\nJOUR 3 - Famille et Traditions :\n- Spectacle enfants\n- Marché artisanal\n- Défilé mode hybride\n- Feu d\'artifice clôture',
          tools: ['Gamma']
        },
        {
          title: 'Coordination Équipes avec Claude',
          duration: '20 min',
          objective: 'Brief clair pour chaque équipe',
          prompt: 'Crée fiches mission pour :\n\nÉQUIPE ACCUEIL (10 pers) :\n- Rôle et périmètre\n- Planning rotations\n- Phrases clés FR/KH/EN\n- Procédures urgence\n- Contact responsable\n\n[Idem pour : Logistique, Technique, Artistes, Sécurité, Communication]\n\nFormat : 1 page, visuels clairs',
          tools: ['Claude']
        },
        {
          title: 'Médias et Presse avec Perplexity + ChatGPT',
          duration: '30 min',
          objective: 'Maximiser couverture médiatique',
          prompts: [
            'Médias francophones Cambodge culture',
            'Journalistes culture Phnom Penh contacts',
            'Blogs influents expatriés français Cambodge',
            'Radio TV couvrent événements culturels'
          ],
          deliverables: [
            'Communiqué de presse FR/KH/EN',
            'Fiche technique événement',
            'Visuels HD libres de droits',
            'Citations prêtes à l\'emploi',
            'Invitation VIP presse'
          ],
          tools: ['Perplexity', 'ChatGPT']
        },
        {
          title: 'Live Coverage avec Heygen + Canva',
          duration: 'Jour J',
          objective: 'Contenu temps réel engageant',
          content: 'Heygen : Avatar présentateur bilingue\n- Intro 30s par activité\n- Interviews artistes simulées\n- Annonces programme du jour\n\nCanva : Templates stories\n- Compte à rebours activités\n- Citations visiteurs\n- Photos instant\n- Sondages interactifs',
          tools: ['Heygen', 'Canva']
        },
        {
          title: 'Bilan et Capitalisation avec ChatGPT',
          duration: 'Post-event',
          objective: 'Analyser et améliorer',
          prompt: 'Analyse données Festival Francophonie :\n\nDONNÉES À COMPILER :\n- Fréquentation par jour/activité\n- Satisfaction (questionnaire)\n- Retombées médias\n- ROI partenaires\n- Budget final vs prévisionnel\n\nGÉNÈRE :\n- Rapport visuel 10 pages\n- Points forts/améliorations\n- Recommandations année prochaine\n- Témoignages marquants\n- Remerciements personnalisés',
          tools: ['ChatGPT']
        }
      ],
      timeline: [
        {
          time: 'J-60',
          title: 'Lancement',
          tasks: [
            'Concept validé',
            'Site en ligne',
            'Premiers partenaires'
          ]
        },
        {
          time: 'J-30',
          title: 'Intensification',
          tasks: [
            'Programme finalisé',
            'Billetterie ouverte',
            'Campagne com lancée'
          ]
        },
        {
          time: 'J-7',
          title: 'Sprint Final',
          tasks: [
            'Briefings équipes',
            'Tests techniques',
            'Communication quotidienne'
          ]
        },
        {
          time: 'Jour J',
          title: 'Exécution',
          tasks: [
            'Coordination temps réel',
            'Gestion imprévus',
            'Live coverage'
          ]
        }
      ],
      program: [
        {
          day: 'JOUR 1 - Patrimoine Croisé',
          activities: [
            { time: '9h', name: 'Ouverture officielle' },
            { time: '10h', name: 'Expo photo "Angkor par photographes français"' },
            { time: '14h', name: 'Atelier cuisine fusion' },
            { time: '16h', name: 'Table ronde écrivains' },
            { time: '19h', name: 'Concert jazz khmer-français' }
          ]
        },
        {
          day: 'JOUR 2 - Innovation et Jeunesse',
          activities: [
            { time: '9h', name: 'Hackathon Franco-Khmer' },
            { time: '14h', name: 'Battle hip-hop bilingue' },
            { time: '16h', name: 'Démos startups culturelles' },
            { time: '20h', name: 'Cinéma plein air' }
          ]
        },
        {
          day: 'JOUR 3 - Famille et Traditions',
          activities: [
            { time: '10h', name: 'Spectacle enfants' },
            { time: '11h', name: 'Marché artisanal' },
            { time: '16h', name: 'Défilé mode hybride' },
            { time: '20h', name: 'Feu d\'artifice clôture' }
          ]
        }
      ],
      budget: [
        { category: 'Communication', amount: '2,000$', optimization: '-60% avec outils IA' },
        { category: 'Logistique', amount: '5,000$', optimization: '-20% planning optimisé' },
        { category: 'Artistes', amount: '8,000$', optimization: 'Négociation data-driven' },
        { category: 'Technique', amount: '3,000$', optimization: '-30% mutualisation' },
        { category: 'Catering', amount: '2,000$', optimization: 'Prévisions précises' },
        { category: 'TOTAL', amount: '20,000$', optimization: '-35% économies', isTotal: true }
      ],
      sponsorshipPackages: [
        {
          level: 'MÉCÈNE',
          price: '>5000$',
          color: '#fbbf24',
          benefits: [
            'Naming espace principal',
            'Logo sur tous supports',
            '20 invitations VIP',
            'Stand privilégié'
          ]
        },
        {
          level: 'PARTENAIRE',
          price: '2000-5000$',
          color: '#a78bfa',
          benefits: [
            'Logo taille moyenne',
            '10 invitations',
            'Mention réseaux sociaux',
            'Stand standard'
          ]
        },
        {
          level: 'SOUTIEN',
          price: '<2000$',
          color: '#60a5fa',
          benefits: [
            'Logo partenaires',
            '5 invitations',
            'Remerciements',
            'Visibilité web'
          ]
        }
      ],
      innovations: [
        {
          title: 'QR Code Interactif',
          features: [
            'Programme personnalisé',
            'Notifications push activités',
            'Sondages temps réel',
            'Photos souvenirs'
          ]
        },
        {
          title: 'Streaming Hybride',
          features: [
            'Live YouTube concerts',
            'Stories Instagram coulisses',
            'Facebook Live interviews',
            'TikTok challenges'
          ]
        },
        {
          title: 'Gamification',
          features: [
            'Passeport digital activités',
            'Points fidélité visiteurs',
            'Tirages au sort',
            'Récompenses partenaires'
          ]
        }
      ],
      contingencyPlans: [
        {
          type: 'Météo (Mousson)',
          measures: [
            'Tentes supplémentaires prêtes',
            'Programme indoor backup',
            'Communication SMS rapide'
          ]
        },
        {
          type: 'Technique',
          measures: [
            'Générateur secours',
            'Sound system backup',
            'Équipe tech dédiée'
          ]
        },
        {
          type: 'Sécurité',
          measures: [
            'Évacuation balisée',
            'Équipe premiers secours',
            'Liaison police locale'
          ]
        }
      ],
      whatsappGroups: [
        'COORDINATION GÉNÉRALE (5 responsables)',
        'TECHNIQUE (son, lumière, vidéo)',
        'LOGISTIQUE (montage, flux, stock)',
        'ARTISTES (planning, besoins)',
        'URGENCES (sécurité, santé)'
      ],
      liveDashboard: [
        'Checklist horaire',
        'Compteur entrées',
        'Incidents log',
        'Stock bar/boutique',
        'Contact urgences'
      ]
    },
    duration: '30 min',
    notes: 'Présenter avec exemples d\'événements IFC passés'
  },

  // Workflow Juridique Complet
  {
    id: 'day2-legal-workflow',
    type: 'legal-workflow',
    title: 'Workflow Juridique Détaillé',
    subtitle: 'Création et révision de contrats avec l\'IA',
    content: {
      steps: [
        {
          title: 'Analyse du Besoin avec Perplexity',
          duration: '10 min',
          objective: 'Rechercher les meilleures pratiques et réglementations',
          prompt: 'Réglementation contrats de prestation culturelle Cambodge 2024, points d\'attention France-Cambodge',
          actions: [
            'Noter les obligations légales locales',
            'Identifier les standards internationaux',
            'Vérifier les clauses essentielles spécifiques au secteur'
          ],
          tool: 'Perplexity'
        },
        {
          title: 'Structure de Base avec ChatGPT',
          duration: '15 min',
          objective: 'Générer la structure complète du contrat',
          prompt: 'Crée la structure d\'un contrat de prestation pour un formateur de français à l\'IFC Cambodge incluant : parties contractantes, objet, durée, rémunération, obligations, propriété intellectuelle, confidentialité, résiliation, droit applicable',
          actions: [
            'Personnaliser selon le type de contrat',
            'Adapter au contexte IFC',
            'Intégrer les spécificités locales'
          ],
          tool: 'ChatGPT'
        },
        {
          title: 'Rédaction Détaillée avec Claude',
          duration: '20 min',
          objective: 'Développer chaque clause avec précision juridique',
          prompt: 'Développe chaque section de ce contrat en français juridique clair mais accessible. Contexte : Institut Français au Cambodge, contrat avec formateur local. Attention : fiscalité transfrontalière, visa de travail, droits d\'auteur',
          actions: [
            'Vérifier la cohérence entre clauses',
            'Éliminer les contradictions',
            'Inclure options modulables'
          ],
          tool: 'Claude'
        },
        {
          title: 'Adaptation Bilingue avec Claude',
          duration: '15 min',
          objective: 'Version française et khmère/anglaise',
          prompt: 'Traduis ce contrat en khmer/anglais en conservant la précision juridique. Adapte les formules juridiques aux usages locaux. Maintiens la numérotation identique',
          actions: [
            'Vérifier termes techniques',
            'Contrôler montants et dates',
            'Ajouter clause de prévalence'
          ],
          tool: 'Claude'
        },
        {
          title: 'Checklist de Conformité avec ChatGPT',
          duration: '10 min',
          objective: 'Vérifier la complétude et la conformité',
          prompt: 'Génère une checklist de vérification pour ce contrat incluant : mentions obligatoires droit cambodgien, cohérence dates/montants, signatures requises, annexes nécessaires',
          actions: [
            'Valider chaque point',
            'Identifier les manques',
            'Préparer les annexes'
          ],
          tool: 'ChatGPT'
        },
        {
          title: 'Mise en Forme Professionnelle avec Canva',
          duration: '10-20 min',
          objective: 'Document professionnel prêt à signer',
          actions: [
            'Template contrat avec en-tête IFC',
            'Numérotation automatique des pages',
            'Espaces signature et paraphe',
            'Version PDF sécurisée',
            'Option signature électronique'
          ],
          tool: 'Canva'
        }
      ],
      cases: [
        {
          title: 'Contrat Formateur Vacataire',
          steps: [
            'Perplexity : "Statut vacataire éducation Cambodge"',
            'ChatGPT : Structure contrat 20h/mois',
            'Claude : Clauses pédagogiques + évaluation',
            'Traduction : FR/KH avec termes éducation',
            'Annexe : Calendrier des cours'
          ]
        },
        {
          title: 'Convention de Partenariat Culturel',
          steps: [
            'Perplexity : "Partenariats culturels public-privé Asie"',
            'ChatGPT : Structure convention co-organisation',
            'Claude : Partage responsabilités, visibilité',
            'Bilingue : FR/EN pour partenaires internationaux',
            'Annexes : Budget, plan communication'
          ]
        },
        {
          title: 'Contrat Location d\'Espace',
          steps: [
            'Perplexity : "Location espaces culturels réglementation KH"',
            'ChatGPT : Modèle location salle + équipements',
            'Claude : Clauses sécurité, assurance, annulation',
            'Version : FR/KH avec plans annexés',
            'Option : Tarification modulable'
          ]
        }
      ],
      cautions: [
        {
          title: 'Validation finale humaine obligatoire',
          points: [
            'L\'IA assiste mais ne remplace pas l\'expertise juridique',
            'Faire relire par juriste pour contrats importants'
          ]
        },
        {
          title: 'Données sensibles',
          points: [
            'Ne jamais mettre noms réels, montants confidentiels dans l\'IA',
            'Utiliser [NOM], [MONTANT], [DATE] puis remplacer'
          ]
        },
        {
          title: 'Archivage sécurisé',
          points: [
            'Sauvegarder versions avec historique des modifications',
            'Coffre-fort numérique pour originaux signés'
          ]
        },
        {
          title: 'Mises à jour réglementaires',
          points: [
            'Vérifier tous les 6 mois les changements légaux',
            'Adapter templates en conséquence'
          ]
        }
      ],
      timeComparison: [
        { task: 'Recherche juridique', traditional: '2-3h', withAI: '10 min', gain: '90%' },
        { task: 'Rédaction premier jet', traditional: '3-4h', withAI: '35 min', gain: '85%' },
        { task: 'Traduction juridique', traditional: '2h', withAI: '15 min', gain: '87%' },
        { task: 'Mise en forme', traditional: '1h', withAI: '15 min', gain: '75%' },
        { task: 'TOTAL', traditional: '8-10h', withAI: '1h15', gain: '87%' }
      ]
    },
    duration: '30 min',
    notes: 'Présenter chaque étape avec exemples concrets'
  },

  // Pause
  {
    id: 'day2-morning-break',
    type: 'break',
    title: 'Pause',
    icon: '☕',
    duration: '15 minutes',
    time: '10h30 - 10h45',
    message: 'Échangez sur les workflows que vous pourriez mettre en place dans vos services !'
  },

  // Formation des équipes
  {
    id: 'day2-team-formation',
    type: 'team-formation',
    title: '👥 Formation des Équipes',
    subtitle: 'Travaillez à deux pour créer votre workflow personnalisé',
    duration: '5 minutes',
    content: {
      objective: 'Former des binômes et identifier un projet concret à optimiser avec l\'IA'
    }
  },

  // Atelier Collaboratif : Méta-Workflow
  {
    id: 'day2-meta-workflow',
    type: 'meta-workflow',
    title: 'Atelier : Générateur de Workflows IA',
    subtitle: 'Créez vos propres workflows personnalisés',
    content: {
      steps: [
        {
          title: 'Analyse des Besoins avec ChatGPT',
          duration: '10 min',
          objective: 'Identifier précisément le processus à optimiser',
          prompt: 'Je veux créer un workflow IA pour [DÉPARTEMENT].\n\nAide-moi à définir :\n1. Problème principal à résoudre (max 2 phrases)\n2. Tâches répétitives actuelles (liste 5-10)\n3. Temps perdu par semaine sur ces tâches\n4. Résultat idéal souhaité\n5. Contraintes (budget, compétences, outils)\n\nPuis suggère 3 workflows possibles classés par impact',
          tools: ['ChatGPT']
        },
        {
          title: 'Cartographie du Processus avec Claude',
          duration: '15 min',
          objective: 'Visualiser le workflow complet',
          prompt: 'Voici mon processus actuel : [DESCRIPTION]\n\nTransforme en workflow optimisé avec :\n- Étapes numérotées chronologiques\n- Pour chaque étape :\n  * Tâche humaine vs IA\n  * Outil IA recommandé\n  * Prompt type à utiliser\n  * Temps estimé\n  * Output attendu\n- Points de validation humaine\n- Métriques de succès\n\nFormat : Tableau clair ou diagramme texte',
          tools: ['Claude']
        },
        {
          title: 'Générateur de Prompts avec Claude',
          duration: '10 min',
          objective: 'Créer des prompts réutilisables',
          prompt: 'Pour ce workflow [NOM], génère :\n\n1. PROMPTS PRINCIPAUX (5-7) :\n- Titre descriptif\n- Prompt complet avec [VARIABLES]\n- Exemple concret rempli\n- Tips d\'optimisation\n\n2. PROMPTS ALTERNATIFS :\n- Si résultat insuffisant\n- Pour cas particuliers\n- Version rapide/approfondie\n\n3. ENCHAÎNEMENTS :\n- Comment lier outputs\n- Reformulations utiles',
          tools: ['Claude']
        },
        {
          title: 'Sélection d\'Outils avec Perplexity',
          duration: '10 min',
          objective: 'Identifier les meilleurs outils pour chaque tâche',
          prompt: 'Meilleurs outils IA pour [TÂCHE SPÉCIFIQUE] 2024\nComparaison [OUTIL1] vs [OUTIL2] pour [USAGE]\n[OUTIL] alternatives gratuites fonctionnalités similaires\nIntégrations [OUTIL] avec Google Workspace',
          tools: ['Perplexity']
        },
        {
          title: 'Template de Documentation avec Canva',
          duration: '15 min',
          objective: 'Créer guide visuel du workflow',
          elements: [
            'Titre workflow + département',
            'Schéma visuel des étapes',
            'Screenshots outils avec annotations',
            'Prompts en encadrés colorés',
            'Checklist de validation',
            'Contacts support',
            'QR code vers vidéo démo'
          ],
          tools: ['Canva']
        },
        {
          title: 'Test et Itération avec ChatGPT',
          duration: '15 min',
          objective: 'Valider et affiner le workflow',
          prompt: 'Testons ce workflow [NOM] :\n\nScénario : [CAS CONCRET]\n\nPour chaque étape, dis-moi :\n- Ce qui pourrait mal tourner\n- Questions utilisateur probables\n- Améliorations possibles\n- Raccourcis identifiés\n- Cas non couverts\n\nPuis optimise le workflow v2',
          tools: ['ChatGPT']
        },
        {
          title: 'Kit de Déploiement avec Claude',
          duration: '10 min',
          objective: 'Faciliter l\'adoption par l\'équipe',
          prompt: 'Crée kit déploiement workflow [NOM] :\n\n1. EMAIL ANNONCE (150 mots) :\n- Bénéfices concrets\n- Invitation formation\n\n2. GUIDE DÉMARRAGE RAPIDE :\n- 5 étapes pour commencer\n- Premier cas d\'usage simple\n\n3. FAQ ANTICIPÉE (10 Q/R)\n\n4. PLAN FORMATION 30 MIN :\n- Demo live\n- Exercice pratique\n- Q&R\n\n5. INDICATEURS SUCCÈS :\n- Mesures semaine 1\n- Objectifs mois 1',
          tools: ['Claude']
        }
      ],
      templates: [
        {
          title: 'Template 1 : Workflow Création de Contenu',
          tool: 'ChatGPT',
          prompt: 'Crée workflow création contenu pour [TYPE CONTENU] incluant :\n- Recherche idées (Perplexity)\n- Structure (ChatGPT)\n- Rédaction (Claude)\n- Visuels (DALL-E/Canva)\n- Distribution (Buffer)\nAdapte pour équipe [TAILLE] avec budget [MONTANT]'
        },
        {
          title: 'Template 2 : Workflow Analyse de Données',
          tool: 'Claude',
          prompt: 'Développe workflow analyse données [DOMAINE] :\n- Collection données (Forms/Sheets)\n- Nettoyage (ChatGPT + formules)\n- Analyse (Claude + graphiques)\n- Insights (Perplexity contexte)\n- Présentation (Gamma)\nPour non-techniciens, max 1h/semaine'
        },
        {
          title: 'Template 3 : Workflow Service Client',
          tool: 'ChatGPT',
          prompt: 'Workflow support client [SECTEUR] optimisé :\n- Tri automatique demandes\n- Réponses templates par cas\n- Escalade intelligente\n- Suivi satisfaction\n- Base connaissance auto\nMultilingue FR/KH/EN, 50 demandes/jour'
        }
      ],
      selectionMatrix: [
        { name: 'Impact temps gagné', score: 5, stars: true, weight: 'x3', note: '15' },
        { name: 'Facilité mise en œuvre', score: 4, stars: true, weight: 'x2', note: '8' },
        { name: 'Coût outils', score: 3, stars: true, weight: 'x1', note: '3' },
        { name: 'Adoption équipe', score: 4, stars: true, weight: 'x2', note: '8' },
        { name: 'ROI estimé', score: 5, stars: true, weight: 'x3', note: '15' },
        { name: 'TOTAL', weight: '-', note: '49/55', isTotal: true }
      ],
      metrics: [
        { kpi: 'Temps/tâche', before: '2h', target: '30min', actual: '?' },
        { kpi: 'Erreurs', before: '15%', target: '<5%', actual: '?' },
        { kpi: 'Satisfaction', before: '3/5', target: '4.5/5', actual: '?' },
        { kpi: 'Adoption', before: '0%', target: '80%', actual: '?' },
        { kpi: 'ROI', before: '-', target: '300%', actual: '?' }
      ],
      deploymentKit: [
        {
          title: 'EMAIL ANNONCE',
          items: [
            'Bénéfices concrets',
            'Invitation formation',
            'Lien ressources'
          ]
        },
        {
          title: 'GUIDE DÉMARRAGE',
          items: [
            '5 étapes pour commencer',
            'Premier cas simple',
            'Contacts support'
          ]
        },
        {
          title: 'PLAN FORMATION',
          items: [
            'Demo live 15 min',
            'Exercice pratique',
            'Q&R ouverte'
          ]
        },
        {
          title: 'SUIVI',
          items: [
            'Check-in semaine 1',
            'Ajustements mois 1',
            'Bilan trimestre 1'
          ]
        }
      ]
    },
    duration: '45 min',
    notes: 'Atelier pratique : chaque participant crée un mini-workflow pour son service'
  },

  // Pause déjeuner
  {
    id: 'day2-lunch',
    type: 'lunch',
    title: '🍽️ Pause Déjeuner',
    icon: '🍽️',
    time: '12h00 - 13h30',
    duration: '1h30',
    message: 'Bon appétit ! Profitez de ce moment pour échanger sur vos découvertes de la matinée.',
    content: {
      menu: [
        {
          type: 'Entrée',
          name: 'Tartare de poisson à l\'asiatique',
          description: 'Pain craquant et tuile de parmesan'
        },
        {
          type: 'Plat',
          name: 'Blanquette de volaille',
          description: 'Penne rigate'
        },
        {
          type: 'Dessert',
          name: 'Fondant frais au chocolat',
          description: 'Crème anglaise au poivre rouge FRAIS'
        }
      ]
    }
  }
];
