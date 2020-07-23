import React from 'react';
import RGL, {WidthProvider} from "react-grid-layout";
import BlockWrapper from "./BlockWrapper";
import Button from "./Button";
const GridLayout = WidthProvider(RGL);

export default function Grid({blocks, updateBlocks}) {

    const updateGrid = (layout) => {
        const updatedBlocks = blocks.map(block => {
            block.grid = layout.find(gridItem => Number(gridItem.i) === block.id)
            return block;
        });
        updateBlocks(updatedBlocks)
    }

    const addBlock = () => {
        const newBlock = {
            grid: {x: 4, y: 1, w: 1, h: 2},
            content: null,
            blockType: 'Text',
            id: blocks.length + 1
        }
        updateBlocks([...blocks, newBlock])
    }

    const options = {
        autoSize: true,
        compactType: null,
        className: "layout",
        cols: 12,
        rowHeight: 30,
        onLayoutChange: updateGrid,
        draggableCancel: ".demo-wrapper",
    }

    return (
        <>
            <Button text="Добавить компонент" type="normal" handleClick={addBlock} />
            <GridLayout {...options}>
                {blocks.map(c =>
                    <div className="blockWrapper"
                         key={c.id}
                         data-id={c.id}
                         data-grid={c.grid}
                    >
                        <BlockWrapper key={c.id} {...c} blocks={blocks} updateBlocks={updateBlocks}/>
                    </div>
                )}
            </GridLayout>
        </>
    )
}


