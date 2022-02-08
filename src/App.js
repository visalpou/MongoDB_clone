import { Fragment } from 'react';
import './App.css';
import Body from './component/Body';
import BodyTitle from './component/BodyTitle';
import CompanyLogo from './component/CompanyLogo';
import Header from './component/Header';

function App() {
  return (
    <Fragment>
        <Header/>
        <Body/>
        <CompanyLogo/>
        <BodyTitle/>
    </Fragment>
  );
}

export default App;
