import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'

export default function App() {

    return (
        <div id="box">
            <Header />
            <main id="main-content">
                <Home />
            </main>
        </div>
    )
}