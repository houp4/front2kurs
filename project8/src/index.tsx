import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './main/Main';
import List from './list/List';
import Car from './club/Car';
import Chart from './chart/Chart';
import Testing from './testing/Testing';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<List />} />
        <Route path="/car/:id" element={<Car />} />
        <Route path="/charts" element={<Chart />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);