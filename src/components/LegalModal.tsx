import React from 'react';

interface LegalModalProps {
  activeTab: 'privacy' | 'terms';
  onTabChange: (tab: 'privacy' | 'terms') => void;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ activeTab, onTabChange, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#1a2232] p-6 rounded-xl hud-border max-w-2xl w-full space-y-4 max-h-[80vh] overflow-y-auto text-xs text-gray-300">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onTabChange('privacy')} 
              className={`font-bold uppercase ${activeTab === 'privacy' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-500'}`}
            >
              Политика конфиденциальности
            </button>
            <button 
              onClick={() => onTabChange('terms')} 
              className={`font-bold uppercase ${activeTab === 'terms' ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-gray-500'}`}
            >
              Условия использования
            </button>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {activeTab === 'privacy' ? (
          <div className="space-y-3 leading-relaxed">
            <h4 className="font-bold text-white">1. Сбор данных</h4>
            <p>Мы собираем только ваш Email для авторизации. Пароли не хранятся, вход выполняется по одноразовой ссылке.</p>
            <h4 className="font-bold text-white">2. Использование данных</h4>
            <p>Данные используются исключительно для функционирования сервиса внутри вашей семьи.</p>
            <h4 className="font-bold text-white">3. Авторские права</h4>
            <p>Сервис является независимым проектом и не использует чужие коммерческие бренды.</p>
          </div>
        ) : (
          <div className="space-y-3 leading-relaxed">
            <h4 className="font-bold text-white">1. Назначение сервиса</h4>
            <p>Quest Play HUB — это инструмент для внутрисемейного планирования времени и геймификации обязанностей.</p>
            <h4 className="font-bold text-white">2. Ответственность</h4>
            <p>Родители самостоятельно регулируют нормы времени и задания для детей.</p>
          </div>
        )}

        <button onClick={onClose} className="w-full bg-slate-800 text-white font-bold py-2 rounded">
          Закрыть
        </button>
      </div>
    </div>
  );
};