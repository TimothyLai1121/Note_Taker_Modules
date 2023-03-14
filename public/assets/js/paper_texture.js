const paperSelectElement = document.querySelector("#paper-select");
const textarea = document.querySelector(".note-textarea");

paperSelectElement.addEventListener("change", function() {
  const selectedPaper = paperSelectElement.value;
  textarea.style.backgroundImage = `url(${selectedPaper})`;
});

var paperStyleSelect = document.querySelector("#paper-select");
var noteTitle = document.querySelector(".note-title");
var noteTextarea = document.querySelector(".note-textarea");

paperStyleSelect.addEventListener("change", function() {
  switch (this.value) {
    case "./assets/seamless_paper_texture/Canvas.jpeg":
      noteTitle.style.fontFamily = "Arial";
      noteTitle.style.fontSize = "40px";
      noteTitle.style.fontWeight = "bold";
      noteTextarea.style.fontFamily = "Arial";
      noteTextarea.style.fontSize = "32px";
      noteTextarea.style.fontWeight = "normal";
      break;

  }
});
