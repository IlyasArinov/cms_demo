import React from 'react';

function Button({type, handleClick, text}) {
    const componentStyle = {
        background: type === 'success' ? '#4caf50' : 'aliceblue',
    }
    return (
        <button type="button" style={componentStyle} onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;