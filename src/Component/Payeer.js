import { useState } from 'react';
import { FaArrowDown, FaArrowUp, FaDollarSign, FaMoneyBillWave, FaUser, FaPhone } from 'react-icons/fa';

function Payeer() {
  const [isWithdraw, setIsWithdraw] = useState(true);
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [receivedAmount, setReceivedAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [errors, setErrors] = useState({});

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);

    const conversionRate = isWithdraw ? 2500 : 0.0004;
    const amountInTargetCurrency = isWithdraw
      ? value * conversionRate
      : (value * conversionRate) * 0.5;
    setReceivedAmount(amountInTargetCurrency.toFixed(2));

    if ((value < 3000 && !isWithdraw) || (value < 5 && isWithdraw)) {
      setErrors({
        ...errors,
        amount: isWithdraw
          ? 'Le montant minimum est de 5 Dollars'
          : 'Le montant minimum est de 3000 Ariary',
      });
    } else {
      setErrors({ ...errors, amount: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (amount.toString().trim() === '') {
      newErrors.amount = 'Le montant est requis';
    } else if ((amount < 3000 && !isWithdraw) || (amount < 5 && isWithdraw)) {
      newErrors.amount = isWithdraw
        ? 'Le montant minimum est de 5 Dollars'
        : 'Le montant minimum est de 3000 Ariary';
    }

    if (isWithdraw) {
      if (phoneNumber.trim() === '') {
        newErrors.phoneNumber = 'Le numéro de téléphone est requis';
      }
      if (recipientName.trim() === '') {
        newErrors.recipientName = 'Le nom du titulaire est requis';
      }
    }

    if (accountNumber.trim() === '') {
      newErrors.accountNumber = 'Le numéro de compte Payeer est requis';
    }
    if (paymentMethod.trim() === '') {
      newErrors.paymentMethod = 'La méthode de paiement est requise';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Données du formulaire :', {
        isWithdraw,
        amount,
        accountNumber,
        receivedAmount,
        paymentMethod,
        phoneNumber,
        recipientName,
      });
      // Réinitialiser les champs du formulaire
      setAmount('');
      setAccountNumber('');
      setReceivedAmount('');
      setPaymentMethod('');
      setPhoneNumber('');
      setRecipientName('');
    }
  };

  return (
    <div className="flex-1">
        <div className="flex justify-between">
        <div className="w-1/2 px-3">
      <div className="w-full mb-4 bg-white from-purple-500 to-blue-500 text-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl text-[#506ade] font-bold mb-4">
          {isWithdraw ? 'Retirez en Toute Confiance' : 'Ajoutez des Fonds Rapidement et Sécuritairement'}
        </h2>
        <p>
          {isWithdraw
            ? 'Dites adieu aux longues attentes. Avec Payeer, vos fonds sont disponibles dès que vous en avez besoin, sans frais supplémentaires.'
            : 'Effectuez des dépôts en un instant. Avec Payeer, vos fonds sont disponibles immédiatement après la transaction, en toute sécurité.'}
        </p>
        <h2 className="text-2xl text-[#506ade] font-bold mb-4">
          {isWithdraw ? 'Efficacité et Transparence' : 'Simple, Rapide et Sécurisé'}
        </h2>
        <p>
          {isWithdraw
            ? 'Profitez de la rapidité et de la transparence des retraits instantanés avec Payeer. Accédez à vos fonds immédiatement après la transaction, sans coûts cachés.'
            : 'Déposez des fonds sans attendre. Payeer vous garantit une transaction rapide et sécurisée, avec votre argent disponible instantanément.'}
        </p>
        <h2 className="text-2xl text-[#506ade] font-bold mb-4">
          {isWithdraw ? 'La Rapidité au Service de Votre Confort' : "Alimentez Votre Compte en Un Clin d'Œil"}
        </h2>
        <p>
          {isWithdraw
            ? 'Effectuez des retraits en un instant avec Payeer. Votre argent est disponible tout de suite, en toute sécurité et sans frais cachés.'
            : 'Profitez de dépôts instantanés avec Payeer. Ajoutez des fonds à votre compte immédiatement et en toute sécurité.'}
        </p>
      </div>
      </div>
      <div className="w-1/2" style={{ position: 'relative' }}>
      <div className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg shadow-lg pt-12" style={{ position: 'relative' }}>
        <div className="flex justify-between items-center mb-6">
        <p className="text-gray-200 mt-2"><span className="text-2xl text-yellow-400 font-bold py-8"> {isWithdraw ? '0 Ar' : "0 USD"}</span>  {isWithdraw ? 'de réserve pour retrait.' : "de réserve pour Depot."} </p>
          <div>
          <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
            <button
              onClick={() => setIsWithdraw(false)}
              className={`px-3 py-1 rounded-md transition duration-200 mr-2 ${
                isWithdraw ? 'bg-gray-700 text-white' : 'bg-yellow-500'
              }`}
            >
               Faire un Dépôt
            </button>
            <button
              onClick={() => setIsWithdraw(true)}
              className={`px-3 py-1 rounded-md transition duration-200 ${
                isWithdraw ? 'bg-yellow-500' : 'bg-gray-700 text-white'
              }`}
            >
               Faire un Retrait
            </button>
          </div>
          </div>
        </div>

        {isWithdraw ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Montant que j'envoie (USD) *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaDollarSign className="mr-2 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Exemple : 10"
                    className="w-full bg-transparent focus:outline-none"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
                {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Je reçois</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaMoneyBillWave className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Montant en Ariary"
                    className="w-full bg-transparent focus:outline-none"
                    value={receivedAmount}
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Mon numéro de téléphone *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaPhone className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Exemple : +261..."
                    className="w-full bg-transparent focus:outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Mon numéro de compte Payeer *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Exemple : P1003167687"
                    className="w-full bg-transparent focus:outline-none"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                {errors.accountNumber && (
                  <p className="text-red-500 text-sm">{errors.accountNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Titulaire N° Telephone *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Nom du titulaire"
                    className="w-full bg-transparent focus:outline-none"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                  />
                </div>
                {errors.recipientName && (
                  <p className="text-red-500 text-sm">{errors.recipientName}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Méthode de paiement *</label>
                <select
                  className="w-full p-2 rounded-md bg-gray-800 text-white"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Selectionner une methode</option>
                  <option>Orange Money</option>
                  <option>Mvola</option>
                  <option>Airtel Money</option>
                  <option>Vanilla Pay</option>
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
                )}
              </div>
              <button type="submit" className="bg-yellow-500 px-4 py-2 rounded-md">
                Soumettre
              </button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Montant à déposer *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaMoneyBillWave className="mr-2 text-gray-400" />
                  <input
                    type="number"
                    placeholder="Exemple : 25 000 Ariary"
                    className="w-full bg-transparent focus:outline-none"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </div>
                {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Je reçois</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaDollarSign className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Montant en USD"
                    className="w-full bg-transparent focus:outline-none"
                    value={receivedAmount}
                    readOnly
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Mon numéro de compte Payeer *</label>
                <div className="flex items-center border border-gray-300 rounded-md p-2">
                  <FaUser className="mr-2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Exemple : P1003167687"
                    className="w-full bg-transparent focus:outline-none"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  />
                </div>
                {errors.accountNumber && (
                  <p className="text-red-500 text-sm">{errors.accountNumber}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block mb-2">Méthode de paiement *</label>
                <select
                  className="w-full p-2 rounded-md bg-gray-800 text-white"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option value="">Selectionner une methode</option>
                  <option>Orange Money</option>
                  <option>Mvola</option>
                  <option>Airtel Money</option>
                  <option>Vanilla Pay</option>
                </select>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
                )}
              </div>
              <button type="submit" className="bg-yellow-500 px-4 py-2 rounded-md">
                Soumettre
              </button>
            </form>
          </>
        )}
      </div>
    </div>
    </div>
    </div>
  );
}

export default Payeer;