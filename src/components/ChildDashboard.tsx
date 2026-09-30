import React from 'react';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { FamilyData, Quest, QuestRequest, ShopItem } from '../types';

interface ChildDashboardProps {
  familyId: string;
  familyData: FamilyData;
  quests: Quest[];
  requests: QuestRequest[];
  shopItems: ShopItem[];
  onToast: (msg: string, type?: string) => void;
}

export const ChildDashboard: React.FC<ChildDashboardProps> = ({
  familyId, familyData, quests, requests, shopItems, onToast
}) => {
  // Отправка квеста на проверку
  const handleRequestQuest = async (quest: Quest) => {
    if (requests.some(r => r.questId === quest.id && r.status === 'pending')) {
      onToast('Запрос уже отправлен на проверку!', 'warning');
      return;
    }

    await addDoc(collection(db, "families", familyId, "requests"), {
      questId: quest.id,
      questTitle: quest.title,
      bonus: quest.bonus,
      timestamp: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      status: 'pending'
    });

    onToast(`Запрос на "${quest.title}" отправлен родителю!`, 'success');
  };

  // Покупка награды в магазине
  const handleBuyItem = async (item: ShopItem) => {
    if (familyData.bonusBank < item.cost) {
      onToast('Недостаточно бонусных часов!', 'error');
      return;
    }

    const newBank = familyData.bonusBank - item.cost;
    await updateDoc(doc(db, "families", familyId), { bonusBank: newBank });

    await addDoc(collection(db, "families", familyId, "history"), {
      text: `Приобретено: "${item.title}" за ${item.cost} бонус-часа!`,
      date: new Date().toLocaleDateString('ru-RU')
    });

    onToast(`Успешно куплено: ${item.title}!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* КВЕСТЫ */}
      <div className="bg-[#1a2232] p-5 rounded-xl hud-border">
        <h3 className="text-sm font-bold text-white uppercase mb-4 flex items-center justify-between">
          <span><i className="fa-solid fa-crosshairs text-indigo-400 mr-2"></i>Доступные Квесты</span>
          <span className="text-xs text-gray-400">{quests.length} активных</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quests.map(quest => {
            const isPending = requests.some(r => r.questId === quest.id && r.status === 'pending');
            return (
              <div key={quest.id} className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-white uppercase">{quest.title}</span>
                    <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-black px-2 py-0.5 rounded">
                      +{quest.bonus} ЧАС (+{quest.bonus * 50} XP)
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mb-3">{quest.desc}</p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] text-gray-500 uppercase">{quest.category}</span>
                  {isPending ? (
                    <span className="text-[11px] text-amber-400 font-bold bg-amber-950/40 px-2 py-1 rounded border border-amber-500/30">
                      <i className="fa-solid fa-hourglass-half animate-pulse"></i> На проверке
                    </span>
                  ) : (
                    <button onClick={() => handleRequestQuest(quest)} className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded font-bold transition">
                      Выполнил! <i className="fa-solid fa-paper-plane ml-1"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* МАГАЗИН */}
      <div className="bg-[#1a2232] p-5 rounded-xl hud-border">
        <h3 className="text-sm font-bold text-white uppercase mb-4"><i className="fa-solid fa-store text-amber-400 mr-2"></i>Магазин Наград</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {shopItems.map(item => (
            <div key={item.id} className="bg-slate-900 p-3 rounded-lg border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <i className={`fa-solid ${item.icon || 'fa-gift'} text-amber-400 text-lg`}></i>
                <div>
                  <span className="text-xs font-bold text-white block">{item.title}</span>
                  <span className="text-[10px] text-gray-400">{item.cost} бонус-часа</span>
                </div>
              </div>
              <button onClick={() => handleBuyItem(item)} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs px-2.5 py-1 rounded transition">
                Купить
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};