import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import './index.css';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="firstlink" element={<Expenses />} />
        <Route path="secondlink" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
