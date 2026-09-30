import React, { useState } from 'react';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { ShopItem } from '../types';

interface QuestModalProps {
  familyId: string;
  onClose: () => void;
  onToast: (msg: string, type?: string) => void;
}

export const QuestModal: React.FC<QuestModalProps> = ({ familyId, onClose, onToast }) => {
  const [title, setTitle] = useState('');
  const [bonus, setBonus] = useState(1);
  const [category, setCategory] = useState<'school' | 'scooter' | 'discipline'>('school');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    await addDoc(collection(db, "families", familyId, "quests"), {
      title,
      bonus: Number(bonus),
      category,
      desc: "Пользовательский квест от родителя"
    });

    onToast("Новый квест успешно создан!", "success");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1a2232] p-6 rounded-xl hud-border max-w-md w-full space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase"><i className="fa-solid fa-plus text-indigo-400 mr-2"></i>Добавить квест</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Название квеста</label>
            <input 
              type="text" 
              required 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Например: Убраться в комнате" 
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Награда (Часы)</label>
              <select value={bonus} onChange={(e) => setBonus(Number(e.target.value))} className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white">
                <option value="1">+1 час (+50 XP)</option>
                <option value="2">+2 часа (+100 XP)</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Категория</label>
              <select value={category} onChange={(e) => setCategory(e.target.value as any)} className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white">
                <option value="school">Учеба</option>
                <option value="scooter">Скутер / Гараж</option>
                <option value="discipline">Дисциплина</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 rounded text-xs uppercase transition mt-2">
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};

interface ShopModalProps {
  familyId: string;
  editingItem?: ShopItem | null;
  onClose: () => void;
  onToast: (msg: string, type?: string) => void;
}

export const ShopModal: React.FC<ShopModalProps> = ({ familyId, editingItem, onClose, onToast }) => {
  const [title, setTitle] = useState(editingItem?.title || '');
  const [cost, setCost] = useState(editingItem?.cost || 1);
  const [icon, setIcon] = useState(editingItem?.icon || 'fa-gamepad');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    if (editingItem) {
      await updateDoc(doc(db, "families", familyId, "shop_items", editingItem.id), {
        title,
        cost: Number(cost),
        icon
      });
      onToast("Товар обновлен!", "success");
    } else {
      await addDoc(collection(db, "families", familyId, "shop_items"), {
        title,
        cost: Number(cost),
        icon
      });
      onToast("Товар добавлен в Магазин!", "success");
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1a2232] p-6 rounded-xl hud-border max-w-md w-full space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase"><i className="fa-solid fa-store text-amber-400 mr-2"></i>{editingItem ? "Редактировать" : "Добавить в магазин"}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-xs text-gray-400 block mb-1">Название награды</label>
            <input 
              type="text" 
              required 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Например: Поездка на картинг" 
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Стоимость (Часов)</label>
              <input 
                type="number" 
                min="1" 
                value={cost} 
                onChange={(e) => setCost(Number(e.target.value))} 
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Иконка</label>
              <select value={icon} onChange={(e) => setIcon(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white">
                <option value="fa-gamepad">🎮 Игры</option>
                <option value="fa-motorcycle">🛵 Скутер</option>
                <option value="fa-gas-pump">⛽ Бензин</option>
                <option value="fa-gift">🎁 Подарок</option>
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded text-xs uppercase transition mt-2">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
};