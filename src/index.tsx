import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/Redux/ConfigureStore';
import { ErrorHandler } from '@/Api';
import { LoadingHandler } from '@/Api/LoadingHandler';
import { globalHistory } from '@/GlobalHistory';
import '@/Styles/index.scss';
import App from './App';

new LoadingHandler(store);
new ErrorHandler(store.getState);

ReactDOM.render(
   <Provider store={store}>
      <Router history={globalHistory}>
         <App />
      </Router>
   </Provider>,
   document.getElementById('root'),
);
