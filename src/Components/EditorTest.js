import React, {useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function EditorTest({id, content, updateContent}) {
    const [state, setState] = useState({
        editorState: content ? EditorState.createWithContent(convertFromRaw(JSON.parse(content))) : EditorState.createEmpty()
    });
    const handleEditorStateChange = (editorState) => {
        const contentState = editorState.getCurrentContent();
        updateContent(id, JSON.stringify(convertToRaw(contentState)))
        setState({ editorState });
    }
    return (
        <div>
            <Editor
                toolbarHidden
                editorState={state.editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={handleEditorStateChange}
            />
        </div>
    )
}

export default EditorTest;