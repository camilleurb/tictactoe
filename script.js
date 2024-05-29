const cells = document.querySelectorAll('.game_td');

let currentPlayer = 'X';

cells.forEach(cell => {
    cell.addEventListener('click',
        function () {
            if (!document.querySelector('#winneris').textContent.length>0) {
                if (cell.textContent === '') {
                    cell.textContent = currentPlayer;
                    if (isWinner()) {
                        document.querySelector('#winneris').textContent=currentPlayer;
                    } else {
                        if (currentPlayer==='X') {
                            currentPlayer='O'
                        } else if (currentPlayer==='O') {
                            currentPlayer="X"
                        }
                    }
                } else {
                    alert('This cell is already occupied');
                }
            } else {
                console.log('there is a winner')
            }
        }
    )
});

function isWinner () {
    let winningCombo = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let i = 0; i < winningCombo.length; i++) {
        const combo = winningCombo[i];
        const cella = cells[combo[0]].textContent;
        const cellb = cells[combo[1]].textContent;
        const cellc = cells[combo[2]].textContent;
        if (cella!=='' && cella===cellb && cellb===cellc) {
            return true
        }
    }
    return false;
}

document.querySelector('#resetgame').addEventListener('click', function () {
    cells.forEach(cell => cell.textContent ='');
    currentPlayer='X';
    document.querySelector('#winneris').textContent='';
});