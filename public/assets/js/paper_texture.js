const paperSelect = document.querySelector("#paper-select");
const textarea = document.querySelector(".note-textarea");

paperSelect.addEventListener("change", function() {
  const selectedPaper = paperSelect.value;
  textarea.style.backgroundImage = `url(${selectedPaper})`;
});


// adding Quill //

var quill = new Quill('.note-textarea', {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline'],
      ['image', 'code-block']
    ]
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
});

var select = document.getElementById('paper-select');
select.addEventListener('change', function() {
  var paperUrl = this.value;
  var editor = document.querySelector('.ql-editor');
  editor.style.backgroundImage = 'url(' + paperUrl + ')';
});
