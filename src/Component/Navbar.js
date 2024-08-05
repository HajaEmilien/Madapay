import { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '@/_utils/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Asset/logo.png';
import Customer from '@/Asset/Customer.png';
import Deconnexion from '@/Asset/Sortie.png';
import '../Style/Navbar.css';

const languageOptions = {
    fr: {
        deposit: "Dépôt",
        withdrawal: "Retrait",
        support: "Support",
        payeer: "Payeer",
        perfectMoney: "Perfect Money",
        profile: "Profil",
        logout: "Déconnexion",
        toggleDarkMode: "Changer le mode",
    },
    en: {
        deposit: "Deposit",
        withdrawal: "Withdrawal",
        support: "Support",
        payeer: "Payeer",
        perfectMoney: "Perfect Money",
        profile: "Profile",
        logout: "Logout",
        toggleDarkMode: "Change Mode",
    },
    mg: {
        deposit: "Fandaharana",
        withdrawal: "Fanafarana",
        support: "Fanohanana",
        payeer: "Payeer",
        perfectMoney: "Perfect Money",
        profile: "Mombamomba",
        logout: "Fivoahana",
        toggleDarkMode: "Ovaina ny fomba",
    },
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('fr');
    const navigate = useNavigate();
    const { logOut } = useUserAuth();

    const logout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.error(error.message);
            alert("Pour une raison quelconque, nous ne pouvons pas vous déconnecter");
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    }

    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

    return (
        
        <div className="layout">
            <ToastContainer />
            <div className="flex flex-col h-screen">
                <nav className="shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 w-full">
                    <div className="container mx-auto flex justify-between items-center px-6 py-4">
                        {/* Logo */}
                        <Link to="/home" className="flex items-center space-x-3 text-white">
                            <img 
                                src={logo}
                                alt="Madapay Logo" 
                                className="h-12 transition duration-300 transform hover:scale-105 shadow-lg"
                            />
                            <span className="text-2xl font-bold text-white">MadaPay</span>
                        </Link>

                        {/* Hamburger Menu for Mobile */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="text-white focus:outline-none" aria-label="Menu">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Profil and Logout Icons (Visible only on Desktop) */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link to="/profil" className="flex items-center relative">
                                <img 
                                    className="h-10 w-10 rounded-full border-2 border-yellow-300 hover:opacity-80 transition duration-300 shadow-md"
                                    src={Customer} 
                                    alt='Profil' 
                                />
                            </Link>
                            <button 
                                onClick={logout} 
                                className="flex items-center p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-200"
                                aria-label="Déconnexion"
                            >
                                <img className="h-5" src={Deconnexion} alt='Déconnexion' />
                            </button>
                            {/* Bouton de changement de thème */}
                            <button 
                                onClick={toggleDarkMode} 
                                className="flex items-center p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition duration-200"
                                aria-label="Changer le mode"
                            >
                                {isDarkMode ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1M12 20v1m9-9h-1M4 12H3m16.24 6.24l-.707.707M5.76 5.76l-.707-.707m12.02 12.02l-.707.707M5.76 18.24l-.707-.707" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1M12 20v1m9-9h-1M4 12H3m16.24 6.24l-.707.707M5.76 5.76l-.707-.707m12.02 12.02l-.707.707M5.76 18.24l-.707-.707" />
                                    </svg>
                                )}
                            </button>

                            {/* Sélecteur de langue */}
                            <select 
                                value={language} 
                                onChange={(e) => changeLanguage(e.target.value)} 
                                className="bg-gray-700 text-white rounded p-2"
                            >
                                <option value="fr">FR</option>
                                <option value="en">EN</option>
                                <option value="mg">MG</option>
                            </select>
                        </div>
                    </div>
                </nav>

                <div className="flex">
                    {/* Menu latéral à gauche */}
                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-64 p-4">
                        <h2 className="text-lg font-bold mb-4 text-purple-600">Mon portefeuille</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/#" className="block p-2 rounded bg-white text-purple-600 hover:bg-purple-200">
                                    Tron
                                </Link>
                            </li>
                            <li>
                                <Link to="/#" className="block p-2 rounded bg-white text-purple-600 hover:bg-purple-200">
                                    Bitcoin
                                </Link>
                            </li>
                            <li>
                                <Link to="/#" className="block p-2 rounded bg-white text-purple-600 hover:bg-purple-200">
                                    {languageOptions[language].payeer}
                                </Link>
                            </li>
                            <li>
                                <Link to="/#" className="block p-2 rounded bg-white text-purple-600 hover:bg-purple-200">
                                    {languageOptions[language].perfectMoney}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    
                </div>
            </div>
        </div>
    );
}

export default Navbar;