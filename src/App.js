import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import AboutMeCont from './components/AboutMeCont';
import Experiences from './components/Experiences';

function App() {
    return (
        <div style={{ height: 5000 }}>
            <NavBar />
            <Home />
            <AboutMe />
            <AboutMeCont />
            <Experiences />
        </div>
    );
}

export default App;
