import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from "./test-page";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Test" element={<Test />} />
        </Routes>
    </BrowserRouter>
);
