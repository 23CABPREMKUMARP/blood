import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchDonor from './pages/SearchDonor';
import RegisterDonor from './pages/RegisterDonor';
import BloodRequests from './pages/BloodRequests';
import RequestBlood from './pages/RequestBlood';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchDonor />} />
            <Route path="/register-donor" element={<RegisterDonor />} />
            <Route path="/requests" element={<BloodRequests />} />
            <Route path="/request-blood" element={<RequestBlood />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
