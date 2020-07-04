import React, {useState} from 'react';
import Button from "./Components/Button";
import CMSComponent from "./Components/CMSComponent";

function App() {
    const [CMSComponents, setCMSComponents] = useState([]);
    const addCMSComponentToBody = () => setCMSComponents([...CMSComponents, <CMSComponent /> ])
  return (
    <>
        <div className="siteRoot" style={{ width: '100%', minWidth: 980, overflow: 'hidden', minHeight: '100vh', position: "relative" }}>
            <Button handleClick={addCMSComponentToBody} />
            {CMSComponents.map(component => component)}
        </div>
    </>
  );
}

export default App;
