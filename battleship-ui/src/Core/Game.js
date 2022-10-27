import React from 'react';
import { generateEmptyLayout } from './layoutHelpers';

function Game() {
    let gameLayout = generateEmptyLayout();
    let compSquares = gameLayout.map((square, idx) => {
        return <div className={square} key={`comp` + idx} id={`comp` + idx}></div>

    });
    return (
        <>
            <div className='board'>{compSquares}</div>
            <div className="playercard position-releative">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <span>00</span>
                    <hr />
                    <span>
                        Player 1F
                    </span>
                </div>
            </div>
        </>
    );
}

export default Game;