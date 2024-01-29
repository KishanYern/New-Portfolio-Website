import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import AboutMeCont from './components/AboutMeCont';

function App() {
    return (
        <div style={{ height: 5000 }}>
            <NavBar />
            <Home />
            <AboutMe />
            <AboutMeCont />
        </div>
    );
}

export default App;
