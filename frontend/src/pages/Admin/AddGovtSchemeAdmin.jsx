import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function AddGovtSchemeAdmin() {
  const [showForm, setShowForm] = useState(false);
  const [cards, setCards] = useState([]);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!image || !title || !description) return;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await fetch('/api/cards', {
        method: 'POST',
        body: formData,
      });
      const newCard = await response.json();
      setCards([newCard, ...cards]);
    } catch (error) {
      console.error('Error submitting data:', error);
    }

    setShowForm(false);
    setImage(null);
    setTitle('');
    setDescription('');
  };

  const handleCancel = () => {
    setShowForm(false);
    setImage(null);
    setTitle('');
    setDescription('');
  };

  return (
    
    <div className="p-4">
        
      <Button onClick={() => setShowForm(true)}>Add New Card</Button>

      {showForm && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="mb-4" />
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full mb-4 p-2 border rounded" />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full mb-4 p-2 border rounded"></textarea>
            <div className="flex justify-end gap-2">
              <Button onClick={handleCancel} variant="secondary">Cancel</Button>
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {cards.map((card) => (
          <Card key={card.id} className="p-4 shadow-lg">
            {card.image && <img src={card.image} alt="" className="w-full h-48 object-cover mb-2 rounded-lg" />}
            <h3 className="text-lg font-bold mb-2">{card.title}</h3>
            <p>{card.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
