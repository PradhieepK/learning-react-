import { Provider } from 'react-redux';
import './App.css';
import Store from './store/Store';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
      {/* <HelloWorld />
      <HelloGoodWorld />
      <Form /> */}
      <Employee />
      </Provider>
    </div>
  );
}

export default App;
