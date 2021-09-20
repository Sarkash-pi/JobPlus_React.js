import './App.css';
import { BrowserRouter, useHistory } from 'react-router-dom';

function App() {
  let history = useHistory();
  return (
    <BrowserRouter history={history}>
      <p>This is from app</p>
    </BrowserRouter>
  );
}

export default App;
