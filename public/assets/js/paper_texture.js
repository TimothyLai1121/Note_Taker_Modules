const paperSelect = document.querySelector("#paper-select");
const textarea = document.querySelector(".note-textarea");

paperSelect.addEventListener("change", function() {
  const selectedPaper = paperSelect.value;
  textarea.style.backgroundImage = `url(${selectedPaper})`;
});


