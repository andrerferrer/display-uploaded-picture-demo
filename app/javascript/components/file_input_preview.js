const fileInputPreview = () => {
  const photoInput = document.getElementById('restaurant_photo');
  if (photoInput) {
    photoInput.addEventListener('change', (event) => {
      const uploadedImage = event.currentTarget.files[0];
      const imageUrl = window.URL.createObjectURL(uploadedImage);
      const previewDiv = document.getElementById('preview')
      previewDiv.innerHTML = `<img src='${imageUrl}'>`
    });
  }
};

export { fileInputPreview }