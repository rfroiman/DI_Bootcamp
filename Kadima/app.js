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

  // Screen 2 is already part of the Kadima onboarding journey.
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

function restoreState() {
  const saved = localStorage.getItem("kadimaOnboarding");

  if (!saved) {
    refreshActions();
    return;
  }

  try {
    const parsed = JSON.parse(saved);

    if (["en", "pt", "es"].includes(parsed.language)) {
      state.language = parsed.language;
    }

    const savedName = typeof parsed.location === "string" ? parsed.location : "";
    const savedCode = typeof parsed.countryCode === "string" ? parsed.countryCode : "";

    // Compatibility with older Kadima Screen 1 saves that only stored the country name.
    let matchedCountry = countries.find(
      (country) => normalize(country.name) === normalize(savedName)
    );

    if (!matchedCountry && savedCode) {
      matchedCountry = countries.find((country) => country.code === savedCode);
    }

    if (matchedCountry) {
      state.location = matchedCountry.name;
      state.countryCode = matchedCountry.code;
    }
  } catch (error) {
    console.warn("Kadima onboarding state could not be restored.", error);
  }

  languageButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.language === state.language
    );
  });

  if (state.location && state.countryCode) {
    countryInput.value = state.location;

    const popularMatch = Array.from(countryButtons).find(
      (button) => button.dataset.country === state.location
    );

    countryButtons.forEach((button) => {
      button.classList.toggle(
        "selected",
        button.dataset.country === state.location
      );
    });

    otherCountriesButton.classList.toggle("selected", !popularMatch);
    countryHint.textContent = `✓ ${state.location} selected`;
    countryHint.className = "country-hint valid";
  }

  refreshActions();
}

restoreState();
