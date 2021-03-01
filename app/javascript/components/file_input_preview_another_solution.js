// This solution uses FileReader
// https://developer.mozilla.org/en-US/docs/Web/API/FileReader#readAsDataURL%28%29

const fileInputPreviewAnotherSolution = () => {
  // Find the photo input
  const photoInput = document.getElementById('restaurant_photo');
  // add an Event Listener on it
  photoInput.addEventListener('change', (event) => {
    // When a change happens, find the files in the input
    const files = event.target.files;
    console.log(files)
    const image = files[0]
    const reader = new FileReader();
    reader.onload = (file) => {
      const imgSrc = file.target.result;
      const img = `<img src='${imgSrc}'>`
      document.getElementById('preview').innerHTML = img
    }
    reader.readAsDataURL(image);
    console.log(files);
  });
};

export { fileInputPreviewAnotherSolution }
