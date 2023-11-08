import './App.css';
import { BroserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home';

function App() {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/' exact Component={Home   } />

                </Switch>
            </Router>
        </div>
    )
    
}

export default App;