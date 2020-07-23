import React, {useState, useEffect} from 'react';
import pageService from './services/pages';
import Button from "./Components/Button";
import './App.css';
import Grid from "./Components/Grid";

function App() {
    const id = 1; //Пока только одна страница

    const [page, setPage] = useState({});
    const blocks = page.components || [];
    console.log('Render!');

    useEffect(() => {
        pageService
            .get(id)
            .then(returnedPage => {
                setPage(returnedPage)
            })
    }, []);

    const savePage = () => {
        pageService.update(id, page)
            .then(returnedPage => {
                setPage(returnedPage);
            })
            .catch((e) => {
                console.log(`error: ${e}`);
            });
    };
    const updateBlocks = (blocks) => {
        const changedPage = {
            ...page,
            components: blocks
        };
        setPage(changedPage);
    }

  return (
    <>
        <Button text="Сохранить" type="success" handleClick={savePage} />
        <Grid blocks={blocks} updateBlocks={updateBlocks}/>
    </>
  );
}

export default App;
