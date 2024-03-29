import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();

root.render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
