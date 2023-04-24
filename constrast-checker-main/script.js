// Atribui elementos DOM a variáveis com nomes descritivos
const fileInputElement = document.getElementById('fileInput');
const imageElement = document.getElementById('image');
const resultElement = document.getElementById('result');

// Adiciona um listener de eventos à entrada de arquivo
fileInputElement.addEventListener('change', () => {
  // Carrega o arquivo
  const file = fileInputElement.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  
  // Quando o arquivo for carregado, define o atributo src da imagem e calcula o contraste
  reader.onload = () => {
    imageElement.src = reader.result;
    imageElement.onload = () => {
      const contrastRatio = calculateContrastRatio(imageElement);
      displayResult(contrastRatio);
    }
  }
});

// Calcula o contraste da imagem
function calculateContrastRatio(image) {
  // Cria um canvas para a imagem
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = image.width;
  canvas.height = image.height;
  
  // Desenha a imagem no canvas e obtém os dados de imagem
  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, image.width, image.height);
  const pixels = imageData.data;
  
  // Inicializa as variáveis para a cor mais clara e mais escura
  let lightestColor = 0;
  let darkestColor = 255;
  
  // Itera pelos pixels e calcula a luminosidade de cada um
  for (let i = 0; i < pixels.length; i += 4) {
    const red = pixels[i];
    const green = pixels[i + 1];
    const blue = pixels[i + 2];
    const alpha = pixels[i + 3] / 255;
    const luminance = 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    
    // Verifica se a luminosidade é a mais clara ou a mais escura até agora
    lightestColor = Math.max(luminance, lightestColor);
    darkestColor = Math.min(luminance, darkestColor);
  }
  
  // Calcula o contraste com as cores mais claras e mais escuras, e retorna o resultado arredondado para duas casas decimais
  const contrastRatio = (lightestColor + 0.05) / (darkestColor + 0.05);
  return contrastRatio.toFixed(2);
}

// Exibe o resultado do contraste e sua cor de acordo com as normas de acessibilidade
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

  // Define a cor e o texto do elemento de resultado
  resultElement.style.color = color;
  resultElement.textContent = message;
}