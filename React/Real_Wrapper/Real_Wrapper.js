import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {


    return (
        <>
            <CardWrapper>
                <TextComponent/>    
            </CardWrapper>
        </>
    );
}
// The Children Key word is IMP
function CardWrapper({ children }) {
    return <div style={{ border: "2px solid black" }}>
        {children}
    </div>
}

function TextComponent() {
    return <div>Hi there</div>
}

export default App;