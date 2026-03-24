import React, { useState, useEffect } from 'react';

const JokeGeneratorPage = () => {
    const [joke, setJoke] = useState('');
    const [history, setHistory] = useState([]);

    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            const newJoke = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
            setJoke(newJoke);
            setHistory([newJoke, ...history]);
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(joke);
        alert('Joke copied to clipboard!');
    };

    useEffect(() => {
        fetchJoke();
    }, []);

    return (
        <div className="joke-generator">
            <h1>Joke Generator</h1>
            <p className="joke" style={{ opacity: 0, transition: 'opacity 0.5s' }}>
                {joke}
            </p>
            <button onClick={fetchJoke}>Fetch New Joke</button>
            <button onClick={copyToClipboard}>Copy Joke</button>
            <h2>History</h2>
            <ul>
                {history.map((joke, index) => (
                    <li key={index}>{joke}</li>
                ))}
            </ul>
        </div>
    );
};

export default JokeGeneratorPage;