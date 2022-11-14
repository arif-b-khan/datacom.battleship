import React from 'react';
import { SHIP_TYPE_TO_PATH, SHIP_STATE, SHIP_STATE_TO_PATH } from './layoutHelpers';
import './Ship.scss';

function Ship({ shipType, strength = 5, damage = 0 }) {
    let shipList = () => {
        return new Array(strength).fill(0).map((p, idx) => {
            if ((idx + 1) <= damage) {
                return (<img src={SHIP_STATE_TO_PATH[SHIP_STATE.hit]} alt={SHIP_STATE_TO_PATH[SHIP_STATE.hit]} />);
            }
            else {
                return (<img src={SHIP_STATE_TO_PATH[SHIP_STATE.miss]} alt={SHIP_STATE_TO_PATH[SHIP_STATE.miss]} />);
            }
        });
    };

    return (
        <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className='ship_box'>
                <img src={SHIP_TYPE_TO_PATH[shipType]} alt={SHIP_TYPE_TO_PATH[shipType]} />
            </div>
            <div className='point_box pe-2 ps-3'>
                <div className='d-flex'>
                    {shipList()}
                </div>
            </div>
        </div>
    );
}

export default Ship;