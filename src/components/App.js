import React from 'react';
import Footer from '../components/atoms/moleculs/Footer/Footer';
import Header from '../components/atoms/moleculs/Header/Header';


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/community' component={Community} />
        <Route exact path='/social' component={Social} />
        <Route exact path='/market' component={Market} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
