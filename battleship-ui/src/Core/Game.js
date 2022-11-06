import React from 'react';
import { generateEmptyLayout, SHIP_TYPE_TO_PATH } from './layoutHelpers';

function Game() {
    let gameLayout = generateEmptyLayout();
    let compSquares = gameLayout.map((square, idx) => {
        return <div className={square} key={`comp` + idx} id={`comp` + idx}></div>
    });
    const damage = ['hit'];
    return (
        <>
            <header className='d-flex p-2'>
                <button type="button" className="btn btn-sm rounded-0 btn_grey me-2 px-3">&nbsp;</button>
                <input className="form-control form-control-sm rounded-0" type="text" />
                <button type="button" className="btn btn-sm rounded-0 btn_blue me-2 px-4">&nbsp;</button>
                <button type="button" className="btn btn-sm rounded-0 btn_grey px-3">&nbsp;</button>
            </header>
            <div className="wrapper d-flex flex-column flex-sm-row-reverse justify-content-center align-items-center p-sm-4">
                <div className='board d-flex flex-wrap'>{compSquares}</div>
                <div className='playercontainer me-sm-3'>
                    <div className='playercard d-flex text-center mb-4'>
                        <div className="yellow-color p-2">
                            <h1 className='pt-2 pb-3'><strong>00</strong></h1>
                            <h4><strong>player 1</strong></h4>
                        </div>
                        <div className="teal-color p-2">
                            <h1 className='pt-2 pb-3'><strong>00</strong></h1>
                            <h4><strong>player 2</strong></h4>
                        </div>
                    </div>
                    <div className='playerpoint d-flex flex-wrap'>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='ship_box'>
                                <img src={SHIP_TYPE_TO_PATH['aircraft']} alt={SHIP_TYPE_TO_PATH['aircraft']} />
                            </div>
                            <div className='point_box pe-2 ps-3'>
                                <div className='d-flex'>
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='ship_box'>
                                <img src={SHIP_TYPE_TO_PATH['battleship']} alt={SHIP_TYPE_TO_PATH['battleship']} />
                            </div>
                            <div className='point_box pe-2 ps-3'>
                                <div className='d-flex'>
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='ship_box'>
                                <img src={SHIP_TYPE_TO_PATH['cruisership']} alt={SHIP_TYPE_TO_PATH['cruisership']} />
                            </div>
                            <div className='point_box pe-2 ps-3'>
                                <div className='d-flex'>
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='ship_box'>
                                <img src={SHIP_TYPE_TO_PATH['submarine']} alt={SHIP_TYPE_TO_PATH['submarine']} />
                            </div>
                            <div className='point_box pe-2 ps-3'>
                                <div className='d-flex'>
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                    <img src={SHIP_TYPE_TO_PATH['miss']} alt={SHIP_TYPE_TO_PATH['miss']} />
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='ship_box'>
                                <img src={SHIP_TYPE_TO_PATH['carriership']} alt={SHIP_TYPE_TO_PATH['carriership']} />
                            </div>
                            <div className='point_box pe-2 ps-3'>
                                <div className='d-flex'>
                                    <img src={SHIP_TYPE_TO_PATH['hit']} alt={SHIP_TYPE_TO_PATH['hit']} />
                                    <img src={SHIP_TYPE_TO_PATH['hit']} alt={SHIP_TYPE_TO_PATH['hit']} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;