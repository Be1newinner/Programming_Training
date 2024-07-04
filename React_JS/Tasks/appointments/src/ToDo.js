import React, { useState } from 'react';

function ToDo() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { text: newItem, id: Date.now() }]);
      setNewItem('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const editItem = (id) => {
    const item = items.find(item => item.id === id);
    setNewItem(item.text);
    setIsEditing(true);
    setCurrentItem(item);
  };

  const updateItem = () => {
    setItems(items.map(item => (item.id === currentItem.id ? { ...item, text: newItem } : item)));
    setNewItem('');
    setIsEditing(false);
    setCurrentItem(null);
  };

  return (
    <div>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={isEditing ? updateItem : addItem}>
        {isEditing ? 'Update Item' : 'Add Item'}
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => editItem(item.id)}>Edit</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
