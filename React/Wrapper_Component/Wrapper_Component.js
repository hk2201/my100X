import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {


    return (
        <>
            <CardWrapper innerComponent={<TextComponent />} />
        </>
    );
}

function CardWrapper({ innerComponent }) {
    return <div style={{ border: "2px solid black" }}>
        {innerComponent}
    </div>
}

function TextComponent() {
    return <div>Hi there</div>
}

export default App;