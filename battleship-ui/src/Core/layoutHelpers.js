export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;
export const BOARD = BOARD_COLUMNS * BOARD_ROWS;

export const SHIP_TYPE = {
    aircraft: 'aircraft',
    battleship: 'battleship',
    carriership: 'carriership',
    cruisership: 'cruisership',
    submarine: 'submarine',
};

export const SHIP_TYPE_TO_PATH = {
    [SHIP_TYPE.aircraft]: '/assets/Aircraft Shape.png',
    [SHIP_TYPE.battleship]: 'battleship',
    [SHIP_TYPE.carriership]: 'carriership',
    [SHIP_TYPE.cruisership]: 'cruisership',
    [SHIP_TYPE.submarine]: 'submarine',
};


export const generateEmptyLayout = () => {
    return new Array(BOARD_ROWS * BOARD_COLUMNS).fill('empty');
}