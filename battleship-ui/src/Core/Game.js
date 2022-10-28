import React from 'react';
import { generateEmptyLayout } from './layoutHelpers';

function Game() {
    let gameLayout = generateEmptyLayout();
    let compSquares = gameLayout.map((square, idx) => {
        return <div className={square} key={`comp` + idx} id={`comp` + idx}></div>

    });
    return (
        <>
            <div className="d-xs-flex flex-xs-column d-sm-flex flex-sm-row-reverse justify-content-center">
                <div className='board'>{compSquares}</div>
                <div className="d-flex flex-row playercard-margin-top">
                    <div className="playercard ">
                        <div>
                            <label>00</label>
                            <hr />
                            <label>
                                Player 1
                            </label>
                        </div>
                    </div>
                    <div className="playercard teal-color">
                        <div>
                            <label>00</label>
                            <hr />
                            <label>
                                Player 2
                            </label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Game;