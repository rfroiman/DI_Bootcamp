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
const toast = document.getElementById("toast");

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

function updateValidation(showErrors = false) {
  const firstName = clean(state.firstName);
  const lastName = clean(state.lastName);
  const email = clean(state.email);

  continueButton.disabled = !pageReady();

  if (showErrors || firstName || lastName) {
    if (!firstName || !lastName) {
      nameError.textContent = "First name and last name are required.";
    } else if (firstName.length < 2 || lastName.length < 2) {
      nameError.textContent = "Please enter your full name.";
    } else {
      nameError.textContent = "";
    }
  } else {
    nameError.textContent = "";
  }

  if (showErrors || email) {
    if (!email) {
      emailError.textContent = "Email address is required.";
    } else if (!validEmail(email)) {
      emailError.textContent = "Please enter a valid email address.";
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

  if (!pageReady()) {
    showToast("Please complete your full name and enter a valid email.");
    return;
  }

  savePersonalInfo();
  showToast("Personal information saved.");

  /*
    Screen 3 will be connected here later.

    Example:
    window.location.href = "profile.html";
  */
});

backButton.addEventListener("click", () => {
  window.location.href = "index.html";
});

skipButton.addEventListener("click", () => {
  /*
    Skip is allowed from Step 2 only because Step 1 is mandatory.
    We verify that Step 1 was actually completed before skipping.
  */
  const onboardingRaw = localStorage.getItem("kadimaOnboarding");

  if (!onboardingRaw) {
    showToast("Complete language and location before skipping the journey.");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
    return;
  }

  try {
    const onboarding = JSON.parse(onboardingRaw);

    if (!onboarding.language || !String(onboarding.location || "").trim()) {
      showToast("Complete language and location before skipping the journey.");
      setTimeout(() => {
        window.location.href = "index.html";
      }, 900);
      return;
    }
  } catch {
    showToast("Complete language and location before skipping the journey.");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 900);
    return;
  }

  syncState();

  /*
    Save any valid data already entered, even if the user skips.
  */
  if (pageReady()) {
    savePersonalInfo();
  }

  showToast("You can complete your profile later.");

  /*
    Dashboard will be connected here later.

    Example:
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

restorePersonalInfo();
