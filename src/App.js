import './App.css';
import Header from './Header';
import './Header.css'

function App() {
  const handleNameChange = () => {
    const names = ['bob', 'kevin', 'Dave'];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

  return (
    <Header />
  );
}

export default App;
