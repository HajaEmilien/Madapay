import './App.css';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Error from './_utils/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Support from './pages/Support';
import Layout from './Component/Layout';
import { UserAuthContextProvider } from "./_utils/UserAuthContext";
import AuthGuard from './_utils/AuthGuard';
import Profil from './pages/Profil'; 
import Tron from './Component/Tron'
import Bitcoin from './Component/Bitcoin';
import Payeer from './Component/Payeer';
import Perfect from './Component/Perfect'; 
function App() {
  return (
    <div>
       
      <BrowserRouter>
        <UserAuthContextProvider>
          <Routes>

            <Route element={<Layout />}>

              <Route path="/support" element={<AuthGuard><Support /></AuthGuard>} />
              <Route path="/profil" element={<AuthGuard><Profil /></AuthGuard>} />
              <Route path="/tron" element={<AuthGuard><Tron /></AuthGuard>} />
              <Route path="/bitcoin" element={<AuthGuard><Bitcoin /></AuthGuard>} />
              <Route path="/payeer" element={<AuthGuard><Payeer /></AuthGuard>} />
              <Route path="/perfect" element={<AuthGuard><Perfect /></AuthGuard>} />
            </Route>

            <Route index element={<Inscription />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="*" element={<Error />} />

          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter> 

    </div>

  );
}

export default App;
