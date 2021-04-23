import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { app } from './Components/App/AppModule';


const store = createStore(app);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

