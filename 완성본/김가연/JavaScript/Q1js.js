const choices = document.querySelectorAll('.choice-item');
    const dropZones = document.querySelectorAll('.text-box');
    const checkButton = document.querySelector('.check');
    const nextButton = document.querySelector('.next');
    const correctAnswers = ['사과', '블루베리', '아보카도', '해바라기씨', '카레', '멜론'];
  
    // 드래그 앤 드롭 관련한거
    choices.forEach((choice) => {
      choice.setAttribute('draggable', true);
  
      choice.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', choice.textContent);
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
        const droppedText = event.dataTransfer.getData('text/plain');
        zone.textContent = droppedText; 
        zone.classList.remove('drag-over');
      });
    });
  
    // 채점하기 버튼
    checkButton.addEventListener('click', () => {
      let score = 0;
      const usedAnswers = []; 
  
      dropZones.forEach((zone) => {
        const droppedItem = zone.textContent.trim();
        if (correctAnswers.includes(droppedItem) && !usedAnswers.includes(droppedItem)) {
          score++;
          usedAnswers.push(droppedItem); 
        }
      });
  
      if (score === correctAnswers.length) {
        alert('정답입니다! 다음페이지로 넘어가주세요!');
        checkButton.disabled = true; 
        nextButton.disabled = false; 
      } else {
        alert(`오답입니다. ${score}개 정답입니다!`);
      }
    });
  
    // 다음페이지 버튼
    nextButton.addEventListener('click', () => {
      alert('다음 페이지로 이동합니다.');
      
      location.href = '../김동영/김동영_문제2.html';
    });
