import { Fragment } from 'react';
import './App.css';
import Body from './component/Body';
import BodyTitle from './component/BodyTitle';
import BuildFasterIcon from './component/BuildFasterIcon';
import CompanyLogo from './component/CompanyLogo';
import Fullymanage from './component/Fullymanage';
import Header from './component/Header';

function App() {
  return (
    <Fragment>
        <Header/>
        <Body/>
        <CompanyLogo/>
        <BodyTitle/>
        <BuildFasterIcon/>
        <Fullymanage/>
    </Fragment>
  );
}

export default App;
