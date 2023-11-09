import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Add more routes as needed */}
                </Routes>
            </Router>
        </div>
    )
    
}

export default App;