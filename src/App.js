import React, {useState, useEffect} from 'react';
import axios from 'axios';
import pageService from './services/pages';
import Button from "./Components/Button";
import CMSComponent from "./Components/CMSComponent";

function App() {
    const [CMSComponents, setCMSComponents] = useState([]);
    const id = 1; //Пока только одна страница
    useEffect(() => {
        pageService
            .get(id)
            .then(returnedPage => {
                console.log(returnedPage)
                setCMSComponents(returnedPage.components)
            })
    }, []);

    const addCMSComponentToBody = () => {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * Math.floor(max));
        }
        const newCMSComponent = {
            position: {x: getRandomInt(300), y: getRandomInt(300)},
            size: { width: 200, height: 100 },
            content: 'Новый компонент',
            isNew: true,
            id: `tempId-${CMSComponents.length + 1}`
        }
        setCMSComponents([...CMSComponents, newCMSComponent ]);
    }

    const saveCMSComponents = () => {
        const parsedCMSComponents = document.querySelectorAll('.CMSComponent');
        const changedPage = {
            id: id,
            components: []
        };
        //Было бы неплохо, если у компонентов всегда был один и тот же неменяющийся идентификатор
        parsedCMSComponents.forEach((c, i) => {
            const data = {
                id: i + 1,
                position: {
                    x: c.dataset.x,
                    y: c.dataset.y,
                },
                size: {
                    width: c.style.width,
                    height: c.style.height,
                },
                content: c.querySelector('.CMSComponentContent').innerHTML
            };
            changedPage.components.push(data)
        });
        pageService.update(id, changedPage)
            .then(returnedPage => {
                setCMSComponents(returnedPage.components);
            })
            .catch(() => {
                console.log('somethingHappened');
            });
    };

  return (
    <>
        <div className="siteRoot" style={{ width: '100%', minWidth: 980, overflow: 'hidden', minHeight: '100vh', position: "relative" }}>
            <Button text="Добавить компонент" type="normal" handleClick={addCMSComponentToBody} />
            <Button text="Сохранить" type="success" handleClick={saveCMSComponents} />
            {CMSComponents.map(component => <CMSComponent key={component.id} {...component} />)}
        </div>
    </>
  );
}

export default App;
