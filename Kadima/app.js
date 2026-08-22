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

function ready() {
  return Boolean(state.language && state.location && state.countryCode);
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
  state.language = language;

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.language === language
    );
  });

  saveState();
  refreshActions();
}

function setCountry(name, code, source = "list") {
  state.location = name;
  state.countryCode = code;
  countryInput.value = name;

  countryButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country === name
    );
  });

  otherCountriesButton.classList.toggle(
    "selected",
    source === "other" || !Array.from(countryButtons).some(
      (button) => button.dataset.country === name
    )
  );

  countryHint.textContent = `✓ ${name} selected`;
  countryHint.className = "country-hint valid";

  closeCountryResults();
  saveState();
  refreshActions();
}

function clearCountrySelection(message = "Select a country from the list to confirm your location.") {
  state.location = "";
  state.countryCode = "";

  countryButtons.forEach((button) => button.classList.remove("selected"));
  otherCountriesButton.classList.remove("selected");

  countryHint.textContent = message;
  countryHint.className = "country-hint invalid";

  saveState();
  refreshActions();
}

function normalize(value) {
  return value.trim().toLocaleLowerCase();
}

function filterCountries(query) {
  const q = normalize(query);

  if (!q) {
    return countries;
  }

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
    empty.textContent = "No valid country found. Try another search.";
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
      // Prevent input blur before the selection is processed.
      event.preventDefault();
    });

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

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectLanguage(button.dataset.language);
  });
});

countryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setCountry(
      button.dataset.country,
      button.dataset.code,
      "popular"
    );
  });
});

otherCountriesButton.addEventListener("click", () => {
  clearCountrySelection("Choose your country from the valid country list below.");
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

  // Typing alone is not accepted as a valid location.
  state.location = "";
  state.countryCode = "";
  countryButtons.forEach((button) => button.classList.remove("selected"));
  otherCountriesButton.classList.add("selected");

  countryHint.textContent = "Select one of the valid countries shown below.";
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
      resultButtons.length - 1
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
  if (!countrySelector.contains(event.target) && event.target !== otherCountriesButton) {
    closeCountryResults();
  }
});

continueButton.addEventListener("click", () => {
  if (!ready()) {
    showToast("Please select your language and a valid country first.");
    return;
  }

  saveState();
  window.location.href = "personal-info.html";
});

skipButton.addEventListener("click", () => {
  if (!ready()) {
    showToast("Please select your language and a valid country first.");
    return;
  }

  saveState();
  showToast("Basic information saved. You can complete the journey later.");

  // Dashboard will be connected here later.
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

function resetIndexState() {
  /*
    Kadima rule:
    Every time index.html is opened, Step 1 starts clean.
    Previous onboarding / personal data must not repopulate this screen.
  */
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

  countryHint.textContent =
    "Select a country from the list to confirm your location.";
  countryHint.className = "country-hint";

  closeCountryResults();
  refreshActions();
}

resetIndexState();


/* =========================
   EXISTING USER LOGIN
   Additive only: does not change the approved onboarding flow.
   ========================= */

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
  const email = value.trim().toLowerCase();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function openLoginModal() {
  loginModal.hidden = false;
  document.body.style.overflow = "hidden";
  loginEmailStep.hidden = false;
  loginCodeStep.hidden = true;
  loginEmailMessage.textContent = "";
  verificationMessage.textContent = "";
  loginEmail.focus();
}

function closeLoginModal() {
  loginModal.hidden = true;
  document.body.style.overflow = "";
}

function generateVerificationCode() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

/*
  Production integration point.
  Replace this function with a POST request to your backend, for example:

  POST /api/auth/request-code
  {
    "email": "user@example.com"
  }

  The backend must:
  1. verify whether the email belongs to a registered Kadima user;
  2. generate the one-time code server-side;
  3. store a hashed/expiring version of the code;
  4. send the code by email;
  5. return the same neutral response whether the email exists or not.

  The frontend should never receive the real code in production.
*/
async function requestVerificationCode(email) {
  /*
    Current prototype/demo behavior:
    Generates the code locally so the flow can be tested before the backend
    and email provider are connected.
  */
  loginState.demoCode = generateVerificationCode();
  loginState.codeIssuedAt = Date.now();

  console.info(
    `[Kadima demo only] Verification code for ${email}: ${loginState.demoCode}`
  );

  return {
    ok: true,
    message: "If this email is registered, we sent a verification code."
  };
}

/*
  Production integration point.
  Replace with:

  POST /api/auth/verify-code
  {
    "email": "...",
    "code": "123456"
  }

  On success the backend should establish a secure authenticated session.
*/
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
    loginEmailMessage.textContent = "Please enter a valid email address.";
    loginEmailMessage.classList.remove("success");
    loginEmail.focus();
    return;
  }

  loginEmailMessage.textContent = "";
  sendCodeButton.disabled = true;
  sendCodeButton.textContent = "Sending...";

  try {
    loginState.email = email;
    const result = await requestVerificationCode(email);

    if (!result.ok) {
      loginEmailMessage.textContent =
        "We could not process your request. Please try again.";
      return;
    }

    loginEmailStep.hidden = true;
    loginCodeStep.hidden = false;
    verificationCode.value = "";
    verificationMessage.textContent = "";
    verificationCode.focus();
  } finally {
    sendCodeButton.disabled = false;
    sendCodeButton.textContent = "Send verification code";
  }
}

async function verifyLoginCode() {
  const code = verificationCode.value.trim();

  if (!/^\d{6}$/.test(code)) {
    verificationMessage.textContent = "Enter the 6-digit verification code.";
    verificationMessage.classList.remove("success");
    verificationCode.focus();
    return;
  }

  verifyCodeButton.disabled = true;
  verifyCodeButton.textContent = "Checking...";

  try {
    const result = await validateVerificationCode(loginState.email, code);

    if (!result.ok) {
      verificationMessage.classList.remove("success");
      verificationMessage.textContent =
        result.reason === "expired"
          ? "This code has expired. Please request a new one."
          : "The verification code is incorrect.";
      return;
    }

    verificationMessage.textContent = "Verified. Opening your dashboard...";
    verificationMessage.classList.add("success");

    /*
      Future production destination:
      dashboard.html

      Keep this line commented out until the dashboard exists.
    */
    // window.location.href = "dashboard.html";

    showToast("Login verified. Dashboard will open here.");
  } finally {
    verifyCodeButton.disabled = false;
    verifyCodeButton.textContent = "Log in";
  }
}

async function resendLoginCode() {
  if (!loginState.email) {
    loginCodeStep.hidden = true;
    loginEmailStep.hidden = false;
    loginEmail.focus();
    return;
  }

  verificationMessage.textContent = "Sending a new code...";
  verificationMessage.classList.remove("success");

  const result = await requestVerificationCode(loginState.email);

  verificationMessage.textContent = result.ok
    ? "A new verification code was requested."
    : "We could not process your request. Please try again.";

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

openLoginButton.addEventListener("click", openLoginModal);
closeLoginButton.addEventListener("click", closeLoginModal);
sendCodeButton.addEventListener("click", sendLoginCode);
verifyCodeButton.addEventListener("click", verifyLoginCode);
resendCodeButton.addEventListener("click", resendLoginCode);
changeEmailButton.addEventListener("click", useAnotherEmail);

loginModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeLogin === "true") {
    closeLoginModal();
  }
});

loginEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendLoginCode();
  }
});

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

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !loginModal.hidden) {
    closeLoginModal();
  }
});
