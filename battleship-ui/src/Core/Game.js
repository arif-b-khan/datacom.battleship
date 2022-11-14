import React from 'react';
import { generateEmptyLayout, SHIP_TYPE } from './layoutHelpers';
import Ship from './Ship';
import Header from './Header';
import PlayerCard from './PlayerCard';

function Game() {
    let gameLayout = generateEmptyLayout();
    let compSquares = gameLayout.map((square, idx) => {
        return <div className={square} key={`comp` + idx} id={`comp` + idx}></div>
    });
    return (
        <>
            <Header />
            <div className="wrapper d-flex flex-column flex-sm-row-reverse justify-content-center align-items-center p-sm-4">
                <div className='board d-flex flex-wrap'>{compSquares}</div>
                <div className='playercontainer me-sm-3'>
                    <PlayerCard player1score="00" player2score="00" />
                    <div className='playerpoint d-flex flex-wrap'>
                        <Ship shipType={SHIP_TYPE.aircraft} strength={5} damage={0} />
                        <Ship shipType={SHIP_TYPE.battleship} strength={5} damage={0} />
                        <Ship shipType={SHIP_TYPE.cruisership} strength={3} damage={0} />
                        <Ship shipType={SHIP_TYPE.submarine} strength={3} damage={0} />
                        <Ship shipType={SHIP_TYPE.carriership} strength={2} damage={2} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;