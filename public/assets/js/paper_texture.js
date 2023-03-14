const paperSelect = document.getElementById("paper-select");
  const noteTextarea = document.querySelector(".note-textarea");

  paperSelect.addEventListener("change", function() {
    noteTextarea.value = this.value;
  });