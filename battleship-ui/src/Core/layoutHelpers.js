export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;
export const BOARD = BOARD_COLUMNS * BOARD_ROWS;

export const SHIP_TYPE = {
    aircraft: 'aircraft',
    battleship: 'battleship',
    carriership: 'carriership',
    cruisership: 'cruisership',
    submarine: 'submarine',
    miss: 'miss',
    hit: 'hit',
};

export const SHIP_STATE = {
    miss: 'miss',
    hit: 'hit'
};

export const SHIP_TYPE_TO_PATH = {
    [SHIP_TYPE.aircraft]: '/assets/Aircraft Shape.png',
    [SHIP_TYPE.battleship]: '/assets/Battleship Shape.png',
    [SHIP_TYPE.carriership]: '/assets/Carrier Shape.png',
    [SHIP_TYPE.cruisership]: '/assets/Cruiser Shape.png',
    [SHIP_TYPE.submarine]: '/assets/Submarine Shape.png'
};

export const SHIP_STATE_TO_PATH = {
    [SHIP_STATE.miss]: '/assets/Miss small.png',
    [SHIP_STATE.hit]: '/assets/Hit small.png',
};


export const generateEmptyLayout = () => {
    return new Array(BOARD_ROWS * BOARD_COLUMNS).fill('empty');
}