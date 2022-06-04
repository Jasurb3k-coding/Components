import './App.css';
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import RightSidebar from "./components/RightSidebar/RightSidebar";
function App() {
    return (
        <div className="h-screen flex">
            <Sidebar/>
            <Content/>
            <RightSidebar/>
        </div>
    );
}

export default App;
