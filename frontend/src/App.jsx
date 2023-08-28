import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import MainNavigation from './shared/components/UIElements/Navigation/MainNavigation';
import Users from './users/pages/Users/Users';
import NewPlace from './places/pages/NewPlace/NewPlace'

function App() {
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Routes>
                    <Route path='/' element={< Users />}/>
                    <Route path='/places/new' element={< NewPlace />}/>
                    <Route path='*' element={<div>Error</div>}/>                    
                </Routes>
            </main>
        </Router>        
    )
}

export default App;
