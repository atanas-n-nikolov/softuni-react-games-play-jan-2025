import { Routes, Route } from 'react-router';

import Header from './components/header/Header'
import Home from './components/home/Home'

import './App.css'

export default function App() {

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </main>
        </div>
    )
}