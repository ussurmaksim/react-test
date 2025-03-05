// formatDateContext.js
import React, { createContext, useContext } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const FormatDateContext = createContext();

export function useFormatDate() {
    return useContext(FormatDateContext);
}

export function FormatDateProvider({ children }) {
    const formatDate = (date) => {
        if (!date) return ''; // Обработка null/undefined
        try {
            return format(new Date(date), 'dd.MM.yyyy HH:mm', { locale: ru });
        } catch (error) {
            console.error("Ошибка форматирования даты:", error);
            return "Неверная дата"; // Или другой индикатор ошибки
        }
    };

    return (
        <FormatDateContext.Provider value={{ formatDate }}>
            {children}
        </FormatDateContext.Provider>
    );
}