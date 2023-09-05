import NavBar from './NavBar';
import Form from './Form';
import EntryList from './EntryList';
import { data } from './data.js';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Form data={data} />
      <EntryList data={data} />
    </>
  );
}

export default App;
