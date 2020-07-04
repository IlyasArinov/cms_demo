import React from 'react';
import CMSComponent from "./Components/CMSComponent";

function App() {
  return (
    <>
        <div className="siteRoot" style={{ width: '100%', minWidth: 980, overflow: 'hidden', minHeight: '100vh', position: "relative" }}>
            <CMSComponent />
        </div>
    </>
  );
}

export default App;
