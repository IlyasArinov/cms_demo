import React from 'react';

function Button({handleClick}) {
    return (
        <button type="button" onClick={handleClick}>
            Добавить компонент
        </button>
    )
}

export default Button;