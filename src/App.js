import NavBar from './components/NavBar';
import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import AboutMeCont from './sections/AboutMeCont';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <AboutMe />
            <AboutMeCont />
            <Experiences />
            <Projects />
            <ContactMe />
        </div>
    );
}

export default App;
