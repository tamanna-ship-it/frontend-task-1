import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <TopBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
