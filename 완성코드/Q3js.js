const canvas = document.getElementById('connectionCanvas');
        const ctx = canvas.getContext('2d');
        const container = document.querySelector('.container');
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        const dots = document.querySelectorAll('.dot');
        const connections = [];
        let selectedDot = null;

        const correctPairs = {
            1: 8, // sicklep -> sickle
            2: 7, // tigerp -> tiger
            3: 6, // thunp -> thun
            4: 5  // cowp -> cow
        };

        function getDotPosition(dot) {
            const rect = dot.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            return {
                x: rect.left - containerRect.left + rect.width / 2,
                y: rect.top - containerRect.top + rect.height / 2
            };
        }

        function drawConnections() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            connections.forEach(connection => {
                ctx.moveTo(connection.start.x, connection.start.y);
                ctx.lineTo(connection.end.x, connection.end.y);
            });
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const dotId = parseInt(dot.getAttribute('data-id'));
                const position = getDotPosition(dot);
                const existingConnection = connections.find(
                    connection => connection.startId === dotId || connection.endId === dotId
                );

                if (existingConnection) {
                    alert('이 점은 이미 연결되었습니다!');
                    return;
                }

                if (selectedDot) {
                    if (selectedDot !== dot) {
                        const start = getDotPosition(selectedDot);
                        const end = position;
                        const startId = parseInt(selectedDot.getAttribute('data-id'));
                        const endId = dotId;

                        connections.push({ start, end, startId, endId });
                        drawConnections();
                    }
                    selectedDot = null;
                } else {
                    selectedDot = dot;
                }
            });
        });

        document.getElementById('checkAnswer').addEventListener('click', () => {
            let isCorrect = true;

            connections.forEach(connection => {
                const { startId, endId } = connection;

                if (!(correctPairs[startId] === endId || correctPairs[endId] === startId)) {
                    isCorrect = false; 
                }
            });

            if (connections.length !== Object.keys(correctPairs).length) {
                isCorrect = false;
            }

            if (isCorrect) {
                alert('정답입니다!');
                document.getElementById('nextPage').disabled = false; 
                document.getElementById('checkAnswer').disabled = true; 
            } else {
                alert('오답입니다!');
            }
        });

        document.getElementById('nextPage').addEventListener('click', () => {
            alert('다음 페이지로 이동합니다!');
        });

        document.getElementById('resetConnections').addEventListener('click', () => {
            connections.length = 0; 
            drawConnections(); 
            document.getElementById('checkAnswer').disabled = false; 
        });

        //document.getElementById('checkAnswer').disabled = false;

        document.getElementById('nextPage').addEventListener('click', () => {
            location.href = '문제4.html'; 
        });
