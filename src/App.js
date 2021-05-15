
//components
import LandingPage from './components/LandingPage'
import GlobalStyle from './components/GlobalStyle'

function App() {
    console.log('Please ignore the error log. It has to do with glidejs library and i can\'t fix it without altering it\'s source.')
    return (
        <div className="App">
            <GlobalStyle/>
            <LandingPage/>            
        </div>
    );
}

export default App;
