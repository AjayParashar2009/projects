let SelectTag = document.querySelectorAll("select");
let Translate = document.getElementById("Translate");
let FromText = document.getElementById("FromText");
let ToText = document.getElementById("ToText");
let icons = document.querySelectorAll("i");

// console.log(SelectTag)
SelectTag.forEach((tag, id) => {
  for (const CountriesCode in countries) {
    let selected;
    if (id == 0 && CountriesCode == "en-GB") {
      selected = "selected";
    } else if (id == 1 && CountriesCode == "hi-IN") {
      selected = "selected";
    }
    let option = `<option value="${CountriesCode}" ${selected}>${countries[CountriesCode]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});

Translate.addEventListener("click", () => {
  let Text = FromText.value;
  const TranslateFrom = SelectTag[0].value;
  const TranslateTo = SelectTag[1].value;

  let ApiURL = `https://api.mymemory.translated.net/get?q=${Text}&langpair=${TranslateFrom}|${TranslateTo}`;

  fetch(ApiURL)
    .then((res) => res.json())
    .then((data) => {
      ToText.value = data.responseData.translatedText;
    }).catch((err)=>console.error("Translation API error:",err))
});

icons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    if (e.target.classList.contains("copy-icon")) {
      if (FromText.value.trim() === "" || ToText.value.trim() === "") {
        alert("Please enter text to be Copied!");
        return
      } else if (e.target.id === "fromCopy") {
        navigator.clipboard.writeText(FromText.value);
      } else {
        navigator.clipboard.writeText(ToText.value);
      }
    } else if (e.target.classList.contains("speak-icon")) {
      let utterance;
      if (FromText.value.trim() === "" || ToText.value.trim() === "") {
        alert("Please enter text to be spoken!");
        return;
      } else if (e.target.id == "fromSpeaker") {
        utterance = new SpeechSynthesisUtterance(FromText.value);
        utterance.lang = SelectTag[0].value;
      } else if (e.target.id == "ToSpeaker") {
        utterance = new SpeechSynthesisUtterance(ToText.value);
        utterance.lang = SelectTag[1].value;
      }
      speechSynthesis.speak(utterance);
    }
  });
});
