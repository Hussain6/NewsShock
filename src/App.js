import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  const pageSize = 5;
  const apiKey = '56327971601f4e9aae845fd379a1042e';

  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <LoadingBar color='#f11946' progress={progress} height={3} />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                setProgress={setProgress}
                key={'general'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'general'}
              />
            }
          ></Route>
          <Route
            exact
            path='/business'
            element={
              <News
                setProgress={setProgress}
                key={'business'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'business'}
              />
            }
          ></Route>
          <Route
            exact
            path='/entertainment'
            element={
              <News
                setProgress={setProgress}
                key={'entertainment'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'entertainment'}
              />
            }
          ></Route>
          <Route
            exact
            path='/general'
            element={
              <News
                setProgress={setProgress}
                key={'general'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'general'}
              />
            }
          ></Route>
          <Route
            exact
            path='/health'
            element={
              <News
                setProgress={setProgress}
                key={'health'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'health'}
              />
            }
          ></Route>
          <Route
            exact
            path='/science'
            element={
              <News
                setProgress={setProgress}
                key={'science'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'science'}
              />
            }
          ></Route>
          <Route
            exact
            path='/sports'
            element={
              <News
                setProgress={setProgress}
                key={'sports'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'sports'}
              />
            }
          ></Route>
          <Route
            exact
            path='/technology'
            element={
              <News
                setProgress={setProgress}
                key={'technology'}
                pageSize={pageSize}
                apiKey={apiKey}
                country={'us'}
                category={'technology'}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
