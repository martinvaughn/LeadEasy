import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeadDetails from './components/LeadDetails/LeadDetails';
import { IApiData } from './components/IApiData/IApiData';
import apiWrapper from './components/ApiWrapper/ApiWrapper';
import './App.css';

function App() {
  const [ apiData, setApiData ] = useState<IApiData | undefined>(undefined);
  const [ resolved, setResolved ] = useState(false);

  useEffect(() => {
    console.log("ran once???")
    apiWrapper(setApiData, setResolved);
  }, []);


  return (
    <>
    <Header />
    <Switch>
      <Route path='/' exact>
        {resolved ? <Main rows={apiData ? apiData.rows : null}/> : null}
      </Route>
      <Route path='/lead/:id' component={LeadDetails}/>
      {/*<Route component={Error} />*/}
    </Switch>
    <Footer />
    </>
  );
}

export default App;
