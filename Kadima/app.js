const state = {
  language: "en",
  location: ""
};

const languageButtons = document.querySelectorAll("[data-language]");
const countryButtons = document.querySelectorAll("[data-country]");
const countryInput = document.getElementById("countryInput");
const continueButton = document.getElementById("continueButton");
const skipButton = document.getElementById("skipButton");
const toast = document.getElementById("toast");

function ready() {
  return Boolean(state.language && state.location.trim());
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

function selectCountry(country) {
  state.location = country;
  countryInput.value = country;

  countryButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country === country
    );
  });

  saveState();
  refreshActions();
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectLanguage(button.dataset.language);
  });
});

countryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectCountry(button.dataset.country);
  });
});

countryInput.addEventListener("input", (event) => {
  state.location = event.target.value.trim();

  countryButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country.toLowerCase() === state.location.toLowerCase()
    );
  });

  saveState();
  refreshActions();
});

continueButton.addEventListener("click", () => {
  if (!ready()) {
    showToast("Please select your language and location first.");
    return;
  }

  saveState();
  showToast("Great! You're ready for the next step.");

  // Next screen:
  // window.location.href = "personal-info.html";
});

skipButton.addEventListener("click", () => {
  if (!ready()) {
    showToast("Please select your language and location first.");
    return;
  }

  saveState();
  showToast("Basic information saved. You can complete the journey later.");

  // Dashboard:
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

    if (typeof parsed.location === "string") {
      state.location = parsed.location;
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

  countryInput.value = state.location;

  countryButtons.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country.toLowerCase() === state.location.toLowerCase()
    );
  });

  refreshActions();
}

restoreState();
