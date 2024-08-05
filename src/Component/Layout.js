import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useUserAuth } from '@/_utils/UserAuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../Asset/logo.png';
import Customer from '@/Asset/Customer.png';
import Deconnexion from '@/Asset/Deconnexion.png';
import Footer from './Footer';
import '../Style/Navbar.css';


const Layout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState('fr');
    const navigate = useNavigate();
    const location = useLocation();
    const { logOut } = useUserAuth();

    const logout = async () => {
        try {
            await logOut();
            navigate('/connexion');
        } catch (error) {
            console.error(error.message);
            alert("Pour une raison quelconque, nous ne pouvons pas vous déconnecter");
        }
    }
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    }

    const changeLanguage = (lang) => {
        setLanguage(lang);
    }

    const isActiveLink = (path) => {
        return location.pathname === path ? 'bg-purple-200 text-purple-700 font-semibold' : 'text-purple-600 hover:bg-purple-200';
    }

    return (
        <div className="layout">
            <ToastContainer />
            <div className="flex flex-col h-screen">
                <nav className="shadow-lg bg-gradient-to-r from-purple-600 to-blue-600 w-full">
                    <div className="container mx-auto flex justify-between items-center px-6 py-4">
                        <Link to="/home" className="flex items-center space-x-3 text-white">
                            <img 
                                src={logo}
                                alt="Madapay Logo" 
                                className="h-12 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
                            />
                            <span className="text-2xl font-bold text-white">MadaPay</span>
                        </Link>
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link to="/profil" className="flex items-center relative">
                            
<img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"/>

                            </Link>
                            <button 
                                onClick={logout} 
                                className="flex items-center p-2  rounded-md text-white  hover:bg-red-700 transition duration-200"
                                aria-label="Déconnexion"
                            >
                                <img className="h-5" src={Deconnexion} alt='Déconnexion' />
                            </button>
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
                    <div className="bg-[#fbfbfb]  w-64 p-4">
                        
                        <ul className="space-y-2">
                            <li>
                                <Link to="/payeer" className={`flex items-center text-[#696bea] p-2 rounded ${isActiveLink('/payeer')}`}>
                                    payeer
                                </Link>
                            </li>
                            <li>
                                <Link to="/perfect" className={`flex items-center text-[#696bea] p-2 rounded ${isActiveLink('/perfect')}`}>
                                   perfectMoney
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 flex items-center p-1 bg-white">
                        <div className="container mx-auto px-4">
                            <Outlet />
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Layout;