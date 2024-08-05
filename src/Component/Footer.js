import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Importer les icônes

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center">
            <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex justify-center md:justify-start mb-4 md:mb-0">
                        <span className="font-semibold">MadaPay © 2024</span>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h5 className="font-semibold mb-2">Liens de support</h5>
                        <ul className="list-none space-y-2 text-center md:text-left">
                            <li>
                                <Link to="/home" className="hover:text-yellow-400 transition duration-200">Accueil</Link>
                            </li>
                            <li>
                                <Link to="/support" className="hover:text-yellow-400 transition duration-200">Support</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-yellow-400 transition duration-200">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h5 className="font-semibold mb-2">Suivez-nous</h5>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">
                                <FaFacebook className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">
                                <FaInstagram className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-200">
                                <FaTwitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;