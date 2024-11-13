import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from 'react-redux';
import store from './app/store';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Additional routes as needed */}
      {/* Use Navigate to handle redirects */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </Router>
);