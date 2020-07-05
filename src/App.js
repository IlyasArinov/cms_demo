import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from "./Components/Button";
import CMSComponent from "./Components/CMSComponent";

function App() {
    const [CMSComponents, setCMSComponents] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3001/CMSComponents')
            .then(response => {
                setCMSComponents(response.data)
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
        let parsedCMSComponents = document.querySelectorAll('.CMSComponent');
        let parsedData = [];
        parsedCMSComponents.forEach(c => {
            const id = c.dataset.is_new ? null : Number(c.dataset.id);
            const data = {
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
            //убрать эту логику на сервер
            if (id) {
                axios
                    .put(`http://localhost:3001/CMSComponents/${id}`, data)
                    .then(response => {
                        console.log('successfully updated', response);
                    });
            } else {
                axios
                    .post('http://localhost:3001/CMSComponents', data)
                    .then(response => {
                        console.log('successfully create', response);
                    });
            }
            parsedData.push(data)
        });

        // console.log({parsedData});
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
