const countries = [{"name": "Afghanistan", "code": "AF"}, {"name": "Albania", "code": "AL"}, {"name": "Algeria", "code": "DZ"}, {"name": "American Samoa", "code": "AS"}, {"name": "Andorra", "code": "AD"}, {"name": "Angola", "code": "AO"}, {"name": "Anguilla", "code": "AI"}, {"name": "Antarctica", "code": "AQ"}, {"name": "Antigua and Barbuda", "code": "AG"}, {"name": "Argentina", "code": "AR"}, {"name": "Armenia", "code": "AM"}, {"name": "Aruba", "code": "AW"}, {"name": "Australia", "code": "AU"}, {"name": "Austria", "code": "AT"}, {"name": "Azerbaijan", "code": "AZ"}, {"name": "Bahamas", "code": "BS"}, {"name": "Bahrain", "code": "BH"}, {"name": "Bangladesh", "code": "BD"}, {"name": "Barbados", "code": "BB"}, {"name": "Belarus", "code": "BY"}, {"name": "Belgium", "code": "BE"}, {"name": "Belize", "code": "BZ"}, {"name": "Benin", "code": "BJ"}, {"name": "Bermuda", "code": "BM"}, {"name": "Bhutan", "code": "BT"}, {"name": "Bolivia", "code": "BO"}, {"name": "Bonaire, Sint Eustatius and Saba", "code": "BQ"}, {"name": "Bosnia and Herzegovina", "code": "BA"}, {"name": "Botswana", "code": "BW"}, {"name": "Bouvet Island", "code": "BV"}, {"name": "Brazil", "code": "BR"}, {"name": "British Indian Ocean Territory", "code": "IO"}, {"name": "Brunei", "code": "BN"}, {"name": "Bulgaria", "code": "BG"}, {"name": "Burkina Faso", "code": "BF"}, {"name": "Burundi", "code": "BI"}, {"name": "Cabo Verde", "code": "CV"}, {"name": "Cambodia", "code": "KH"}, {"name": "Cameroon", "code": "CM"}, {"name": "Canada", "code": "CA"}, {"name": "Cayman Islands", "code": "KY"}, {"name": "Central African Republic", "code": "CF"}, {"name": "Chad", "code": "TD"}, {"name": "Chile", "code": "CL"}, {"name": "China", "code": "CN"}, {"name": "Christmas Island", "code": "CX"}, {"name": "Cocos (Keeling) Islands", "code": "CC"}, {"name": "Colombia", "code": "CO"}, {"name": "Comoros", "code": "KM"}, {"name": "Congo", "code": "CG"}, {"name": "Cook Islands", "code": "CK"}, {"name": "Costa Rica", "code": "CR"}, {"name": "Croatia", "code": "HR"}, {"name": "Cuba", "code": "CU"}, {"name": "Curaçao", "code": "CW"}, {"name": "Cyprus", "code": "CY"}, {"name": "Czechia", "code": "CZ"}, {"name": "Côte d'Ivoire", "code": "CI"}, {"name": "Democratic Republic of the Congo", "code": "CD"}, {"name": "Denmark", "code": "DK"}, {"name": "Djibouti", "code": "DJ"}, {"name": "Dominica", "code": "DM"}, {"name": "Dominican Republic", "code": "DO"}, {"name": "Ecuador", "code": "EC"}, {"name": "Egypt", "code": "EG"}, {"name": "El Salvador", "code": "SV"}, {"name": "Equatorial Guinea", "code": "GQ"}, {"name": "Eritrea", "code": "ER"}, {"name": "Estonia", "code": "EE"}, {"name": "Eswatini", "code": "SZ"}, {"name": "Ethiopia", "code": "ET"}, {"name": "Falkland Islands (Malvinas)", "code": "FK"}, {"name": "Faroe Islands", "code": "FO"}, {"name": "Fiji", "code": "FJ"}, {"name": "Finland", "code": "FI"}, {"name": "France", "code": "FR"}, {"name": "French Guiana", "code": "GF"}, {"name": "French Polynesia", "code": "PF"}, {"name": "French Southern Territories", "code": "TF"}, {"name": "Gabon", "code": "GA"}, {"name": "Gambia", "code": "GM"}, {"name": "Georgia", "code": "GE"}, {"name": "Germany", "code": "DE"}, {"name": "Ghana", "code": "GH"}, {"name": "Gibraltar", "code": "GI"}, {"name": "Greece", "code": "GR"}, {"name": "Greenland", "code": "GL"}, {"name": "Grenada", "code": "GD"}, {"name": "Guadeloupe", "code": "GP"}, {"name": "Guam", "code": "GU"}, {"name": "Guatemala", "code": "GT"}, {"name": "Guernsey", "code": "GG"}, {"name": "Guinea", "code": "GN"}, {"name": "Guinea-Bissau", "code": "GW"}, {"name": "Guyana", "code": "GY"}, {"name": "Haiti", "code": "HT"}, {"name": "Heard Island and McDonald Islands", "code": "HM"}, {"name": "Holy See (Vatican City State)", "code": "VA"}, {"name": "Honduras", "code": "HN"}, {"name": "Hong Kong", "code": "HK"}, {"name": "Hungary", "code": "HU"}, {"name": "Iceland", "code": "IS"}, {"name": "India", "code": "IN"}, {"name": "Indonesia", "code": "ID"}, {"name": "Iran", "code": "IR"}, {"name": "Iraq", "code": "IQ"}, {"name": "Ireland", "code": "IE"}, {"name": "Isle of Man", "code": "IM"}, {"name": "Israel", "code": "IL"}, {"name": "Italy", "code": "IT"}, {"name": "Jamaica", "code": "JM"}, {"name": "Japan", "code": "JP"}, {"name": "Jersey", "code": "JE"}, {"name": "Jordan", "code": "JO"}, {"name": "Kazakhstan", "code": "KZ"}, {"name": "Kenya", "code": "KE"}, {"name": "Kiribati", "code": "KI"}, {"name": "Kuwait", "code": "KW"}, {"name": "Kyrgyzstan", "code": "KG"}, {"name": "Laos", "code": "LA"}, {"name": "Latvia", "code": "LV"}, {"name": "Lebanon", "code": "LB"}, {"name": "Lesotho", "code": "LS"}, {"name": "Liberia", "code": "LR"}, {"name": "Libya", "code": "LY"}, {"name": "Liechtenstein", "code": "LI"}, {"name": "Lithuania", "code": "LT"}, {"name": "Luxembourg", "code": "LU"}, {"name": "Macao", "code": "MO"}, {"name": "Madagascar", "code": "MG"}, {"name": "Malawi", "code": "MW"}, {"name": "Malaysia", "code": "MY"}, {"name": "Maldives", "code": "MV"}, {"name": "Mali", "code": "ML"}, {"name": "Malta", "code": "MT"}, {"name": "Marshall Islands", "code": "MH"}, {"name": "Martinique", "code": "MQ"}, {"name": "Mauritania", "code": "MR"}, {"name": "Mauritius", "code": "MU"}, {"name": "Mayotte", "code": "YT"}, {"name": "Mexico", "code": "MX"}, {"name": "Micronesia", "code": "FM"}, {"name": "Moldova", "code": "MD"}, {"name": "Monaco", "code": "MC"}, {"name": "Mongolia", "code": "MN"}, {"name": "Montenegro", "code": "ME"}, {"name": "Montserrat", "code": "MS"}, {"name": "Morocco", "code": "MA"}, {"name": "Mozambique", "code": "MZ"}, {"name": "Myanmar", "code": "MM"}, {"name": "Namibia", "code": "NA"}, {"name": "Nauru", "code": "NR"}, {"name": "Nepal", "code": "NP"}, {"name": "Netherlands", "code": "NL"}, {"name": "New Caledonia", "code": "NC"}, {"name": "New Zealand", "code": "NZ"}, {"name": "Nicaragua", "code": "NI"}, {"name": "Niger", "code": "NE"}, {"name": "Nigeria", "code": "NG"}, {"name": "Niue", "code": "NU"}, {"name": "Norfolk Island", "code": "NF"}, {"name": "North Korea", "code": "KP"}, {"name": "North Macedonia", "code": "MK"}, {"name": "Northern Mariana Islands", "code": "MP"}, {"name": "Norway", "code": "NO"}, {"name": "Oman", "code": "OM"}, {"name": "Pakistan", "code": "PK"}, {"name": "Palau", "code": "PW"}, {"name": "Palestine", "code": "PS"}, {"name": "Panama", "code": "PA"}, {"name": "Papua New Guinea", "code": "PG"}, {"name": "Paraguay", "code": "PY"}, {"name": "Peru", "code": "PE"}, {"name": "Philippines", "code": "PH"}, {"name": "Pitcairn", "code": "PN"}, {"name": "Poland", "code": "PL"}, {"name": "Portugal", "code": "PT"}, {"name": "Puerto Rico", "code": "PR"}, {"name": "Qatar", "code": "QA"}, {"name": "Romania", "code": "RO"}, {"name": "Russia", "code": "RU"}, {"name": "Rwanda", "code": "RW"}, {"name": "Réunion", "code": "RE"}, {"name": "Saint Barthélemy", "code": "BL"}, {"name": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH"}, {"name": "Saint Kitts and Nevis", "code": "KN"}, {"name": "Saint Lucia", "code": "LC"}, {"name": "Saint Martin (French part)", "code": "MF"}, {"name": "Saint Pierre and Miquelon", "code": "PM"}, {"name": "Saint Vincent and the Grenadines", "code": "VC"}, {"name": "Samoa", "code": "WS"}, {"name": "San Marino", "code": "SM"}, {"name": "Sao Tome and Principe", "code": "ST"}, {"name": "Saudi Arabia", "code": "SA"}, {"name": "Senegal", "code": "SN"}, {"name": "Serbia", "code": "RS"}, {"name": "Seychelles", "code": "SC"}, {"name": "Sierra Leone", "code": "SL"}, {"name": "Singapore", "code": "SG"}, {"name": "Sint Maarten (Dutch part)", "code": "SX"}, {"name": "Slovakia", "code": "SK"}, {"name": "Slovenia", "code": "SI"}, {"name": "Solomon Islands", "code": "SB"}, {"name": "Somalia", "code": "SO"}, {"name": "South Africa", "code": "ZA"}, {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, {"name": "South Korea", "code": "KR"}, {"name": "South Sudan", "code": "SS"}, {"name": "Spain", "code": "ES"}, {"name": "Sri Lanka", "code": "LK"}, {"name": "Sudan", "code": "SD"}, {"name": "Suriname", "code": "SR"}, {"name": "Svalbard and Jan Mayen", "code": "SJ"}, {"name": "Sweden", "code": "SE"}, {"name": "Switzerland", "code": "CH"}, {"name": "Syria", "code": "SY"}, {"name": "Taiwan", "code": "TW"}, {"name": "Tajikistan", "code": "TJ"}, {"name": "Tanzania", "code": "TZ"}, {"name": "Thailand", "code": "TH"}, {"name": "Timor-Leste", "code": "TL"}, {"name": "Togo", "code": "TG"}, {"name": "Tokelau", "code": "TK"}, {"name": "Tonga", "code": "TO"}, {"name": "Trinidad and Tobago", "code": "TT"}, {"name": "Tunisia", "code": "TN"}, {"name": "Turkmenistan", "code": "TM"}, {"name": "Turks and Caicos Islands", "code": "TC"}, {"name": "Tuvalu", "code": "TV"}, {"name": "Türkiye", "code": "TR"}, {"name": "Uganda", "code": "UG"}, {"name": "Ukraine", "code": "UA"}, {"name": "United Arab Emirates", "code": "AE"}, {"name": "United Kingdom", "code": "GB"}, {"name": "United States", "code": "US"}, {"name": "United States Minor Outlying Islands", "code": "UM"}, {"name": "Uruguay", "code": "UY"}, {"name": "Uzbekistan", "code": "UZ"}, {"name": "Vanuatu", "code": "VU"}, {"name": "Venezuela", "code": "VE"}, {"name": "Vietnam", "code": "VN"}, {"name": "Virgin Islands, British", "code": "VG"}, {"name": "Virgin Islands, U.S.", "code": "VI"}, {"name": "Wallis and Futuna", "code": "WF"}, {"name": "Western Sahara", "code": "EH"}, {"name": "Yemen", "code": "YE"}, {"name": "Zambia", "code": "ZM"}, {"name": "Zimbabwe", "code": "ZW"}, {"name": "Åland Islands", "code": "AX"}];

const state = {
  language: "en",
  location: "",
  countryCode: ""
};

const languageButtons = document.querySelectorAll("[data-language]");
const countryButtons = document.querySelectorAll(".country-btn[data-country]");
const otherCountriesButton = document.getElementById("otherCountriesButton");
const countrySelector = document.getElementById("countrySelector");
const countryInput = document.getElementById("countryInput");
const countryResults = document.getElementById("countryResults");
const countryHint = document.getElementById("countryHint");
const continueButton = document.getElementById("continueButton");
const skipButton = document.getElementById("skipButton");
const toast = document.getElementById("toast");

let activeResultIndex = -1;
let renderedCountries = [];

/* =========================================================
   TRANSLATIONS
   Translation changes text only. It NEVER changes location,
   countryCode, readiness, or country-selection event handlers.
   ========================================================= */

const uiText = {
  en: {
    heroTitle: 'Your journey<br>to the best<br><span>opportunities</span>',
    heroDescription: 'We want to get to know you better so we can connect you with opportunities that truly match your profile.',
    benefit1Title: 'AI that understands you',
    benefit1Text: 'We analyze your skills and experience to find the right opportunities.',
    benefit2Title: 'Smart matches',
    benefit2Text: 'We compare your profile with job requirements and calculate your fit.',
    benefit3Title: 'Your future, now',
    benefit3Text: 'Save time and focus on the opportunities that matter.',
    welcomeTitle: 'Welcome to Kadima!',
    welcomeSubtitle: "Let's start your journey in 6 steps",
    progress: ['Start', 'Personal', 'Profile', 'Experience', 'Education', 'Skills'],
    skip: 'Skip journey',
    introTitle: 'To get started, we need a few basic details',
    introSubtitle: "It's quick, simple, and you can edit everything later. Let's go! 🚀",
    languageTitle: 'Which language would you like to use?',
    languageHelp: 'You can change this at any time.',
    locationTitle: 'Where are you currently located?',
    locationHelp: 'This information helps us find the right opportunities for you.',
    countryPlaceholder: 'Type or select the country where you live',
    countryHint: 'Select a country from the list to confirm your location.',
    popular: 'MOST SELECTED COUNTRIES',
    otherCountries: '🌐 Other countries',
    securityTitle: 'Your information is secure',
    securityText: 'We protect your personal data and use it only to improve your experience.',
    continue: 'Continue',
    existing: 'Already have an account?',
    login: 'Log in',
    noCountry: 'No valid country found. Try another search.',
    chooseCountry: 'Choose your country from the valid country list below.',
    selectCountry: 'Select one of the valid countries shown below.',
    countrySelected: name => `✓ ${name} selected`,
    invalidLocation: 'Please select your language and a valid country first.',
    basicSaved: 'Basic information saved. You can complete the journey later.',
    loginTitle: 'Welcome back',
    loginIntro: 'Enter the email address connected to your Kadima account.',
    emailLabel: 'Email address',
    sendCode: 'Send verification code',
    checkEmail: 'Check your email',
    codeIntro: 'If this email is registered, we sent a 6-digit verification code.',
    codeLabel: 'Verification code',
    resend: 'Resend code',
    anotherEmail: 'Use another email',
    invalidEmail: 'Please enter a valid email address.',
    enterCode: 'Enter the 6-digit verification code.',
    expired: 'This code has expired. Please request a new one.',
    wrongCode: 'The verification code is incorrect.',
    verified: 'Verified. Opening your dashboard...',
    dashboardPending: 'Login verified. Dashboard will open here.',
    requestFailed: 'We could not process your request. Please try again.',
    sending: 'Sending...',
    checking: 'Checking...',
    sendingNew: 'Sending a new code...',
    newCode: 'A new verification code was requested.'
  },
  pt: {
    heroTitle: 'Sua jornada<br>para as melhores<br><span>oportunidades</span>',
    heroDescription: 'Queremos conhecer você melhor para conectá-lo a oportunidades que realmente combinam com o seu perfil.',
    benefit1Title: 'IA que entende você',
    benefit1Text: 'Analisamos suas habilidades e experiências para encontrar as oportunidades certas.',
    benefit2Title: 'Matches inteligentes',
    benefit2Text: 'Comparamos seu perfil com os requisitos das vagas e calculamos sua compatibilidade.',
    benefit3Title: 'Seu futuro, agora',
    benefit3Text: 'Economize tempo e foque nas oportunidades que realmente importam.',
    welcomeTitle: 'Bem-vindo ao Kadima!',
    welcomeSubtitle: 'Vamos começar sua jornada em 6 etapas',
    progress: ['Início', 'Pessoal', 'Perfil', 'Experiência', 'Educação', 'Habilidades'],
    skip: 'Pular jornada',
    introTitle: 'Para começar, precisamos de algumas informações básicas',
    introSubtitle: 'É rápido, simples e você poderá editar tudo depois. Vamos nessa! 🚀',
    languageTitle: 'Em que idioma você quer usar a plataforma?',
    languageHelp: 'Você pode alterar isso a qualquer momento.',
    locationTitle: 'Onde você está localizado atualmente?',
    locationHelp: 'Essa informação nos ajuda a encontrar as oportunidades certas para você.',
    countryPlaceholder: 'Digite ou selecione o país onde você mora',
    countryHint: 'Selecione um país da lista para confirmar sua localização.',
    popular: 'PAÍSES MAIS SELECIONADOS',
    otherCountries: '🌐 Outros países',
    securityTitle: 'Suas informações estão seguras',
    securityText: 'Protegemos seus dados pessoais e os usamos apenas para melhorar sua experiência.',
    continue: 'Continuar',
    existing: 'Já possui uma conta?',
    login: 'Entrar',
    noCountry: 'Nenhum país válido encontrado. Tente outra busca.',
    chooseCountry: 'Escolha seu país na lista de países válidos abaixo.',
    selectCountry: 'Selecione um dos países válidos exibidos abaixo.',
    countrySelected: name => `✓ ${name} selecionado`,
    invalidLocation: 'Selecione seu idioma e um país válido primeiro.',
    basicSaved: 'Informações básicas salvas. Você pode concluir a jornada depois.',
    loginTitle: 'Bem-vindo de volta',
    loginIntro: 'Informe o e-mail associado à sua conta Kadima.',
    emailLabel: 'Endereço de e-mail',
    sendCode: 'Enviar código de verificação',
    checkEmail: 'Verifique seu e-mail',
    codeIntro: 'Se este e-mail estiver cadastrado, enviamos um código de verificação de 6 dígitos.',
    codeLabel: 'Código de verificação',
    resend: 'Reenviar código',
    anotherEmail: 'Usar outro e-mail',
    invalidEmail: 'Informe um endereço de e-mail válido.',
    enterCode: 'Digite o código de verificação de 6 dígitos.',
    expired: 'Este código expirou. Solicite um novo código.',
    wrongCode: 'O código de verificação está incorreto.',
    verified: 'Verificado. Abrindo seu dashboard...',
    dashboardPending: 'Login verificado. O dashboard será aberto aqui.',
    requestFailed: 'Não foi possível processar sua solicitação. Tente novamente.',
    sending: 'Enviando...',
    checking: 'Verificando...',
    sendingNew: 'Enviando um novo código...',
    newCode: 'Um novo código de verificação foi solicitado.'
  },
  es: {
    heroTitle: 'Tu camino<br>hacia las mejores<br><span>oportunidades</span>',
    heroDescription: 'Queremos conocerte mejor para conectarte con oportunidades que realmente encajen con tu perfil.',
    benefit1Title: 'IA que te entiende',
    benefit1Text: 'Analizamos tus habilidades y experiencia para encontrar las oportunidades adecuadas.',
    benefit2Title: 'Matches inteligentes',
    benefit2Text: 'Comparamos tu perfil con los requisitos de las vacantes y calculamos tu compatibilidad.',
    benefit3Title: 'Tu futuro, ahora',
    benefit3Text: 'Ahorra tiempo y concéntrate en las oportunidades que realmente importan.',
    welcomeTitle: '¡Bienvenido a Kadima!',
    welcomeSubtitle: 'Comencemos tu camino en 6 pasos',
    progress: ['Inicio', 'Personal', 'Perfil', 'Experiencia', 'Educación', 'Habilidades'],
    skip: 'Saltar recorrido',
    introTitle: 'Para comenzar, necesitamos algunos datos básicos',
    introSubtitle: 'Es rápido, sencillo y podrás editar todo más adelante. ¡Vamos! 🚀',
    languageTitle: '¿En qué idioma quieres usar la plataforma?',
    languageHelp: 'Puedes cambiarlo en cualquier momento.',
    locationTitle: '¿Dónde estás ubicado actualmente?',
    locationHelp: 'Esta información nos ayuda a encontrar las oportunidades adecuadas para ti.',
    countryPlaceholder: 'Escribe o selecciona el país donde vives',
    countryHint: 'Selecciona un país de la lista para confirmar tu ubicación.',
    popular: 'PAÍSES MÁS SELECCIONADOS',
    otherCountries: '🌐 Otros países',
    securityTitle: 'Tu información está segura',
    securityText: 'Protegemos tus datos personales y los usamos únicamente para mejorar tu experiencia.',
    continue: 'Continuar',
    existing: '¿Ya tienes una cuenta?',
    login: 'Iniciar sesión',
    noCountry: 'No se encontró un país válido. Intenta otra búsqueda.',
    chooseCountry: 'Elige tu país de la lista de países válidos.',
    selectCountry: 'Selecciona uno de los países válidos que aparecen abajo.',
    countrySelected: name => `✓ ${name} seleccionado`,
    invalidLocation: 'Selecciona primero tu idioma y un país válido.',
    basicSaved: 'Información básica guardada. Puedes completar el recorrido más tarde.',
    loginTitle: 'Bienvenido de nuevo',
    loginIntro: 'Ingresa el correo electrónico asociado a tu cuenta de Kadima.',
    emailLabel: 'Correo electrónico',
    sendCode: 'Enviar código de verificación',
    checkEmail: 'Revisa tu correo',
    codeIntro: 'Si este correo está registrado, enviamos un código de verificación de 6 dígitos.',
    codeLabel: 'Código de verificación',
    resend: 'Reenviar código',
    anotherEmail: 'Usar otro correo',
    invalidEmail: 'Ingresa un correo electrónico válido.',
    enterCode: 'Ingresa el código de verificación de 6 dígitos.',
    expired: 'Este código ha expirado. Solicita uno nuevo.',
    wrongCode: 'El código de verificación es incorrecto.',
    verified: 'Verificado. Abriendo tu dashboard...',
    dashboardPending: 'Inicio de sesión verificado. El dashboard se abrirá aquí.',
    requestFailed: 'No pudimos procesar tu solicitud. Inténtalo de nuevo.',
    sending: 'Enviando...',
    checking: 'Verificando...',
    sendingNew: 'Enviando un nuevo código...',
    newCode: 'Se solicitó un nuevo código de verificación.'
  }
};

function t() {
  return uiText[state.language] || uiText.en;
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function setHTML(id, value) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = value;
}

function applyLanguage(language) {
  const text = uiText[language] || uiText.en;

  document.documentElement.lang =
    language === "pt" ? "pt-BR" : language === "es" ? "es" : "en";

  setHTML("heroTitle", text.heroTitle);
  setText("heroDescription", text.heroDescription);
  setText("benefit1Title", text.benefit1Title);
  setText("benefit1Text", text.benefit1Text);
  setText("benefit2Title", text.benefit2Title);
  setText("benefit2Text", text.benefit2Text);
  setText("benefit3Title", text.benefit3Title);
  setText("benefit3Text", text.benefit3Text);
  setText("welcomeTitle", text.welcomeTitle);
  setText("welcomeSubtitle", text.welcomeSubtitle);
  setText("pageIntroTitle", text.introTitle);
  setText("pageIntroSubtitle", text.introSubtitle);
  setText("languageQuestionTitle", text.languageTitle);
  setText("languageQuestionHelp", text.languageHelp);
  setText("locationQuestionTitle", text.locationTitle);
  setText("locationQuestionHelp", text.locationHelp);
  setText("popularCountriesLabel", text.popular);
  setText("securityTitle", text.securityTitle);
  setText("securityText", text.securityText);
  setText("existingUserText", text.existing);

  const progressLabels = document.querySelectorAll(".progress .p-item > span");
  progressLabels.forEach((label, index) => {
    if (text.progress[index]) {
      label.textContent = text.progress[index];
    }
  });

  if (countryInput) countryInput.placeholder = text.countryPlaceholder;
  if (otherCountriesButton) otherCountriesButton.textContent = text.otherCountries;
  if (skipButton) skipButton.textContent = text.skip;

  if (continueButton) {
    continueButton.innerHTML = `${text.continue} <span>→</span>`;
  }

  if (!state.location && countryHint) {
    countryHint.textContent = text.countryHint;
    countryHint.className = "country-hint";
  } else if (state.location && countryHint) {
    countryHint.textContent = text.countrySelected(state.location);
  }

  const openLoginButton = document.getElementById("openLoginButton");
  if (openLoginButton) openLoginButton.textContent = text.login;

  const loginTitle = document.getElementById("loginTitle");
  if (loginTitle) loginTitle.textContent = text.loginTitle;

  const emailStep = document.getElementById("loginEmailStep");
  if (emailStep) {
    const intro = emailStep.querySelector(":scope > p");
    const label = emailStep.querySelector(".login-field > span");
    if (intro) intro.textContent = text.loginIntro;
    if (label) label.textContent = text.emailLabel;
  }

  const codeStep = document.getElementById("loginCodeStep");
  if (codeStep) {
    const h2 = codeStep.querySelector("h2");
    const label = codeStep.querySelector(".login-field > span");
    if (h2) h2.textContent = text.checkEmail;
    if (label) label.textContent = text.codeLabel;
    setText("codeInstruction", text.codeIntro);
  }

  const sendCodeButton = document.getElementById("sendCodeButton");
  const verifyCodeButton = document.getElementById("verifyCodeButton");
  const resendCodeButton = document.getElementById("resendCodeButton");
  const changeEmailButton = document.getElementById("changeEmailButton");

  if (sendCodeButton && !sendCodeButton.disabled) sendCodeButton.textContent = text.sendCode;
  if (verifyCodeButton && !verifyCodeButton.disabled) verifyCodeButton.textContent = text.login;
  if (resendCodeButton) resendCodeButton.textContent = text.resend;
  if (changeEmailButton) changeEmailButton.textContent = text.anotherEmail;
}

/* =========================================================
   ONBOARDING STATE / COUNTRY SELECTION
   This is based on the last version where both popular and
   "Other countries" selections were confirmed working.
   ========================================================= */

function ready() {
  return Boolean(
    state.language &&
    state.location.trim() &&
    state.countryCode.trim()
  );
}

function saveState() {
  localStorage.setItem("kadimaOnboarding", JSON.stringify(state));
}

function refreshActions() {
  const enabled = ready();
  continueButton.disabled = !enabled;
  skipButton.disabled = !enabled;
}

function selectLanguage(language) {
  if (!["en", "pt", "es"].includes(language)) return;

  state.language = language;

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.language === language
    );
  });

  /*
    IMPORTANT:
    Translation only changes text. It does not clear or rewrite location.
  */
  applyLanguage(language);
  saveState();
  refreshActions();
}

function setCountry(name, code, source = "list") {
  if (!name || !code) return;

  state.location = String(name).trim();
  state.countryCode = String(code).trim().toUpperCase();

  countryInput.value = state.location;

  const isPopular = Array.from(countryButtons).some(
    (button) => button.dataset.country === state.location
  );

  countryButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country === state.location
    );
  });

  otherCountriesButton.classList.toggle(
    "selected",
    source === "other" || !isPopular
  );

  countryHint.textContent = t().countrySelected(state.location);
  countryHint.className = "country-hint valid";

  closeCountryResults();
  saveState();
  refreshActions();
}

function clearCountrySelection(message) {
  state.location = "";
  state.countryCode = "";

  countryButtons.forEach((button) => button.classList.remove("selected"));
  otherCountriesButton.classList.remove("selected");

  countryHint.textContent = message || t().countryHint;
  countryHint.className = "country-hint invalid";

  saveState();
  refreshActions();
}

function normalize(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

function filterCountries(query) {
  const q = normalize(query);

  if (!q) return countries;

  const startsWith = countries.filter((country) =>
    normalize(country.name).startsWith(q)
  );

  const contains = countries.filter((country) =>
    !normalize(country.name).startsWith(q) &&
    normalize(country.name).includes(q)
  );

  return [...startsWith, ...contains];
}

function renderCountryResults(query = "") {
  renderedCountries = filterCountries(query);
  activeResultIndex = -1;
  countryResults.innerHTML = "";

  if (!renderedCountries.length) {
    const empty = document.createElement("div");
    empty.className = "country-empty";
    empty.textContent = t().noCountry;
    countryResults.appendChild(empty);
    openCountryResults();
    return;
  }

  renderedCountries.forEach((country, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "country-result";
    button.setAttribute("role", "option");
    button.dataset.index = String(index);

    const name = document.createElement("span");
    name.textContent = country.name;

    const code = document.createElement("span");
    code.className = "country-result-code";
    code.textContent = country.code;

    button.append(name, code);

    button.addEventListener("mousedown", (event) => {
      event.preventDefault();
    });

    /*
      Keep the original proven direct handler for dynamic country results.
    */
    button.addEventListener("click", () => {
      setCountry(country.name, country.code, "other");
    });

    countryResults.appendChild(button);
  });

  openCountryResults();
}

function openCountryResults() {
  countryResults.hidden = false;
  countryInput.setAttribute("aria-expanded", "true");
}

function closeCountryResults() {
  countryResults.hidden = true;
  countryInput.setAttribute("aria-expanded", "false");
  activeResultIndex = -1;
}

function updateActiveResult() {
  const resultButtons = countryResults.querySelectorAll(".country-result");

  resultButtons.forEach((button, index) => {
    button.classList.toggle("active", index === activeResultIndex);
  });

  if (activeResultIndex >= 0 && resultButtons[activeResultIndex]) {
    resultButtons[activeResultIndex].scrollIntoView({ block: "nearest" });
  }
}

/* Language */
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectLanguage(button.dataset.language);
  });
});

/* Popular countries */
countryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.country;
    const code = button.dataset.code;

    setCountry(name, code, "popular");
  });
});

/* Other countries */
otherCountriesButton.addEventListener("click", () => {
  clearCountrySelection(t().chooseCountry);
  otherCountriesButton.classList.add("selected");
  countryInput.value = "";
  countryInput.focus();
  renderCountryResults("");
});

countryInput.addEventListener("focus", () => {
  renderCountryResults(countryInput.value);
});

countryInput.addEventListener("input", (event) => {
  const typedValue = event.target.value;

  /*
    Typing is a search only.
    It must NOT become a valid country until the user selects a result.
  */
  state.location = "";
  state.countryCode = "";

  countryButtons.forEach((button) => button.classList.remove("selected"));
  otherCountriesButton.classList.add("selected");

  countryHint.textContent = t().selectCountry;
  countryHint.className = "country-hint invalid";

  saveState();
  refreshActions();
  renderCountryResults(typedValue);
});

countryInput.addEventListener("keydown", (event) => {
  const resultButtons = countryResults.querySelectorAll(".country-result");

  if (event.key === "ArrowDown") {
    event.preventDefault();

    if (countryResults.hidden) {
      renderCountryResults(countryInput.value);
    }

    activeResultIndex = Math.min(
      activeResultIndex + 1,
      Math.max(resultButtons.length - 1, 0)
    );

    updateActiveResult();
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    activeResultIndex = Math.max(activeResultIndex - 1, 0);
    updateActiveResult();
  }

  if (event.key === "Enter" && activeResultIndex >= 0) {
    event.preventDefault();
    const country = renderedCountries[activeResultIndex];

    if (country) {
      setCountry(country.name, country.code, "other");
    }
  }

  if (event.key === "Escape") {
    closeCountryResults();
  }
});

document.addEventListener("click", (event) => {
  if (
    countrySelector &&
    !countrySelector.contains(event.target) &&
    event.target !== otherCountriesButton
  ) {
    closeCountryResults();
  }
});

continueButton.addEventListener("click", () => {
  if (!ready()) {
    showToast(t().invalidLocation);
    return;
  }

  saveState();
  window.location.href = "personal-info.html";
});

skipButton.addEventListener("click", () => {
  if (!ready()) {
    showToast(t().invalidLocation);
    return;
  }

  saveState();
  showToast(t().basicSaved);

  // Future:
  // window.location.href = "dashboard.html";
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/*
  Every fresh call to index.html starts clean, as previously defined.
*/
function resetIndexState() {
  localStorage.removeItem("kadimaOnboarding");
  localStorage.removeItem("kadimaPersonalInfo");

  state.language = "en";
  state.location = "";
  state.countryCode = "";

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.language === "en"
    );
  });

  countryInput.value = "";

  countryButtons.forEach((button) => {
    button.classList.remove("selected");
  });

  otherCountriesButton.classList.remove("selected");

  countryHint.textContent = uiText.en.countryHint;
  countryHint.className = "country-hint";

  closeCountryResults();
  applyLanguage("en");
  refreshActions();
}

/* =========================================================
   EXISTING USER LOGIN
   Prototype only. Real email delivery/verification moves to backend.
   ========================================================= */

const loginModal = document.getElementById("loginModal");
const openLoginButton = document.getElementById("openLoginButton");
const closeLoginButton = document.getElementById("closeLoginButton");
const loginEmailStep = document.getElementById("loginEmailStep");
const loginCodeStep = document.getElementById("loginCodeStep");
const loginEmail = document.getElementById("loginEmail");
const verificationCode = document.getElementById("verificationCode");
const sendCodeButton = document.getElementById("sendCodeButton");
const verifyCodeButton = document.getElementById("verifyCodeButton");
const resendCodeButton = document.getElementById("resendCodeButton");
const changeEmailButton = document.getElementById("changeEmailButton");
const loginEmailMessage = document.getElementById("loginEmailMessage");
const verificationMessage = document.getElementById("verificationMessage");

const loginState = {
  email: "",
  demoCode: "",
  codeIssuedAt: 0
};

function validLoginEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(
    String(value || "").trim().toLowerCase()
  );
}

function openLoginModal() {
  if (!loginModal) return;

  loginModal.hidden = false;
  document.body.style.overflow = "hidden";
  loginEmailStep.hidden = false;
  loginCodeStep.hidden = true;
  loginEmailMessage.textContent = "";
  verificationMessage.textContent = "";
  applyLanguage(state.language);
  loginEmail.focus();
}

function closeLoginModal() {
  if (!loginModal) return;
  loginModal.hidden = true;
  document.body.style.overflow = "";
}

function generateVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

async function requestVerificationCode(email) {
  loginState.demoCode = generateVerificationCode();
  loginState.codeIssuedAt = Date.now();

  console.info(
    `[Kadima demo only] Verification code for ${email}: ${loginState.demoCode}`
  );

  return { ok: true };
}

async function validateVerificationCode(email, code) {
  const fiveMinutes = 5 * 60 * 1000;
  const expired =
    !loginState.codeIssuedAt ||
    Date.now() - loginState.codeIssuedAt > fiveMinutes;

  if (expired) {
    return { ok: false, reason: "expired" };
  }

  return {
    ok: email === loginState.email && code === loginState.demoCode,
    reason: "invalid"
  };
}

async function sendLoginCode() {
  const email = loginEmail.value.trim().toLowerCase();

  if (!validLoginEmail(email)) {
    loginEmailMessage.textContent = t().invalidEmail;
    loginEmailMessage.classList.remove("success");
    loginEmail.focus();
    return;
  }

  loginEmailMessage.textContent = "";
  sendCodeButton.disabled = true;
  sendCodeButton.textContent = t().sending;

  try {
    loginState.email = email;
    const result = await requestVerificationCode(email);

    if (!result.ok) {
      loginEmailMessage.textContent = t().requestFailed;
      return;
    }

    loginEmailStep.hidden = true;
    loginCodeStep.hidden = false;
    verificationCode.value = "";
    verificationMessage.textContent = "";
    verificationCode.focus();
  } finally {
    sendCodeButton.disabled = false;
    sendCodeButton.textContent = t().sendCode;
  }
}

async function verifyLoginCode() {
  const code = verificationCode.value.trim();

  if (!/^\d{6}$/.test(code)) {
    verificationMessage.textContent = t().enterCode;
    verificationMessage.classList.remove("success");
    verificationCode.focus();
    return;
  }

  verifyCodeButton.disabled = true;
  verifyCodeButton.textContent = t().checking;

  try {
    const result = await validateVerificationCode(loginState.email, code);

    if (!result.ok) {
      verificationMessage.classList.remove("success");
      verificationMessage.textContent =
        result.reason === "expired" ? t().expired : t().wrongCode;
      return;
    }

    verificationMessage.textContent = t().verified;
    verificationMessage.classList.add("success");

    // Future:
    // window.location.href = "dashboard.html";

    showToast(t().dashboardPending);
  } finally {
    verifyCodeButton.disabled = false;
    verifyCodeButton.textContent = t().login;
  }
}

async function resendLoginCode() {
  if (!loginState.email) {
    loginCodeStep.hidden = true;
    loginEmailStep.hidden = false;
    loginEmail.focus();
    return;
  }

  verificationMessage.textContent = t().sendingNew;
  verificationMessage.classList.remove("success");

  const result = await requestVerificationCode(loginState.email);

  verificationMessage.textContent =
    result.ok ? t().newCode : t().requestFailed;

  verificationMessage.classList.toggle("success", result.ok);
  verificationCode.value = "";
  verificationCode.focus();
}

function useAnotherEmail() {
  loginCodeStep.hidden = true;
  loginEmailStep.hidden = false;
  verificationCode.value = "";
  verificationMessage.textContent = "";
  loginEmailMessage.textContent = "";
  loginEmail.select();
}

if (openLoginButton) {
  openLoginButton.addEventListener("click", openLoginModal);
}

if (closeLoginButton) {
  closeLoginButton.addEventListener("click", closeLoginModal);
}

if (sendCodeButton) {
  sendCodeButton.addEventListener("click", sendLoginCode);
}

if (verifyCodeButton) {
  verifyCodeButton.addEventListener("click", verifyLoginCode);
}

if (resendCodeButton) {
  resendCodeButton.addEventListener("click", resendLoginCode);
}

if (changeEmailButton) {
  changeEmailButton.addEventListener("click", useAnotherEmail);
}

if (loginModal) {
  loginModal.addEventListener("click", (event) => {
    if (event.target.dataset.closeLogin === "true") {
      closeLoginModal();
    }
  });
}

if (loginEmail) {
  loginEmail.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      sendLoginCode();
    }
  });
}

if (verificationCode) {
  verificationCode.addEventListener("input", () => {
    verificationCode.value = verificationCode.value
      .replace(/\D/g, "")
      .slice(0, 6);
  });

  verificationCode.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      verifyLoginCode();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    loginModal &&
    !loginModal.hidden
  ) {
    closeLoginModal();
  }
});

/*
  Initialize only after ALL functions, dictionaries and event handlers exist.
*/
resetIndexState();
