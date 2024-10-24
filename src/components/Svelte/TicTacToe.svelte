<script>
    let board = Array(9).fill(null); // Griglia 3x3
    let currentPlayer = "X"; // Giocatore corrente (X o O)
    let winner = null; // Variabile per tenere traccia del vincitore

    // Gestisce il clic su una cella
    function handleClick(index) {
        if (!board[index] && !winner) {
            board[index] = currentPlayer;
            winner = checkWinner();
            if (!winner) {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    // Controlla se c'è un vincitore
    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Righe
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Colonne
            [0, 4, 8],
            [2, 4, 6], // Diagonali
        ];

        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        return board.every((cell) => cell) ? "Draw" : null;
    }

    // Resetta il gioco
    function resetGame() {
        board = Array(9).fill(null);
        currentPlayer = "X";
        winner = null;
    }
</script>

<!-- Layout del gioco Tic Tac Toe -->
<div class="max-w-xs mx-auto">
    <!-- Mostra di chi è il turno o il risultato -->
    {#if winner}
        <div class="text-center text-xl font-bold text-green-500 mb-4">
            {winner === "Draw" ? "Pareggio!" : `Giocatore ${winner} ha vinto!`}
        </div>
    {:else}
        <div class="text-center text-xl font-semibold text-gray-700 mb-4">
            Turno del giocatore {currentPlayer === "X" ? "1 (X)" : "2 (O)"}
        </div>
    {/if}

    <div class="grid grid-cols-3 gap-2">
        {#each board as cell, index}
            <div
                class="w-24 h-24 flex items-center justify-center text-3xl font-bold bg-white border border-gray-300 shadow-md cursor-pointer hover:bg-gray-100"
                on:click={() => handleClick(index)}
            >
                {cell}
            </div>
        {/each}
    </div>

    <!-- Pulsante per resettare il gioco -->
    <button
        class="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
        on:click={resetGame}
    >
        Reset
    </button>
</div>
