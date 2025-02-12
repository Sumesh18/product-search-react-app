import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Search from './components/Search';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className="App">
        <Header/>
        <Search setSearchTerm={setSearchTerm}/>
        <MainContent searchTerm={searchTerm}/>
      </div>
    </>
  );
}

export default App;
