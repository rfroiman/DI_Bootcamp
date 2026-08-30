const onboarding = safeParse(localStorage.getItem("kadimaOnboarding"), {});
const account = safeParse(localStorage.getItem("kadimaAccount"), null);

const currentLanguage = ["en", "pt", "es"].includes(onboarding.language)
  ? onboarding.language
  : "en";

const I18N = {
  en: {heroTitle:'Your journey<br>to the best<br><span>opportunities</span>',heroDescription:'We want to get to know you better so we can connect you with opportunities that truly match your profile.',benefits:[['AI that understands you','We analyze your skills and experience to find the right opportunities.'],['Smart matches','We compare your profile with job requirements and calculate your fit.'],['Your future, now','Save time and focus on the opportunities that matter.']],welcome:'Welcome to Kadima!',welcomeSub:"Let's build your profile in 6 simple steps.",progress:['Welcome','Personal','Profile','Experience','Education','Skills'],skip:'Skip journey',profileEyebrow:'PROFILE · STEP 3',profileTitle:"Let's build your professional fingerprint.",profileSubtitle:'Kadima maps what you can do, where you create value and what you want to emphasize — without locking you into job titles.',backDetails:'Back to profile details',contactTitle:'A few profile details first',contactSubtitle:'These are contact details, not part of your matching score.',phone:'Phone',phonePlaceholder:'Phone number',emailOnly:'I prefer to be contacted by email only',linkedin:'LinkedIn',github:'GitHub',otherLink:'Other professional link',contactOptional:'All fields in this block are optional.',startDiscovery:'Start profile discovery',dialSearch:'Search country or prefix',noCountry:'No country found',learning:'Kadima is mapping your profile',previous:'Previous',continue:'Continue',otherAnswer:'Add anything Kadima missed. You can add as many as you want, separated by commas.',otherPlaceholder:'',add:'Add',livePreview:'LIVE PROFILE',fingerprintTitle:'Your Professional Fingerprint',dimensions:{identity:'Identity',capabilities:'Capabilities',context:'Context',ownership:'Ownership',impact:'Impact',domain:'Domain knowledge',transferable:'Transferable value',direction:'Career direction'},toBeDiscovered:'To be discovered',addChip:'+ Add',editorAdd:'Add to',editorEdit:'Edit',editorItem:'Item',editorHint:'You can add multiple items separated by commas.',delete:'Delete',cancel:'Cancel',save:'Save',reviewEyebrow:'PROFILE FOUNDATION COMPLETE',reviewTitle:"Here's the profile Kadima has mapped so far.",reviewSubtitle:"This is one focused professional profile. Experience, Education and Skills will add evidence and depth without restricting matching to job titles.",completionTitle:'Profile foundation completed',completionText:'This profile focus has been saved. Kadima will keep enriching the same fingerprint throughout the journey.',careerPathEyebrow:'PROFILE FOCUS',careerPathTitle:'How this profile is being focused',adjustTitle:'What would you like to adjust?',adjust:'Adjust something',looksRight:'Looks right',footerTitle:'Your profile stays flexible',footerText:'Every fingerprint item remains editable as the journey evolves.',back:'Back',chooseAnswer:'Choose at least one option to continue.',progressSaved:'Your progress has been saved.',basicRequired:'Complete your basic account information before skipping the journey.',profileSaved:'Profile foundation saved. Ready for Experience.',focusType:'Current profile focus',focusDescription:'Kadima will match this combination of signals against job requirements — not against job titles.'},
  pt: {heroTitle:'Sua jornada<br>para as melhores<br><span>oportunidades</span>',heroDescription:'Queremos conhecer você melhor para conectá-lo a oportunidades que realmente combinam com o seu perfil.',benefits:[['IA que entende você','Analisamos suas habilidades e experiências para encontrar as oportunidades certas.'],['Matches inteligentes','Comparamos seu perfil com os requisitos das vagas e calculamos sua compatibilidade.'],['Seu futuro, agora','Economize tempo e foque nas oportunidades que realmente importam.']],welcome:'Bem-vindo ao Kadima!',welcomeSub:'Vamos construir seu perfil em 6 etapas simples.',progress:['Boas-vindas','Pessoal','Perfil','Experiência','Educação','Habilidades'],skip:'Pular jornada',profileEyebrow:'PERFIL · ETAPA 3',profileTitle:'Vamos construir seu fingerprint profissional.',profileSubtitle:'O Kadima mapeia o que você sabe fazer, onde gera valor e o que deseja enfatizar — sem prender seu perfil a nomes de cargos.',backDetails:'Voltar aos dados do perfil',contactTitle:'Primeiro, alguns dados do perfil',contactSubtitle:'São dados de contato e não fazem parte do seu score de matching.',phone:'Telefone',phonePlaceholder:'Número de telefone',emailOnly:'Prefiro ser contatado apenas por e-mail',linkedin:'LinkedIn',github:'GitHub',otherLink:'Outro link profissional',contactOptional:'Todos os campos deste bloco são opcionais.',startDiscovery:'Iniciar descoberta do perfil',dialSearch:'Buscar país ou prefixo',noCountry:'Nenhum país encontrado',learning:'Kadima está mapeando seu perfil',previous:'Anterior',continue:'Continuar',otherAnswer:'Adicione o que o Kadima não identificou. Você pode incluir quantos itens quiser, separados por vírgulas.',otherPlaceholder:'',add:'Adicionar',livePreview:'PERFIL AO VIVO',fingerprintTitle:'Seu Professional Fingerprint',dimensions:{identity:'Identidade',capabilities:'Capacidades',context:'Contexto',ownership:'Nível de responsabilidade',impact:'Impacto',domain:'Conhecimento de domínio',transferable:'Valor transferível',direction:'Direção profissional'},toBeDiscovered:'A descobrir',addChip:'+ Adicionar',editorAdd:'Adicionar a',editorEdit:'Editar',editorItem:'Item',editorHint:'Você pode adicionar vários itens separados por vírgulas.',delete:'Excluir',cancel:'Cancelar',save:'Salvar',reviewEyebrow:'BASE DO PERFIL CONCLUÍDA',reviewTitle:'Veja o perfil que o Kadima mapeou até agora.',reviewSubtitle:'Este é um único perfil profissional focado. Experiência, Educação e Habilidades adicionarão evidências e profundidade sem limitar o matching a nomes de cargos.',completionTitle:'Base do perfil concluída',completionText:'O foco deste perfil foi salvo. O Kadima continuará enriquecendo o mesmo fingerprint durante a jornada.',careerPathEyebrow:'FOCO DO PERFIL',careerPathTitle:'Como este perfil está sendo direcionado',adjustTitle:'O que você gostaria de ajustar?',adjust:'Ajustar algo',looksRight:'Está correto',footerTitle:'Seu perfil continua flexível',footerText:'Todos os itens do fingerprint continuam editáveis ao longo da jornada.',back:'Voltar',chooseAnswer:'Escolha pelo menos uma opção para continuar.',progressSaved:'Seu progresso foi salvo.',basicRequired:'Complete as informações básicas da sua conta antes de pular a jornada.',profileSaved:'Base do perfil salva. Pronto para Experiência.',focusType:'Foco atual do perfil',focusDescription:'O Kadima comparará esta combinação de sinais com os requisitos das vagas — não com nomes de cargos.'},
  es: {heroTitle:'Tu camino<br>hacia las mejores<br><span>oportunidades</span>',heroDescription:'Queremos conocerte mejor para conectarte con oportunidades que realmente encajen con tu perfil.',benefits:[['IA que te entiende','Analizamos tus habilidades y experiencia para encontrar las oportunidades adecuadas.'],['Matches inteligentes','Comparamos tu perfil con los requisitos de las vacantes y calculamos tu compatibilidad.'],['Tu futuro, ahora','Ahorra tiempo y concéntrate en las oportunidades que realmente importan.']],welcome:'¡Bienvenido a Kadima!',welcomeSub:'Construyamos tu perfil en 6 pasos sencillos.',progress:['Bienvenida','Personal','Perfil','Experiencia','Educación','Habilidades'],skip:'Saltar recorrido',profileEyebrow:'PERFIL · PASO 3',profileTitle:'Construyamos tu fingerprint profesional.',profileSubtitle:'Kadima mapea lo que sabes hacer, dónde generas valor y qué quieres enfatizar — sin limitar tu perfil a nombres de puestos.',backDetails:'Volver a los datos del perfil',contactTitle:'Primero, algunos datos del perfil',contactSubtitle:'Son datos de contacto y no forman parte de tu score de matching.',phone:'Teléfono',phonePlaceholder:'Número de teléfono',emailOnly:'Prefiero que me contacten solo por correo electrónico',linkedin:'LinkedIn',github:'GitHub',otherLink:'Otro enlace profesional',contactOptional:'Todos los campos de este bloque son opcionales.',startDiscovery:'Iniciar descubrimiento del perfil',dialSearch:'Buscar país o prefijo',noCountry:'No se encontró ningún país',learning:'Kadima está mapeando tu perfil',previous:'Anterior',continue:'Continuar',otherAnswer:'Agrega lo que Kadima no haya identificado. Puedes incluir tantos elementos como quieras, separados por comas.',otherPlaceholder:'',add:'Agregar',livePreview:'PERFIL EN VIVO',fingerprintTitle:'Tu Professional Fingerprint',dimensions:{identity:'Identidad',capabilities:'Capacidades',context:'Contexto',ownership:'Nivel de responsabilidad',impact:'Impacto',domain:'Conocimiento de dominio',transferable:'Valor transferible',direction:'Dirección profesional'},toBeDiscovered:'Por descubrir',addChip:'+ Agregar',editorAdd:'Agregar a',editorEdit:'Editar',editorItem:'Elemento',editorHint:'Puedes agregar varios elementos separados por comas.',delete:'Eliminar',cancel:'Cancelar',save:'Guardar',reviewEyebrow:'BASE DEL PERFIL COMPLETADA',reviewTitle:'Este es el perfil que Kadima ha mapeado hasta ahora.',reviewSubtitle:'Este es un único perfil profesional enfocado. Experiencia, Educación y Habilidades añadirán evidencia y profundidad sin limitar el matching a nombres de puestos.',completionTitle:'Base del perfil completada',completionText:'El enfoque de este perfil ha sido guardado. Kadima seguirá enriqueciendo el mismo fingerprint durante el recorrido.',careerPathEyebrow:'ENFOQUE DEL PERFIL',careerPathTitle:'Cómo se está orientando este perfil',adjustTitle:'¿Qué te gustaría ajustar?',adjust:'Ajustar algo',looksRight:'Está correcto',footerTitle:'Tu perfil sigue siendo flexible',footerText:'Todos los elementos del fingerprint siguen siendo editables durante el recorrido.',back:'Volver',chooseAnswer:'Elige al menos una opción para continuar.',progressSaved:'Tu progreso ha sido guardado.',basicRequired:'Completa la información básica de tu cuenta antes de saltar el recorrido.',profileSaved:'Base del perfil guardada. Lista para Experiencia.',focusType:'Enfoque actual del perfil',focusDescription:'Kadima comparará esta combinación de señales con los requisitos de las vacantes — no con nombres de puestos.'}
};

const OPTION_LABELS = {
 en:{experienced:'Experienced professional',early:'Early-career professional',student:'Student',firstjob:'Looking for my first job',changing:'Changing careers',returning:'Returning to the job market',customerRel:'Customer relationships',commercial:'Commercial responsibility',projectDelivery:'Project delivery',softwareDev:'Software development',dataAI:'Data & AI',technicalSolutions:'Technical solutions',operations:'Operations',leadership:'Leadership',advisory:'Advisory / consulting',other:'Something else',manageCustomers:'Manage customer relationships',solveProblems:'Solve technical problems',buildSoftware:'Build software or digital products',leadProjects:'Lead projects and delivery',developBusiness:'Develop business',analyzeData:'Analyze data',implementSolutions:'Implement solutions',adviseCustomers:'Advise customers',coordinateTeams:'Coordinate cross-functional teams',enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinational',regulated:'Regulated industry',public:'Public sector',supportWork:'Support the work',ownPart:'Own part of the work',ownEnd:'Own end-to-end',leadPeople:'Lead people',defineStrategy:'Define strategy',revenue:'Revenue growth',retention:'Retention',delivery:'Project delivery',efficiency:'Efficiency',adoption:'Product adoption',satisfaction:'Customer satisfaction',productImpact:'Product development',reliability:'Technical reliability',fintech:'Fintech',payments:'Payments',saas:'SaaS',banking:'Banking',telecom:'Telecom',healthcare:'Healthcare',cyber:'Cybersecurity',ecommerce:'E-commerce',technicalBase:'Technical background',businessBase:'Business understanding',customerBase:'Customer-facing experience',projectBase:'Project management',problemBase:'Problem solving',leadershipBase:'Leadership experience'},
 pt:{experienced:'Profissional experiente',early:'Profissional em início de carreira',student:'Estudante',firstjob:'Buscando meu primeiro emprego',changing:'Mudando de carreira',returning:'Retornando ao mercado',customerRel:'Relacionamento com clientes',commercial:'Responsabilidade comercial',projectDelivery:'Entrega de projetos',softwareDev:'Desenvolvimento de software',dataAI:'Dados & IA',technicalSolutions:'Soluções técnicas',operations:'Operações',leadership:'Liderança',advisory:'Consultoria',other:'Outra opção',manageCustomers:'Gerenciar relacionamento com clientes',solveProblems:'Resolver problemas técnicos',buildSoftware:'Construir software ou produtos digitais',leadProjects:'Liderar projetos e entregas',developBusiness:'Desenvolver negócios',analyzeData:'Analisar dados',implementSolutions:'Implementar soluções',adviseCustomers:'Assessorar clientes',coordinateTeams:'Coordenar times multifuncionais',enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinacional',regulated:'Indústria regulada',public:'Setor público',supportWork:'Apoiar o trabalho',ownPart:'Ser responsável por parte do trabalho',ownEnd:'Responsabilidade ponta a ponta',leadPeople:'Liderar pessoas',defineStrategy:'Definir estratégia',revenue:'Crescimento de receita',retention:'Retenção',delivery:'Entrega de projetos',efficiency:'Eficiência',adoption:'Adoção de produto',satisfaction:'Satisfação do cliente',productImpact:'Desenvolvimento de produto',reliability:'Confiabilidade técnica',fintech:'Fintech',payments:'Pagamentos',saas:'SaaS',banking:'Bancos',telecom:'Telecom',healthcare:'Saúde',cyber:'Cibersegurança',ecommerce:'E-commerce',technicalBase:'Background técnico',businessBase:'Visão de negócios',customerBase:'Experiência com clientes',projectBase:'Gestão de projetos',problemBase:'Resolução de problemas',leadershipBase:'Experiência em liderança'},
 es:{experienced:'Profesional con experiencia',early:'Profesional al inicio de su carrera',student:'Estudiante',firstjob:'Buscando mi primer empleo',changing:'Cambiando de carrera',returning:'Regresando al mercado laboral',customerRel:'Relaciones con clientes',commercial:'Responsabilidad comercial',projectDelivery:'Entrega de proyectos',softwareDev:'Desarrollo de software',dataAI:'Datos e IA',technicalSolutions:'Soluciones técnicas',operations:'Operaciones',leadership:'Liderazgo',advisory:'Consultoría',other:'Otra opción',manageCustomers:'Gestionar relaciones con clientes',solveProblems:'Resolver problemas técnicos',buildSoftware:'Construir software o productos digitales',leadProjects:'Liderar proyectos y entregas',developBusiness:'Desarrollar negocios',analyzeData:'Analizar datos',implementSolutions:'Implementar soluciones',adviseCustomers:'Asesorar clientes',coordinateTeams:'Coordinar equipos multifuncionales',enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinacional',regulated:'Industria regulada',public:'Sector público',supportWork:'Apoyar el trabajo',ownPart:'Responsabilizarme de una parte',ownEnd:'Responsabilidad de principio a fin',leadPeople:'Liderar personas',defineStrategy:'Definir estrategia',revenue:'Crecimiento de ingresos',retention:'Retención',delivery:'Entrega de proyectos',efficiency:'Eficiencia',adoption:'Adopción de producto',satisfaction:'Satisfacción del cliente',productImpact:'Desarrollo de producto',reliability:'Confiabilidad técnica',fintech:'Fintech',payments:'Pagos',saas:'SaaS',banking:'Banca',telecom:'Telecom',healthcare:'Salud',cyber:'Ciberseguridad',ecommerce:'E-commerce',technicalBase:'Background técnico',businessBase:'Visión de negocio',customerBase:'Experiencia con clientes',projectBase:'Gestión de proyectos',problemBase:'Resolución de problemas',leadershipBase:'Experiencia en liderazgo'}
};

const QUESTION_TEXT = {
 careerStage:{en:['Which situation best describes you today?','Kadima uses this only to adapt the discovery — not to assign you a job title.'],pt:['Qual situação melhor descreve você hoje?','O Kadima usa isso apenas para adaptar a descoberta — não para atribuir um cargo a você.'],es:['¿Qué situación te describe mejor hoy?','Kadima usa esto solo para adaptar el descubrimiento — no para asignarte un puesto.']},
 profileEmphasis:{en:['What should this professional profile emphasize?','Choose the kinds of value and work you want this profile to represent.'],pt:['O que este perfil profissional deve enfatizar?','Escolha os tipos de valor e trabalho que você quer que este perfil represente.'],es:['¿Qué debe enfatizar este perfil profesional?','Elige los tipos de valor y trabajo que quieres que este perfil represente.']},
 capabilities:{en:['What kinds of work do you want this profile to be matched for?','Think about capabilities and activities, not job titles.'],pt:['Para quais tipos de trabalho você quer que este perfil seja considerado?','Pense em capacidades e atividades, não em nomes de cargos.'],es:['¿Para qué tipos de trabajo quieres que se considere este perfil?','Piensa en capacidades y actividades, no en nombres de puestos.']},
 context:{en:['Which work environments best fit this profile?','Context helps Kadima distinguish where the same capability creates the strongest match.'],pt:['Quais ambientes de trabalho melhor combinam com este perfil?','O contexto ajuda o Kadima a entender onde a mesma capacidade gera o melhor match.'],es:['¿Qué entornos de trabajo encajan mejor con este perfil?','El contexto ayuda a Kadima a entender dónde la misma capacidad genera el mejor match.']},
 ownership:{en:['What level of ownership should this profile emphasize?','Select the responsibility levels that genuinely fit the profile you are building.'],pt:['Qual nível de responsabilidade este perfil deve enfatizar?','Selecione os níveis de responsabilidade que realmente combinam com o perfil que você está construindo.'],es:['¿Qué nivel de responsabilidad debe enfatizar este perfil?','Selecciona los niveles que realmente encajan con el perfil que estás construyendo.']},
 impact:{en:['What kinds of outcomes should this profile be associated with?','We will look for evidence and measurable results during Experience.'],pt:['Com quais tipos de resultados este perfil deve estar associado?','Buscaremos evidências e resultados mensuráveis durante Experiência.'],es:['¿Con qué tipos de resultados debe asociarse este perfil?','Buscaremos evidencia y resultados medibles durante Experiencia.']},
 domain:{en:['Which domains or industries should strengthen this profile?','Domain knowledge can materially improve a match even when the job title is different.'],pt:['Quais domínios ou setores devem fortalecer este perfil?','Conhecimento de domínio pode melhorar muito o match mesmo quando o nome do cargo é diferente.'],es:['¿Qué dominios o sectores deben fortalecer este perfil?','El conocimiento de dominio puede mejorar mucho el match aunque el nombre del puesto sea diferente.']},
 transferable:{en:['Which strengths from your background should carry into this profile?','Especially useful for career changes: keep transferable evidence without mixing different profiles.'],pt:['Quais pontos fortes do seu background devem ser trazidos para este perfil?','Especialmente útil em mudanças de carreira: preserva evidências transferíveis sem misturar perfis diferentes.'],es:['¿Qué fortalezas de tu experiencia deben trasladarse a este perfil?','Especialmente útil en cambios de carrera: conserva evidencia transferible sin mezclar perfiles diferentes.']},
 direction:{en:['What do you want more of in opportunities matched to this profile?','This guides prioritization without restricting discovery to a specific job title.'],pt:['O que você quer encontrar mais nas oportunidades compatíveis com este perfil?','Isso orienta a priorização sem restringir a descoberta a um cargo específico.'],es:['¿Qué quieres encontrar más en las oportunidades compatibles con este perfil?','Esto orienta la priorización sin restringir el descubrimiento a un puesto específico.']}
};

function ui() {
  return I18N[currentLanguage] || I18N.en;
}

function optionLabel(id) {
  if (isCustomId(id)) return customLabel(id);
  return (OPTION_LABELS[currentLanguage] || OPTION_LABELS.en)[id] || id;
}

function questionCopy(questionId) {
  const value = QUESTION_TEXT[questionId]?.[currentLanguage] || QUESTION_TEXT[questionId]?.en;
  return value || ["", ""];
}




const DIMENSIONS = ["identity", "capabilities", "context", "ownership", "impact", "domain", "transferable", "direction"];

const state = {
  accountId: onboarding.accountId || account?.accountId || "",
  contact: {
    phone: "",
    emailOnly: false,
    linkedin: "",
    github: "",
    otherLink: "",
    dialCode: "",
    dialCountryCode: ""
  },
  careerStage: "",
  answers: {},
  history: [],
  currentQuestionId: null,
  foundationReached: false,
  confirmed: false,

  // Manual changes made directly in the Live Preview.
  manualFingerprint: {
    identity: [],
    capabilities: [],
    context: [],
    ownership: [],
    impact: [],
    domain: [],
    transferable: [],
    direction: []
  },

  // Overrides for items originally inferred from questions.
  fingerprintEdits: {
    removed: [],
    renamed: {}
  },

  fingerprint: {
    identity: [],
    capabilities: [],
    context: [],
    ownership: [],
    impact: [],
    domain: [],
    transferable: [],
    direction: []
  }
};

const $ = (id) => document.getElementById(id);

const phoneInput = $("phoneInput");
const emailOnly = $("emailOnly");
const linkedinInput = $("linkedinInput");
const githubInput = $("githubInput");
const otherLinkInput = $("otherLinkInput");

const contactPanel = $("contactPanel");
const discoveryPanel = $("discoveryPanel");
const reviewPanel = $("reviewPanel");

const startDiscoveryButton = $("startDiscoveryButton");
const questionText = $("questionText");
const questionHelp = $("questionHelp");
const questionCounter = $("questionCounter");
const answerOptions = $("answerOptions");
const otherAnswerWrap = $("otherAnswerWrap");
const otherAnswerInput = $("otherAnswerInput");
const addOtherAnswerButton = $("addOtherAnswerButton");
const previousQuestionButton = $("previousQuestionButton");
const nextQuestionButton = $("nextQuestionButton");

const backToDetailsButton = $("backToDetailsButton");
const backButton = $("backButton");
const skipButton = $("skipButton");
const continueToExperienceButton = $("continueToExperienceButton");

const adjustButton = $("adjustButton");
const adjustMenu = $("adjustMenu");
const finishProfileButton = $("finishProfileButton");
const profileCompletionState = $("profileCompletionState");
const careerPathCards = $("careerPathCards");

const fingerprintEditor = $("fingerprintEditor");
const fingerprintEditorTitle = $("fingerprintEditorTitle");
const fingerprintEditorInput = $("fingerprintEditorInput");
const deleteFingerprintItemButton = $("deleteFingerprintItemButton");
const saveFingerprintItemButton = $("saveFingerprintItemButton");
const cancelFingerprintEditorButton = $("cancelFingerprintEditorButton");
const closeFingerprintEditorButton = $("closeFingerprintEditorButton");

const toast = $("toast");

let pendingSelection = [];
let fingerprintEditorState = null;
let discoveryNavigationMode = "journey";

function safeParse(raw, fallback) {
  try {
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function normalizeText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function normalizedKey(value) {
  return normalizeText(value).toLocaleLowerCase();
}

function splitCommaValues(value) {
  const seen = new Set();

  return String(value || "")
    .split(",")
    .map(normalizeText)
    .filter(Boolean)
    .filter((item) => {
      const key = normalizedKey(item);

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value;
  }

  if (value === undefined || value === null || value === "") {
    return [];
  }

  return [value];
}

function customId(value) {
  return `custom:${normalizeText(value)}`;
}

function isCustomId(value) {
  return String(value || "").startsWith("custom:");
}

function customLabel(value) {
  return isCustomId(value)
    ? String(value).slice("custom:".length)
    : String(value || "");
}

const dialCountries = [
  ["Argentina", "AR", "+54", "🇦🇷"], ["Australia", "AU", "+61", "🇦🇺"],
  ["Austria", "AT", "+43", "🇦🇹"], ["Belgium", "BE", "+32", "🇧🇪"],
  ["Bolivia", "BO", "+591", "🇧🇴"], ["Brazil", "BR", "+55", "🇧🇷"],
  ["Canada", "CA", "+1", "🇨🇦"], ["Chile", "CL", "+56", "🇨🇱"],
  ["China", "CN", "+86", "🇨🇳"], ["Colombia", "CO", "+57", "🇨🇴"],
  ["Costa Rica", "CR", "+506", "🇨🇷"], ["Denmark", "DK", "+45", "🇩🇰"],
  ["Ecuador", "EC", "+593", "🇪🇨"], ["Egypt", "EG", "+20", "🇪🇬"],
  ["Finland", "FI", "+358", "🇫🇮"], ["France", "FR", "+33", "🇫🇷"],
  ["Germany", "DE", "+49", "🇩🇪"], ["Greece", "GR", "+30", "🇬🇷"],
  ["India", "IN", "+91", "🇮🇳"], ["Ireland", "IE", "+353", "🇮🇪"],
  ["Israel", "IL", "+972", "🇮🇱"], ["Italy", "IT", "+39", "🇮🇹"],
  ["Japan", "JP", "+81", "🇯🇵"], ["Mexico", "MX", "+52", "🇲🇽"],
  ["Netherlands", "NL", "+31", "🇳🇱"], ["New Zealand", "NZ", "+64", "🇳🇿"],
  ["Norway", "NO", "+47", "🇳🇴"], ["Panama", "PA", "+507", "🇵🇦"],
  ["Paraguay", "PY", "+595", "🇵🇾"], ["Peru", "PE", "+51", "🇵🇪"],
  ["Poland", "PL", "+48", "🇵🇱"], ["Portugal", "PT", "+351", "🇵🇹"],
  ["Singapore", "SG", "+65", "🇸🇬"], ["South Africa", "ZA", "+27", "🇿🇦"],
  ["South Korea", "KR", "+82", "🇰🇷"], ["Spain", "ES", "+34", "🇪🇸"],
  ["Sweden", "SE", "+46", "🇸🇪"], ["Switzerland", "CH", "+41", "🇨🇭"],
  ["Türkiye", "TR", "+90", "🇹🇷"], ["United Arab Emirates", "AE", "+971", "🇦🇪"],
  ["United Kingdom", "GB", "+44", "🇬🇧"], ["United States", "US", "+1", "🇺🇸"],
  ["Uruguay", "UY", "+598", "🇺🇾"], ["Venezuela", "VE", "+58", "🇻🇪"]
].map(([name, code, dial, flag]) => ({ name, code, dial, flag }));

const dialCodeButton = $("dialCodeButton");
const dialCodeMenu = $("dialCodeMenu");
const dialSearchInput = $("dialSearchInput");
const dialCodeResults = $("dialCodeResults");
const dialFlag = $("dialFlag");
const dialCodeText = $("dialCode");
const dialCodePicker = $("dialCodePicker");

let selectedDialCountry = null;

const labels = {
  experienced: "Experienced professional",
  early: "Early-career professional",
  student: "Student",
  firstjob: "Looking for my first job",
  changing: "Changing careers",
  returning: "Returning to the job market",

  sales: "Sales & Business",
  technology: "Technology",
  finance: "Finance",
  operations: "Operations",
  marketing: "Marketing",
  healthcare: "Healthcare",
  engineering: "Engineering",
  education: "Education",
  creative: "Creative",
  legal: "Legal",
  hospitality: "Hospitality",
  other: "Something else",

  newOnly: "Focus on my new field",
  both: "Keep both paths open",
  exploring: "I am still exploring",

  enterpriseSales: "Enterprise / B2B Sales",
  accountManagement: "Account Management",
  businessDevelopment: "Business Development",
  customerSuccess: "Customer Success",
  presales: "Pre-Sales",
  partnerships: "Partnerships",
  salesOps: "Sales Operations",

  software: "Software Development",
  dataAI: "Data & AI",
  cybersecurity: "Cybersecurity",
  product: "Product",
  support: "Technical Support",
  projectMgmt: "Project / Program Management",

  enterprise: "Enterprise",
  smb: "SMB",
  b2b: "B2B",
  b2c: "B2C",
  startup: "Startup",
  multinational: "Multinational",
  regulated: "Regulated industry",
  public: "Public sector",

  buildApps: "Build applications",
  dataWork: "Work with data",
  aiWork: "Work with AI",
  customerWork: "Work with customers",
  leadPeople: "Lead people",
  strategy: "Work on strategy",
  international: "Work internationally",
  complexDeals: "Handle complex deals",

  technicalBase: "Technical background",
  businessBase: "Business understanding",
  customerBase: "Customer-facing experience",
  projectBase: "Project management",
  problemBase: "Problem solving",
  leadershipBase: "Leadership experience",

  learning: "Currently learning / training",
  projects: "Building projects",
  internship: "Internship experience",
  professional: "Professional experience"
};

const questions = {
  careerStage:{type:"single",dimension:"identity",options:["experienced","early","student","firstjob","changing","returning"]},
  profileEmphasis:{type:"multi",dimension:"direction",options:["customerRel","commercial","projectDelivery","softwareDev","dataAI","technicalSolutions","operations","leadership","advisory","other"]},
  capabilities:{type:"multi",dimension:"capabilities",options:["manageCustomers","solveProblems","buildSoftware","leadProjects","developBusiness","analyzeData","implementSolutions","adviseCustomers","coordinateTeams","other"]},
  context:{type:"multi",dimension:"context",options:["enterprise","smb","b2b","b2c","startup","multinational","regulated","public","other"]},
  ownership:{type:"multi",dimension:"ownership",options:["supportWork","ownPart","ownEnd","leadPeople","defineStrategy","other"]},
  impact:{type:"multi",dimension:"impact",options:["revenue","retention","delivery","efficiency","adoption","satisfaction","productImpact","reliability","other"]},
  domain:{type:"multi",dimension:"domain",options:["fintech","payments","saas","banking","telecom","healthcare","cyber","ecommerce","other"]},
  transferable:{type:"multi",dimension:"transferable",options:["technicalBase","businessBase","customerBase","projectBase","problemBase","leadershipBase","other"]},
  direction:{type:"multi",dimension:"direction",options:["customerRel","technicalSolutions","projectDelivery","softwareDev","dataAI","commercial","leadership","advisory","other"]}
};

function displayLabel(id) { return optionLabel(id); }
function semanticCareerStage() {
  if (state.careerStage) return state.careerStage;
  const answer=state.answers.careerStage;
  return typeof answer === "string" && !isCustomId(answer) ? answer : "other";
}
function getQuestionSequence() {
  const sequence=["careerStage","profileEmphasis","capabilities","context","ownership","impact","domain"];
  if (["changing","returning"].includes(semanticCareerStage())) sequence.push("transferable");
  sequence.push("direction");
  return sequence;
}

function hasSavedAnswer(questionId) {
  return asArray(state.answers[questionId]).length > 0;
}

function chooseNextQuestion() {
  return getQuestionSequence().find((id)=>!hasSavedAnswer(id)) || null;
}

function syncContact() {
  state.contact.phone = normalizeText(phoneInput.value);
  state.contact.emailOnly = emailOnly.checked;
  state.contact.linkedin = normalizeText(linkedinInput.value);
  state.contact.github = normalizeText(githubInput.value);
  state.contact.otherLink = normalizeText(otherLinkInput.value);

  if (selectedDialCountry) {
    state.contact.dialCode = selectedDialCountry.dial;
    state.contact.dialCountryCode = selectedDialCountry.code;
  }
}

function saveProfile() {
  syncContact();

  localStorage.setItem(
    "kadimaProfile",
    JSON.stringify({
      ...state,
      language: currentLanguage,
      location: onboarding.location || "",
      countryCode: onboarding.countryCode || ""
    })
  );
}

function restoreProfile() {
  const saved = safeParse(localStorage.getItem("kadimaProfile"), null);

  if (!saved) {
    return;
  }

  // Do not load profile data belonging to a different account.
  if (saved.accountId && state.accountId && saved.accountId !== state.accountId) {
    return;
  }

  if (saved.contact) {
    Object.assign(state.contact, saved.contact);
  }

  const legacyProfile = saved.fingerprint && Object.prototype.hasOwnProperty.call(saved.fingerprint, "paths");
  state.careerStage = legacyProfile ? "" : (saved.careerStage || "");
  state.answers = legacyProfile ? {} : (saved.answers || {});
  state.history = Array.isArray(saved.history) ? saved.history : [];
  state.currentQuestionId = saved.currentQuestionId || null;
  state.foundationReached = Boolean(saved.foundationReached);
  state.confirmed = Boolean(saved.confirmed);

  if (saved.manualFingerprint && !legacyProfile) {
    DIMENSIONS.forEach((dimension) => {
      state.manualFingerprint[dimension] = Array.isArray(saved.manualFingerprint[dimension])
        ? saved.manualFingerprint[dimension]
        : [];
    });
  }

  if (saved.fingerprintEdits && !legacyProfile) {
    state.fingerprintEdits.removed = Array.isArray(saved.fingerprintEdits.removed)
      ? saved.fingerprintEdits.removed
      : [];

    state.fingerprintEdits.renamed =
      saved.fingerprintEdits.renamed && typeof saved.fingerprintEdits.renamed === "object"
        ? saved.fingerprintEdits.renamed
        : {};
  }

  phoneInput.value = state.contact.phone || "";
  emailOnly.checked = Boolean(state.contact.emailOnly);
  linkedinInput.value = state.contact.linkedin || "";
  githubInput.value = state.contact.github || "";
  otherLinkInput.value = state.contact.otherLink || "";
}

function answerEntries(questionId) {
  const question = questions[questionId];
  const value = state.answers[questionId];

  if (!question || !value) {
    return [];
  }

  return asArray(value).map((id) => ({
    dimension: question.dimension,
    sourceKey: `${question.dimension}|${questionId}|${id}`,
    label: displayLabel(id),
    source: "question",
    questionId,
    answerId: id
  }));
}

function buildBaseFingerprintEntries() {
  return Object.keys(questions)
    .flatMap(answerEntries)
    .filter((entry) => entry.answerId !== "other");
}

function applyFingerprintEdits(entries) {
  const removed = new Set(state.fingerprintEdits.removed);

  const output = entries
    .filter((entry) => !removed.has(entry.sourceKey))
    .map((entry) => ({
      ...entry,
      label: state.fingerprintEdits.renamed[entry.sourceKey] || entry.label
    }));

  DIMENSIONS.forEach((dimension) => {
    state.manualFingerprint[dimension].forEach((item) => {
      output.push({
        dimension,
        sourceKey: `manual|${dimension}|${item.id}`,
        label: item.label,
        source: "manual",
        manualId: item.id
      });
    });
  });

  // De-duplicate per dimension by the visible label.
  const seen = new Set();

  return output.filter((entry) => {
    const key = `${entry.dimension}|${normalizedKey(entry.label)}`;

    if (!entry.label || seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function getFingerprintEntries() {
  return applyFingerprintEdits(buildBaseFingerprintEntries());
}

function updateFingerprintState() {
  const entries = getFingerprintEntries();

  state.fingerprint = Object.fromEntries(DIMENSIONS.map((dimension) => [dimension, []]));

  entries.forEach((entry) => {
    state.fingerprint[entry.dimension].push(entry.label);
  });

  renderFingerprint(entries);
}

function renderFingerprint(entries = getFingerprintEntries()) {
  const containers = {identity:$("fpIdentity"),capabilities:$("fpCapabilities"),context:$("fpContext"),ownership:$("fpOwnership"),impact:$("fpImpact"),domain:$("fpDomain"),transferable:$("fpTransferable"),direction:$("fpDirection")};

  DIMENSIONS.forEach((dimension) => {
    const container = containers[dimension];
    const dimensionEntries = entries.filter((entry) => entry.dimension === dimension);

    container.innerHTML = "";
    container.className = "fingerprint-values";

    if (!dimensionEntries.length) {
      const empty = document.createElement("span");
      empty.className = "fp-empty-text";
      empty.textContent = ui().toBeDiscovered;
      container.appendChild(empty);
    }

    dimensionEntries.forEach((entry) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "fp-chip";
      chip.innerHTML = `<span>${escapeHtml(entry.label)}</span><span class="fp-edit-mark">✎</span>`;
      chip.addEventListener("click", () => openFingerprintEditorForEdit(entry));
      container.appendChild(chip);
    });

    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "fp-add-button";
    addButton.textContent = ui().addChip;
    addButton.addEventListener("click", () => openFingerprintEditorForAdd(dimension));
    container.appendChild(addButton);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function openFingerprintEditorForAdd(dimension) {
  fingerprintEditorState = {
    mode: "add",
    dimension
  };

  fingerprintEditorTitle.textContent = `${ui().editorAdd} ${dimensionLabel(dimension)}`;
  fingerprintEditorInput.value = "";
  deleteFingerprintItemButton.hidden = true;
  fingerprintEditor.hidden = false;
  fingerprintEditorInput.focus();
}

function openFingerprintEditorForEdit(entry) {
  fingerprintEditorState = {
    mode: "edit",
    entry
  };

  fingerprintEditorTitle.textContent = `${ui().editorEdit} ${dimensionLabel(entry.dimension)}`;
  fingerprintEditorInput.value = entry.label;
  deleteFingerprintItemButton.hidden = false;
  fingerprintEditor.hidden = false;
  fingerprintEditorInput.focus();
  fingerprintEditorInput.select();
}

function closeFingerprintEditor() {
  fingerprintEditor.hidden = true;
  fingerprintEditorInput.value = "";
  fingerprintEditorState = null;
}

function dimensionLabel(dimension) { return ui().dimensions[dimension] || dimension; }

function createManualFingerprintItems(dimension, values) {
  const existingLabels = new Set(
    getFingerprintEntries()
      .filter((entry) => entry.dimension === dimension)
      .map((entry) => normalizedKey(entry.label))
  );

  values.forEach((label) => {
    if (existingLabels.has(normalizedKey(label))) {
      return;
    }

    state.manualFingerprint[dimension].push({
      id: `manual_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      label
    });

    existingLabels.add(normalizedKey(label));
  });
}

function saveFingerprintEditor() {
  if (!fingerprintEditorState) {
    return;
  }

  const values = splitCommaValues(fingerprintEditorInput.value);

  if (!values.length) {
    return;
  }

  if (fingerprintEditorState.mode === "add") {
    createManualFingerprintItems(fingerprintEditorState.dimension, values);
  } else {
    const entry = fingerprintEditorState.entry;
    const firstValue = values[0];

    if (entry.source === "manual") {
      const item = state.manualFingerprint[entry.dimension]
        .find((manual) => manual.id === entry.manualId);

      if (item) {
        item.label = firstValue;
      }
    } else {
      state.fingerprintEdits.renamed[entry.sourceKey] = firstValue;
    }

    // Extra comma-separated values become additional manual items.
    if (values.length > 1) {
      createManualFingerprintItems(entry.dimension, values.slice(1));
    }
  }

  updateFingerprintState();
  buildCareerPathOverview();
  saveProfile();
  closeFingerprintEditor();
}

function deleteFingerprintEditorItem() {
  if (!fingerprintEditorState || fingerprintEditorState.mode !== "edit") {
    return;
  }

  const entry = fingerprintEditorState.entry;

  if (entry.source === "manual") {
    state.manualFingerprint[entry.dimension] =
      state.manualFingerprint[entry.dimension]
        .filter((manual) => manual.id !== entry.manualId);
  } else if (!state.fingerprintEdits.removed.includes(entry.sourceKey)) {
    state.fingerprintEdits.removed.push(entry.sourceKey);
  }

  updateFingerprintState();
  buildCareerPathOverview();
  saveProfile();
  closeFingerprintEditor();
}

function renderQuestion(questionId) {
  const question = questions[questionId];

  if (!question) {
    return;
  }

  state.currentQuestionId = questionId;

  const savedValues = asArray(state.answers[questionId]);
  pendingSelection = [...savedValues];

  const customValues = savedValues
    .filter(isCustomId)
    .map(customLabel);

  const [translatedQuestion, translatedHelp] = questionCopy(questionId);
  questionText.textContent = translatedQuestion;
  questionHelp.textContent = translatedHelp;
  const sequence = getQuestionSequence();
  const sequenceIndex = sequence.indexOf(questionId);
  const questionNumber = sequenceIndex >= 0 ? sequenceIndex + 1 : 1;
  questionCounter.textContent = `${currentLanguage === "pt" ? "Pergunta" : currentLanguage === "es" ? "Pregunta" : "Question"} ${questionNumber}/${sequence.length}`;
  answerOptions.innerHTML = "";

  otherAnswerInput.value = customValues.join(", ");
  otherAnswerWrap.hidden = customValues.length === 0;

  question.options.forEach((optionId) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `answer-option ${question.type === "multi" ? "multi" : ""}`;
    button.dataset.option = optionId;

    const visibleSelected =
      optionId === "other"
        ? customValues.length > 0
        : pendingSelection.includes(optionId);

    if (visibleSelected) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="answer-option-icon">•</span>
      <span style="flex:1"><strong>${escapeHtml(displayLabel(optionId))}</strong></span>
      <span class="answer-check">✓</span>
    `;

    button.addEventListener("click", () => {
      handleAnswerOptionClick(question, optionId, button);
    });

    answerOptions.appendChild(button);
  });

  // Always derive the pending answer from what is actually visible in the UI.
  // This avoids stale pendingSelection values after Previous/Continue navigation.
  syncPendingSelectionFromUI(false);
  previousQuestionButton.disabled = getQuestionSequence().indexOf(questionId) <= 0;
}

function collectSelectionFromUI() {
  const question = questions[state.currentQuestionId];

  if (!question) {
    return [];
  }

  const selection = [];

  answerOptions.querySelectorAll('.answer-option.selected').forEach((button) => {
    const optionId = button.dataset.option;
    if (optionId && optionId !== 'other' && !selection.includes(optionId)) {
      selection.push(optionId);
    }
  });

  const otherButton = answerOptions.querySelector('[data-option="other"]');
  const customValues = splitCommaValues(otherAnswerInput.value);

  if (otherButton?.classList.contains('selected') || customValues.length) {
    customValues.forEach((value) => {
      const id = customId(value);
      if (!selection.includes(id)) selection.push(id);
    });
  }

  // Single-choice questions must remain single-choice. If a custom value exists,
  // it is the single answer; otherwise use the selected regular option.
  if (question.type === 'single') {
    const custom = selection.find(isCustomId);
    if (custom) return [custom];
    return selection.length ? [selection[0]] : [];
  }

  return selection;
}

function pruneInactiveQuestionAnswers() {
  const active = new Set(getQuestionSequence());

  Object.keys(state.answers).forEach((questionId) => {
    if (questions[questionId] && !active.has(questionId)) {
      delete state.answers[questionId];
    }
  });
}

function persistQuestionSelection(questionId, selection, { addToHistory = false, allowEmpty = true } = {}) {
  const question = questions[questionId];

  if (!question) return false;

  const cleanSelection = [...new Set(asArray(selection).filter((value) => value !== 'other'))];
  if (!cleanSelection.length && !allowEmpty) return false;

  const previousValues = asArray(state.answers[questionId]);
  const previousSet = new Set(previousValues);
  const nextSet = new Set(cleanSelection);

  // Question answers are the canonical source for question-derived fingerprint items.
  // If the user changes an answer, stale editor overrides for that answer must not
  // block the new explicit choice from appearing in the fingerprint.
  const touchedIds = new Set([...previousValues, ...cleanSelection]);
  touchedIds.forEach((answerId) => {
    if (previousSet.has(answerId) !== nextSet.has(answerId)) {
      const sourceKey = `${question.dimension}|${questionId}|${answerId}`;
      state.fingerprintEdits.removed = state.fingerprintEdits.removed.filter((key) => key !== sourceKey);
      delete state.fingerprintEdits.renamed[sourceKey];
    }
  });

  if (!cleanSelection.length) {
    delete state.answers[questionId];
  } else {
    const hasCustom = cleanSelection.some(isCustomId);
    state.answers[questionId] = question.type === 'single' && !hasCustom
      ? cleanSelection[0]
      : [...cleanSelection];
  }

  if (questionId === 'careerStage') {
    const regular = cleanSelection.find((value) => !isCustomId(value));
    state.careerStage = regular || (cleanSelection.some(isCustomId) ? 'other' : '');
    pruneInactiveQuestionAnswers();
  }

  if (addToHistory && !state.history.includes(questionId)) {
    state.history.push(questionId);
  }

  updateFingerprintState();
  buildCareerPathOverview();
  saveProfile();

  return cleanSelection.length > 0 || allowEmpty;
}

function syncPendingSelectionFromUI(persist = true, options = {}) {
  pendingSelection = collectSelectionFromUI();
  nextQuestionButton.disabled = pendingSelection.length === 0;

  if (persist) {
    persistQuestionSelection(state.currentQuestionId, pendingSelection, options);
  }

  return pendingSelection;
}

function handleAnswerOptionClick(question, optionId, button) {
  if (optionId === 'other') {
    const currentlySelected = button.classList.contains('selected');

    if (currentlySelected) {
      button.classList.remove('selected');
      otherAnswerWrap.hidden = true;
      otherAnswerInput.value = '';
    } else {
      if (question.type === 'single') {
        answerOptions.querySelectorAll('.answer-option')
          .forEach((option) => option.classList.remove('selected'));
      }

      button.classList.add('selected');
      otherAnswerWrap.hidden = false;
      otherAnswerInput.focus();
    }

    syncPendingSelectionFromUI(true, { allowEmpty: true });
    return;
  }

  if (question.type === 'single') {
    answerOptions.querySelectorAll('.answer-option')
      .forEach((option) => option.classList.remove('selected'));

    button.classList.add('selected');
    otherAnswerWrap.hidden = true;
    otherAnswerInput.value = '';
  } else {
    button.classList.toggle('selected');
  }

  syncPendingSelectionFromUI(true, { allowEmpty: true });
}

function addOtherAnswers() {
  const values = splitCommaValues(otherAnswerInput.value);
  const otherButton = answerOptions.querySelector('[data-option="other"]');

  if (!values.length) {
    if (otherButton) otherButton.classList.remove('selected');
    syncPendingSelectionFromUI(true, { allowEmpty: true });
    return;
  }

  if (otherButton) otherButton.classList.add('selected');
  // Normalize the visible value, but do not inject examples or assumptions.
  otherAnswerInput.value = values.join(', ');
  syncPendingSelectionFromUI(true, { allowEmpty: true });
}

function storePendingAnswer(addToHistory = true, allowEmpty = false) {
  // Compatibility wrapper used by the rest of the screen. The source of truth is
  // now the current DOM selection, not an old cached pendingSelection array.
  syncPendingSelectionFromUI(false);
  return persistQuestionSelection(
    state.currentQuestionId,
    pendingSelection,
    { addToHistory, allowEmpty }
  );
}

function commitCurrentAnswer() {
  syncPendingSelectionFromUI(false);

  if (!pendingSelection.length) {
    return false;
  }

  return persistQuestionSelection(
    state.currentQuestionId,
    pendingSelection,
    { addToHistory: true, allowEmpty: false }
  );
}

function goForward() {
  if (!commitCurrentAnswer()) {
    showToast(ui().chooseAnswer);
    return;
  }

  if (discoveryNavigationMode === 'adjust') {
    completeFoundation();
    return;
  }

  const sequence = getQuestionSequence();
  const currentIndex = sequence.indexOf(state.currentQuestionId);

  if (currentIndex >= 0 && currentIndex < sequence.length - 1) {
    renderQuestion(sequence[currentIndex + 1]);
  } else {
    completeFoundation();
  }
}

function goPrevious() {
  // Re-read the visible controls before moving. This is deliberately done even
  // if the user only deselected values and never pressed Continue.
  syncPendingSelectionFromUI(false);
  persistQuestionSelection(
    state.currentQuestionId,
    pendingSelection,
    { addToHistory: false, allowEmpty: true }
  );

  const sequence = getQuestionSequence();
  const currentIndex = sequence.indexOf(state.currentQuestionId);

  if (currentIndex <= 0) {
    return;
  }

  renderQuestion(sequence[currentIndex - 1]);
}

function startDiscovery() {
  discoveryNavigationMode = "journey";
  syncContact();
  contactPanel.hidden = true;
  discoveryPanel.hidden = false;
  reviewPanel.hidden = true;

  state.foundationReached = false;
  state.confirmed = false;

  const next = chooseNextQuestion();
  renderQuestion(next || "careerStage");
  saveProfile();
}

function completeFoundation() {
  state.foundationReached = true;
  state.confirmed = false;

  discoveryPanel.hidden = true;
  reviewPanel.hidden = false;

  lockQuestionNavigation();

  updateFingerprintState();
  buildCareerPathOverview();
  renderReviewFingerprint();

  continueToExperienceButton.disabled = true;
  saveProfile();
}

function lockQuestionNavigation() {
  previousQuestionButton.disabled = true;
  nextQuestionButton.disabled = true;

  const questionCard = document.querySelector(".question-card");

  if (questionCard) {
    questionCard.classList.add("discovery-complete");
  }
}

function unlockQuestionNavigation() {
  const questionCard = document.querySelector(".question-card");

  if (questionCard) {
    questionCard.classList.remove("discovery-complete");
  }
}

function renderReviewFingerprint() {
  const wrap = $("reviewFingerprint");
  wrap.innerHTML = "";

  DIMENSIONS.forEach((dimension) => {
    const values = state.fingerprint[dimension];

    const group = document.createElement("div");
    group.className = "review-group";

    const title = document.createElement("strong");
    title.textContent = dimensionLabel(dimension);

    const value = document.createElement("span");
    value.textContent = values.length
      ? values.join(" · ")
      : ui().toBeDiscovered;

    group.append(title, value);
    wrap.appendChild(group);
  });
}

function visibleQuestionLabels(questionId) {
  return answerEntries(questionId)
    .filter((entry) => !state.fingerprintEdits.removed.includes(entry.sourceKey))
    .map((entry) => state.fingerprintEdits.renamed[entry.sourceKey] || entry.label);
}

function buildCareerPathOverview() {
  if (!careerPathCards) return;
  careerPathCards.innerHTML="";
  const signals=[...state.fingerprint.direction,...state.fingerprint.capabilities,...state.fingerprint.context].filter(Boolean);
  const card=document.createElement("div");
  card.className="career-path-card established";
  card.innerHTML=`<span class="path-type">${escapeHtml(ui().focusType)}</span><strong>${escapeHtml([...new Set(signals)].slice(0,6).join(" · ") || ui().toBeDiscovered)}</strong><span>${escapeHtml(ui().focusDescription)}</span>`;
  careerPathCards.appendChild(card);
}

function showAdjustMenu() { adjustMenu.hidden = !adjustMenu.hidden; }

function questionForDimension(dimension) {
  const map={identity:"careerStage",capabilities:"capabilities",context:"context",ownership:"ownership",impact:"impact",domain:"domain",transferable:"transferable",direction:"direction"};
  return map[dimension] || "careerStage";
}

function adjustDimension(dimension) {
  discoveryNavigationMode = "adjust";
  adjustMenu.hidden = true;
  reviewPanel.hidden = true;
  discoveryPanel.hidden = false;

  state.foundationReached = false;
  state.confirmed = false;

  document.body.classList.remove("profile-confirmed");
  unlockQuestionNavigation();

  renderQuestion(questionForDimension(dimension));
}

function confirmProfileFoundation() {
  state.confirmed = true;
  state.foundationReached = true;

  profileCompletionState.hidden = false;
  reviewPanel.classList.add("completed");
  adjustMenu.hidden = true;

  continueToExperienceButton.disabled = false;

  // Once the user confirms Looks right, no Back navigation is offered.
  document.body.classList.add("profile-confirmed");

  lockQuestionNavigation();
  saveProfile();
}

function applyConfirmedState() {
  if (!state.confirmed) {
    document.body.classList.remove("profile-confirmed");
    return;
  }

  contactPanel.hidden = true;
  discoveryPanel.hidden = true;
  reviewPanel.hidden = false;

  reviewPanel.classList.add("completed");
  profileCompletionState.hidden = false;
  continueToExperienceButton.disabled = false;

  document.body.classList.add("profile-confirmed");

  updateFingerprintState();
  buildCareerPathOverview();
  renderReviewFingerprint();
  lockQuestionNavigation();
}

function backToProfileDetails() {
  if (state.confirmed) {
    return;
  }

  discoveryPanel.hidden = true;
  reviewPanel.hidden = true;
  contactPanel.hidden = false;
  saveProfile();
}

function skipJourney() {
  if (!account || !state.accountId || account.accountId !== state.accountId) {
    showToast(ui().basicRequired);
    return;
  }

  saveProfile();
  showToast(ui().progressSaved);

  /*
    Future:
    window.location.href = "dashboard.html";
  */
}

function goToExperience() {
  if (!state.confirmed) {
    return;
  }

  saveProfile();
  window.location.href = "experience.html";
  
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* =========================
   PHONE PREFIX PICKER
   ========================= */

function renderDialCountries(query = "") {
  const search = normalizedKey(query);

  const results = dialCountries.filter((country) => {
    if (!search) return true;

    return (
      normalizedKey(country.name).includes(search) ||
      normalizedKey(country.code).includes(search) ||
      country.dial.includes(search)
    );
  });

  dialCodeResults.innerHTML = "";

  if (!results.length) {
    const empty = document.createElement("div");
    empty.className = "dial-empty";
    empty.textContent = ui().noCountry;
    dialCodeResults.appendChild(empty);
    return;
  }

  results.forEach((country) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dial-option";

    if (selectedDialCountry?.code === country.code) {
      button.classList.add("selected");
    }

    button.innerHTML = `
      <span class="flag">${country.flag}</span>
      <span class="country-name">${escapeHtml(country.name)}</span>
      <span class="calling-code">${country.dial}</span>
    `;

    button.addEventListener("click", () => {
      selectDialCountry(country);
    });

    dialCodeResults.appendChild(button);
  });
}

function selectDialCountry(country) {
  if (!country) return;

  selectedDialCountry = country;

  dialFlag.textContent = country.flag;
  dialCodeText.textContent = country.dial;

  state.contact.dialCode = country.dial;
  state.contact.dialCountryCode = country.code;

  dialCodeMenu.hidden = true;
  dialCodeButton.setAttribute("aria-expanded", "false");

  saveProfile();
}

function initializeDialCountry() {
  selectedDialCountry =
    dialCountries.find((country) => country.code === state.contact.dialCountryCode) ||
    dialCountries.find((country) => country.code === onboarding.countryCode) ||
    dialCountries.find(
      (country) =>
        normalizedKey(country.name) === normalizedKey(onboarding.location)
    ) ||
    dialCountries.find((country) => country.code === "US");

  if (selectedDialCountry) {
    dialFlag.textContent = selectedDialCountry.flag;
    dialCodeText.textContent = selectedDialCountry.dial;
    state.contact.dialCode = selectedDialCountry.dial;
    state.contact.dialCountryCode = selectedDialCountry.code;
  }

  renderDialCountries();
}


function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function applyStaticLanguage() {
  const t = ui();

  document.documentElement.lang =
    currentLanguage === "pt" ? "pt-BR" : currentLanguage;

  $("heroTitle").innerHTML = t.heroTitle;
  setText("heroDescription", t.heroDescription);

  t.benefits.forEach((benefit, index) => {
    setText(`benefit${index + 1}Title`, benefit[0]);
    setText(`benefit${index + 1}Text`, benefit[1]);
  });

  setText("welcomeTitle", t.welcome);
  setText("welcomeSubtitle", t.welcomeSub);

  document.querySelectorAll("[data-progress-label]").forEach((el, index) => {
    el.textContent = t.progress[index];
  });

  skipButton.textContent = t.skip;
  setText("profileEyebrow", t.profileEyebrow);
  setText("profileTitle", t.profileTitle);
  setText("profileSubtitle", t.profileSubtitle);
  setText("backToDetailsText", t.backDetails);

  setText("contactTitle", t.contactTitle);
  setText("contactSubtitle", t.contactSubtitle);
  setText("phoneLabel", t.phone);
  phoneInput.placeholder = t.phonePlaceholder;
  setText("emailOnlyText", t.emailOnly);
  setText("linkedinLabel", t.linkedin);
  setText("githubLabel", t.github);
  setText("otherLinkLabel", t.otherLink);
  setText("contactOptionalText", t.contactOptional);
  setText("startDiscoveryText", t.startDiscovery);

  dialSearchInput.placeholder = t.dialSearch;

  setText("questionStageLabel", t.learning);
  setText("previousQuestionText", t.previous);
  setText("nextQuestionText", t.continue);
  setText("otherAnswerLabel", t.otherAnswer);
  otherAnswerInput.placeholder = '';
  addOtherAnswerButton.textContent = t.add;

  setText("livePreviewLabel", t.livePreview);
  setText("fingerprintTitle", t.fingerprintTitle);
  setText("fpIdentityLabel", t.dimensions.identity);
  setText("fpCapabilitiesLabel", t.dimensions.capabilities);
  setText("fpContextLabel", t.dimensions.context);
  setText("fpOwnershipLabel", t.dimensions.ownership);
  setText("fpImpactLabel", t.dimensions.impact);
  setText("fpDomainLabel", t.dimensions.domain);
  setText("fpTransferableLabel", t.dimensions.transferable);
  setText("fpDirectionLabel", t.dimensions.direction);

  setText("fingerprintEditorLabel", t.editorItem);
  setText("fingerprintEditorHint", t.editorHint);
  deleteFingerprintItemButton.textContent = t.delete;
  cancelFingerprintEditorButton.textContent = t.cancel;
  saveFingerprintItemButton.textContent = t.save;

  setText("reviewEyebrow", t.reviewEyebrow);
  setText("reviewTitle", t.reviewTitle);
  setText("reviewSubtitle", t.reviewSubtitle);
  setText("completionStateTitle", t.completionTitle);
  setText("completionStateText", t.completionText);
  setText("careerPathEyebrow", t.careerPathEyebrow);
  setText("careerPathTitle", t.careerPathTitle);

  setText("adjustMenuTitle", t.adjustTitle);
  setText("adjustIdentity", t.dimensions.identity);
  setText("adjustCapabilities", t.dimensions.capabilities);
  setText("adjustContext", t.dimensions.context);
  setText("adjustOwnership", t.dimensions.ownership);
  setText("adjustImpact", t.dimensions.impact);
  setText("adjustDomain", t.dimensions.domain);
  setText("adjustTransferable", t.dimensions.transferable);
  setText("adjustDirection", t.dimensions.direction);
  setText("adjustButtonText", t.adjust);
  setText("finishProfileText", t.looksRight);

  setText("footerNoteTitle", t.footerTitle);
  setText("footerNoteText", t.footerText);
  setText("backButtonText", t.back);
  setText("continueExperienceText", t.continue);
}

/* =========================
   INITIALIZE
   ========================= */

applyStaticLanguage();
restoreProfile();
initializeDialCountry();
updateFingerprintState();

// Skip is available on Screen 3 only because Screen 2 should already
// have created the account.
skipButton.disabled = !(
  account &&
  state.accountId &&
  account.accountId === state.accountId
);

if (state.confirmed) {
  applyConfirmedState();
} else if (state.foundationReached) {
  contactPanel.hidden = true;
  discoveryPanel.hidden = true;
  reviewPanel.hidden = false;
  updateFingerprintState();
  buildCareerPathOverview();
  renderReviewFingerprint();
  lockQuestionNavigation();
  continueToExperienceButton.disabled = true;
}

/* =========================
   EVENTS
   ========================= */

startDiscoveryButton.addEventListener("click", startDiscovery);
nextQuestionButton.addEventListener("click", goForward);
previousQuestionButton.addEventListener("click", goPrevious);
addOtherAnswerButton.addEventListener("click", addOtherAnswers);

// "Something else" is saved from the text itself; the user does not have to
// remember to press Add before navigating. Emptying the field removes the custom
// contribution from the fingerprint immediately.
otherAnswerInput.addEventListener("input", () => {
  const otherButton = answerOptions.querySelector('[data-option="other"]');
  const hasValues = splitCommaValues(otherAnswerInput.value).length > 0;
  if (otherButton) otherButton.classList.toggle("selected", hasValues);
  syncPendingSelectionFromUI(true, { allowEmpty: true });
});

otherAnswerInput.addEventListener("blur", () => {
  addOtherAnswers();
});

backToDetailsButton.addEventListener("click", backToProfileDetails);
backButton.addEventListener("click", () => {
  if (!state.confirmed) {
    window.location.href = "personal-info.html";
  }
});

skipButton.addEventListener("click", skipJourney);

adjustButton.addEventListener("click", showAdjustMenu);

document.querySelectorAll("[data-adjust-dimension]").forEach((button) => {
  button.addEventListener("click", () => {
    adjustDimension(button.dataset.adjustDimension);
  });
});

finishProfileButton.addEventListener("click", confirmProfileFoundation);
continueToExperienceButton.addEventListener("click", goToExperience);

saveFingerprintItemButton.addEventListener("click", saveFingerprintEditor);
deleteFingerprintItemButton.addEventListener("click", deleteFingerprintEditorItem);
cancelFingerprintEditorButton.addEventListener("click", closeFingerprintEditor);
closeFingerprintEditorButton.addEventListener("click", closeFingerprintEditor);

fingerprintEditorInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    saveFingerprintEditor();
  }

  if (event.key === "Escape") {
    closeFingerprintEditor();
  }
});

dialCodeButton.addEventListener("click", () => {
  const opening = dialCodeMenu.hidden;

  dialCodeMenu.hidden = !opening;
  dialCodeButton.setAttribute("aria-expanded", String(opening));

  if (opening) {
    renderDialCountries(dialSearchInput.value);
    setTimeout(() => dialSearchInput.focus(), 0);
  }
});

dialSearchInput.addEventListener("input", () => {
  renderDialCountries(dialSearchInput.value);
});

document.addEventListener("click", (event) => {
  if (!dialCodePicker.contains(event.target)) {
    dialCodeMenu.hidden = true;
    dialCodeButton.setAttribute("aria-expanded", "false");
  }
});

[emailOnly, phoneInput, linkedinInput, githubInput, otherLinkInput]
  .forEach((element) => {
    element.addEventListener("change", saveProfile);
    element.addEventListener("blur", saveProfile);
  });
