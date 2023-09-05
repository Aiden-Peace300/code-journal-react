import NavBar from './NavBar';
import Form from './Form';
import EntryList from './EntryList';
import { data } from './data.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <NavBar onNavBarClick={setToggle} />
      {!toggle && <Form data={data} />}
      {toggle && <EntryList data={data} />}
    </>
  );
}

export default App;
