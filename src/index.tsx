import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from '@/Redux/ConfigureStore';
import { ErrorHandler } from '@/Api';
import { LoadingHandler } from '@/Api/LoadingHandler';
import { globalHistory } from '@/GlobalHistory';
import '@/Styles/index.scss';

new ErrorHandler(store.getState);
new LoadingHandler(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={globalHistory}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'),
);
