import React, {useState} from 'react';
import {Rnd} from 'react-rnd'

function CMSComponent({position, size, content, id, isNew}) {
    const [newSize, setSize] = useState(size);
    const [newPosition, setPosition] = useState(position);

    const handleDragStop = (e, d) => {
        setPosition({ x: d.x, y: d.y })
    }
    const handleResizeStop = (event, direction, ref, delta, currentPosition) => {
        setSize({
            width: ref.style.width,
            height: ref.style.height
        });
        setPosition(currentPosition);
    };

    const divStyle = {
        background: 'aliceblue',
        position: 'absolute',
        border: '1px solid blue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        top: 0,
        left: 0
    };
    return (
        <Rnd data-is_new={isNew} data-id={id} className="CMSComponent" bounds="body" data-x={newPosition.x} data-y={newPosition.y} style={divStyle} position={newPosition} size={newSize} onDragStop={handleDragStop} onResizeStop={handleResizeStop}>
            <span className="CMSComponentContent">{content}</span>
        </Rnd>
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