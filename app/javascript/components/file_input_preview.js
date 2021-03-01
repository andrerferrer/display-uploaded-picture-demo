const fileInputPreview = () => {
  // We find the input with the id of the file input
  const photoInput = document.getElementById('restaurant_photo');
  // If it exists (we don't want it to break on other pages, right?)
  if (photoInput) {
    // Add an event listener (change) to the input
    photoInput.addEventListener('change', (event) => {
      // grab the file that was selected
      const uploadedImage = event.currentTarget.files[0];
      // create a URL for it on this page
      const imageUrl = window.URL.createObjectURL(uploadedImage);
      // find the preview where we will display the image
      const previewDiv = document.getElementById('preview')
      // show the image there :D
      previewDiv.innerHTML = `<img src='${imageUrl}'>`
    });
  }
};

export { fileInputPreview }