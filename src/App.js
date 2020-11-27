import React from "react";

import MainSection from "./MainSection.js";
import Header from "./Header.js";

function App() {
    return (
        <div>
            <Header />
            <div className="main wrapper">
                <MainSection />
            </div>
            
        </div>
    );
}

export default App;