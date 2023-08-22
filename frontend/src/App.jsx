import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Users from './users/pages/Users/Users';
import NewPlace from './places/pages/NewPlace/NewPlace'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={< Users />}/>
                <Route path='/places/new' element={< NewPlace />}/>
                <Route path='*' element={<div>Error</div>}/>
            </Routes>
        </Router>
    )
}

export default App;
