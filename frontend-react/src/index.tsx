import ReactDOM from 'react-dom/client';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { api } from "./api/api";
import App from "./App";
import './styles.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ApiProvider api={api}>
        <App />
    </ApiProvider>
);
