const tops = [
  // ... URLs for tops images
  'https://i.imgur.com/gvqurx8.jpg',
  'https://i.imgur.com/WqHlX07.jpg',
  'https://i.imgur.com/k3Pxv0p.jpg',
  'https://i.imgur.com/xGUCIXh.jpg',
  'https://i.imgur.com/KuoDENE.jpg',
  'https://i.imgur.com/OAqIQLm.jpg',
  'https://i.imgur.com/dced5KK.jpg',
  'https://i.imgur.com/uc5K5cd.jpg',
  'https://i.imgur.com/TsDhK7i.jpg',
  'https://i.imgur.com/v2BRBFC.jpg',
  'https://i.imgur.com/vBZg7iS.jpg'

];

const bottoms = [
  // ... URLs for bottoms images
  'https://i.imgur.com/oOIdDHx.jpg',
  'https://i.imgur.com/vaTo5LL.jpg',
  'https://i.imgur.com/pHBYx2v.jpg',
  'https://i.imgur.com/CBIIMU7.jpg',
  'https://i.imgur.com/9IVoICz.jpg',
  'https://i.imgur.com/salKTIQ.jpg',
  'https://i.imgur.com/7VAnZw6.jpg',
  'https://i.imgur.com/JUVaGsg.jpg',
  'https://i.imgur.com/3LaQZxy.jpg',
  'https://i.imgur.com/FmBfWOj.jpg',
  'https://i.imgur.com/yKYzgKT.jpg'
];

// Tops image variables
let currentImageIndexTops = 0; // Initialize the index for Tops images
const imageElementTops = document.getElementById('imageTops'); // Get the image element for Tops images
const prevButtonTops = document.getElementById('prevButtonTops'); // Get the "Previous" button for Tops images
const nextButtonTops = document.getElementById('nextButtonTops'); // Get the "Next" button for Tops images

// Bottoms image variables
let currentImageIndexBottoms = 0; // Initialize the index for Bottoms images
const imageElementBottoms = document.getElementById('imageBottoms'); // Get the image element for Bottoms images
const prevButtonBottoms = document.getElementById('prevButtonBottoms'); // Get the "Previous" button for Bottoms images
const nextButtonBottoms = document.getElementById('nextButtonBottoms'); // Get the "Next" button for Bottoms images

// Rest of your code, including showImageTops, showImageBottoms, and event listeners...


// Show tops image
function showImageTops(index) {
  imageElementTops.src = tops[index];
}

// Show bottoms image
function showImageBottoms(index) {
  imageElementBottoms.src = bottoms[index];
}

// Add event listeners for tops and bottoms navigation buttons
prevButtonTops.addEventListener('click', () => {
  currentImageIndexTops = Math.max(0, currentImageIndexTops - 1);
  showImageTops(currentImageIndexTops);
});

nextButtonTops.addEventListener('click', () => {
  currentImageIndexTops = Math.min(tops.length - 1, currentImageIndexTops + 1);
  showImageTops(currentImageIndexTops);
});

prevButtonBottoms.addEventListener('click', () => {
  currentImageIndexBottoms = Math.max(0, currentImageIndexBottoms - 1);
  showImageBottoms(currentImageIndexBottoms);
});

nextButtonBottoms.addEventListener('click', () => {
  currentImageIndexBottoms = Math.min(bottoms.length - 1, currentImageIndexBottoms + 1);
  showImageBottoms(currentImageIndexBottoms);
});

// Initial display
showImageTops(currentImageIndexTops);
showImageBottoms(currentImageIndexBottoms);

