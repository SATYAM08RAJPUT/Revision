import './App.css';
import Button from './Components/Button/button';

function App() {
  const message = 'Hello, world';
  console.log(message);

  return (
    <div className="app">
      <Button onclick={() => alert('Yes Bro')}>{'Click me'}</Button>
    </div>
  );
}
export default App;
