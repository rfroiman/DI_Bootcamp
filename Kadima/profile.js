const onboarding = safeParse(localStorage.getItem("kadimaOnboarding"), {});
const account = safeParse(localStorage.getItem("kadimaAccount"), null);

const currentLanguage = ["en", "pt", "es"].includes(onboarding.language)
  ? onboarding.language
  : "en";

const I18N = {
  en: {
    heroTitle:'Your journey<br>to the best<br><span>opportunities</span>',
    heroDescription:'We want to get to know you better so we can connect you with opportunities that truly match your profile.',
    benefits:[
      ['AI that understands you','We analyze your skills and experience to find the right opportunities.'],
      ['Smart matches','We compare your profile with job requirements and calculate your fit.'],
      ['Your future, now','Save time and focus on the opportunities that matter.']
    ],
    welcome:'Welcome to Kadima!', welcomeSub:"Let's build your profile in 6 simple steps.",
    progress:['Welcome','Personal','Profile','Experience','Education','Skills'], skip:'Skip journey',
    profileEyebrow:'PROFILE · STEP 3',
    profileTitle:"Let's discover your professional fingerprint.",
    profileSubtitle:'Short, guided questions. No long forms. Kadima adapts the journey as it learns about you.',
    backDetails:'Back to profile details',
    contactTitle:'A few profile details first', contactSubtitle:'These are contact details, not part of your matching score.',
    phone:'Phone', phonePlaceholder:'Phone number', emailOnly:'I prefer to be contacted by email only',
    linkedin:'LinkedIn', github:'GitHub', otherLink:'Other professional link',
    contactOptional:'All fields in this block are optional.', startDiscovery:'Start profile discovery',
    dialSearch:'Search country or prefix', noCountry:'No country found',
    learning:'Kadima is learning about you', previous:'Previous', continue:'Continue',
    otherAnswer:'Add anything Kadima missed. You can add as many as you want, separated by commas.',
    otherPlaceholder:'e.g. Fintech, Payments, Open Finance', add:'Add',
    livePreview:'LIVE PREVIEW', fingerprintTitle:'Your Professional Fingerprint',
    dimensions:{identity:'Identity',paths:'Career paths',context:'Context',direction:'Direction',transferable:'Transferable value'},
    toBeDiscovered:'To be discovered', addChip:'+ Add',
    editorAdd:'Add to', editorEdit:'Edit', editorItem:'Item', editorHint:'You can add multiple items separated by commas.',
    delete:'Delete', cancel:'Cancel', save:'Save',
    reviewEyebrow:'PROFILE FOUNDATION COMPLETE',
    reviewTitle:"Here's what Kadima has discovered about you so far.",
    reviewSubtitle:"This is your professional fingerprint so far. It captures how you see your career today and where you want to go next. We'll continue enriching it as you move through your journey.",
    completionTitle:'Profile foundation completed',
    completionText:'Your current professional direction has been saved. Kadima will keep enriching your fingerprint throughout the journey.',
    careerPathEyebrow:'CAREER PATH OVERVIEW', careerPathTitle:'How Kadima currently sees your professional paths',
    adjustTitle:'What would you like to adjust?', adjust:'Adjust something', looksRight:'Looks right',
    footerTitle:'Your profile stays flexible', footerText:'You can edit or refine these details later.', back:'Back',
    chooseAnswer:'Choose at least one option to continue.',
    progressSaved:'Your progress has been saved.', basicRequired:'Complete your basic account information before skipping the journey.',
    profileSaved:'Profile foundation saved. Ready for Experience.',
    pathTypes:{established:'Established',emerging:'Emerging',exploring:'Exploring',bridge:'Transferable bridge',current:'Current direction'},
    pathDescriptions:{
      established:'Built from your current and previous professional background.',
      emerging:'A direction you are learning, preparing for or actively expanding into.',
      exploring:'A direction Kadima should keep open while your professional fingerprint evolves.',
      bridge:'Background that may strengthen opportunities across different career paths.',
      current:'Kadima will keep refining this as your journey continues.'
    }
  },
  pt: {
    heroTitle:'Sua jornada<br>para as melhores<br><span>oportunidades</span>',
    heroDescription:'Queremos conhecer você melhor para conectá-lo a oportunidades que realmente combinam com o seu perfil.',
    benefits:[
      ['IA que entende você','Analisamos suas habilidades e experiências para encontrar as oportunidades certas.'],
      ['Matches inteligentes','Comparamos seu perfil com os requisitos das vagas e calculamos sua compatibilidade.'],
      ['Seu futuro, agora','Economize tempo e foque nas oportunidades que realmente importam.']
    ],
    welcome:'Bem-vindo ao Kadima!', welcomeSub:'Vamos construir seu perfil em 6 etapas simples.',
    progress:['Boas-vindas','Pessoal','Perfil','Experiência','Educação','Habilidades'], skip:'Pular jornada',
    profileEyebrow:'PERFIL · ETAPA 3',
    profileTitle:'Vamos descobrir seu fingerprint profissional.',
    profileSubtitle:'Perguntas curtas e orientadas. Nada de formulários longos. O Kadima adapta a jornada conforme conhece você.',
    backDetails:'Voltar aos dados do perfil',
    contactTitle:'Primeiro, alguns dados do perfil', contactSubtitle:'São dados de contato e não fazem parte do seu score de matching.',
    phone:'Telefone', phonePlaceholder:'Número de telefone', emailOnly:'Prefiro ser contatado apenas por e-mail',
    linkedin:'LinkedIn', github:'GitHub', otherLink:'Outro link profissional',
    contactOptional:'Todos os campos deste bloco são opcionais.', startDiscovery:'Iniciar descoberta do perfil',
    dialSearch:'Buscar país ou prefixo', noCountry:'Nenhum país encontrado',
    learning:'Kadima está conhecendo você', previous:'Anterior', continue:'Continuar',
    otherAnswer:'Adicione o que o Kadima não identificou. Você pode incluir quantos itens quiser, separados por vírgulas.',
    otherPlaceholder:'ex.: Fintech, Pagamentos, Open Finance', add:'Adicionar',
    livePreview:'PREVIEW AO VIVO', fingerprintTitle:'Seu Professional Fingerprint',
    dimensions:{identity:'Identidade',paths:'Caminhos profissionais',context:'Contexto',direction:'Direção',transferable:'Valor transferível'},
    toBeDiscovered:'A descobrir', addChip:'+ Adicionar',
    editorAdd:'Adicionar a', editorEdit:'Editar', editorItem:'Item', editorHint:'Você pode adicionar vários itens separados por vírgulas.',
    delete:'Excluir', cancel:'Cancelar', save:'Salvar',
    reviewEyebrow:'BASE DO PERFIL CONCLUÍDA',
    reviewTitle:'Veja o que o Kadima descobriu sobre você até agora.',
    reviewSubtitle:'Este é o seu fingerprint profissional até aqui. Ele representa como você vê sua carreira hoje e para onde deseja seguir. Continuaremos enriquecendo-o ao longo da jornada.',
    completionTitle:'Base do perfil concluída',
    completionText:'Sua direção profissional atual foi salva. O Kadima continuará enriquecendo seu fingerprint ao longo da jornada.',
    careerPathEyebrow:'VISÃO DOS CAMINHOS PROFISSIONAIS', careerPathTitle:'Como o Kadima enxerga atualmente seus caminhos profissionais',
    adjustTitle:'O que você gostaria de ajustar?', adjust:'Ajustar algo', looksRight:'Está correto',
    footerTitle:'Seu perfil continua flexível', footerText:'Você poderá editar ou refinar estas informações depois.', back:'Voltar',
    chooseAnswer:'Escolha pelo menos uma opção para continuar.',
    progressSaved:'Seu progresso foi salvo.', basicRequired:'Complete as informações básicas da sua conta antes de pular a jornada.',
    profileSaved:'Base do perfil salva. Pronto para Experiência.',
    pathTypes:{established:'Estabelecido',emerging:'Emergente',exploring:'Em exploração',bridge:'Ponte transferível',current:'Direção atual'},
    pathDescriptions:{
      established:'Construído a partir do seu background profissional atual e anterior.',
      emerging:'Uma direção para a qual você está aprendendo, se preparando ou expandindo sua atuação.',
      exploring:'Uma direção que o Kadima deve manter aberta enquanto seu fingerprint profissional evolui.',
      bridge:'Background que pode fortalecer oportunidades em diferentes caminhos profissionais.',
      current:'O Kadima continuará refinando este caminho ao longo da sua jornada.'
    }
  },
  es: {
    heroTitle:'Tu camino<br>hacia las mejores<br><span>oportunidades</span>',
    heroDescription:'Queremos conocerte mejor para conectarte con oportunidades que realmente encajen con tu perfil.',
    benefits:[
      ['IA que te entiende','Analizamos tus habilidades y experiencia para encontrar las oportunidades adecuadas.'],
      ['Matches inteligentes','Comparamos tu perfil con los requisitos de las vacantes y calculamos tu compatibilidad.'],
      ['Tu futuro, ahora','Ahorra tiempo y concéntrate en las oportunidades que realmente importan.']
    ],
    welcome:'¡Bienvenido a Kadima!', welcomeSub:'Construyamos tu perfil en 6 pasos sencillos.',
    progress:['Bienvenida','Personal','Perfil','Experiencia','Educación','Habilidades'], skip:'Saltar recorrido',
    profileEyebrow:'PERFIL · PASO 3',
    profileTitle:'Descubramos tu fingerprint profesional.',
    profileSubtitle:'Preguntas breves y guiadas. Sin formularios largos. Kadima adapta el recorrido a medida que te conoce.',
    backDetails:'Volver a los datos del perfil',
    contactTitle:'Primero, algunos datos del perfil', contactSubtitle:'Son datos de contacto y no forman parte de tu score de matching.',
    phone:'Teléfono', phonePlaceholder:'Número de teléfono', emailOnly:'Prefiero que me contacten solo por correo electrónico',
    linkedin:'LinkedIn', github:'GitHub', otherLink:'Otro enlace profesional',
    contactOptional:'Todos los campos de este bloque son opcionales.', startDiscovery:'Iniciar descubrimiento del perfil',
    dialSearch:'Buscar país o prefijo', noCountry:'No se encontró ningún país',
    learning:'Kadima está aprendiendo sobre ti', previous:'Anterior', continue:'Continuar',
    otherAnswer:'Agrega lo que Kadima no haya identificado. Puedes incluir tantos elementos como quieras, separados por comas.',
    otherPlaceholder:'ej.: Fintech, Pagos, Open Finance', add:'Agregar',
    livePreview:'VISTA EN VIVO', fingerprintTitle:'Tu Professional Fingerprint',
    dimensions:{identity:'Identidad',paths:'Caminos profesionales',context:'Contexto',direction:'Dirección',transferable:'Valor transferible'},
    toBeDiscovered:'Por descubrir', addChip:'+ Agregar',
    editorAdd:'Agregar a', editorEdit:'Editar', editorItem:'Elemento', editorHint:'Puedes agregar varios elementos separados por comas.',
    delete:'Eliminar', cancel:'Cancelar', save:'Guardar',
    reviewEyebrow:'BASE DEL PERFIL COMPLETADA',
    reviewTitle:'Esto es lo que Kadima ha descubierto sobre ti hasta ahora.',
    reviewSubtitle:'Este es tu fingerprint profesional hasta ahora. Representa cómo ves tu carrera hoy y hacia dónde quieres avanzar. Seguiremos enriqueciéndolo durante tu recorrido.',
    completionTitle:'Base del perfil completada',
    completionText:'Tu dirección profesional actual ha sido guardada. Kadima seguirá enriqueciendo tu fingerprint durante el recorrido.',
    careerPathEyebrow:'VISIÓN DE CAMINOS PROFESIONALES', careerPathTitle:'Cómo ve Kadima actualmente tus caminos profesionales',
    adjustTitle:'¿Qué te gustaría ajustar?', adjust:'Ajustar algo', looksRight:'Está correcto',
    footerTitle:'Tu perfil sigue siendo flexible', footerText:'Podrás editar o perfeccionar estos datos más adelante.', back:'Volver',
    chooseAnswer:'Elige al menos una opción para continuar.',
    progressSaved:'Tu progreso ha sido guardado.', basicRequired:'Completa la información básica de tu cuenta antes de saltar el recorrido.',
    profileSaved:'Base del perfil guardada. Lista para Experiencia.',
    pathTypes:{established:'Establecido',emerging:'Emergente',exploring:'En exploración',bridge:'Puente transferible',current:'Dirección actual'},
    pathDescriptions:{
      established:'Construido a partir de tu experiencia profesional actual y anterior.',
      emerging:'Una dirección para la que estás aprendiendo, preparándote o ampliando tu experiencia.',
      exploring:'Una dirección que Kadima debe mantener abierta mientras evoluciona tu fingerprint profesional.',
      bridge:'Experiencia que puede fortalecer oportunidades en diferentes caminos profesionales.',
      current:'Kadima seguirá refinando este camino a medida que avance tu recorrido.'
    }
  }
};

const OPTION_LABELS = {
  en: {
    experienced:'Experienced professional',early:'Early-career professional',student:'Student',firstjob:'Looking for my first job',changing:'Changing careers',returning:'Returning to the job market',
    sales:'Sales & Business',technology:'Technology',finance:'Finance',operations:'Operations',marketing:'Marketing',healthcare:'Healthcare',engineering:'Engineering',education:'Education',creative:'Creative',legal:'Legal',hospitality:'Hospitality',other:'Something else',
    newOnly:'Focus on my new field',both:'Keep both paths open',exploring:'I am still exploring',
    enterpriseSales:'Enterprise / B2B Sales',accountManagement:'Account Management',businessDevelopment:'Business Development',customerSuccess:'Customer Success',presales:'Pre-Sales',partnerships:'Partnerships',salesOps:'Sales Operations',
    software:'Software Development',dataAI:'Data & AI',cybersecurity:'Cybersecurity',product:'Product',support:'Technical Support',projectMgmt:'Project / Program Management',
    enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinational',regulated:'Regulated industry',public:'Public sector',
    buildApps:'Build applications',dataWork:'Work with data',aiWork:'Work with AI',customerWork:'Work with customers',leadPeople:'Lead people',strategy:'Work on strategy',international:'Work internationally',complexDeals:'Handle complex deals',
    technicalBase:'Technical background',businessBase:'Business understanding',customerBase:'Customer-facing experience',projectBase:'Project management',problemBase:'Problem solving',leadershipBase:'Leadership experience',
    learning:'Currently learning / training',projects:'Building projects',internship:'Internship experience',professional:'Professional experience'
  },
  pt: {
    experienced:'Profissional experiente',early:'Profissional em início de carreira',student:'Estudante',firstjob:'Buscando meu primeiro emprego',changing:'Mudando de carreira',returning:'Retornando ao mercado',
    sales:'Vendas & Negócios',technology:'Tecnologia',finance:'Finanças',operations:'Operações',marketing:'Marketing',healthcare:'Saúde',engineering:'Engenharia',education:'Educação',creative:'Criativo',legal:'Jurídico',hospitality:'Hospitalidade',other:'Outra opção',
    newOnly:'Focar apenas na nova área',both:'Manter os dois caminhos abertos',exploring:'Ainda estou explorando',
    enterpriseSales:'Vendas Enterprise / B2B',accountManagement:'Gestão de Contas',businessDevelopment:'Business Development',customerSuccess:'Customer Success',presales:'Pré-Vendas',partnerships:'Parcerias',salesOps:'Sales Operations',
    software:'Desenvolvimento de Software',dataAI:'Dados & IA',cybersecurity:'Cibersegurança',product:'Produto',support:'Suporte Técnico',projectMgmt:'Gestão de Projetos / Programas',
    enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinacional',regulated:'Indústria regulada',public:'Setor público',
    buildApps:'Construir aplicações',dataWork:'Trabalhar com dados',aiWork:'Trabalhar com IA',customerWork:'Trabalhar com clientes',leadPeople:'Liderar pessoas',strategy:'Atuar com estratégia',international:'Trabalhar internacionalmente',complexDeals:'Conduzir negócios complexos',
    technicalBase:'Background técnico',businessBase:'Visão de negócios',customerBase:'Experiência com clientes',projectBase:'Gestão de projetos',problemBase:'Resolução de problemas',leadershipBase:'Experiência em liderança',
    learning:'Aprendendo / em capacitação',projects:'Construindo projetos',internship:'Experiência de estágio',professional:'Experiência profissional'
  },
  es: {
    experienced:'Profesional con experiencia',early:'Profesional al inicio de su carrera',student:'Estudiante',firstjob:'Buscando mi primer empleo',changing:'Cambiando de carrera',returning:'Regresando al mercado laboral',
    sales:'Ventas y Negocios',technology:'Tecnología',finance:'Finanzas',operations:'Operaciones',marketing:'Marketing',healthcare:'Salud',engineering:'Ingeniería',education:'Educación',creative:'Creativo',legal:'Legal',hospitality:'Hospitalidad',other:'Otra opción',
    newOnly:'Enfocarme solo en mi nueva área',both:'Mantener ambos caminos abiertos',exploring:'Todavía estoy explorando',
    enterpriseSales:'Ventas Enterprise / B2B',accountManagement:'Gestión de Cuentas',businessDevelopment:'Business Development',customerSuccess:'Customer Success',presales:'Pre-Ventas',partnerships:'Alianzas',salesOps:'Sales Operations',
    software:'Desarrollo de Software',dataAI:'Datos e IA',cybersecurity:'Ciberseguridad',product:'Producto',support:'Soporte Técnico',projectMgmt:'Gestión de Proyectos / Programas',
    enterprise:'Enterprise',smb:'SMB',b2b:'B2B',b2c:'B2C',startup:'Startup',multinational:'Multinacional',regulated:'Industria regulada',public:'Sector público',
    buildApps:'Construir aplicaciones',dataWork:'Trabajar con datos',aiWork:'Trabajar con IA',customerWork:'Trabajar con clientes',leadPeople:'Liderar personas',strategy:'Trabajar con estrategia',international:'Trabajar internacionalmente',complexDeals:'Gestionar negocios complejos',
    technicalBase:'Background técnico',businessBase:'Visión de negocio',customerBase:'Experiencia con clientes',projectBase:'Gestión de proyectos',problemBase:'Resolución de problemas',leadershipBase:'Experiencia en liderazgo',
    learning:'Aprendiendo / capacitándome',projects:'Construyendo proyectos',internship:'Experiencia de prácticas',professional:'Experiencia profesional'
  }
};

const QUESTION_TEXT = {
  careerStage:{
    en:['Which situation best describes you today?','This determines how Kadima adapts the rest of your Profile journey.'],
    pt:['Qual situação melhor descreve você hoje?','Isso define como o Kadima adaptará o restante da sua jornada de Perfil.'],
    es:['¿Qué situación te describe mejor hoy?','Esto define cómo Kadima adaptará el resto de tu recorrido de Perfil.']
  },
  existingDomains:{
    en:['Which professional areas are part of your background?','Choose everything that genuinely represents your professional history.'],
    pt:['Quais áreas profissionais fazem parte do seu background?','Escolha tudo que realmente representa sua trajetória profissional.'],
    es:['¿Qué áreas profesionales forman parte de tu experiencia?','Elige todo lo que realmente represente tu trayectoria profesional.']
  },
  transitionIntent:{
    en:['How do you want Kadima to treat your career transition?','A career change does not mean you must abandon your previous path.'],
    pt:['Como você quer que o Kadima trate sua transição de carreira?','Uma mudança de carreira não significa que você precise abandonar sua trajetória anterior.'],
    es:['¿Cómo quieres que Kadima trate tu transición profesional?','Cambiar de carrera no significa que debas abandonar tu trayectoria anterior.']
  },
  emergingPath:{
    en:['Which new directions are you preparing for or exploring?','Select as many as needed. Kadima can maintain multiple opportunity paths.'],
    pt:['Quais novas direções você está se preparando para seguir ou explorar?','Selecione quantas forem necessárias. O Kadima pode manter múltiplos caminhos de oportunidade.'],
    es:['¿Qué nuevas direcciones estás preparando o explorando?','Selecciona todas las necesarias. Kadima puede mantener varios caminos de oportunidad.']
  },
  functionalIdentity:{
    en:['What kind of work best represents what you actually do?','Focus on function, not job title.'],
    pt:['Que tipo de trabalho melhor representa o que você realmente faz?','Pense na função real, não no nome do cargo.'],
    es:['¿Qué tipo de trabajo representa mejor lo que realmente haces?','Piensa en la función real, no en el nombre del cargo.']
  },
  context:{
    en:['In which environments have you built most of your experience?','Context can be as important as the function itself when matching opportunities.'],
    pt:['Em quais ambientes você construiu a maior parte da sua experiência?','O contexto pode ser tão importante quanto a função no match de oportunidades.'],
    es:['¿En qué entornos construiste la mayor parte de tu experiencia?','El contexto puede ser tan importante como la función al hacer matching.']
  },
  nextDirection:{
    en:['What would you like to do more of in your next opportunity?','Kadima uses this to understand career-direction fit.'],
    pt:['O que você gostaria de fazer mais na sua próxima oportunidade?','O Kadima usa isso para entender o alinhamento com sua direção de carreira.'],
    es:['¿Qué te gustaría hacer más en tu próxima oportunidad?','Kadima usa esto para comprender el ajuste con tu dirección profesional.']
  },
  transferable:{
    en:['Which parts of your background should strengthen your other career paths?','This is especially important when you are changing or expanding your career.'],
    pt:['Quais partes do seu background devem fortalecer seus outros caminhos profissionais?','Isso é especialmente importante quando você está mudando ou expandindo sua carreira.'],
    es:['¿Qué partes de tu experiencia deberían fortalecer tus otros caminos profesionales?','Esto es especialmente importante cuando cambias o amplías tu carrera.']
  },
  exposure:{
    en:['What kind of practical exposure do you already have in this direction?','Formal employment is not the only valid evidence.'],
    pt:['Que tipo de exposição prática você já possui nessa direção?','Emprego formal não é a única evidência válida.'],
    es:['¿Qué tipo de experiencia práctica ya tienes en esta dirección?','El empleo formal no es la única evidencia válida.']
  }
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




const DIMENSIONS = ["identity", "paths", "context", "direction", "transferable"];

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
    paths: [],
    context: [],
    direction: [],
    transferable: []
  },

  // Overrides for items originally inferred from questions.
  fingerprintEdits: {
    removed: [],
    renamed: {}
  },

  fingerprint: {
    identity: [],
    paths: [],
    context: [],
    direction: [],
    transferable: []
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
  careerStage: {
    type: "single",
    dimension: "identity",
    text: "Which situation best describes you today?",
    help: "This determines how Kadima adapts the rest of your Profile journey.",
    options: ["experienced", "early", "student", "firstjob", "changing", "returning"]
  },

  existingDomains: {
    type: "multi",
    dimension: "paths",
    text: "Which professional areas are part of your background?",
    help: "Choose everything that genuinely represents your professional history.",
    options: ["sales", "technology", "finance", "operations", "marketing", "healthcare", "engineering", "education", "creative", "legal", "hospitality", "other"]
  },

  transitionIntent: {
    type: "single",
    dimension: "direction",
    text: "How do you want Kadima to treat your career transition?",
    help: "A career change does not mean you must abandon your previous path.",
    options: ["newOnly", "both", "exploring", "other"]
  },

  emergingPath: {
    type: "multi",
    dimension: "paths",
    text: "Which new directions are you preparing for or exploring?",
    help: "Select as many as needed. Kadima can maintain multiple opportunity paths.",
    options: ["software", "dataAI", "cybersecurity", "product", "technology", "sales", "projectMgmt", "support", "other"]
  },

  functionalIdentity: {
    type: "multi",
    dimension: "identity",
    text: "What kind of work best represents what you actually do?",
    help: "Focus on function, not job title.",
    options: ["enterpriseSales", "accountManagement", "businessDevelopment", "customerSuccess", "presales", "partnerships", "salesOps", "software", "dataAI", "projectMgmt", "support", "other"]
  },

  context: {
    type: "multi",
    dimension: "context",
    text: "In which environments have you built most of your experience?",
    help: "Context can be as important as the function itself when matching opportunities.",
    options: ["enterprise", "smb", "b2b", "b2c", "startup", "multinational", "regulated", "public", "other"]
  },

  nextDirection: {
    type: "multi",
    dimension: "direction",
    text: "What would you like to do more of in your next opportunity?",
    help: "Kadima uses this to understand career-direction fit.",
    options: ["buildApps", "dataWork", "aiWork", "customerWork", "leadPeople", "strategy", "international", "complexDeals", "other"]
  },

  transferable: {
    type: "multi",
    dimension: "transferable",
    text: "Which parts of your background should strengthen your other career paths?",
    help: "This is especially important when you are changing or expanding your career.",
    options: ["technicalBase", "businessBase", "customerBase", "projectBase", "problemBase", "leadershipBase", "other"]
  },

  exposure: {
    type: "multi",
    dimension: "context",
    text: "What kind of practical exposure do you already have in this direction?",
    help: "Formal employment is not the only valid evidence.",
    options: ["learning", "projects", "internship", "professional", "other"]
  }
};

function displayLabel(id) {
  return optionLabel(id);
}

function semanticCareerStage() {
  if (state.careerStage) {
    return state.careerStage;
  }

  const answer = state.answers.careerStage;

  if (typeof answer === "string" && !isCustomId(answer)) {
    return answer;
  }

  return "other";
}

function semanticTransitionIntent() {
  const answer = state.answers.transitionIntent;

  if (typeof answer === "string" && !isCustomId(answer)) {
    return answer;
  }

  return "other";
}

function chooseNextQuestion() {
  const stage = semanticCareerStage();
  const a = state.answers;

  if (!a.careerStage) {
    return "careerStage";
  }

  if (["changing", "returning"].includes(stage)) {
    if (!a.existingDomains) return "existingDomains";
    if (!a.transitionIntent) return "transitionIntent";

    if (!a.emergingPath && semanticTransitionIntent() !== "newOnly") {
      return "emergingPath";
    }

    if (!a.functionalIdentity) return "functionalIdentity";
    if (!a.context) return "context";
    if (!a.transferable) return "transferable";
    if (!a.nextDirection) return "nextDirection";

    return null;
  }

  if (["student", "firstjob"].includes(stage)) {
    if (!a.emergingPath) return "emergingPath";
    if (!a.exposure) return "exposure";
    if (!a.nextDirection) return "nextDirection";

    return null;
  }

  if (!a.existingDomains) return "existingDomains";
  if (!a.functionalIdentity) return "functionalIdentity";
  if (!a.context) return "context";
  if (!a.nextDirection) return "nextDirection";

  return null;
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

  state.careerStage = saved.careerStage || "";
  state.answers = saved.answers || {};
  state.history = Array.isArray(saved.history) ? saved.history : [];
  state.currentQuestionId = saved.currentQuestionId || null;
  state.foundationReached = Boolean(saved.foundationReached);
  state.confirmed = Boolean(saved.confirmed);

  if (saved.manualFingerprint) {
    DIMENSIONS.forEach((dimension) => {
      state.manualFingerprint[dimension] = Array.isArray(saved.manualFingerprint[dimension])
        ? saved.manualFingerprint[dimension]
        : [];
    });
  }

  if (saved.fingerprintEdits) {
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

  state.fingerprint = {
    identity: [],
    paths: [],
    context: [],
    direction: [],
    transferable: []
  };

  entries.forEach((entry) => {
    state.fingerprint[entry.dimension].push(entry.label);
  });

  renderFingerprint(entries);
}

function renderFingerprint(entries = getFingerprintEntries()) {
  const containers = {
    identity: $("fpIdentity"),
    paths: $("fpPaths"),
    context: $("fpContext"),
    direction: $("fpDirection"),
    transferable: $("fpTransferable")
  };

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

function dimensionLabel(dimension) {
  return {
    identity: ui().dimensions.identity,
    paths: ui().dimensions.paths,
    context: ui().dimensions.context,
    direction: ui().dimensions.direction,
    transferable: ui().dimensions.transferable
  }[dimension] || dimension;
}

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
  questionCounter.textContent = `${currentLanguage === "pt" ? "Pergunta" : currentLanguage === "es" ? "Pregunta" : "Question"} ${state.history.length + 1}`;
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
        ? customValues.length > 0 || pendingSelection.includes("other")
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

  nextQuestionButton.disabled = pendingSelection.length === 0;
  previousQuestionButton.disabled = state.history.length === 0;
}

function handleAnswerOptionClick(question, optionId, button) {
  if (optionId === "other") {
    const hasCustom = pendingSelection.some(isCustomId);
    const currentlySelected = button.classList.contains("selected") || hasCustom;

    if (currentlySelected) {
      pendingSelection = pendingSelection.filter(
        (value) => value !== "other" && !isCustomId(value)
      );

      button.classList.remove("selected");
      otherAnswerWrap.hidden = true;
      otherAnswerInput.value = "";

      // If custom values were already committed, remove them immediately.
      if (state.answers[state.currentQuestionId]) {
        storePendingAnswer(false);
        updateFingerprintState();
        saveProfile();
      }
    } else {
      if (question.type === "single") {
        pendingSelection = [];
        answerOptions
          .querySelectorAll(".answer-option")
          .forEach((option) => option.classList.remove("selected"));
      }

      button.classList.add("selected");
      otherAnswerWrap.hidden = false;
      otherAnswerInput.focus();
    }

    nextQuestionButton.disabled = pendingSelection.length === 0;
    return;
  }

  if (question.type === "single") {
    pendingSelection = [optionId];

    answerOptions
      .querySelectorAll(".answer-option")
      .forEach((option) => option.classList.remove("selected"));

    button.classList.add("selected");
    otherAnswerWrap.hidden = true;
    otherAnswerInput.value = "";
  } else {
    button.classList.toggle("selected");

    if (button.classList.contains("selected")) {
      if (!pendingSelection.includes(optionId)) {
        pendingSelection.push(optionId);
      }
    } else {
      pendingSelection = pendingSelection.filter((value) => value !== optionId);
    }
  }

  nextQuestionButton.disabled = pendingSelection.length === 0;
}

function addOtherAnswers() {
  const values = splitCommaValues(otherAnswerInput.value);

  if (!values.length) {
    return;
  }

  // Remove any previous custom values from the current pending answer and
  // rebuild them from the comma-separated field.
  pendingSelection = pendingSelection.filter(
    (value) => value !== "other" && !isCustomId(value)
  );

  values.forEach((value) => {
    pendingSelection.push(customId(value));
  });

  const otherButton = answerOptions.querySelector('[data-option="other"]');

  if (otherButton) {
    otherButton.classList.add("selected");
  }

  nextQuestionButton.disabled = false;

  // Requirement: custom entries appear in Live Preview immediately on Add.
  storePendingAnswer(false);
  updateFingerprintState();
  saveProfile();
}

function storePendingAnswer(addToHistory = true) {
  const questionId = state.currentQuestionId;
  const question = questions[questionId];

  if (!question || !pendingSelection.length) {
    return false;
  }

  const hasCustom = pendingSelection.some(isCustomId);

  if (question.type === "single" && !hasCustom) {
    state.answers[questionId] = pendingSelection[0];
  } else {
    state.answers[questionId] = [...pendingSelection];
  }

  if (questionId === "careerStage") {
    const regular = pendingSelection.find(
      (value) => !isCustomId(value) && value !== "other"
    );

    state.careerStage = regular || "other";
  }

  if (addToHistory && !state.history.includes(questionId)) {
    state.history.push(questionId);
  }

  return true;
}

function commitCurrentAnswer() {
  if (!storePendingAnswer(true)) {
    return false;
  }

  updateFingerprintState();
  saveProfile();

  return true;
}

function goForward() {
  if (!commitCurrentAnswer()) {
    showToast(ui().chooseAnswer);
    return;
  }

  const next = chooseNextQuestion();

  if (next) {
    renderQuestion(next);
  } else {
    completeFoundation();
  }
}

function goPrevious() {
  if (!state.history.length) {
    return;
  }

  const current = state.currentQuestionId;

  if (state.history[state.history.length - 1] === current) {
    state.history.pop();
  }

  const target = state.history.pop() || "careerStage";
  renderQuestion(target);
}

function startDiscovery() {
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
  if (!careerPathCards) {
    return;
  }

  careerPathCards.innerHTML = "";

  const stage = semanticCareerStage();
  const transition = semanticTransitionIntent();

  const established = [
    ...visibleQuestionLabels("existingDomains"),
    ...visibleQuestionLabels("functionalIdentity")
  ];

  const emerging = visibleQuestionLabels("emergingPath");
  const bridge = state.fingerprint.transferable;

  function addCard(type, title, detail, cssClass) {
    const card = document.createElement("div");
    card.className = `career-path-card ${cssClass}`;

    card.innerHTML = `
      <span class="path-type">${escapeHtml(type)}</span>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(detail)}</span>
    `;

    careerPathCards.appendChild(card);
  }

  if (established.length && !["student", "firstjob"].includes(stage)) {
    addCard(
      ui().pathTypes.established,
      [...new Set(established)].slice(0, 5).join(" → "),
      ui().pathDescriptions.established,
      "established"
    );
  }

  if (emerging.length) {
    if (transition === "exploring") {
      addCard(
        ui().pathTypes.exploring,
        [...new Set(emerging)].slice(0, 5).join(" → "),
        ui().pathDescriptions.exploring,
        "exploring"
      );
    } else {
      addCard(
        ui().pathTypes.emerging,
        [...new Set(emerging)].slice(0, 5).join(" → "),
        ui().pathDescriptions.emerging,
        "emerging"
      );
    }
  }

  if (bridge.length) {
    addCard(
      ui().pathTypes.bridge,
      [...new Set(bridge)].slice(0, 5).join(" · "),
      ui().pathDescriptions.bridge,
      "emerging"
    );
  }

  if (!careerPathCards.children.length) {
    addCard(
      ui().pathTypes.current,
      state.fingerprint.paths.slice(0, 5).join(" → ") || ui().toBeDiscovered,
      ui().pathDescriptions.current,
      "exploring"
    );
  }
}

function showAdjustMenu() {
  adjustMenu.hidden = !adjustMenu.hidden;
}

function questionForDimension(dimension) {
  const stage = semanticCareerStage();

  const map = {
    identity:
      ["student", "firstjob"].includes(stage)
        ? "careerStage"
        : "functionalIdentity",

    paths:
      ["changing", "returning", "student", "firstjob"].includes(stage)
        ? "emergingPath"
        : "existingDomains",

    context:
      ["student", "firstjob"].includes(stage)
        ? "exposure"
        : "context",

    direction: "nextDirection",
    transferable: "transferable"
  };

  return questions[map[dimension]]
    ? map[dimension]
    : "careerStage";
}

function adjustDimension(dimension) {
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

  /*
    Screen 4 will be connected here.
    window.location.href = "experience.html";
  */

  showToast(ui().profileSaved);
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
  otherAnswerInput.placeholder = t.otherPlaceholder;
  addOtherAnswerButton.textContent = t.add;

  setText("livePreviewLabel", t.livePreview);
  setText("fingerprintTitle", t.fingerprintTitle);
  setText("fpIdentityLabel", t.dimensions.identity);
  setText("fpPathsLabel", t.dimensions.paths);
  setText("fpContextLabel", t.dimensions.context);
  setText("fpDirectionLabel", t.dimensions.direction);
  setText("fpTransferableLabel", t.dimensions.transferable);

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
  setText("adjustPaths", t.dimensions.paths);
  setText("adjustContext", t.dimensions.context);
  setText("adjustDirection", t.dimensions.direction);
  setText("adjustTransferable", t.dimensions.transferable);
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
