export const BOARD_ROWS = 10;
export const BOARD_COLUMNS = 10;
export const BOARD = BOARD_COLUMNS * BOARD_ROWS;

export const generateEmptyLayout = () => {
    return new Array(BOARD_ROWS * BOARD_COLUMNS).fill('empty');
}