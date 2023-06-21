import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';

import './shared/config/i18n/i18n';

const container = document.getElementById('root');

if (container == null) {
    throw new Error(
        'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение!',
    );
}

const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
);
