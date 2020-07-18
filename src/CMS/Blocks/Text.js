import React from 'react';
import EditorTest from "../../Components/EditorTest";

function Text({id, content, blockType, updateContent}) {
    return (
        <div className="block" data-block-type={blockType}>
            <div className="content">
                <EditorTest id={id} content={content} updateContent={updateContent}/>
            </div>
        </div>
    )
}

export default Text;