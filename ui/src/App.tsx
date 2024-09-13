import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('Hey this is workin');

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then((response) => {
                setMessage(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='flex'>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
