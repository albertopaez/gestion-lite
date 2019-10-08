import React, { lazy,  Suspense} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Loading from './components/loading';
import configureStore from './store'


function App() {
 
  const DefaultLayout = lazy(() => import('./container/DefaultLayout/index'))

  const store = configureStore()

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <Router>
          <main>
              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/" component={DefaultLayout} />
                </Switch>
              </Suspense>
          </main>
        </Router>
        </Provider>
      </header>
    </div>
  );
}

export default App;
