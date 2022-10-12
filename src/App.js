import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header';
import AddNotes from './Components/AddNotes/addNotes';
import DashBoard from './Components/Dashboard/dashBoard';

function App() {
  const title="Keep Note APP"
  return (
    <div className="App">
      <Header txt={title}/>
     <DashBoard></DashBoard>
    </div>
  );
}

export default App;
