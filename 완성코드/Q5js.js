const allImages = [
    'IMAGE/ham.jpg',
    'IMAGE/ABOKADO.jpg',
    'IMAGE/KARE.jpg',
    'IMAGE/che.jpg',
    'IMAGE/APPLE.jpg',
    'IMAGE/shi.jpg',
    'IMAGE/BLUEBERRY.jpg',
    'IMAGE/hambe.jpg',
    'IMAGE/MELON.jpg',
    'IMAGE/FLOWER.jpg'
];

const correctAnswers = [
    'IMAGE/ABOKADO.jpg',
    'IMAGE/BLUEBERRY.jpg',
    'IMAGE/APPLE.jpg',
    'IMAGE/FLOWER.jpg',
    'IMAGE/KARE.jpg',
    'IMAGE/MELON.jpg'
];

const fixedImages = ['IMAGE/ham.jpg', 'IMAGE/APPLE.jpg'];

const remainingImages = allImages.filter(image => !fixedImages.includes(image));

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(remainingImages);
const randomImages = remainingImages.slice(0, 4);

const selectedImages = [...fixedImages, ...randomImages];

shuffleArray(selectedImages);

const imageGrid = document.getElementById('imageGrid');
selectedImages.forEach(image => {
    const box = document.createElement('div');
    box.className = 'box';
    box.style.backgroundImage = `url('${image}')`;
    box.setAttribute('data-image', image);
    imageGrid.appendChild(box);
});

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        box.classList.toggle('selected');
    });
});

document.getElementById('checkAnswer').addEventListener('click', () => {
    const selectedBoxes = document.querySelectorAll('.box.selected');
    const selectedImages = Array.from(selectedBoxes).map(box => box.getAttribute('data-image'));

    const appearingCorrectAnswers = correctAnswers.filter(answer => selectedImages.includes(answer) || selectedImages.includes(answer));

    const isCorrect = appearingCorrectAnswers.every(answer => selectedImages.includes(answer)) &&
                      selectedImages.every(image => appearingCorrectAnswers.includes(image));

    const resultMessage = document.getElementById('resultMessage');
    const nextPageButton = document.getElementById('nextPage');
    const checkAnswerButton = document.getElementById('checkAnswer');

    if (isCorrect) {
        alert('정답입니다!');
        checkAnswerButton.disabled = true;
        nextPageButton.disabled = false;
    } else {
        resultMessage.textContent = `오답입니다! ${appearingCorrectAnswers.length}개 정답!`;
        resultMessage.style.color = 'red';
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    location.href = '일기.html'; 
});