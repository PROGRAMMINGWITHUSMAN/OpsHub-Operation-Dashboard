import AppRoutes from "./Routes/AppRoutes";
import "./App.css"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <AppRoutes />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
