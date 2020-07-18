import React, {Suspense, useState} from 'react';

function BlockWrapper({id, content, blockType, updateContent}) {
    const Block = React.lazy(() => import(`../CMS/Blocks/${blockType}`));
    const [overlayStyle, setOverlayStyle] = useState({});
    const handleDoubleClick = (event) => {
        const clickedOverlayStyle = {
            backgroundColor: 'transparent',
            zIndex: 0,
            border: '1px solid blue',
        };
        setOverlayStyle(clickedOverlayStyle);

    };
    return (
        <Suspense fallback={<></>}>
            <div className="overlay" style={overlayStyle} onDoubleClick={handleDoubleClick}/>
            <Block id={id} content={content} blockType={blockType} updateContent={updateContent}/>
        </Suspense>
    )
}

export default BlockWrapper;