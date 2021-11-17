import './App.css';
import Header from "./components/header/Header";
import PersonalFeed from "./pages/personalFeed/PersonalFeed";
import { Routes, Route } from 'react-router-dom';
import User from "./pages/user/User";

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-9">
                    <div className="mb-9">
                        <Routes>
                            <Route path="/" element={<PersonalFeed />} />
                            <Route path="user/:username" element={<User />} />
                            <Route path="*" element={<div>Not found</div>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
