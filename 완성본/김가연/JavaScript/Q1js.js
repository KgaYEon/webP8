const choices = document.querySelectorAll('.choice-item');
const dropZones = document.querySelectorAll('.text-box');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

choices.forEach((choice) => {
  choice.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', choice.dataset.answer);
    choice.classList.add('dragging');
  });

  choice.addEventListener('dragend', () => {
    choice.classList.remove('dragging');
  });
});

dropZones.forEach((zone) => {
  zone.addEventListener('dragover', (event) => {
    event.preventDefault();
    zone.classList.add('drag-over');
  });

  zone.addEventListener('dragleave', () => {
    zone.classList.remove('drag-over');
  });

  zone.addEventListener('drop', (event) => {
    event.preventDefault();
    const droppedAnswer = event.dataTransfer.getData('text/plain');
    zone.textContent = droppedAnswer;
    zone.classList.remove('drag-over');
  });
});

checkButton.addEventListener('click', () => {
  let score = 0;

  dropZones.forEach((zone) => {
    const droppedAnswer = zone.textContent.trim();
    const correctAnswer = zone.dataset.correct;

    if (droppedAnswer === correctAnswer) {
      score++;
    }
  });

  if (score === dropZones.length) {
    alert('정답입니다! 모든 항목이 정확한 위치에 있습니다.');
    checkButton.disabled = true;
    nextButton.disabled = false;
  } else {
    alert(`오답입니다. ${score}개 항목이 정확한 위치에 있습니다.`);
  }
});

nextButton.addEventListener('click', () => {
  alert('다음 페이지로 이동합니다.');
  location.href = './완성본/김동영/김동영_문제2.html';
});
