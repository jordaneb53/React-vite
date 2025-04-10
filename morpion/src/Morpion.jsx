import React, { useState } from 'react';
import Grille from './grille';

function calculerGagnant(cases) {
    const lignes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let [a, b, c] of lignes) {
        if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
            return cases[a];
        }
    }
    return null;
}

export default function Morpion() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [step, setStep] = useState(0);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const current = history[step];
    const xIsNext = step % 2 === 0;
    const gagnant = calculerGagnant(current);

    const handleClick = (i) => {
        const historiqueActuel = history.slice(0, step + 1);
        const grille = [...current];
        if (gagnant || grille[i]) return;

        grille[i] = xIsNext ? "X" : "O";
        const nouveauGagnant = calculerGagnant(grille);

        if (nouveauGagnant) {
            if (nouveauGagnant === "X") {
                setScoreX(prev => prev + 1);
            } else {
                setScoreO(prev => prev + 1);
            }
        }

        setHistory([...historiqueActuel, grille]);
        setStep(historiqueActuel.length);
    };

    const jumpTo = (move) => {
        setStep(move);
    };

    const resetGame = () => {
        setHistory([Array(9).fill(null)]);
        setStep(0);
        setScoreX(0);
        setScoreO(0);
    };

    return (
        <div className="morpion">
            <h1>Jeu du Morpion React</h1>
            <div className="status">
                {gagnant ? `Gagnant : ${gagnant}` : `Prochain joueur : ${xIsNext ? "X" : "O"}`}
            </div>
            <Grille cases={current} onClick={handleClick} />
            <div>
                <button className="button" onClick={() => jumpTo(0)}>Début</button>
                <button className="button" onClick={resetGame}>Réinitialiser</button>
            </div>
            <div className="scores">
                <h2>Tableau des scores</h2>
                <p>❌ X : {scoreX}</p>
                <p>⭕ O : {scoreO}</p>
            </div>
        </div>
    );
}
