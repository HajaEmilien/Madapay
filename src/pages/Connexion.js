import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../_utils/UserAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      toast.success("Login Success");
      await navigate("/payeer");
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        toast.error('Please check the Password');
      }
      if (error.code === 'auth/user-not-found') {
        toast.error('Please check the Email');
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <ToastContainer />
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Bienvenue sur le site <span className="text-yellow-500">MadaPay</span>
            </h1>
            <p className="text-gray-600">Connectez-vous pour profiter des différentes fonctionnalités</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                id="email" 
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="nom@gmail.com" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Mot de passe</label>
              <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                id="password" 
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              Se connecter
            </button>
          </form>
          {/* Le lien vers la page d'inscription est conservé si nécessaire */}
          <div className="flex justify-center mt-4">
            <Link to="/inscription" className="text-blue-600">Créer un compte</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Connexion;