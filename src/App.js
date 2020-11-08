import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/Home' component={Home} />
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
