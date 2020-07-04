import React from 'react';
import Draggable from "react-draggable";

function CMSComponent() {
    const divStyle = {
        background: 'aliceblue',
        height: 100,
        position: 'absolute',
        width: 200,
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: 0,
        left: 0
    };
    const handleDrag = (e) => {
        console.log(e.target);
    }
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return (
        <Draggable bounds="body" onDrag={handleDrag} defaultPosition={{x: getRandomInt(300), y: getRandomInt(300)}}>
            <div style={divStyle} className={'CMSComponent'}>Представим что это компонент</div>
        </Draggable>
    )
}

export default CMSComponent;
//
// const handleMousedown = (event) => {
//     const element = event.target;
//     const shiftX = event.clientX - element.getBoundingClientRect().left;
//     const shiftY = event.clientY - element.getBoundingClientRect().top;
//
//     const allowTopOverflow = false; //запретить элементу выходить за верхний край страницы
//     const allowLeftOverflow = true; //разрешить элементу выходить за левый край страницы
//
//     const moveVerticallyAt = (elementYCoordinate) => {
//         if(!allowTopOverflow && elementYCoordinate < 0) {
//             return;
//         }
//         element.style.top = elementYCoordinate + 'px';
//     }
//     const moveHorizontallyAt = (elementXCoordinate) => {
//         if(!allowLeftOverflow && elementXCoordinate < 0) {
//             return;
//         }
//         element.style.left = elementXCoordinate + 'px';
//     }
//     const onMouseMove = (event) => {
//         const elementXCoordinate = event.pageX - shiftX;
//         const elementYCoordinate = event.pageY - shiftY;
//         const coordinates = [elementXCoordinate, elementYCoordinate];
//         moveVerticallyAt(elementYCoordinate);
//         moveHorizontallyAt(elementXCoordinate);
//         console.log(coordinates);
//     }
//
//     element.style.position = 'absolute';
//
//     // move the element on mousemove
//     document.addEventListener('mousemove', onMouseMove);
//
//     // drop the element, remove unneeded handlers
//     document.onmouseup = () => {
//         document.removeEventListener('mousemove', onMouseMove);
//         document.onmouseup = null;
//     };
// };
//
// const handleDragstart = function(event) {
//     event.preventDefault();
// };