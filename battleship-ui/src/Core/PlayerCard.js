import React from 'react';

function PlayerCard({ player1score, player2score }) {
    return (<div className='playercard d-flex text-center mb-4'>
        <div className="yellow-color p-2">
            <h1 className='pt-2 pb-3'><strong>{player1score}</strong></h1>
            <h4><strong>player 1</strong></h4>
        </div>
        <div className="teal-color p-2">
            <h1 className='pt-2 pb-3'><strong>{player2score}</strong></h1>
            <h4><strong>player 2</strong></h4>
        </div>
    </div>);
}

export default PlayerCard;