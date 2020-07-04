import React from 'react';

function CMSComponent() {
    const handleMousedown = (event) => {
        const element = event.target;
        const shiftX = event.clientX - element.getBoundingClientRect().left;
        const shiftY = event.clientY - element.getBoundingClientRect().top;

        const allowTopOverflow = false; //запретить элементу выходить за верхний край страницы
        const allowLeftOverflow = true; //разрешить элементу выходить за левый край страницы

        const moveVerticallyAt = (elementYCoordinate) => {
            if(!allowTopOverflow && elementYCoordinate < 0) {
                return;
            }
            element.style.top = elementYCoordinate + 'px';
        }
        const moveHorizontallyAt = (elementXCoordinate) => {
            if(!allowLeftOverflow && elementXCoordinate < 0) {
                return;
            }
            element.style.left = elementXCoordinate + 'px';
        }
        const onMouseMove = (event) => {
            const elementXCoordinate = event.pageX - shiftX;
            const elementYCoordinate = event.pageY - shiftY;
            const coordinates = [elementXCoordinate, elementYCoordinate];
            moveVerticallyAt(elementYCoordinate);
            moveHorizontallyAt(elementXCoordinate);
            console.log(coordinates);
        }

        element.style.position = 'absolute';

        // move the element on mousemove
        document.addEventListener('mousemove', onMouseMove);

        // drop the element, remove unneeded handlers
        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    const handleDragstart = function(event) {
        event.preventDefault();
    };
    const divStyle = {
        background: 'aliceblue',
        height: 100,
        width: 200,
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
};
    return (
        <div style={divStyle} className={'CMSComponent'} onMouseDown={handleMousedown} onDragStart={handleDragstart}>Drag Me!</div>
    )
}

export default CMSComponent;