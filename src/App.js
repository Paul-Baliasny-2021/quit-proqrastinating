import Main from './Main';
import Footer from './Footer';
import ResultPage from './ResultPage';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
        
      <BrowserRouter>
      <Switch>
          <Route exact path='/'>
            <Main />
           </Route>
          <Route path='/result-page'>
            <ResultPage />
          </Route>
          </Switch>
      </BrowserRouter> 
      
      <Footer />
    </div>
  );
}

export default App;
