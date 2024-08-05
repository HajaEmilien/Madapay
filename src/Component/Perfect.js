import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';

function Perfect() {
    const [isWithdraw, setIsWithdraw] = useState(true);
    return (
        <div className="flex-1">
            {/* Section de Présentation */}
            <div className="w-100% mb-4 bg-gray-700 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{isWithdraw ? 'RETRAIT Perfect instantané' : 'DÉPÔT Perfect instantané'}</h2>
                <p>
                    {isWithdraw
                        ? 'Effectuez des retraits rapides, sécurisés et sans frais cachés. Votre argent est disponible immédiatement après la transaction.'
                        : 'Profitez de transactions simples, sécurisées et transparentes pour vos dépôts. Aucun frais supplémentaire pour les dépôts via mobile money.'}
                </p>
            </div>

            {/* Section de Formulaire */}
            <div className="flex-1   bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-yellow-400">{isWithdraw ? 'RETRAIT' : 'DÉPÔT'}</h2>
                    <div>
                        <button
                            onClick={() => setIsWithdraw(false)}
                            className={`px-4 py-2 rounded-md transition duration-200 ${isWithdraw ? 'bg-gray-700 text-white' : 'bg-yellow-500'}`}
                        >
                           <FaArrowDown className="mr-2" /> Faire un Dépôt
                        </button>
                        <button
                            onClick={() => setIsWithdraw(true)}
                            className={`px-4 py-2 rounded-md transition duration-200 ${isWithdraw ? 'bg-yellow-500' : 'bg-gray-700 text-white'}`}
                        >
                          <FaArrowUp className="mr-2" />  Faire un Retrait
                        </button>
                    </div>
                </div>

                

                {isWithdraw ? (
                    <>
                        <p className="text-gray-200 mt-2">0 Ariary de réserve pour retrait Perfect .</p>
                        <h2 className="text-xl font-semibold mb-4">Ici formulaire de retrait </h2>
                        {/* Ajoutez ici les champs nécessaires pour le retrait  */}
                    </>
                ) : (
                    <>
                        <p className="text-gray-200 mt-2">0 Ariary de réserve pour dépot Perfect.</p>
                        <h2 className="text-xl font-semibold mb-4">Ici formulaire de dépot</h2>
                        {/* Ajoutez ici les champs nécessaires pour le dépôt */}
                    </>
                )}
            </div>
        </div>
    );
}

export default Perfect;