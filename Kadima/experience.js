const onboarding = safeParse(localStorage.getItem("kadimaOnboarding"), {});
const account = safeParse(localStorage.getItem("kadimaAccount"), null);
const profile = safeParse(localStorage.getItem("kadimaProfile"), {});

const currentLanguage = ["en","pt","es"].includes(onboarding.language) ? onboarding.language : "en";
const $ = id => document.getElementById(id);

const state = {
  accountId:onboarding.accountId || account?.accountId || "",
  hasExperience:null,
  experiences:[],
  editingId:null,
  activeExperienceId:null,
  completedExperienceIds:[],
  lastCompletedExperienceId:null,
  phase:"basics",
  discovery:{
    experienceIndex:0,
    questionIndex:0,
    answers:{}
  },
  draft:{
    company:"",jobTitle:"",location:"",startDate:"",endDate:"",
    present:false,type:"",relevance:""
  },
  fingerprint:{
    identity:[],capabilities:[],context:[],ownership:[],impact:[],domain:[],transferable:[],direction:[]
  },

  // Manual additions made directly in Screen 4's Live Fingerprint.
  manualFingerprint:{
    identity:[],capabilities:[],context:[],ownership:[],impact:[],domain:[],transferable:[],direction:[]
  },

  // User changes override inferred values without changing the original answers.
  fingerprintEdits:{
    removed:[],
    renamed:{}
  }
};

function safeParse(raw,fallback){try{return raw?JSON.parse(raw):fallback}catch{return fallback}}
function arr(v){return Array.isArray(v)?v:(v?[v]:[])}
function clean(v){return String(v||"").trim().replace(/\s+/g," ")}
function splitComma(v){return [...new Set(String(v||"").split(",").map(clean).filter(Boolean))]}

const TEXT={
  en:{
    heroTitle:'Your journey<br>to the best<br><span>opportunities</span>',
    heroDescription:'We want to get to know you better so we can connect you with opportunities that truly match your profile.',
    benefits:[['AI that understands you','We analyze your skills and experience to find the right opportunities.'],['Smart matches','We compare your profile with job requirements and calculate your fit.'],['Your future, now','Save time and focus on the opportunities that matter.']],
    welcome:'Welcome to Kadima!',welcomeSub:"Let's build your profile in 6 simple steps.",progress:['Welcome','Personal','Profile','Experience','Education','Skills'],skip:'Skip journey',
    eyebrow:'EXPERIENCE · STEP 4',title:"Let's understand what you've actually done.",subtitle:'No job descriptions to write. Kadima will capture what matters from each experience.',
    hasTitle:'Do you have professional experience?',hasHelp:'This can include full-time, part-time, contract, freelance, internships or volunteer work.',yes:'Yes, I have experience',no:'Not yet',
    entry:'EXPERIENCE',entryTitle:"Let's add your experience",entryHelp:"Start with the basic facts. We'll discover the meaningful details next.",
    company:'Company',job:'Job title',location:'Location',start:'Start date',end:'End date',present:'Present',
    typeTitle:'What type of experience was this?',chooseOne:'Choose one',
    types:{fulltime:'Full-time',parttime:'Part-time',contract:'Contract',freelance:'Freelance',internship:'Internship',volunteer:'Volunteer',other:'Other'},
    relevanceTitle:'How important is this experience to where you want to go next?',relevanceHelp:'This helps Kadima decide how deeply to explore it.',
    rel:{core:['Core experience','Explore this experience in depth'],relevant:['Relevant background','Capture the most useful parts'],supporting:['Supporting experience','Keep it concise']},
    clear:'Clear',save:'Save and explore',added:'added',savedTitle:'Experiences added',addAnother:'Add another experience',
    noTitle:"That's completely fine.",noText:'Kadima will use your education, projects and skills to build the rest of your fingerprint.',
    fpEyebrow:'LIVE PROFESSIONAL FINGERPRINT',fpTitle:'Your Professional Fingerprint',live:'Live',
    dims:{identity:'Identity',capabilities:'Capabilities',context:'Context',ownership:'Ownership',impact:'Impact',domain:'Domain knowledge',transferable:'Transferable value',direction:'Career direction'},
    careerPath:'Experience evidence',growing:'Growing with every answer',growingText:'Your experience enriches the same fingerprint you built in Profile.',evidenceTitle:'Experience becomes evidence',evidenceText:'Each answer is added to the same Professional Fingerprint.',completedTitle:'Experience completed',completedText:'Its evidence has been added to your Professional Fingerprint.',
    footerTitle:'Your progress is saved',footerText:'You can return to your experience later.',continue:'Continue',
    discoveryEyebrow:'EXPERIENCE DISCOVERY',discoveryTitle:"Let's understand this experience in more depth.",
    discoverySubtitle:'Kadima will explore this experience first, then let you add another one.',previous:'Previous',
    other:'Add anything Kadima missed. Separate multiple items with commas.',add:'Add',
    q:{
      relevance:['Relevance','How should Kadima treat this experience?','This controls how deeply we explore this specific experience.',[]],
      functions:['Functions','What best describes what you actually did here?','Choose everything that genuinely applies.',['Account Management','New Business','Business Development','Customer Success','Partnerships','Pre-Sales','Project Management','Technical Delivery','Software Development','Operations','Other']],
      context:['Context','Who or what did you work with most?','This helps Kadima understand the environment behind the title.',['SMB customers','Enterprise customers','C-level executives','Partners','Technical teams','International customers','Internal stakeholders','Public sector','Other']],
      ownership:['Ownership','What level of ownership did you have?','Choose the level that best reflects your real responsibility.',['Supported the work','Owned part of it','Owned it end-to-end','Led other people','Defined the strategy','Other']],
      impact:['Impact','What kind of impact did your work create?','Choose all the areas where your contribution mattered.',['Revenue','Customer growth','Retention','Cost reduction','Efficiency','Project delivery','Customer satisfaction','Product adoption','Team performance','Other']],
      tools:['Tools & knowledge','What did you work with in this experience?','Add tools, platforms, technologies, methodologies or domains.',['Salesforce','CRM','APIs','Cloud','Data & Analytics','Project Management','AI tools','ERP','Other']],
      transferable:['Transferable value','What from this experience could strengthen this professional profile?','This is especially useful for career changes or a career transition.',['Technical credibility','Business understanding','Customer-facing experience','Complex problem solving','Project management','Leadership','International experience','Industry knowledge','Other']]
    },
    pathTypes:{established:'Established',emerging:'Emerging',exploring:'Exploring',bridge:'Transferable bridge'},
    fpEmpty:'To be discovered',fpAdd:'+ Add',fpEditorAdd:'Add to',fpEditorEdit:'Edit',fpEditorItem:'Item',fpEditorHint:'You can add multiple items separated by commas.',fpDelete:'Delete',fpCancel:'Cancel',fpSave:'Save'
  },
  pt:{
    heroTitle:'Sua jornada<br>para as melhores<br><span>oportunidades</span>',
    heroDescription:'Queremos conhecer você melhor para conectá-lo a oportunidades que realmente combinam com o seu perfil.',
    benefits:[['IA que entende você','Analisamos suas habilidades e experiências para encontrar as oportunidades certas.'],['Matches inteligentes','Comparamos seu perfil com os requisitos das vagas e calculamos sua compatibilidade.'],['Seu futuro, agora','Economize tempo e foque nas oportunidades que realmente importam.']],
    welcome:'Bem-vindo ao Kadima!',welcomeSub:'Vamos construir seu perfil em 6 etapas simples.',progress:['Boas-vindas','Pessoal','Perfil','Experiência','Educação','Habilidades'],skip:'Pular jornada',
    eyebrow:'EXPERIÊNCIA · ETAPA 4',title:'Vamos entender o que você realmente fez.',subtitle:'Nada de escrever descrições de cargo. O Kadima vai captar o que realmente importa em cada experiência.',
    hasTitle:'Você possui experiência profissional?',hasHelp:'Isso pode incluir trabalho integral, parcial, contrato, freelance, estágio ou voluntariado.',yes:'Sim, tenho experiência',no:'Ainda não',
    entry:'EXPERIÊNCIA',entryTitle:'Vamos adicionar sua experiência',entryHelp:'Comece pelos dados básicos. Depois descobriremos os detalhes mais importantes.',
    company:'Empresa',job:'Cargo',location:'Localização',start:'Data de início',end:'Data de término',present:'Atual',
    typeTitle:'Qual era o tipo desta experiência?',chooseOne:'Escolha uma opção',
    types:{fulltime:'Tempo integral',parttime:'Meio período',contract:'Contrato',freelance:'Freelance',internship:'Estágio',volunteer:'Voluntariado',other:'Outro'},
    relevanceTitle:'Qual a importância desta experiência para onde você quer chegar?',relevanceHelp:'Isso ajuda o Kadima a decidir com que profundidade explorá-la.',
    rel:{core:['Experiência principal','Explorar em profundidade'],relevant:['Background relevante','Captar as partes mais úteis'],supporting:['Experiência de apoio','Manter de forma concisa']},
    clear:'Limpar',save:'Salvar e explorar',added:'adicionadas',savedTitle:'Experiências adicionadas',addAnother:'Adicionar outra experiência',
    noTitle:'Tudo bem.',noText:'O Kadima usará sua educação, projetos e habilidades para continuar construindo seu fingerprint.',
    fpEyebrow:'FINGERPRINT PROFISSIONAL AO VIVO',fpTitle:'Seu Professional Fingerprint',live:'Ao vivo',
    dims:{identity:'Identidade',capabilities:'Capacidades',context:'Contexto',ownership:'Nível de responsabilidade',impact:'Impacto',domain:'Conhecimento de domínio',transferable:'Valor transferível',direction:'Direção profissional'},
    careerPath:'Evidências da experiência',growing:'Crescendo a cada resposta',growingText:'Cada experiência enriquece o mesmo fingerprint construído no Perfil.',evidenceTitle:'Experiência vira evidência',evidenceText:'Cada resposta é adicionada ao mesmo Professional Fingerprint.',completedTitle:'Experiência concluída',completedText:'As evidências desta experiência foram adicionadas ao seu Professional Fingerprint.',
    footerTitle:'Seu progresso está salvo',footerText:'Você poderá voltar às experiências depois.',continue:'Continuar',
    discoveryEyebrow:'DESCOBERTA DA EXPERIÊNCIA',discoveryTitle:'Vamos entender esta experiência em mais profundidade.',
    discoverySubtitle:'O Kadima vai explorar esta experiência primeiro e só depois permitirá adicionar outra.',previous:'Anterior',
    other:'Adicione o que o Kadima não identificou. Separe vários itens por vírgulas.',add:'Adicionar',
    q:{
      relevance:['Relevância','Como o Kadima deve tratar esta experiência?','Isso define a profundidade da descoberta desta experiência específica.',[]],
      functions:['Funções','O que melhor descreve o que você realmente fazia aqui?','Escolha tudo que realmente se aplica.',['Gestão de Contas','Novos Negócios','Business Development','Customer Success','Parcerias','Pré-Vendas','Gestão de Projetos','Entrega Técnica','Desenvolvimento de Software','Operações','Outro']],
      context:['Contexto','Com quem ou com o que você trabalhava principalmente?','Isso ajuda o Kadima a entender o ambiente por trás do cargo.',['Clientes SMB','Clientes Enterprise','Executivos C-level','Parceiros','Times técnicos','Clientes internacionais','Stakeholders internos','Setor público','Outro']],
      ownership:['Autonomia','Qual era seu nível de responsabilidade?','Escolha o nível que melhor representa sua responsabilidade real.',['Apoiava o trabalho','Era responsável por uma parte','Responsável de ponta a ponta','Liderava outras pessoas','Definia a estratégia','Outro']],
      impact:['Impacto','Que tipo de impacto seu trabalho gerou?','Escolha todas as áreas em que sua contribuição fez diferença.',['Receita','Crescimento de clientes','Retenção','Redução de custos','Eficiência','Entrega de projetos','Satisfação do cliente','Adoção de produto','Performance do time','Outro']],
      tools:['Ferramentas e conhecimentos','Com o que você trabalhou nesta experiência?','Adicione ferramentas, plataformas, tecnologias, metodologias ou domínios.',['Salesforce','CRM','APIs','Cloud','Dados & Analytics','Gestão de Projetos','Ferramentas de IA','ERP','Outro']],
      transferable:['Valor transferível','O que desta experiência pode fortalecer este perfil profissional?','Isso é especialmente útil em mudanças de carreira ou uma transição de carreira.',['Credibilidade técnica','Visão de negócios','Experiência com clientes','Resolução de problemas complexos','Gestão de projetos','Liderança','Experiência internacional','Conhecimento de indústria','Outro']]
    },
    pathTypes:{established:'Estabelecido',emerging:'Emergente',exploring:'Em exploração',bridge:'Ponte transferível'},
    fpEmpty:'A descobrir',fpAdd:'+ Adicionar',fpEditorAdd:'Adicionar a',fpEditorEdit:'Editar',fpEditorItem:'Item',fpEditorHint:'Você pode adicionar vários itens separados por vírgulas.',fpDelete:'Excluir',fpCancel:'Cancelar',fpSave:'Salvar'
  },
  es:{
    heroTitle:'Tu camino<br>hacia las mejores<br><span>oportunidades</span>',
    heroDescription:'Queremos conocerte mejor para conectarte con oportunidades que realmente encajen con tu perfil.',
    benefits:[['IA que te entiende','Analizamos tus habilidades y experiencia para encontrar las oportunidades adecuadas.'],['Matches inteligentes','Comparamos tu perfil con los requisitos de las vacantes y calculamos tu compatibilidad.'],['Tu futuro, ahora','Ahorra tiempo y concéntrate en las oportunidades que realmente importan.']],
    welcome:'¡Bienvenido a Kadima!',welcomeSub:'Construyamos tu perfil en 6 pasos sencillos.',progress:['Bienvenida','Personal','Perfil','Experiencia','Educación','Habilidades'],skip:'Saltar recorrido',
    eyebrow:'EXPERIENCIA · PASO 4',title:'Entendamos lo que realmente has hecho.',subtitle:'Nada de escribir descripciones de puestos. Kadima captará lo que realmente importa de cada experiencia.',
    hasTitle:'¿Tienes experiencia profesional?',hasHelp:'Puede incluir tiempo completo, parcial, contrato, freelance, prácticas o voluntariado.',yes:'Sí, tengo experiencia',no:'Todavía no',
    entry:'EXPERIENCIA',entryTitle:'Agreguemos tu experiencia',entryHelp:'Comienza con los datos básicos. Después descubriremos los detalles importantes.',
    company:'Empresa',job:'Puesto',location:'Ubicación',start:'Fecha de inicio',end:'Fecha de finalización',present:'Actual',
    typeTitle:'¿Qué tipo de experiencia fue?',chooseOne:'Elige una opción',
    types:{fulltime:'Tiempo completo',parttime:'Medio tiempo',contract:'Contrato',freelance:'Freelance',internship:'Prácticas',volunteer:'Voluntariado',other:'Otro'},
    relevanceTitle:'¿Qué importancia tiene esta experiencia para tu próximo paso profesional?',relevanceHelp:'Esto ayuda a Kadima a decidir con qué profundidad explorarla.',
    rel:{core:['Experiencia principal','Explorar en profundidad'],relevant:['Background relevante','Capturar las partes más útiles'],supporting:['Experiencia de apoyo','Mantenerla concisa']},
    clear:'Limpiar',save:'Guardar y explorar',added:'agregadas',savedTitle:'Experiencias agregadas',addAnother:'Agregar otra experiencia',
    noTitle:'Está perfectamente bien.',noText:'Kadima usará tu educación, proyectos y habilidades para seguir construyendo tu fingerprint.',
    fpEyebrow:'FINGERPRINT PROFESIONAL EN VIVO',fpTitle:'Tu Professional Fingerprint',live:'En vivo',
    dims:{identity:'Identidad',capabilities:'Capacidades',context:'Contexto',ownership:'Nivel de responsabilidad',impact:'Impacto',domain:'Conocimiento de dominio',transferable:'Valor transferible',direction:'Dirección profesional'},
    careerPath:'Evidencias de la experiencia',growing:'Crece con cada respuesta',growingText:'Cada experiencia enriquece el mismo fingerprint construido en Perfil.',evidenceTitle:'La experiencia se convierte en evidencia',evidenceText:'Cada respuesta se agrega al mismo Professional Fingerprint.',completedTitle:'Experiencia completada',completedText:'La evidencia de esta experiencia fue agregada a tu Professional Fingerprint.',
    footerTitle:'Tu progreso está guardado',footerText:'Podrás volver a tus experiencias más adelante.',continue:'Continuar',
    discoveryEyebrow:'DESCUBRIMIENTO DE EXPERIENCIA',discoveryTitle:'Entendamos esta experiencia con más profundidad.',
    discoverySubtitle:'Kadima explorará primero esta experiencia y solo después te permitirá agregar otra.',previous:'Anterior',
    other:'Agrega lo que Kadima no haya identificado. Separa varios elementos con comas.',add:'Agregar',
    q:{
      relevance:['Relevancia','¿Cómo debe tratar Kadima esta experiencia?','Esto define la profundidad del descubrimiento de esta experiencia específica.',[]],
      functions:['Funciones','¿Qué describe mejor lo que realmente hacías aquí?','Elige todo lo que realmente corresponda.',['Gestión de Cuentas','Nuevos Negocios','Business Development','Customer Success','Alianzas','Pre-Ventas','Gestión de Proyectos','Entrega Técnica','Desarrollo de Software','Operaciones','Otro']],
      context:['Contexto','¿Con quién o con qué trabajabas principalmente?','Esto ayuda a Kadima a entender el entorno detrás del puesto.',['Clientes SMB','Clientes Enterprise','Ejecutivos C-level','Socios','Equipos técnicos','Clientes internacionales','Stakeholders internos','Sector público','Otro']],
      ownership:['Responsabilidad','¿Qué nivel de responsabilidad tenías?','Elige el nivel que mejor refleje tu responsabilidad real.',['Apoyaba el trabajo','Responsable de una parte','Responsable de principio a fin','Lideraba a otras personas','Definía la estrategia','Otro']],
      impact:['Impacto','¿Qué tipo de impacto generó tu trabajo?','Elige todas las áreas donde tu contribución marcó diferencia.',['Ingresos','Crecimiento de clientes','Retención','Reducción de costos','Eficiencia','Entrega de proyectos','Satisfacción del cliente','Adopción de producto','Rendimiento del equipo','Otro']],
      tools:['Herramientas y conocimientos','¿Con qué trabajaste en esta experiencia?','Agrega herramientas, plataformas, tecnologías, metodologías o dominios.',['Salesforce','CRM','APIs','Cloud','Datos & Analytics','Gestión de Proyectos','Herramientas de IA','ERP','Otro']],
      transferable:['Valor transferible','¿Qué de esta experiencia puede fortalecer este perfil profesional?','Es especialmente útil en cambios de carrera o una transición de carrera.',['Credibilidad técnica','Visión de negocio','Experiencia con clientes','Resolución de problemas complejos','Gestión de proyectos','Liderazgo','Experiencia internacional','Conocimiento de industria','Otro']]
    },
    pathTypes:{established:'Establecido',emerging:'Emergente',exploring:'En exploración',bridge:'Puente transferible'},
    fpEmpty:'Por descubrir',fpAdd:'+ Agregar',fpEditorAdd:'Agregar a',fpEditorEdit:'Editar',fpEditorItem:'Elemento',fpEditorHint:'Puedes agregar varios elementos separados por comas.',fpDelete:'Eliminar',fpCancel:'Cancelar',fpSave:'Guardar'
  }
};

const t=()=>TEXT[currentLanguage]||TEXT.en;

const els={
  skip:$("skipButton"),yes:$("hasExperienceYes"),no:$("hasExperienceNo"),
  form:$("experienceFormSection"),saved:$("savedExperiencesSection"),noPanel:$("noExperiencePanel"),
  company:$("companyInput"),job:$("jobTitleInput"),location:$("locationInput"),
  start:$("startDateInput"),end:$("endDateInput"),present:$("presentCheckbox"),
  typeOptions:$("experienceTypeOptions"),relevanceOptions:$("relevanceOptions"),
  clear:$("clearExperienceButton"),save:$("saveExperienceButton"),addAnother:$("addAnotherExperienceButton"),
  savedList:$("savedExperiencesList"),continue:$("continueButton"),toast:$("toast"),
  discovery:$("experienceDiscoverySection"),dCompany:$("discoveryCompany"),dRole:$("discoveryRole"),
  dCategory:$("discoveryQuestionCategory"),dQuestion:$("discoveryQuestionText"),dHelp:$("discoveryQuestionHelp"),
  dOptions:$("discoveryAnswerOptions"),dOtherWrap:$("discoveryOtherWrap"),dOtherInput:$("discoveryOtherInput"),
  dOtherAdd:$("discoveryOtherAddButton"),dPrev:$("discoveryPreviousButton"),dNext:$("discoveryNextButton")
};


const fingerprintEditor=$("fingerprintEditor");
const fingerprintEditorTitle=$("fingerprintEditorTitle");
const fingerprintEditorInput=$("fingerprintEditorInput");
const fingerprintEditorLabel=$("fingerprintEditorLabel");
const fingerprintEditorHint=$("fingerprintEditorHint");
const deleteFingerprintItemButton=$("deleteFingerprintItemButton");
const cancelFingerprintEditorButton=$("cancelFingerprintEditorButton");
const saveFingerprintItemButton=$("saveFingerprintItemButton");
const closeFingerprintEditorButton=$("closeFingerprintEditorButton");

let fingerprintEditorState=null;

const discoveryOrder=["functions","context","ownership","impact","tools","transferable"];
let pendingDiscovery=[];
let lastUpdatedFingerprintDimension=null;
let fingerprintStatusTimer=null;

function setText(id,v){const el=$(id);if(el)el.textContent=v}

function applyLanguage(){
  const x=t();
  document.documentElement.lang=currentLanguage==="pt"?"pt-BR":currentLanguage;
  $("heroTitle").innerHTML=x.heroTitle;setText("heroDescription",x.heroDescription);
  x.benefits.forEach((b,i)=>{setText(`benefit${i+1}Title`,b[0]);setText(`benefit${i+1}Text`,b[1])});
  setText("welcomeTitle",x.welcome);setText("welcomeSubtitle",x.welcomeSub);
  document.querySelectorAll("[data-progress-label]").forEach((el,i)=>el.textContent=x.progress[i]);
  els.skip.textContent=x.skip;
  setText("experienceEyebrow",x.eyebrow);setText("experienceTitle",x.title);setText("experienceSubtitle",x.subtitle);
  setText("hasExperienceTitle",x.hasTitle);setText("hasExperienceHelp",x.hasHelp);setText("hasExperienceYesText",x.yes);setText("hasExperienceNoText",x.no);
  setText("experienceEntryTitle",x.entryTitle);setText("experienceEntryHelp",x.entryHelp);
  setText("companyLabel",x.company+" *");setText("jobTitleLabel",x.job+" *");setText("locationLabel",x.location);
  setText("startDateLabel",x.start+" *");setText("endDateLabel",x.end);setText("presentText",x.present);
  setText("experienceTypeTitle",x.typeTitle);setText("experienceTypeHelp",x.chooseOne);
  document.querySelectorAll("[data-type]").forEach(b=>b.textContent=x.types[b.dataset.type]);
  setText("relevanceTitle",x.relevanceTitle);setText("relevanceHelp",x.relevanceHelp);
  Object.entries(x.rel).forEach(([k,v])=>{const b=document.querySelector(`[data-relevance="${k}"]`);if(b){b.querySelector("strong").textContent=v[0];b.querySelector("span").textContent=v[1]}});
  setText("clearExperienceText",x.clear);setText("saveExperienceText",x.save);setText("savedExperiencesTitle",x.savedTitle);setText("addAnotherExperienceText",x.addAnother);
  setText("noExperienceTitle",x.noTitle);setText("noExperienceText",x.noText);
  setText("previewEyebrow",x.fpEyebrow);setText("previewTitle",x.fpTitle);setText("liveText",x.live);
  setText("fpIdentityLabel",x.dims.identity);setText("fpCapabilitiesLabel",x.dims.capabilities);setText("fpContextLabel",x.dims.context);setText("fpOwnershipLabel",x.dims.ownership);setText("fpImpactLabel",x.dims.impact);setText("fpDomainLabel",x.dims.domain);setText("fpTransferableLabel",x.dims.transferable);setText("fpDirectionLabel",x.dims.direction);
  setText("evidenceMiniTitle",x.evidenceTitle);setText("evidenceMiniText",x.evidenceText);setText("experienceCompletedTitle",x.completedTitle);setText("experienceCompletedText",x.completedText);setText("previewNoteTitle",x.growing);setText("previewNoteText",x.growingText);
  setText("footerNoteTitle",x.footerTitle);setText("footerNoteText",x.footerText);setText("continueButtonText",x.continue);
  setText("discoveryEyebrow",x.discoveryEyebrow);setText("discoveryTitle",x.discoveryTitle);setText("discoverySubtitle",x.discoverySubtitle);
  setText("discoveryPreviousText",x.previous);setText("discoveryNextText",x.continue);setText("discoveryOtherLabel",x.other);els.dOtherAdd.textContent=x.add;
  setText("fingerprintEditorLabel",x.fpEditorItem);
  setText("fingerprintEditorHint",x.fpEditorHint);
  deleteFingerprintItemButton.textContent=x.fpDelete;
  cancelFingerprintEditorButton.textContent=x.fpCancel;
  saveFingerprintItemButton.textContent=x.fpSave;
}

function restore(){
  const saved=safeParse(localStorage.getItem("kadimaExperience"),null);
  if(!saved)return;
  if(saved.accountId&&state.accountId&&saved.accountId!==state.accountId)return;
  Object.assign(state,saved);

  state.manualFingerprint=state.manualFingerprint||{
    identity:[],capabilities:[],context:[],ownership:[],impact:[],domain:[],transferable:[],direction:[]
  };

  ["identity","capabilities","context","ownership","impact","domain","transferable","direction"].forEach(dim=>{
    if(!Array.isArray(state.manualFingerprint[dim])) state.manualFingerprint[dim]=[];
  });

  state.completedExperienceIds=Array.isArray(state.completedExperienceIds)?state.completedExperienceIds:[];
  state.activeExperienceId=state.activeExperienceId||null;
  state.lastCompletedExperienceId=state.lastCompletedExperienceId||null;
  state.fingerprintEdits=state.fingerprintEdits||{removed:[],renamed:{}};
  if(!Array.isArray(state.fingerprintEdits.removed)) state.fingerprintEdits.removed=[];
  if(!state.fingerprintEdits.renamed||typeof state.fingerprintEdits.renamed!=="object") state.fingerprintEdits.renamed={};
}

function syncDraft(){
  state.draft.company=els.company.value.trim();state.draft.jobTitle=els.job.value.trim();state.draft.location=els.location.value.trim();
  state.draft.startDate=els.start.value;state.draft.endDate=els.end.value;state.draft.present=els.present.checked;
}

function saveState(){
  syncDraft();
  localStorage.setItem("kadimaExperience",JSON.stringify({...state,language:currentLanguage}));
}


function makeEntry(dimension,label,sourceKey,source,meta={}){
  return {dimension,label:clean(label),sourceKey,source,...meta};
}

function buildBaseFingerprintEntries(){
  const entries=[];
  const dimensions=["identity","capabilities","context","ownership","impact","domain","transferable","direction"];
  const profileFp=profile?.fingerprint||{};

  dimensions.forEach(dim=>{
    arr(profileFp[dim]).forEach((label,index)=>{
      entries.push(makeEntry(dim,label,`profile|${dim}|${index}|${clean(label).toLowerCase()}`,"profile",{origin:"profile"}));
    });
  });

  const mapping={functions:"capabilities",context:"context",ownership:"ownership",impact:"impact",tools:"domain",transferable:"transferable"};
  state.experiences.forEach(exp=>{
    const answers=state.discovery.answers?.[exp.id]||{};
    Object.entries(mapping).forEach(([question,dimension])=>{
      arr(answers[question]).forEach(label=>{
        const normalized=clean(label);
        if(!normalized) return;
        entries.push(makeEntry(dimension,normalized,`discovery|${exp.id}|${question}|${normalized.toLowerCase()}`,"discovery",{experienceId:exp.id,question}));
      });
    });
  });
  return entries;
}

function applyFingerprintEdits(entries){
  const removed=new Set(state.fingerprintEdits.removed||[]);
  const renamed=state.fingerprintEdits.renamed||{};
  const output=[];

  entries.forEach(entry=>{
    if(removed.has(entry.sourceKey)) return;

    output.push({
      ...entry,
      label:renamed[entry.sourceKey]||entry.label
    });
  });

  ["identity","capabilities","context","ownership","impact","domain","transferable","direction"].forEach(dim=>{
    arr(state.manualFingerprint[dim]).forEach(item=>{
      output.push(makeEntry(
        dim,
        item.label,
        `manual|${dim}|${item.id}`,
        "manual",
        {manualId:item.id}
      ));
    });
  });

  const seen=new Set();

  return output.filter(entry=>{
    const key=`${entry.dimension}|${clean(entry.label).toLowerCase()}`;
    if(!entry.label||seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function currentFingerprintEntries(){
  return applyFingerprintEdits(buildBaseFingerprintEntries());
}

function initFingerprint(){
  const entries=currentFingerprintEntries();

  state.fingerprint={
    identity:[],capabilities:[],context:[],ownership:[],impact:[],domain:[],transferable:[],direction:[]
  };

  entries.forEach(entry=>{
    state.fingerprint[entry.dimension].push(entry.label);
  });
}

function dimensionName(dim){
  return t().dims[dim]||dim;
}

function discoveryDimensionForQuestion(key){
  return ({functions:"capabilities",context:"context",ownership:"ownership",impact:"impact",tools:"domain",transferable:"transferable"})[key]||null;
}

function showFingerprintUpdated(dimension){
  if(!dimension)return;
  lastUpdatedFingerprintDimension=dimension;
  const status=$("fingerprintUpdateStatus");
  if(status){
    const prefix=currentLanguage==="pt"?"Atualizado no Fingerprint":currentLanguage==="es"?"Actualizado en el Fingerprint":"Updated in Fingerprint";
    status.textContent=`✓ ${prefix}: ${dimensionName(dimension)}`;
    status.hidden=false;
    status.classList.remove("pulse");
    void status.offsetWidth;
    status.classList.add("pulse");
    clearTimeout(fingerprintStatusTimer);
    fingerprintStatusTimer=setTimeout(()=>{status.classList.remove("pulse")},1300);
  }
}

function renderFingerprint(){
  const map={identity:"fpIdentityValues",capabilities:"fpCapabilitiesValues",context:"fpContextValues",ownership:"fpOwnershipValues",impact:"fpImpactValues",domain:"fpDomainValues",transferable:"fpTransferableValues",direction:"fpDirectionValues"};

  const entries=currentFingerprintEntries();

  Object.entries(map).forEach(([dim,id])=>{
    const container=$(id);
    container.innerHTML="";

    const dimensionEntries=entries.filter(entry=>entry.dimension===dim);
    const group=container.closest(".fingerprint-group");
    if(group){
      group.classList.toggle("is-empty",!dimensionEntries.length);
      group.classList.toggle("just-updated",dim===lastUpdatedFingerprintDimension);
    }

    if(!dimensionEntries.length){
      const empty=document.createElement("span");
      empty.className="fp-empty-text";
      empty.textContent=t().fpEmpty;
      container.appendChild(empty);
    }

    dimensionEntries.forEach(entry=>{
      const chip=document.createElement("button");
      chip.type="button";
      chip.className="fp-chip";

      const label=document.createElement("span");
      label.textContent=entry.label;

      const editMark=document.createElement("span");
      editMark.className="fp-edit-mark";
      editMark.textContent="✎";

      chip.append(label,editMark);
      chip.addEventListener("click",()=>openFingerprintEditorForEdit(entry));
      container.appendChild(chip);
    });

    const add=document.createElement("button");
    add.type="button";
    add.className="fp-add-button";
    add.textContent=t().fpAdd;
    add.addEventListener("click",()=>openFingerprintEditorForAdd(dim));
    container.appendChild(add);
  });

  initFingerprint();

}

function openFingerprintEditorForAdd(dimension){
  fingerprintEditorState={mode:"add",dimension};
  fingerprintEditorTitle.textContent=`${t().fpEditorAdd} ${dimensionName(dimension)}`;
  fingerprintEditorInput.value="";
  deleteFingerprintItemButton.hidden=true;
  fingerprintEditor.hidden=false;
  fingerprintEditorInput.focus();
}

function openFingerprintEditorForEdit(entry){
  fingerprintEditorState={mode:"edit",entry};
  fingerprintEditorTitle.textContent=`${t().fpEditorEdit} ${dimensionName(entry.dimension)}`;
  fingerprintEditorInput.value=entry.label;
  deleteFingerprintItemButton.hidden=false;
  fingerprintEditor.hidden=false;
  fingerprintEditorInput.focus();
  fingerprintEditorInput.select();
}

function closeFingerprintEditor(){
  fingerprintEditor.hidden=true;
  fingerprintEditorInput.value="";
  fingerprintEditorState=null;
}

function addManualFingerprintItems(dimension,values){
  const existing=new Set(
    currentFingerprintEntries()
      .filter(entry=>entry.dimension===dimension)
      .map(entry=>clean(entry.label).toLowerCase())
  );

  values.forEach(label=>{
    const normalized=clean(label);

    if(!normalized||existing.has(normalized.toLowerCase())) return;

    state.manualFingerprint[dimension].push({
      id:`fp_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,
      label:normalized,
      addedFrom:"experience_live_fingerprint"
    });

    existing.add(normalized.toLowerCase());
  });
}

function saveFingerprintEditor(){
  if(!fingerprintEditorState) return;

  const values=splitComma(fingerprintEditorInput.value);
  if(!values.length) return;

  if(fingerprintEditorState.mode==="add"){
    addManualFingerprintItems(fingerprintEditorState.dimension,values);
  }else{
    const entry=fingerprintEditorState.entry;
    const first=values[0];

    if(entry.source==="manual"){
      const item=state.manualFingerprint[entry.dimension]
        .find(value=>value.id===entry.manualId);

      if(item) item.label=first;
    }else{
      // User-confirmed edit overrides the inferred value.
      state.fingerprintEdits.renamed[entry.sourceKey]=first;
    }

    if(values.length>1){
      addManualFingerprintItems(entry.dimension,values.slice(1));
    }
  }

  initFingerprint();
  renderFingerprint();
  saveState();
  closeFingerprintEditor();
}

function deleteFingerprintItem(){
  if(!fingerprintEditorState||fingerprintEditorState.mode!=="edit") return;

  const entry=fingerprintEditorState.entry;

  if(entry.source==="manual"){
    state.manualFingerprint[entry.dimension]=state.manualFingerprint[entry.dimension]
      .filter(value=>value.id!==entry.manualId);
  }else if(!state.fingerprintEdits.removed.includes(entry.sourceKey)){
    // Removing a derived chip does not erase the source answer.
    // It records a user override for the cumulative fingerprint.
    state.fingerprintEdits.removed.push(entry.sourceKey);
  }

  initFingerprint();
  renderFingerprint();
  saveState();
  closeFingerprintEditor();
}

function renderCareerPathMini(){}

function validateDraft(){
  syncDraft();
  els.save.disabled=!(state.draft.company&&state.draft.jobTitle&&state.draft.startDate&&state.draft.type);
}

function populateDraft(){
  els.company.value=state.draft.company||"";els.job.value=state.draft.jobTitle||"";els.location.value=state.draft.location||"";
  els.start.value=state.draft.startDate||"";els.end.value=state.draft.endDate||"";els.present.checked=!!state.draft.present;els.end.disabled=!!state.draft.present;
  document.querySelectorAll("[data-type]").forEach(b=>b.classList.toggle("selected",b.dataset.type===state.draft.type));
  document.querySelectorAll("[data-relevance]").forEach(b=>b.classList.toggle("selected",b.dataset.relevance===state.draft.relevance));
  validateDraft();
}

function selectChoice(yes){
  state.hasExperience=yes;els.yes.classList.toggle("selected",yes);els.no.classList.toggle("selected",!yes);
  els.form.hidden=!yes;els.noPanel.hidden=yes;els.saved.hidden=true;state.phase=yes?"basics":"ready";
  refreshContinue();saveState();
}

function selectType(v){state.draft.type=v;document.querySelectorAll("[data-type]").forEach(b=>b.classList.toggle("selected",b.dataset.type===v));validateDraft();saveState()}
function selectRel(v){state.draft.relevance=v;document.querySelectorAll("[data-relevance]").forEach(b=>b.classList.toggle("selected",b.dataset.relevance===v));validateDraft();saveState()}

function clearDraft(){
  state.editingId=null;state.draft={company:"",jobTitle:"",location:"",startDate:"",endDate:"",present:false,type:"",relevance:""};populateDraft();updateEntryLabel();saveState()
}

function updateEntryLabel(){
  const n=state.editingId?Math.max(1,state.experiences.findIndex(e=>e.id===state.editingId)+1):state.experiences.length+1;
  $("experienceEntryLabel").textContent=`${t().entry} ${n}`;
}

function saveExperience(){
  validateDraft();if(els.save.disabled)return;
  const exp={id:state.editingId||`exp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,...state.draft,relevance:""};
  const idx=state.experiences.findIndex(e=>e.id===exp.id);
  if(idx>=0)state.experiences[idx]=exp;else state.experiences.push(exp);
  state.editingId=null;
  state.draft={company:"",jobTitle:"",location:"",startDate:"",endDate:"",present:false,type:"",relevance:""};
  populateDraft();renderSaved();
  startDiscoveryFor(exp.id);
}

function renderSaved(){
  els.savedList.innerHTML="";
  state.experiences.forEach(exp=>{
    const card=document.createElement("div");card.className="saved-experience-card";
    const copy=document.createElement("div");copy.innerHTML=`<strong>${escapeHtml(exp.company)}</strong><span>${escapeHtml(exp.jobTitle)}</span><small>${[exp.startDate,exp.present?t().present:exp.endDate,t().types[exp.type],exp.location].filter(Boolean).map(escapeHtml).join(" · ")}</small>`;
    const actions=document.createElement("div");actions.className="saved-experience-actions";
    const edit=document.createElement("button");edit.type="button";edit.textContent="✎";edit.onclick=()=>editExperience(exp.id);
    const del=document.createElement("button");del.type="button";del.textContent="×";del.onclick=()=>deleteExperience(exp.id);
    actions.append(edit,del);card.append(copy,actions);els.savedList.appendChild(card);
  });
  const ready=state.phase==="ready"&&state.experiences.length>0;
  els.saved.hidden=!ready;
  $("experienceCompletedBanner").hidden=!(ready&&state.lastCompletedExperienceId);
  $("experienceCountBadge").textContent=`${state.experiences.length} ${t().added}`;
}

function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]))}

function deleteExperience(id){
  state.experiences=state.experiences.filter(x=>x.id!==id);
  delete state.discovery.answers[id];
  state.completedExperienceIds=state.completedExperienceIds.filter(x=>x!==id);
  if(state.lastCompletedExperienceId===id)state.lastCompletedExperienceId=null;
  state.phase=state.experiences.length?"ready":"basics";
  initFingerprint();renderFingerprint();renderSaved();refreshContinue();saveState();
}

function editExperience(id){
  const e=state.experiences.find(x=>x.id===id);if(!e)return;
  state.editingId=id;state.draft={...e};state.phase="basics";
  document.querySelector(".experience-choice-card")?.classList.add("flow-locked");
  els.form.hidden=false;els.saved.hidden=true;populateDraft();updateEntryLabel();refreshContinue();saveState();
}

function refreshContinue(){
  const allComplete=state.experiences.length>0&&state.experiences.every(exp=>state.completedExperienceIds.includes(exp.id));
  els.continue.disabled=!(state.hasExperience===false||(state.hasExperience===true&&allComplete&&state.phase==="ready"));
}

function getRelevanceKey(expId){
  const value=arr(state.discovery.answers?.[expId]?.relevance)[0];
  return ["core","relevant","supporting"].includes(value)?value:"";
}

function discoverySequence(expId){
  const relevance=getRelevanceKey(expId);
  if(relevance==="core")return ["relevance","functions","context","ownership","impact","tools","transferable"];
  if(relevance==="relevant")return ["relevance","functions","context","ownership","impact","transferable"];
  if(relevance==="supporting")return ["relevance","functions","transferable"];
  return ["relevance"];
}

function startDiscoveryFor(expId){
  const idx=state.experiences.findIndex(exp=>exp.id===expId);if(idx<0)return;
  state.phase="discovery";state.activeExperienceId=expId;state.discovery.experienceIndex=idx;state.discovery.questionIndex=0;
  const layout=document.querySelector(".experience-layout");
  document.querySelector(".experience-choice-card")?.classList.add("flow-locked");
  layout?.classList.add("discovery-mode");
  document.querySelector(".experience-choice-card").hidden=true;
  els.form.hidden=true;els.saved.hidden=true;els.noPanel.hidden=true;
  els.discovery.hidden=false;refreshContinue();saveState();renderDiscovery();
}

function currentExperience(){return state.experiences.find(exp=>exp.id===state.activeExperienceId)||state.experiences[state.discovery.experienceIndex]}
function currentQuestionKey(){const exp=currentExperience();return exp?discoverySequence(exp.id)[state.discovery.questionIndex]:null}

function questionOptions(key){
  if(key==="relevance") return [
    {value:"core",label:t().rel.core[0],help:t().rel.core[1]},
    {value:"relevant",label:t().rel.relevant[0],help:t().rel.relevant[1]},
    {value:"supporting",label:t().rel.supporting[0],help:t().rel.supporting[1]}
  ];
  const q=t().q[key];
  return q[3].map(label=>({value:label,label,other:label===q[3][q[3].length-1]}));
}

function renderDiscovery(){
  const exp=currentExperience();if(!exp){els.discovery.hidden=true;return}
  const seq=discoverySequence(exp.id);
  if(state.discovery.questionIndex>=seq.length)state.discovery.questionIndex=Math.max(0,seq.length-1);
  const key=seq[state.discovery.questionIndex];const q=t().q[key];
  els.dCompany.textContent=exp.company;els.dRole.textContent=exp.jobTitle;
  els.dCategory.textContent=q[0];els.dQuestion.textContent=q[1];els.dHelp.textContent=q[2];
  $("discoveryProgress").textContent=`${state.discovery.questionIndex+1}/${seq.length}`;
  const stored=arr(state.discovery.answers?.[exp.id]?.[key]);pendingDiscovery=[...stored];
  els.dOptions.innerHTML="";els.dOtherWrap.hidden=true;els.dOtherInput.value="";
  const options=questionOptions(key);
  const standardValues=new Set(options.filter(o=>!o.other).map(o=>o.value));

  options.forEach(option=>{
    const b=document.createElement("button");b.type="button";b.className=`discovery-option ${key==="relevance"?"":"multi"}`;
    b.textContent=option.help?`${option.label} — ${option.help}`:option.label;
    if(!option.other&&stored.includes(option.value))b.classList.add("selected");
    b.onclick=()=>{
      if(option.other){els.dOtherWrap.hidden=!els.dOtherWrap.hidden;if(!els.dOtherWrap.hidden)els.dOtherInput.focus();return}
      if(key==="relevance") pendingDiscovery=[option.value];
      else if(pendingDiscovery.includes(option.value)) pendingDiscovery=pendingDiscovery.filter(v=>v!==option.value);
      else pendingDiscovery.push(option.value);
      persistCurrentDiscoveryAnswer();renderDiscovery();
    };
    els.dOptions.appendChild(b);
  });

  stored.filter(value=>!standardValues.has(value)&&!["core","relevant","supporting"].includes(value)).forEach(value=>{
    const b=document.createElement("button");b.type="button";b.className="discovery-option multi selected discovery-custom-option";b.textContent=value;
    b.onclick=()=>{pendingDiscovery=pendingDiscovery.filter(v=>v!==value);persistCurrentDiscoveryAnswer();renderDiscovery()};
    els.dOptions.appendChild(b);
  });

  els.dNext.disabled=!pendingDiscovery.length;
  els.dPrev.disabled=state.discovery.questionIndex===0;
}

function persistCurrentDiscoveryAnswer(){
  const exp=currentExperience();const key=currentQuestionKey();if(!exp||!key)return;
  state.discovery.answers[exp.id]=state.discovery.answers[exp.id]||{};
  state.discovery.answers[exp.id][key]=[...pendingDiscovery];
  lastUpdatedFingerprintDimension=discoveryDimensionForQuestion(key);
  initFingerprint();renderFingerprint();showFingerprintUpdated(lastUpdatedFingerprintDimension);saveState();
}

function addDiscoveryOther(){
  const vals=splitComma(els.dOtherInput.value);if(!vals.length)return;
  vals.forEach(v=>{if(!pendingDiscovery.some(x=>clean(x).toLowerCase()===clean(v).toLowerCase()))pendingDiscovery.push(v)});
  els.dOtherInput.value="";persistCurrentDiscoveryAnswer();renderDiscovery();
}

function commitDiscovery(){
  const exp=currentExperience();const key=currentQuestionKey();if(!exp||!key||!pendingDiscovery.length)return false;
  persistCurrentDiscoveryAnswer();return true;
}

function nextDiscovery(){
  if(!commitDiscovery())return;
  const exp=currentExperience();const seq=discoverySequence(exp.id);
  if(state.discovery.questionIndex<seq.length-1){state.discovery.questionIndex++;renderDiscovery();return}
  completeCurrentExperience();
}

function previousDiscovery(){
  persistCurrentDiscoveryAnswer();
  if(state.discovery.questionIndex>0)state.discovery.questionIndex--;
  renderDiscovery();
}

function completeCurrentExperience(){
  const exp=currentExperience();if(!exp)return;
  if(!state.completedExperienceIds.includes(exp.id))state.completedExperienceIds.push(exp.id);
  state.lastCompletedExperienceId=exp.id;state.activeExperienceId=null;state.phase="ready";
  const layout=document.querySelector(".experience-layout");
  layout?.classList.remove("discovery-mode");
  els.discovery.hidden=true;
  const choice=document.querySelector(".experience-choice-card");
  choice?.classList.add("flow-locked");
  if(choice)choice.hidden=false;
  els.form.hidden=true;initFingerprint();renderFingerprint();renderSaved();refreshContinue();saveState();
}

function beginAnotherExperience(){
  state.phase="basics";state.lastCompletedExperienceId=null;clearDraft();
  const layout=document.querySelector(".experience-layout");layout?.classList.remove("discovery-mode");
  const choice=document.querySelector(".experience-choice-card");choice?.classList.add("flow-locked");if(choice)choice.hidden=false;
  els.saved.hidden=true;els.form.hidden=false;refreshContinue();saveState();
}

function restoreVisual(){
  const choice=document.querySelector(".experience-choice-card");
  if(state.hasExperience===true){els.yes.classList.add("selected")}
  if(state.hasExperience===false){els.no.classList.add("selected");els.noPanel.hidden=false}
  const layout=document.querySelector(".experience-layout");
  if(state.phase==="discovery"&&state.activeExperienceId&&state.experiences.some(e=>e.id===state.activeExperienceId)){
    choice?.classList.add("flow-locked");if(choice)choice.hidden=true;
    els.form.hidden=true;els.saved.hidden=true;els.noPanel.hidden=true;
    layout?.classList.add("discovery-mode");els.discovery.hidden=false;
    initFingerprint();renderFingerprint();renderDiscovery();refreshContinue();return;
  }
  layout?.classList.remove("discovery-mode");if(choice)choice.hidden=false;els.discovery.hidden=true;
  if(state.hasExperience===true&&state.experiences.length){choice?.classList.add("flow-locked")}
  const ready=state.hasExperience===true&&state.experiences.length&&state.experiences.every(e=>state.completedExperienceIds.includes(e.id));
  if(ready){state.phase="ready";els.form.hidden=true}else if(state.hasExperience===true){els.form.hidden=false}
  renderSaved();populateDraft();updateEntryLabel();refreshContinue();initFingerprint();renderFingerprint();
}

function showToast(m){els.toast.textContent=m;els.toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>els.toast.classList.remove("show"),2200)}

applyLanguage();restore();restoreVisual();

els.skip.onclick=()=>{saveState();showToast(t().footerTitle)};
els.yes.onclick=()=>selectChoice(true);els.no.onclick=()=>selectChoice(false);
document.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>selectType(b.dataset.type));
[els.company,els.job,els.location,els.start,els.end].forEach(i=>i.oninput=()=>{validateDraft();saveState()});
els.present.onchange=()=>{els.end.disabled=els.present.checked;if(els.present.checked)els.end.value="";validateDraft();saveState()};
els.clear.onclick=clearDraft;els.save.onclick=saveExperience;els.addAnother.onclick=beginAnotherExperience;
els.continue.onclick=()=>{if(els.continue.disabled)return;saveState();showToast(t().footerTitle)};
els.dOtherAdd.onclick=addDiscoveryOther;els.dNext.onclick=nextDiscovery;els.dPrev.onclick=previousDiscovery;


saveFingerprintItemButton.addEventListener("click",saveFingerprintEditor);
deleteFingerprintItemButton.addEventListener("click",deleteFingerprintItem);
cancelFingerprintEditorButton.addEventListener("click",closeFingerprintEditor);
closeFingerprintEditorButton.addEventListener("click",closeFingerprintEditor);

fingerprintEditorInput.addEventListener("keydown",event=>{
  if(event.key==="Enter") saveFingerprintEditor();
  if(event.key==="Escape") closeFingerprintEditor();
});
