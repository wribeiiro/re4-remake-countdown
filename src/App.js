import './App.css';
import CountDownTimer from './Components/CountDownTimer';

function App() {
  return (
    <div className="App">
        <CountDownTimer
            data={'2023-03-24 00:00:00'}
        />
    </div>
  );
}

export default App;
