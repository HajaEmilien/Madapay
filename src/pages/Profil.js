import React, { useState, useEffect } from 'react';
import { useUserAuth } from '@/_utils/UserAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profil = () => {
    const { user, updateUserProfile } = useUserAuth(); // Supposons que vous ayez une méthode pour mettre à jour le profil
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setName(user.displayName || '');
            setEmail(user.email || '');
            setLoading(false);
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserProfile({ displayName: name, email });
            toast.success("Profil mis à jour avec succès !");
        } catch (error) {
            toast.error("Erreur lors de la mise à jour du profil.");
        }
        setLoading(false);
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Mon Profil</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-white font-bold py-2 rounded-md hover:bg-yellow-400 transition duration-200"
                    disabled={loading}
                >
                    {loading ? 'Mise à jour...' : 'Mettre à jour le profil'}
                </button>
            </form>
        </div>
    );
};

export default Profil;