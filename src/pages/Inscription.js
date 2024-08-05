import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserAuth } from '@/_utils/UserAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inscription() {
  const navigate = useNavigate();
  const { signUp } = useUserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.error('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }
    if (password !== confirmpassword) {
      toast.error('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      await signUp(email, password);
      toast.success("Inscription réussie");
      navigate("/");
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        toast.error('Cet email est déjà utilisé');
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <ToastContainer />
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Bienvenue sur le site <span className="text-yellow-500">MadaPay</span></h1>
            <p className="text-gray-600">Inscrivez-vous pour profiter des différentes fonctionnalités</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Adresse email</label>
              <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                id="email" 
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                placeholder="nom@gmail.com" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Mot de passe</label>
              <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                id="password" 
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-700">Confirmation mot de passe</label>
              <input 
                type="password" 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                id="confirmpassword" 
                className="bg-gray-100 border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              S'inscrire
            </button>
            <div className="flex justify-between mt-4">
              <Link to="/connexion" className="text-blue-600">Déjà un compte ? Connexion</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Inscription;