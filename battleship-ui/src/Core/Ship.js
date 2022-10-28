import React from 'react';
import { SHIP_TYPE_TO_PATH } from './layoutHelpers';
import './Ship.scss';

function Ship({ shipType, damage }) {
    const path = SHIP_TYPE_TO_PATH[shipType];
    const damageStatusList = damage.map(d => {
        return (<li className="ship-hit"></li>);
    });
    return (
        <div className="ship">
            <img src={path} alt={path}></img>
            <ul>
                {damageStatusList}
            </ul>
        </div>
    );
}

export default Ship;