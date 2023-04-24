const fileInputElement = document.getElementById('fileInput');
const imageElement = document.getElementById('image');
const resultElement = document.getElementById('result');


fileInputElement.addEventListener('change', () => {

  const file = fileInputElement.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    imageElement.src = reader.result;
    imageElement.onload = () => {
      const contrastRatio = calculateContrastRatio(imageElement);
      displayResult(contrastRatio);
    }
  }
});


function calculateContrastRatio(image) {

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;


  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, image.width, image.height);
  const pixels = imageData.data;


  let lightestColor = 0;
  let darkestColor = 255;


  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    const alpha = pixels[i + 3] / 255;
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;


    lightestColor = Math.max(luminance, lightestColor);
    darkestColor = Math.min(luminance, darkestColor);
  }

  const contrastRatio = (lightestColor + 0.05) / (darkestColor + 0.05);
  return contrastRatio.toFixed(2);
}

function displayResult(contrastRatio) {
  let color;
  let message;

  if (contrastRatio >= 4.5) {
    color = 'green';
    message = `Contrast Ratio: ${contrastRatio}:1 (Passes WCAG 2.0 AA)`;
  } else if (contrastRatio >= 3) {
    color = 'orange';
    message = `Contrast Ratio: ${contrastRatio}:1 (Passes WCAG 2.0 AA for large text)`;
  } else {
    color = 'red';
    message = `Contrast Ratio: ${contrastRatio}:1 (Fails WCAG 2.0 AA)`;
  }


  resultElement.style.color = color;
  resultElement.textContent = message;
}