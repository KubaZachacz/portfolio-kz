export const getLanguage = () => {
  if (typeof Storage !== "undefined") {
    return localStorage.getItem("lang");
  }
}

export const setLanguage = (value) => {
  if (typeof Storage !== "undefined") {
    localStorage.setItem("lang", value);
  }
}

export const setLanguageOption = (value) => {
  const langSelect = document.getElementById("lang-select");
  if (value && langSelect) langSelect.value = value;
}