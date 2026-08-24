const state = {
  firstName: "",
  lastName: "",
  email: ""
};

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const continueButton = document.getElementById("continueButton");
const backButton = document.getElementById("backButton");
const skipButton = document.getElementById("skipButton");

if (skipButton) {
  skipButton.remove(); // Screen 2 has no Skip Journey
}
const toast = document.getElementById("toast");


let currentLanguage = "en";

const personalText = {
  en: {
    heroTitle: 'Your journey<br>to the best<br><span>opportunities</span>',
    heroDescription: 'We want to get to know you better so we can connect you with opportunities that truly match your profile.',
    benefit1Title:'AI that understands you', benefit1Text:'We analyze your skills and experience to find the right opportunities.',
    benefit2Title:'Smart matches', benefit2Text:'We compare your profile with job requirements and calculate your fit.',
    benefit3Title:'Your future, now', benefit3Text:'Save time and focus on the opportunities that matter.',
    welcome:'Welcome to Kadima!', welcomeSub:"Let's build your profile in 6 simple steps.",
    progress:['Welcome','Personal','Profile','Experience','Education','Skills'],
    skip:'Skip journey', pageTitle:"Let's get to know you", pageSub:'Start with your basic information. 👋',
    nameTitle:"What's your full name?", nameHelp:"This is how we'll call you.", first:'First name', last:'Last name',
    emailTitle:"What's your email address?", emailHelp:"We'll use this to keep in touch and to access your Kadima account.",
    why:'Why we ask this?', why1:'Personalized experience', why1t:'We tailor opportunities just for you.',
    why2:'100% secure', why2t:'Your information is protected.', why3:'Faster matches', why3t:'Complete profile = better results.',
    secure:'Your data is safe with us', secureText:'We use secure practices to protect your personal information.',
    back:'Back', continue:'Continue',
    nameRequired:'First name and last name are required.', fullName:'Please enter your full name.',
    emailRequired:'Email address is required.', validEmail:'Please enter a valid email address.',
    complete:'Please complete your full name and enter a valid email.', saved:'Personal information saved.',
    step1:'Complete language and location before skipping the journey.', later:'You can complete your profile later.', accountReady:'Your Kadima account is ready. Your progress will be saved.'
  },
  pt: {
    heroTitle:'Sua jornada<br>para as melhores<br><span>oportunidades</span>',
    heroDescription:'Queremos conhecer você melhor para conectá-lo a oportunidades que realmente combinam com o seu perfil.',
    benefit1Title:'IA que entende você', benefit1Text:'Analisamos suas habilidades e experiências para encontrar as oportunidades certas.',
    benefit2Title:'Matches inteligentes', benefit2Text:'Comparamos seu perfil com os requisitos das vagas e calculamos sua compatibilidade.',
    benefit3Title:'Seu futuro, agora', benefit3Text:'Economize tempo e foque nas oportunidades que realmente importam.',
    welcome:'Bem-vindo ao Kadima!', welcomeSub:'Vamos construir seu perfil em 6 etapas simples.',
    progress:['Boas-vindas','Pessoal','Perfil','Experiência','Educação','Habilidades'],
    skip:'Pular jornada', pageTitle:'Vamos conhecer você', pageSub:'Comece com suas informações básicas. 👋',
    nameTitle:'Qual é o seu nome completo?', nameHelp:'É assim que vamos chamar você.', first:'Nome', last:'Sobrenome',
    emailTitle:'Qual é o seu endereço de e-mail?', emailHelp:'Usaremos este e-mail para manter contato e acessar sua conta Kadima.',
    why:'Por que perguntamos isso?', why1:'Experiência personalizada', why1t:'Personalizamos as oportunidades para você.',
    why2:'100% seguro', why2t:'Suas informações estão protegidas.', why3:'Matches mais rápidos', why3t:'Perfil completo = melhores resultados.',
    secure:'Seus dados estão seguros conosco', secureText:'Usamos práticas seguras para proteger suas informações pessoais.',
    back:'Voltar', continue:'Continuar',
    nameRequired:'Nome e sobrenome são obrigatórios.', fullName:'Informe seu nome completo.',
    emailRequired:'O endereço de e-mail é obrigatório.', validEmail:'Informe um endereço de e-mail válido.',
    complete:'Preencha seu nome completo e informe um e-mail válido.', saved:'Informações pessoais salvas.',
    step1:'Preencha idioma e localização antes de pular a jornada.', later:'Você pode completar seu perfil depois.', accountReady:'Sua conta Kadima está pronta. Seu progresso será salvo.'
  },
  es: {
    heroTitle:'Tu camino<br>hacia las mejores<br><span>oportunidades</span>',
    heroDescription:'Queremos conocerte mejor para conectarte con oportunidades que realmente encajen con tu perfil.',
    benefit1Title:'IA que te entiende', benefit1Text:'Analizamos tus habilidades y experiencia para encontrar las oportunidades adecuadas.',
    benefit2Title:'Matches inteligentes', benefit2Text:'Comparamos tu perfil con los requisitos de las vacantes y calculamos tu compatibilidad.',
    benefit3Title:'Tu futuro, ahora', benefit3Text:'Ahorra tiempo y concéntrate en las oportunidades que realmente importan.',
    welcome:'¡Bienvenido a Kadima!', welcomeSub:'Construyamos tu perfil en 6 pasos sencillos.',
    progress:['Bienvenida','Personal','Perfil','Experiencia','Educación','Habilidades'],
    skip:'Saltar recorrido', pageTitle:'Vamos a conocerte', pageSub:'Comienza con tu información básica. 👋',
    nameTitle:'¿Cuál es tu nombre completo?', nameHelp:'Así es como te llamaremos.', first:'Nombre', last:'Apellido',
    emailTitle:'¿Cuál es tu correo electrónico?', emailHelp:'Usaremos este correo para mantenernos en contacto y acceder a tu cuenta Kadima.',
    why:'¿Por qué preguntamos esto?', why1:'Experiencia personalizada', why1t:'Adaptamos las oportunidades especialmente para ti.',
    why2:'100% seguro', why2t:'Tu información está protegida.', why3:'Matches más rápidos', why3t:'Perfil completo = mejores resultados.',
    secure:'Tus datos están seguros con nosotros', secureText:'Utilizamos prácticas seguras para proteger tu información personal.',
    back:'Volver', continue:'Continuar',
    nameRequired:'El nombre y el apellido son obligatorios.', fullName:'Ingresa tu nombre completo.',
    emailRequired:'El correo electrónico es obligatorio.', validEmail:'Ingresa un correo electrónico válido.',
    complete:'Completa tu nombre e ingresa un correo válido.', saved:'Información personal guardada.',
    step1:'Completa idioma y ubicación antes de saltar el recorrido.', later:'Puedes completar tu perfil más tarde.', accountReady:'Tu cuenta Kadima está lista. Tu progreso se guardará.'
  }
};

function pt() {
  return personalText[currentLanguage] || personalText.en;
}

function setPersonalLanguage(language) {
  currentLanguage = ['en','pt','es'].includes(language) ? language : 'en';
  const t = pt();
  document.documentElement.lang = currentLanguage === 'pt' ? 'pt-BR' : currentLanguage;

  const setText=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v;};
  const setHTML=(id,v)=>{const e=document.getElementById(id);if(e)e.innerHTML=v;};

  setHTML('heroTitle',t.heroTitle); setText('heroDescription',t.heroDescription);
  setText('benefit1Title',t.benefit1Title); setText('benefit1Text',t.benefit1Text);
  setText('benefit2Title',t.benefit2Title); setText('benefit2Text',t.benefit2Text);
  setText('benefit3Title',t.benefit3Title); setText('benefit3Text',t.benefit3Text);
  setText('welcomeTitle',t.welcome); setText('welcomeSubtitle',t.welcomeSub);
  setText('personalPageTitle',t.pageTitle); setText('personalPageSubtitle',t.pageSub);
  setText('nameQuestionTitle',t.nameTitle); setText('nameQuestionHelp',t.nameHelp);
  setText('emailQuestionTitle',t.emailTitle); setText('emailQuestionHelp',t.emailHelp);
  setText('whyTitle',t.why); setText('why1Title',t.why1); setText('why1Text',t.why1t);
  setText('why2Title',t.why2); setText('why2Text',t.why2t); setText('why3Title',t.why3); setText('why3Text',t.why3t);
  setText('secureNoteTitle',t.secure); setText('secureNoteText',t.secureText);

  firstNameInput.placeholder=t.first;
  lastNameInput.placeholder=t.last;
  skipButton.textContent=t.skip;
  backButton.querySelector('span').textContent=t.back;
  continueButton.firstChild.textContent=t.continue+' ';

  document.querySelectorAll('.progress .progress-item > span').forEach((el,i)=>{if(t.progress[i])el.textContent=t.progress[i];});
}

function clean(value) {
  return value.trim().replace(/\s+/g, " ");
}

function validEmail(email) {
  const normalized = clean(email).toLowerCase();

  if (!normalized || normalized.length > 254) {
    return false;
  }

  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalized);
}

function fullNameReady() {
  return clean(state.firstName).length >= 2 && clean(state.lastName).length >= 2;
}

function pageReady() {
  return fullNameReady() && validEmail(state.email);
}

function savePersonalInfo() {
  const personalInfo = {
    firstName: clean(state.firstName),
    lastName: clean(state.lastName),
    fullName: `${clean(state.firstName)} ${clean(state.lastName)}`.trim(),
    email: clean(state.email).toLowerCase()
  };

  localStorage.setItem("kadimaPersonalInfo", JSON.stringify(personalInfo));
}


function getOnboardingData() {
  try {
    return JSON.parse(localStorage.getItem("kadimaOnboarding") || "{}");
  } catch {
    return {};
  }
}

function onboardingReady() {
  const onboarding = getOnboardingData();

  return Boolean(
    onboarding.language &&
    String(onboarding.location || "").trim() &&
    String(onboarding.countryCode || "").trim()
  );
}

function generatePrototypeAccountId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `kadima_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

/*
  PROTOTYPE ACCOUNT CREATION

  In production this becomes a backend call after Screen 1 + Screen 2
  have been validated. The backend will create the real account and return
  an authenticated account/user ID.
*/
function ensureKadimaAccount() {
  if (!onboardingReady() || !pageReady()) {
    return null;
  }

  const onboarding = getOnboardingData();
  const email = clean(state.email).toLowerCase();

  let account = null;

  try {
    account = JSON.parse(localStorage.getItem("kadimaAccount") || "null");
  } catch {
    account = null;
  }

  // Do not silently reuse a different account just because it exists
  // in this browser's prototype storage.
  if (!account || account.email !== email) {
    account = {
      accountId: generatePrototypeAccountId(),
      email,
      createdAt: new Date().toISOString()
    };
  }

  account.firstName = clean(state.firstName);
  account.lastName = clean(state.lastName);
  account.fullName = `${account.firstName} ${account.lastName}`.trim();
  account.language = onboarding.language;
  account.location = onboarding.location;
  account.countryCode = onboarding.countryCode;
  account.updatedAt = new Date().toISOString();
  account.status = "onboarding";

  localStorage.setItem("kadimaAccount", JSON.stringify(account));

  // Associate the active journey with this account.
  onboarding.accountId = account.accountId;
  onboarding.accountCreated = true;
  localStorage.setItem("kadimaOnboarding", JSON.stringify(onboarding));

  return account;
}

function accountReady() {
  // An old account in localStorage must never unlock Skip on a fresh Screen 2.
  if (!pageReady() || !onboardingReady()) {
    return false;
  }

  const onboarding = getOnboardingData();

  if (!onboarding.accountCreated || !onboarding.accountId) {
    return false;
  }

  try {
    const account = JSON.parse(localStorage.getItem("kadimaAccount") || "null");

    return Boolean(
      account &&
      account.accountId === onboarding.accountId &&
      clean(account.firstName) === clean(state.firstName) &&
      clean(account.lastName) === clean(state.lastName) &&
      clean(account.email).toLowerCase() === clean(state.email).toLowerCase()
    );
  } catch {
    return false;
  }
}

function updateValidation(showErrors = false) {
  const firstName = clean(state.firstName);
  const lastName = clean(state.lastName);
  const email = clean(state.email);

  const basicsReady = pageReady() && onboardingReady();

  continueButton.disabled = !basicsReady;

  // Skip is locked until ALL mandatory Screen 2 fields are valid.
  if (!basicsReady) {
    skipButton.disabled = true;
    return;
  }

  ensureKadimaAccount();
  skipButton.disabled = !accountReady();

  if (showErrors || firstName || lastName) {
    if (!firstName || !lastName) {
      nameError.textContent = pt().nameRequired;
    } else if (firstName.length < 2 || lastName.length < 2) {
      nameError.textContent = pt().fullName;
    } else {
      nameError.textContent = "";
    }
  } else {
    nameError.textContent = "";
  }

  if (showErrors || email) {
    if (!email) {
      emailError.textContent = pt().emailRequired;
    } else if (!validEmail(email)) {
      emailError.textContent = pt().validEmail;
    } else {
      emailError.textContent = "";
    }
  } else {
    emailError.textContent = "";
  }
}

function syncState() {
  state.firstName = firstNameInput.value;
  state.lastName = lastNameInput.value;
  state.email = emailInput.value;

  updateValidation(false);

  if (pageReady()) {
    savePersonalInfo();
  }
}

firstNameInput.addEventListener("input", syncState);
lastNameInput.addEventListener("input", syncState);
emailInput.addEventListener("input", syncState);

[firstNameInput, lastNameInput, emailInput].forEach((input) => {
  input.addEventListener("blur", () => updateValidation(true));
});

continueButton.addEventListener("click", () => {
  syncState();
  updateValidation(true);

  if (!pageReady() || !onboardingReady()) {
    showToast(pt().complete);
    return;
  }

  savePersonalInfo();

  const account = ensureKadimaAccount();

  if (!account) {
    showToast(pt().complete);
    return;
  }

  showToast(pt().accountReady);
  window.location.href = "profile.html";
});

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

skipButton.addEventListener("click", () => {
  syncState();
  updateValidation(true);

  if (!pageReady() || !onboardingReady()) {
    showToast(pt().complete);
    return;
  }

  savePersonalInfo();

  const account = ensureKadimaAccount();

  if (!account) {
    showToast(pt().complete);
    return;
  }

  showToast(pt().later);

  /*
    Future:
    window.location.href = "dashboard.html";
  */
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function restorePersonalInfo() {
  const onboarding = getOnboardingData();

  // A fresh Screen 1 journey should open Screen 2 empty.
  // We only restore Screen 2 data when this journey is already attached
  // to the same created account.
  if (!onboarding.accountId) {
    updateValidation(false);
    return;
  }

  const saved = localStorage.getItem("kadimaPersonalInfo");

  if (!saved) {
    updateValidation(false);
    return;
  }

  try {
    const parsed = JSON.parse(saved);

    state.firstName = typeof parsed.firstName === "string" ? parsed.firstName : "";
    state.lastName = typeof parsed.lastName === "string" ? parsed.lastName : "";
    state.email = typeof parsed.email === "string" ? parsed.email : "";

    firstNameInput.value = state.firstName;
    lastNameInput.value = state.lastName;
    emailInput.value = state.email;
  } catch (error) {
    console.warn("Kadima personal information could not be restored.", error);
  }

  updateValidation(false);
}

function loadSelectedLanguage() {
  try {
    const onboarding = JSON.parse(localStorage.getItem("kadimaOnboarding") || "{}");
    setPersonalLanguage(onboarding.language || "en");
  } catch {
    setPersonalLanguage("en");
  }
}

loadSelectedLanguage();

if (skipButton) {
  skipButton.disabled = true;
}

restorePersonalInfo();
