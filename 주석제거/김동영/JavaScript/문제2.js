const Correct_Answer = {
    Answer1 : ['C빌라', 'c빌라'],
    Answer2 : ['C빌라', 'c빌라'],
    Answer3 : ['C빌라', 'c빌라'],
    Answer4 : ['B빌라', 'b빌라']
};


document.querySelector('.check_button').addEventListener('click', () => {
    const Answer = document.querySelectorAll('input');
    const blank = [];
    const check = [];
    const wrong = [];

    Answer.forEach( (index, c) => {
        if (index.value == '') {
            blank.push(c+1);
        }

        switch (c) {
            case 0:
                const found1 = Correct_Answer.Answer1.includes(index.value);
                if (found1 === true) {
                    check.push(true);
                } else {
                    check.push(false);
                    wrong.push(c+1);
                }
                break;
            
            case 1:
                const found2 = Correct_Answer.Answer2.includes(index.value);
                if (found2 === true) {
                    check.push(true);
                } else {
                    check.push(false);
                    wrong.push(c+1);
                }
                break;

            case 2:
                const found3 = Correct_Answer.Answer3.includes(index.value);
                if (found3 === true) {
                    check.push(true);
                } else {
                    check.push(false);
                    wrong.push(c+1);
                }
                break;

            case 3:
                const found4 = Correct_Answer.Answer4.includes(index.value);
                if (found4 === true) {
                    check.push(true);
                } else {
                    check.push(false);
                    wrong.push(c+1);
                }
                break;
            
            case difault:
                break;
        }
    });


    if (blank.length !== 0) {
        alert(`${blank}번의 문제가 비어있습니다! 모두 정답을 적어주세요!`);
    }

    const check_found = check.includes(false);
    if (blank.length === 0 && check_found === false) {
        alert('정답입니다!');
        document.querySelector('.next_button').disabled = false;
    }

    if (wrong.length !== 0 && blank.length === 0) {
        alert(`${wrong}번 문제 오답입니다!`);
    }

});

document.querySelector('.next_button').addEventListener('click', () => {
    location.href = '../김가연/김가연_Q3.html';
});