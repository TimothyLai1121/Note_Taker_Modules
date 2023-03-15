// paper_texture w/ jquery plugin //
$(document).ready(function() {
  // Add an event listener for the change event on the select element
  $('#paper-select').on('change', function() {
    // Get the selected texture's value (URL)
    const selectedTexture = $(this).val();

    // Apply the selected texture as a background image to the textarea element
    if (selectedTexture) {
      $('.note-textarea').css('background-image', `url(${selectedTexture}`);
    } else {
      // Remove the background image if no option is selected
      $('.note-textarea').css('background-image', '');
    }
  });
});

