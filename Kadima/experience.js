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
    identity:[],paths:[],context:[],direction:[],transferable:[]
  },

  // Manual additions made directly in Screen 4's Live Fingerprint.
  manualFingerprint:{
    identity:[],paths:[],context:[],direction:[],transferable:[]
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
    clear:'Clear',save:'Save and continue',added:'added',savedTitle:'Experiences added',addAnother:'Add another experience',
    noTitle:"That's completely fine.",noText:'Kadima will use your education, projects and skills to build the rest of your fingerprint.',
    fpEyebrow:'LIVE PROFESSIONAL FINGERPRINT',fpTitle:'Your Professional Fingerprint',live:'Live',
    dims:{identity:'Identity',paths:'Career paths',context:'Context',direction:'Direction',transferable:'Transferable value'},
    careerPath:'Career Path Evolution',growing:'Growing with every answer',growingText:'Your experience will enrich the fingerprint you built in Profile.',
    footerTitle:'Your progress is saved',footerText:'You can return to your experience later.',continue:'Continue',
    discoveryEyebrow:'EXPERIENCE DISCOVERY',discoveryTitle:"Let's understand this experience in more depth.",
    discoverySubtitle:'Kadima will ask only what is useful for this experience and your career paths.',previous:'Previous',
    other:'Add anything Kadima missed. Separate multiple items with commas.',add:'Add',
    q:{
      functions:['Functions','What best describes what you actually did here?','Choose everything that genuinely applies.',['Account Management','New Business','Business Development','Customer Success','Partnerships','Pre-Sales','Project Management','Technical Delivery','Software Development','Operations','Other']],
      context:['Context','Who or what did you work with most?','This helps Kadima understand the environment behind the title.',['SMB customers','Enterprise customers','C-level executives','Partners','Technical teams','International customers','Internal stakeholders','Public sector','Other']],
      ownership:['Ownership','What level of ownership did you have?','Choose the level that best reflects your real responsibility.',['Supported the work','Owned part of it','Owned it end-to-end','Led other people','Defined the strategy','Other']],
      impact:['Impact','What kind of impact did your work create?','Choose all the areas where your contribution mattered.',['Revenue','Customer growth','Retention','Cost reduction','Efficiency','Project delivery','Customer satisfaction','Product adoption','Team performance','Other']],
      tools:['Tools & knowledge','What did you work with in this experience?','Add tools, platforms, technologies, methodologies or domains.',['Salesforce','CRM','APIs','Cloud','Data & Analytics','Project Management','AI tools','ERP','Other']],
      transferable:['Transferable value','What from this experience could strengthen another career path?','This is especially useful for career changes or multiple career paths.',['Technical credibility','Business understanding','Customer-facing experience','Complex problem solving','Project management','Leadership','International experience','Industry knowledge','Other']]
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
    clear:'Limpar',save:'Salvar e continuar',added:'adicionadas',savedTitle:'Experiências adicionadas',addAnother:'Adicionar outra experiência',
    noTitle:'Tudo bem.',noText:'O Kadima usará sua educação, projetos e habilidades para continuar construindo seu fingerprint.',
    fpEyebrow:'FINGERPRINT PROFISSIONAL AO VIVO',fpTitle:'Seu Professional Fingerprint',live:'Ao vivo',
    dims:{identity:'Identidade',paths:'Caminhos profissionais',context:'Contexto',direction:'Direção',transferable:'Valor transferível'},
    careerPath:'Evolução dos Caminhos Profissionais',growing:'Crescendo a cada resposta',growingText:'Suas experiências vão enriquecer o fingerprint construído no Perfil.',
    footerTitle:'Seu progresso está salvo',footerText:'Você poderá voltar às experiências depois.',continue:'Continuar',
    discoveryEyebrow:'DESCOBERTA DA EXPERIÊNCIA',discoveryTitle:'Vamos entender esta experiência em mais profundidade.',
    discoverySubtitle:'O Kadima perguntará apenas o que for útil para esta experiência e seus caminhos profissionais.',previous:'Anterior',
    other:'Adicione o que o Kadima não identificou. Separe vários itens por vírgulas.',add:'Adicionar',
    q:{
      functions:['Funções','O que melhor descreve o que você realmente fazia aqui?','Escolha tudo que realmente se aplica.',['Gestão de Contas','Novos Negócios','Business Development','Customer Success','Parcerias','Pré-Vendas','Gestão de Projetos','Entrega Técnica','Desenvolvimento de Software','Operações','Outro']],
      context:['Contexto','Com quem ou com o que você trabalhava principalmente?','Isso ajuda o Kadima a entender o ambiente por trás do cargo.',['Clientes SMB','Clientes Enterprise','Executivos C-level','Parceiros','Times técnicos','Clientes internacionais','Stakeholders internos','Setor público','Outro']],
      ownership:['Autonomia','Qual era seu nível de responsabilidade?','Escolha o nível que melhor representa sua responsabilidade real.',['Apoiava o trabalho','Era responsável por uma parte','Responsável de ponta a ponta','Liderava outras pessoas','Definia a estratégia','Outro']],
      impact:['Impacto','Que tipo de impacto seu trabalho gerou?','Escolha todas as áreas em que sua contribuição fez diferença.',['Receita','Crescimento de clientes','Retenção','Redução de custos','Eficiência','Entrega de projetos','Satisfação do cliente','Adoção de produto','Performance do time','Outro']],
      tools:['Ferramentas e conhecimentos','Com o que você trabalhou nesta experiência?','Adicione ferramentas, plataformas, tecnologias, metodologias ou domínios.',['Salesforce','CRM','APIs','Cloud','Dados & Analytics','Gestão de Projetos','Ferramentas de IA','ERP','Outro']],
      transferable:['Valor transferível','O que desta experiência pode fortalecer outro caminho profissional?','Isso é especialmente útil em mudanças de carreira ou múltiplos caminhos.',['Credibilidade técnica','Visão de negócios','Experiência com clientes','Resolução de problemas complexos','Gestão de projetos','Liderança','Experiência internacional','Conhecimento de indústria','Outro']]
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
    clear:'Limpiar',save:'Guardar y continuar',added:'agregadas',savedTitle:'Experiencias agregadas',addAnother:'Agregar otra experiencia',
    noTitle:'Está perfectamente bien.',noText:'Kadima usará tu educación, proyectos y habilidades para seguir construyendo tu fingerprint.',
    fpEyebrow:'FINGERPRINT PROFESIONAL EN VIVO',fpTitle:'Tu Professional Fingerprint',live:'En vivo',
    dims:{identity:'Identidad',paths:'Caminos profesionales',context:'Contexto',direction:'Dirección',transferable:'Valor transferible'},
    careerPath:'Evolución de Caminos Profesionales',growing:'Crece con cada respuesta',growingText:'Tus experiencias enriquecerán el fingerprint construido en Perfil.',
    footerTitle:'Tu progreso está guardado',footerText:'Podrás volver a tus experiencias más adelante.',continue:'Continuar',
    discoveryEyebrow:'DESCUBRIMIENTO DE EXPERIENCIA',discoveryTitle:'Entendamos esta experiencia con más profundidad.',
    discoverySubtitle:'Kadima preguntará solo lo que sea útil para esta experiencia y tus caminos profesionales.',previous:'Anterior',
    other:'Agrega lo que Kadima no haya identificado. Separa varios elementos con comas.',add:'Agregar',
    q:{
      functions:['Funciones','¿Qué describe mejor lo que realmente hacías aquí?','Elige todo lo que realmente corresponda.',['Gestión de Cuentas','Nuevos Negocios','Business Development','Customer Success','Alianzas','Pre-Ventas','Gestión de Proyectos','Entrega Técnica','Desarrollo de Software','Operaciones','Otro']],
      context:['Contexto','¿Con quién o con qué trabajabas principalmente?','Esto ayuda a Kadima a entender el entorno detrás del puesto.',['Clientes SMB','Clientes Enterprise','Ejecutivos C-level','Socios','Equipos técnicos','Clientes internacionales','Stakeholders internos','Sector público','Otro']],
      ownership:['Responsabilidad','¿Qué nivel de responsabilidad tenías?','Elige el nivel que mejor refleje tu responsabilidad real.',['Apoyaba el trabajo','Responsable de una parte','Responsable de principio a fin','Lideraba a otras personas','Definía la estrategia','Otro']],
      impact:['Impacto','¿Qué tipo de impacto generó tu trabajo?','Elige todas las áreas donde tu contribución marcó diferencia.',['Ingresos','Crecimiento de clientes','Retención','Reducción de costos','Eficiencia','Entrega de proyectos','Satisfacción del cliente','Adopción de producto','Rendimiento del equipo','Otro']],
      tools:['Herramientas y conocimientos','¿Con qué trabajaste en esta experiencia?','Agrega herramientas, plataformas, tecnologías, metodologías o dominios.',['Salesforce','CRM','APIs','Cloud','Datos & Analytics','Gestión de Proyectos','Herramientas de IA','ERP','Otro']],
      transferable:['Valor transferible','¿Qué de esta experiencia puede fortalecer otro camino profesional?','Es especialmente útil en cambios de carrera o múltiples caminos.',['Credibilidad técnica','Visión de negocio','Experiencia con clientes','Resolución de problemas complejos','Gestión de proyectos','Liderazgo','Experiencia internacional','Conocimiento de industria','Otro']]
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
  setText("fpIdentityLabel",x.dims.identity);setText("fpPathsLabel",x.dims.paths);setText("fpContextLabel",x.dims.context);setText("fpDirectionLabel",x.dims.direction);setText("fpTransferableLabel",x.dims.transferable);
  setText("careerPathMiniTitle",x.careerPath);setText("previewNoteTitle",x.growing);setText("previewNoteText",x.growingText);
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
    identity:[],paths:[],context:[],direction:[],transferable:[]
  };

  ["identity","paths","context","direction","transferable"].forEach(dim=>{
    if(!Array.isArray(state.manualFingerprint[dim])) state.manualFingerprint[dim]=[];
  });

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

  const profileFp=profile?.fingerprint||{};
  ["identity","paths","context","direction","transferable"].forEach(dim=>{
    arr(profileFp[dim]).forEach((label,index)=>{
      entries.push(makeEntry(
        dim,
        label,
        `profile|${dim}|${index}|${clean(label).toLowerCase()}`,
        "profile",
        {origin:"profile"}
      ));
    });
  });

  state.experiences.forEach(exp=>{
    if(exp.jobTitle){
      entries.push(makeEntry("identity",exp.jobTitle,`experience|${exp.id}|jobTitle`,"experience",{experienceId:exp.id}));
    }

    if(exp.type){
      entries.push(makeEntry("context",t().types[exp.type]||exp.type,`experience|${exp.id}|type`,"experience",{experienceId:exp.id}));
    }

    if(exp.location){
      entries.push(makeEntry("context",exp.location,`experience|${exp.id}|location`,"experience",{experienceId:exp.id}));
    }

    const answers=state.discovery.answers?.[exp.id]||{};

    arr(answers.functions).forEach((label,index)=>{
      entries.push(makeEntry("identity",label,`discovery|${exp.id}|functions|${index}`,"discovery",{experienceId:exp.id,question:"functions"}));
    });

    arr(answers.context).forEach((label,index)=>{
      entries.push(makeEntry("context",label,`discovery|${exp.id}|context|${index}`,"discovery",{experienceId:exp.id,question:"context"}));
    });

    arr(answers.ownership).forEach((label,index)=>{
      entries.push(makeEntry("transferable",label,`discovery|${exp.id}|ownership|${index}`,"discovery",{experienceId:exp.id,question:"ownership"}));
    });

    arr(answers.impact).forEach((label,index)=>{
      entries.push(makeEntry("direction",label,`discovery|${exp.id}|impact|${index}`,"discovery",{experienceId:exp.id,question:"impact"}));
    });

    arr(answers.tools).forEach((label,index)=>{
      entries.push(makeEntry("context",label,`discovery|${exp.id}|tools|${index}`,"discovery",{experienceId:exp.id,question:"tools"}));
    });

    arr(answers.transferable).forEach((label,index)=>{
      entries.push(makeEntry("transferable",label,`discovery|${exp.id}|transferable|${index}`,"discovery",{experienceId:exp.id,question:"transferable"}));
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

  ["identity","paths","context","direction","transferable"].forEach(dim=>{
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
    identity:[],paths:[],context:[],direction:[],transferable:[]
  };

  entries.forEach(entry=>{
    state.fingerprint[entry.dimension].push(entry.label);
  });
}

function dimensionName(dim){
  return t().dims[dim]||dim;
}

function renderFingerprint(){
  const map={
    identity:"fpIdentityValues",
    paths:"fpPathsValues",
    context:"fpContextValues",
    direction:"fpDirectionValues",
    transferable:"fpTransferableValues"
  };

  const entries=currentFingerprintEntries();

  Object.entries(map).forEach(([dim,id])=>{
    const container=$(id);
    container.innerHTML="";

    const dimensionEntries=entries.filter(entry=>entry.dimension===dim);

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
  renderCareerPathMini();
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

function renderCareerPathMini(){
  const wrap=$("careerPathMiniCards");wrap.innerHTML="";
  const paths=state.fingerprint.paths.slice(0,6);
  if(!paths.length)return;
  const card=document.createElement("div");card.className="career-path-mini-card";
  const type=document.createElement("span");type.textContent=t().pathTypes.established;
  const value=document.createElement("strong");value.textContent=paths.join(" → ");
  card.append(type,value);wrap.appendChild(card);
  if(state.fingerprint.transferable.length){
    const bridge=document.createElement("div");bridge.className="career-path-mini-card";
    const bt=document.createElement("span");bt.textContent=t().pathTypes.bridge;
    const bv=document.createElement("strong");bv.textContent=state.fingerprint.transferable.slice(0,5).join(" · ");
    bridge.append(bt,bv);wrap.appendChild(bridge);
  }
}

function validateDraft(){
  syncDraft();
  els.save.disabled=!(state.draft.company&&state.draft.jobTitle&&state.draft.startDate&&state.draft.type&&state.draft.relevance);
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
  els.form.hidden=!yes;els.noPanel.hidden=yes;els.saved.hidden=!yes||!state.experiences.length;
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
  const exp={id:state.editingId||`exp_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,...state.draft};
  const idx=state.experiences.findIndex(e=>e.id===exp.id);if(idx>=0)state.experiences[idx]=exp;else state.experiences.push(exp);
  clearDraft();renderSaved();initFingerprint();renderFingerprint();refreshContinue();saveState();
}

function renderSaved(){
  els.savedList.innerHTML="";
  state.experiences.forEach(exp=>{
    const card=document.createElement("div");card.className="saved-experience-card";
    const copy=document.createElement("div");copy.innerHTML=`<strong>${exp.company}</strong><span>${exp.jobTitle}</span><small>${[exp.startDate,exp.present?t().present:exp.endDate,t().types[exp.type],exp.location].filter(Boolean).join(" · ")}</small>`;
    const actions=document.createElement("div");actions.className="saved-experience-actions";
    const edit=document.createElement("button");edit.type="button";edit.textContent="✎";edit.onclick=()=>editExperience(exp.id);
    const del=document.createElement("button");del.type="button";del.textContent="×";del.onclick=()=>{state.experiences=state.experiences.filter(x=>x.id!==exp.id);renderSaved();initFingerprint();renderFingerprint();refreshContinue();saveState()};
    actions.append(edit,del);card.append(copy,actions);els.savedList.appendChild(card)
  });
  els.saved.hidden=!state.experiences.length;
  $("experienceCountBadge").textContent=`${state.experiences.length} ${t().added}`;
}

function editExperience(id){const e=state.experiences.find(x=>x.id===id);if(!e)return;state.editingId=id;state.draft={...e};els.form.hidden=false;populateDraft();updateEntryLabel()}

function refreshContinue(){els.continue.disabled=!(state.hasExperience===false||(state.hasExperience===true&&state.experiences.length>0))}

function startDiscovery(){
  if(state.hasExperience===false){return}
  state.phase="discovery";state.discovery.experienceIndex=0;state.discovery.questionIndex=0;
  els.discovery.hidden=false;document.querySelector(".experience-layout").hidden=true;renderDiscovery();
}

function currentExperience(){return state.experiences[state.discovery.experienceIndex]}
function currentQuestionKey(){return discoveryOrder[state.discovery.questionIndex]}

function renderDiscovery(){
  const exp=currentExperience();if(!exp){els.discovery.hidden=true;return}
  const key=currentQuestionKey();const q=t().q[key];
  els.dCompany.textContent=exp.company;els.dRole.textContent=exp.jobTitle;
  els.dCategory.textContent=q[0];els.dQuestion.textContent=q[1];els.dHelp.textContent=q[2];
  $("discoveryProgress").textContent=`${state.discovery.experienceIndex+1}/${state.experiences.length} · ${state.discovery.questionIndex+1}/${discoveryOrder.length}`;
  const stored=arr(state.discovery.answers?.[exp.id]?.[key]);pendingDiscovery=[...stored];
  els.dOptions.innerHTML="";els.dOtherWrap.hidden=true;els.dOtherInput.value="";
  q[3].forEach(option=>{
    const b=document.createElement("button");b.type="button";b.className="discovery-option multi";b.textContent=option;
    if(stored.includes(option))b.classList.add("selected");
    b.onclick=()=>{
      if(option===q[3][q[3].length-1]){els.dOtherWrap.hidden=!els.dOtherWrap.hidden;if(!els.dOtherWrap.hidden)els.dOtherInput.focus()}
      b.classList.toggle("selected");
      if(b.classList.contains("selected")){if(!pendingDiscovery.includes(option))pendingDiscovery.push(option)}
      else pendingDiscovery=pendingDiscovery.filter(v=>v!==option);
      els.dNext.disabled=!pendingDiscovery.length;
    };
    els.dOptions.appendChild(b)
  });
  els.dNext.disabled=!pendingDiscovery.length;
  els.dPrev.disabled=state.discovery.experienceIndex===0&&state.discovery.questionIndex===0;
}

function addDiscoveryOther(){
  const vals=splitComma(els.dOtherInput.value);if(!vals.length)return;
  pendingDiscovery=pendingDiscovery.filter(v=>v!=="Other"&&v!=="Outro");
  vals.forEach(v=>{if(!pendingDiscovery.includes(v))pendingDiscovery.push(v)});
  els.dNext.disabled=false;
}

function commitDiscovery(){
  const exp=currentExperience();const key=currentQuestionKey();
  if(!exp||!pendingDiscovery.length)return false;
  state.discovery.answers[exp.id]=state.discovery.answers[exp.id]||{};
  state.discovery.answers[exp.id][key]=[...pendingDiscovery];
  return true;
}

function nextDiscovery(){
  if(!commitDiscovery())return;
  initFingerprint();renderFingerprint();saveState();
  if(state.discovery.questionIndex<discoveryOrder.length-1){state.discovery.questionIndex++}
  else if(state.discovery.experienceIndex<state.experiences.length-1){state.discovery.experienceIndex++;state.discovery.questionIndex=0}
  else{
    state.phase="complete";els.discovery.hidden=true;document.querySelector(".experience-layout").hidden=false;
    els.continue.disabled=false;saveState();return
  }
  renderDiscovery();
}

function previousDiscovery(){
  if(state.discovery.questionIndex>0)state.discovery.questionIndex--;
  else if(state.discovery.experienceIndex>0){state.discovery.experienceIndex--;state.discovery.questionIndex=discoveryOrder.length-1}
  renderDiscovery()
}

function restoreVisual(){
  if(state.hasExperience===true){els.yes.classList.add("selected");els.form.hidden=false}
  if(state.hasExperience===false){els.no.classList.add("selected");els.noPanel.hidden=false}
  renderSaved();populateDraft();updateEntryLabel();refreshContinue();
  initFingerprint();renderFingerprint();
}

function showToast(m){els.toast.textContent=m;els.toast.classList.add("show");clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>els.toast.classList.remove("show"),2200)}

applyLanguage();restore();restoreVisual();

els.skip.onclick=()=>{saveState();showToast(t().footerTitle)};
els.yes.onclick=()=>selectChoice(true);els.no.onclick=()=>selectChoice(false);
document.querySelectorAll("[data-type]").forEach(b=>b.onclick=()=>selectType(b.dataset.type));
document.querySelectorAll("[data-relevance]").forEach(b=>b.onclick=()=>selectRel(b.dataset.relevance));
[els.company,els.job,els.location,els.start,els.end].forEach(i=>i.oninput=()=>{validateDraft();saveState()});
els.present.onchange=()=>{els.end.disabled=els.present.checked;if(els.present.checked)els.end.value="";validateDraft();saveState()};
els.clear.onclick=clearDraft;els.save.onclick=saveExperience;els.addAnother.onclick=()=>{clearDraft();els.form.hidden=false};
els.continue.onclick=()=>{if(els.continue.disabled)return;if(state.hasExperience===true&&state.experiences.length){startDiscovery()}else{saveState();showToast(t().footerTitle)}};
els.dOtherAdd.onclick=addDiscoveryOther;els.dNext.onclick=nextDiscovery;els.dPrev.onclick=previousDiscovery;


saveFingerprintItemButton.addEventListener("click",saveFingerprintEditor);
deleteFingerprintItemButton.addEventListener("click",deleteFingerprintItem);
cancelFingerprintEditorButton.addEventListener("click",closeFingerprintEditor);
closeFingerprintEditorButton.addEventListener("click",closeFingerprintEditor);

fingerprintEditorInput.addEventListener("keydown",event=>{
  if(event.key==="Enter") saveFingerprintEditor();
  if(event.key==="Escape") closeFingerprintEditor();
});
