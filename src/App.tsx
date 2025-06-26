import React, { useState } from 'react';
import { ParticipantModal } from './components/ParticipantModal';
import { Button } from './components/ui/button';
import './globals.css';

const sampleParticipant = {
  name: "Alexandrine MAURICE ANTON",
  birthDate: "25/12/1980",
  phone: "01 17 85 67 89",
  email: "alexandrina@yahoo.com",
  address: {
    street: "18 Bis Avenue du Général de Gaulle",
    building: "Résidence de l'Etoile, Bâtiment D7",
    apartment: "Appartement 209",
    postalCode: "75075",
    city: "Paris",
    country: "FRANCE"
  },
  status: "SUPPRIMÉ" as const,
  payments: {
    acompte: {
      amount: "45 €",
      date: "25/03/2023",
      method: "Par chèque" as const
    },
    soldeRestant: {
      amount: "75 €",
      date: "18/03/2023",
      method: "Par virement" as const
    }
  },
  remarks: [
    {
      trainer: "Géraldine WALTMAN",
      comment: "Lorem ipsum dolor sit met connecteur, id nunc commode feugisat sapen risus uma id ipsum lorem ipsum rectilum dolor sit met connectetur, verimentum logic dectum id florem ipsum dolor sit met connecteur nunc commode feugisat sapen risus uma id ipsum fluctuat nec mergitur id nunc commode feugisat sum lorem ipsum dolor sit met connectetur,"
    },
    {
      trainer: "Dorian FARAMINOR",
      comment: "Logic dectum id florem ipsum dolor sit met connecteur nunc commode feugisat sapen risus uma id ipsum fluctuat nec mergitur id nunc commode feugisat sum lorem ipsum dolor sit met connecteur,"
    }
  ],
  profileImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // flagUrl không được truyền để sử dụng giá trị mặc định (cờ Pháp)
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (

      <ParticipantModal
        isOpen={isModalOpen}
        onClose={() => {}}
        participant={sampleParticipant}
      />
  );
}

export default App; 