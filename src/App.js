import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataTransferProgress from "./pages/DataTransferProgress";
import HealthOfData from "./pages/HealthOfData";
import Layout from "./pages/Layout";
import logo from './images/earthdata-logo.png';
import TransferQueue from "./pages/TransferQueue";
import TechnicalDetails from './pages/TechnicalDetails';


function App() {
  return (
    <html>
      <div className="App">
        <img className="logo" src={logo}></img>
      </div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<DataTransferProgress />} />
          <Route path="health-of-data" element={<HealthOfData />} />
          <Route path="technical-details" element={<TechnicalDetails />} />
          <Route path="transfer-queue" element={<TransferQueue />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </html>
  );
}

export default App;
