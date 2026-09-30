import React, { useState } from 'react';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { FamilyData, Quest, QuestRequest, ShopItem } from '../types';

interface AdultDashboardProps {
  familyId: string;
  familyData: FamilyData;
  quests: Quest[];
  requests: QuestRequest[];
  shopItems: ShopItem[];
  onOpenQuestModal: () => void;
  onOpenShopModal: (item?: ShopItem) => void;
  onToast: (msg: string, type?: string) => void;
}

export const AdultDashboard: React.FC<AdultDashboardProps> = ({
  familyId, familyData, quests, requests, shopItems, onOpenQuestModal, onOpenShopModal, onToast
}) => {
  const [penalizeHours, setPenalizeHours] = useState(1);
  const [penalizeReason, setPenalizeReason] = useState('');

  const pendingRequests = requests.filter(r => r.status === 'pending');

  const handleApprove = async (req: QuestRequest) => {
    const newBank = familyData.bonusBank + req.bonus;
    const addedXp = req.bonus * 50; // 50 XP за час
    let newXp = familyData.xp + addedXp;
    let newLevel = familyData.level;

    if (newXp >= newLevel * 300) {
      newLevel += 1;
    }

    await updateDoc(doc(db, "families", familyId, "requests", req.id), { status: "approved" });

    await updateDoc(doc(db, "families", familyId), {
      bonusBank: newBank,
      xp: newXp,
      level: newLevel
    });

    await addDoc(collection(db, "families", familyId, "history"), {
      text: `Одобрен квест "${req.questTitle}". Начислено +${req.bonus}ч и +${addedXp} XP!`,
      date: new Date().toLocaleDateString('ru-RU')
    });

    onToast(`Квест одобрен! +${req.bonus}ч отправлено в банк.`, 'success');
  };

  const handleReject = async (req: QuestRequest) => {
    await updateDoc(doc(db, "families", familyId, "requests", req.id), { status: "rejected" });
    onToast('Запрос отклонен', 'info');
  };

  const handlePenalize = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBank = Math.max(0, familyData.bonusBank - penalizeHours);
    
    await updateDoc(doc(db, "families", familyId), {
      bonusBank: newBank,
      streak: 0
    });

    await addDoc(collection(db, "families", familyId, "history"), {
      text: `Штраф -${penalizeHours}ч. Причина: ${penalizeReason || "Нарушение дисциплины"}`,
      date: new Date().toLocaleDateString('ru-RU')
    });

    setPenalizeReason('');
    onToast(`Применен штраф -${penalizeHours}ч`, 'warning');
  };

  return (
    <div className="space-y-6">
      {/* ПАНЕЛЬ ВЗРОСЛОГО */}
      <div className="bg-amber-950/30 p-5 rounded-xl border border-amber-500/40 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
            <i className="fa-solid fa-sliders"></i> Панель Управления Родителя
          </h3>
          <span className="text-xs bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
            Квестов: {quests.length} | В магазине: {shopItems.length}
          </span>
        </div>

        {/* Запросы от ребенка */}
        {pendingRequests.length > 0 ? (
          <div className="space-y-3 bg-slate-900/90 p-4 rounded-lg border border-amber-500/50">
            <span className="text-xs font-bold text-amber-300 block mb-2">⚡ Ожидают вашего подтверждения:</span>
            {pendingRequests.map(req => (
              <div key={req.id} className="bg-slate-800 p-3 rounded-md flex items-center justify-between gap-3 border border-slate-700">
                <div>
                  <span className="text-xs text-white font-bold block">{req.questTitle}</span>
                  <span className="text-[10px] text-gray-400">Награда: +{req.bonus}ч (+{req.bonus * 50} XP) • {req.timestamp}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => handleApprove(req)} className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3 py-1.5 rounded font-bold transition">
                    <i className="fa-solid fa-check"></i> Одобрить
                  </button>
                  <button onClick={() => handleReject(req)} className="bg-red-600 hover:bg-red-500 text-white text-xs px-2 py-1.5 rounded transition">
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs text-gray-400 bg-slate-900/50 p-3 rounded border border-slate-800">
            Нет новых запросов на проверку.
          </div>
        )}

        {/* Кнопки действий */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button onClick={onOpenQuestModal} className="bg-indigo-600 hover:bg-indigo-500 text-xs text-white px-3 py-2 rounded-lg font-bold transition flex items-center gap-2">
            <i className="fa-solid fa-plus"></i> Создать Квест
          </button>
          <button onClick={() => onOpenShopModal()} className="bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs px-3 py-2 rounded-lg font-bold transition flex items-center gap-2">
            <i className="fa-solid fa-cart-plus"></i> Добавить в Магазин
          </button>
        </div>
      </div>

      {/* УПРАВЛЕНИЕ МАГАЗИНОМ ДЛЯ РОДИТЕЛЯ */}
      {shopItems.length > 0 && (
        <div className="bg-[#1a2232] p-5 rounded-xl hud-border space-y-3">
          <h4 className="text-xs font-bold text-gray-300 uppercase flex items-center gap-2">
            <i className="fa-solid fa-store text-amber-400"></i> Редактирование товаров магазина
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {shopItems.map(item => (
              <div key={item.id} className="bg-slate-900 p-2.5 rounded border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-white font-semibold">{item.title} ({item.cost}ч)</span>
                <button 
                  onClick={() => onOpenShopModal(item)}
                  className="text-amber-400 hover:text-amber-300 p-1 transition"
                  title="Редактировать"
                >
                  <i className="fa-solid fa-pen"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ШТРАФЫ */}
      <div className="bg-[#1a2232] p-5 rounded-xl hud-border border-red-500/30">
        <h4 className="text-xs font-bold text-red-400 uppercase mb-3"><i className="fa-solid fa-triangle-exclamation"></i> Применить Списание / Штраф</h4>
        <form onSubmit={handlePenalize} className="flex gap-2">
          <input 
            type="text" 
            placeholder="Причина (двойка, обман)" 
            value={penalizeReason}
            onChange={(e) => setPenalizeReason(e.target.value)}
            className="flex-1 bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"
          />
          <select 
            value={penalizeHours}
            onChange={(e) => setPenalizeHours(Number(e.target.value))}
            className="bg-slate-900 border border-slate-700 rounded p-2 text-xs text-white"
          >
            <option value="1">-1 час</option>
            <option value="2">-2 часа</option>
          </select>
          <button type="submit" className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-3 py-2 rounded">Списать</button>
        </form>
      </div>
    </div>
  );
};