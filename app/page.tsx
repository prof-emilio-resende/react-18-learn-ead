"use client";
import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterContextProvider({ children }) {
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
}

export default function App() {
    return (
        <CounterContextProvider>
            <Home />
        </CounterContextProvider>
    );
}

function Home() {
    const { counter, setCounter } = useContext(CounterContext);
    console.log(counter, setCounter);

    function counterFct() {
        console.log("btn clicked!");
        setCounter(counter + 1);
    }

    return (
        <div>
            <Header title="Meu título" />
            <h2>components aninhados</h2>
            <List />
            <Button text="react button" onClickFct={counterFct} />
        </div>
    );
}

function Header({ title }) {
    const { counter } = useContext(CounterContext);

    return <h1>{`${title} + ${counter}`}</h1>;
}

function List() {
    const { counter } = useContext(CounterContext);
    const l = [1, 2, 3, 4, 5, counter];
    return (
        <ul>
            {l.map((n) => (
                <li key={n}>{n}</li>
            ))}
        </ul>
    );
}

function Button({ text, onClickFct }) {
    const { counter } = useContext(CounterContext);
    return <button onClick={onClickFct}>{`${text} + ${counter}`}</button>;
}
