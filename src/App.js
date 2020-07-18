import React, {useState, useEffect} from 'react';
import pageService from './services/pages';
import Button from "./Components/Button";
import RGL, { WidthProvider } from "react-grid-layout";
import './App.css';
import BlockWrapper from "./Components/BlockWrapper";

function App() {
    const [blocks, setBlocks] = useState([]);
    const id = 1; //Пока только одна страница
    let gridLayout;
    useEffect(() => {
        pageService
            .get(id)
            .then(returnedPage => {
                setBlocks(returnedPage.components)
                console.log(returnedPage.components);
            })
    }, []);

    const addBlockToBody = () => {
        const newBlock = {
            grid: {x: 4, y: 1, w: 1, h: 2},
            content: null,
            blockType: 'Text',
            id: `${blocks.length + 1}`
        }
        console.log(blocks);
        console.log(newBlock);
        setBlocks([...blocks, newBlock ]);
    }

    const saveBlocks = () => {
        const changedPage = {
            id: id,
            components: []
        };
        //Было бы неплохо, если у компонентов всегда был один и тот же неменяющийся идентификатор
        gridLayout.forEach((gridItem) => {
            // let block = document.querySelector(`.block[data-id="${gridItem.i}"]`)
            const data = {
                id: gridItem.i,
                grid: {...gridItem},
                blockType: 'Text',
                content: blocks.find(block => block.id === gridItem.i).content
            };
            console.log(data);
            changedPage.components.push(data)
        });
        pageService.update(id, changedPage)
            .then(returnedPage => {
                // setCMSComponents(returnedPage.components);
            })
            .catch(() => {
                console.log('somethingHappened');
            });
    };
    const handleLayoutChange = (layout) => {
        gridLayout = layout;
    }
    const updateContent = (id, content) => {
        const changedBlock = blocks.find(block => block.id === id);
        changedBlock.content = content;
    };

    const handleGridItemClick = (event) => {
        // console.log(event.target);
        // const gridItem = event.target.closest('.blockWrapper');
        // gridItem.querySelector('.overlay').classList.add('active');
    };

    const GridLayout = WidthProvider(RGL);
  return (
    <>
        <Button text="Добавить компонент" type="normal" handleClick={addBlockToBody} />
        <Button text="Сохранить" type="success" handleClick={saveBlocks} />
        <GridLayout
            autoSize={true}
            verticalCompact={false}
            className="layout"
            cols={12}
            rowHeight={30}
            onLayoutChange={handleLayoutChange}
            draggableCancel=".demo-wrapper"
        >
            {blocks.map(c =>
                <div className="blockWrapper"
                     key={c.id}
                     data-id={c.id}
                     data-grid={c.grid}
                     onClick={handleGridItemClick}
                >
                    <BlockWrapper {...c} updateContent={updateContent} />
                </div>
            )}
        </GridLayout>

    </>
  );
}

export default App;
