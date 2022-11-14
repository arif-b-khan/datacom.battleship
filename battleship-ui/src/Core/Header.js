import React from 'react';

function Header() {
    return (<header className='d-flex p-2'>
        <button type="button" className="btn btn-sm rounded-0 btn_grey me-2 px-3">&nbsp;</button>
        <input className="form-control form-control-sm rounded-0" type="text" />
        <button type="button" className="btn btn-sm rounded-0 btn_blue me-2 px-4">&nbsp;</button>
        <button type="button" className="btn btn-sm rounded-0 btn_grey px-3">&nbsp;</button>
    </header>);
}

export default Header;