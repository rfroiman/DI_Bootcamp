const state = {
  language: "en",
  location: "",
};

const languageLabels = {
  en: "English",
  pt: "Português",
  es: "Español",
};

const languageChoices = document.querySelectorAll("[data-language]");
const countryChoices = document.querySelectorAll("[data-country]");
const countryInput = document.getElementById("countryInput");
const continueButton = document.getElementById("continueButton");
const skipButton = document.getElementById("skipButton");
const requirementNote = document.getElementById("requirementNote");
const locationFeedback = document.getElementById("locationFeedback");
const toast = document.getElementById("toast");

function saveState() {
  localStorage.setItem("kadimaOnboarding", JSON.stringify(state));
}

function isReady() {
  return Boolean(state.language && state.location.trim());
}

function updateActions() {
  const ready = isReady();

  continueButton.disabled = !ready;
  skipButton.disabled = !ready;

  if (ready) {
    requirementNote.textContent = "You're ready. Let's continue your journey.";
    requirementNote.classList.add("ready");
    locationFeedback.textContent = `Location selected: ${state.location}`;
  } else {
    requirementNote.textContent =
      "Select your language and location to unlock the next step.";
    requirementNote.classList.remove("ready");
    locationFeedback.textContent = "";
  }
}

function selectLanguage(language) {
  state.language = language;

  languageChoices.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.language === language
    );
  });

  saveState();
  updateActions();
}

function selectCountry(country) {
  state.location = country;
  countryInput.value = country;

  countryChoices.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country === country
    );
  });

  saveState();
  updateActions();
}

languageChoices.forEach((button) => {
  button.addEventListener("click", () => {
    selectLanguage(button.dataset.language);
  });
});

countryChoices.forEach((button) => {
  button.addEventListener("click", () => {
    selectCountry(button.dataset.country);
  });
});

countryInput.addEventListener("input", (event) => {
  state.location = event.target.value.trim();

  countryChoices.forEach((button) => {
    button.classList.toggle(
      "selected",
      button.dataset.country.toLowerCase() === state.location.toLowerCase()
    );
  });

  saveState();
  updateActions();
});

continueButton.addEventListener("click", () => {
  // Defensive validation: navigation is impossible until both values exist.
  if (!isReady()) {
    showToast("Please select your language and location first.");
    updateActions();
    return;
  }

  saveState();
  showToast(
    `Great! Starting the next step in ${languageLabels[state.language]}.`
  );

  // Next onboarding screen will be connected here.
  // Example later:
  // window.location.href = "personal-information.html";
});

skipButton.addEventListener("click", () => {
  // Defensive validation: skipping is also impossible until both values exist.
  if (!isReady()) {
    showToast("Please select your language and location first.");
    return;
  }

  saveState();
  showToast("Your journey is saved. You can complete your profile later.");

  // Next step later:
  // window.location.href = "dashboard.html";
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function restoreState() {
  const saved = localStorage.getItem("kadimaOnboarding");

  if (!saved) {
    updateActions();
    return;
  }

  try {
    const parsed = JSON.parse(saved);

    if (["en", "pt", "es"].includes(parsed.language)) {
      state.language = parsed.language;
      languageChoices.forEach((button) => {
        button.classList.toggle(
          "selected",
          button.dataset.language === state.language
        );
      });
    }

    if (typeof parsed.location === "string") {
      state.location = parsed.location;
      countryInput.value = state.location;

      countryChoices.forEach((button) => {
        button.classList.toggle(
          "selected",
          button.dataset.country.toLowerCase() === state.location.toLowerCase()
        );
      });
    }
  } catch (error) {
    console.warn("Kadima onboarding state could not be restored.", error);
  }

  updateActions();
}

restoreState();
