// Slides pour la Journée 2 - Matinée
// Workflows optimisés pour l'Institut Français du Cambodge

export const jour2MatinSlides = [
  {
    id: 'j2-titre',
    title: 'Journée 2 - Workflows IA',
    subtitle: 'Optimiser votre quotidien à l\'IFC',
    content: `
      <div class="text-center">
        <h2 class="text-3xl font-bold mb-6">Bienvenue pour cette deuxième journée !</h2>
        <div class="bg-gradient-to-r from-blue-500 to-red-600 text-white p-8 rounded-lg">
          <p class="text-xl mb-4">Au programme ce matin :</p>
          <ul class="text-left max-w-2xl mx-auto space-y-2">
            <li>🔄 Récapitulatif de la journée 1</li>
            <li>🎯 Workflows optimisés par département</li>
            <li>💼 Cas d'usage concrets pour l'IFC</li>
            <li>🚀 Intégration simple et efficace</li>
          </ul>
        </div>
      </div>
    `,
    notes: "Accueillir les participants et présenter l'objectif pratique de la matinée"
  },

  {
    id: 'j2-recap-jour1',
    title: 'Récapitulatif Jour 1',
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-center mb-6">📝 Ce que nous avons appris hier</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-blue-100 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3 text-blue-800">💬 IA Conversationnelle</h3>
            <ul class="text-sm space-y-2">
              <li>✓ ChatGPT pour créer</li>
              <li>✓ Claude pour analyser</li>
              <li>✓ Perplexity pour rechercher</li>
            </ul>
          </div>
          
          <div class="bg-purple-100 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3 text-purple-800">🎨 IA Créative</h3>
            <ul class="text-sm space-y-2">
              <li>✓ DALL-E pour illustrer</li>
              <li>✓ Midjourney pour l'art</li>
              <li>✓ Canva AI pour designer</li>
            </ul>
          </div>
          
          <div class="bg-green-100 p-6 rounded-lg">
            <h3 class="text-lg font-bold mb-3 text-green-800">🛠️ Outils Spécialisés</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Heygen pour les vidéos</li>
              <li>✓ ElevenLabs pour l'audio</li>
              <li>✓ Gamma pour présenter</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-yellow-50 p-6 rounded-lg text-center">
          <p class="text-lg font-semibold">🎯 Aujourd'hui : Comment combiner ces outils pour votre travail quotidien à l'IFC</p>
        </div>
      </div>
    `,
    notes: "Faire un tour rapide pour voir si des questions sont restées en suspens"
  },

  {
    id: 'j2-workflow-intro',
    title: 'Workflows IA Optimisés',
    subtitle: 'La synergie des outils',
    content: `
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold mb-4">🔄 Le Pouvoir des Workflows</h2>
        <p class="text-xl text-gray-600">Combiner les forces de chaque outil pour des résultats exceptionnels</p>
      </div>
      
      <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mb-6">
        <h3 class="text-xl font-bold mb-4">🎯 Principe Clé</h3>
        <p class="text-center text-lg">
          Chaque outil IA a ses forces → Utilisez le bon outil au bon moment
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="text-3xl mb-2">🔍</div>
          <h4 class="font-bold">Rechercher</h4>
          <p class="text-sm text-gray-600">Perplexity</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="text-3xl mb-2">💡</div>
          <h4 class="font-bold">Brainstormer</h4>
          <p class="text-sm text-gray-600">ChatGPT</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="text-3xl mb-2">📝</div>
          <h4 class="font-bold">Structurer</h4>
          <p class="text-sm text-gray-600">Claude</p>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow-md">
          <div class="text-3xl mb-2">🎨</div>
          <h4 class="font-bold">Créer</h4>
          <p class="text-sm text-gray-600">Outils spécialisés</p>
        </div>
      </div>
    `,
    notes: "Expliquer l'importance de créer des workflows plutôt que d'utiliser un seul outil"
  },

  {
    id: 'j2-workflow-communication',
    title: 'Workflow : Service Communication',
    subtitle: 'Campagne de communication complète',
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-center mb-6">📢 Créer une Campagne de Communication</h2>
        
        <div class="bg-blue-50 p-4 rounded-lg mb-6">
          <p class="font-semibold">Exemple : Lancement d'un nouveau cours de français</p>
        </div>
        
        <div class="space-y-4">
          <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
            <div class="flex-1">
              <h4 class="font-bold">🔍 Recherche avec Perplexity</h4>
              <p class="text-sm text-gray-600">"Meilleures pratiques marketing pour cours de langue en Asie du Sud-Est"</p>
              <p class="text-xs text-gray-500 mt-1">→ Obtenir des insights locaux et tendances actuelles</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
            <div class="flex-1">
              <h4 class="font-bold">💡 Brainstorm avec ChatGPT</h4>
              <p class="text-sm text-gray-600">"20 idées de slogans pour cours de français au Cambodge"</p>
              <p class="text-xs text-gray-500 mt-1">→ Générer des concepts créatifs rapidement</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
            <div class="flex-1">
              <h4 class="font-bold">📝 Rédaction avec Claude</h4>
              <p class="text-sm text-gray-600">"Rédiger posts réseaux sociaux en français/khmer/anglais"</p>
              <p class="text-xs text-gray-500 mt-1">→ Contenu structuré et adapté culturellement</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
            <div class="flex-1">
              <h4 class="font-bold">🎨 Visuels avec Canva AI + DALL-E</h4>
              <p class="text-sm text-gray-600">"Créer affiches et visuels réseaux sociaux"</p>
              <p class="text-xs text-gray-500 mt-1">→ Visuels professionnels en quelques minutes</p>
            </div>
          </div>
          
          <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
            <div class="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">5</div>
            <div class="flex-1">
              <h4 class="font-bold">🎬 Vidéo avec Heygen</h4>
              <p class="text-sm text-gray-600">"Créer vidéo promotionnelle avec avatar parlant khmer"</p>
              <p class="text-xs text-gray-500 mt-1">→ Vidéo multilingue sans tournage</p>
            </div>
          </div>
        </div>
        
        <div class="bg-green-100 p-4 rounded-lg text-center">
          <p class="font-semibold">⏱️ Temps total : 2-3 heures au lieu de 2-3 jours</p>
        </div>
      </div>
    `,
    notes: "Montrer des exemples concrets de chaque étape"
  },

  {
    id: 'j2-workflow-cours',
    title: 'Workflow : Service des Cours',
    subtitle: 'Création de matériel pédagogique',
    content: `
      <div class="space-y-6">
        <h2 class="text-2xl font-bold text-center mb-6">📚 Développer du Matériel Pédagogique</h2>
        
        <div class="bg-purple-50 p-4 rounded-lg mb-6">
          <p class="font-semibold">Exemple : Créer un module sur la culture française</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <h3 class="font-bold text-lg">📖 Phase de Préparation</h3>
            
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-purple-600">1. Recherche Culturelle</h4>
              <p class="text-sm"><strong>Perplexity :</strong> "Aspects culturels français importants pour étudiants cambodgiens"</p>
              <p class="text-xs text-gray-500 mt-1">→ Contenu actualisé et pertinent localement</p>
            </div>
            
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-purple-600">2. Plan de Cours</h4>
              <p class="text-sm"><strong>Claude :</strong> "Créer plan détaillé cours