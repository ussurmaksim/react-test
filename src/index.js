import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskPage from "./task-page";
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router";
import { FormatDateProvider } from './components/formatDateContext';  // Импортируем FormatDateProvider


ReactDOM.createRoot(document.getElementById('app')).render(
    <FormatDateProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Task-page" element={<TaskPage />} />
            </Routes>
        </BrowserRouter>
    </FormatDateProvider>

);
