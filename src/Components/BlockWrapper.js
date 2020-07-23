import React, {Suspense, useMemo, useState} from 'react';

function BlockWrapper({id, content, blockType, blocks, updateBlocks}) {
    const Block = useMemo(() => React.lazy(() => import(`../CMS/Blocks/${blockType}`)), [id]);
    const [overlayStyle, setOverlayStyle] = useState({});

    const updateContent = (id, content) => {
        const updatedBlocks = blocks.map(block => block.id === id ? {...block, content} : block);
        updateBlocks(updatedBlocks);
    };

    const handleDoubleClick = () => {
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