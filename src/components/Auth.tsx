import React, { useState } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthProps {
  onShowLegal: (tab: 'privacy' | 'terms') => void;
  onToast: (msg: string, type?: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ onShowLegal, onToast }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'adult' | 'child'>('child'); // По умолчанию ребенок
  const [familyCode, setFamilyCode] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      onToast('Необходимо принять условия и политику!', 'warning');
      return;
    }

    try {
      // Сохраняем выбранную роль и код семьи в localStorage ДО отправки письма
      window.localStorage.setItem('emailForSignIn', email);
      window.localStorage.setItem('pendingRole', role);
      if (familyCode) {
        window.localStorage.setItem('pendingFamilyCode', familyCode);
      } else {
        window.localStorage.removeItem('pendingFamilyCode');
      }

      await sendSignInLinkToEmail(auth, email, {
        url: window.location.href,
        handleCodeInApp: true,
      });

      setEmailSent(true);
      onToast('Ссылка для входа отправлена на почту!', 'success');
    } catch (err: any) {
      onToast('Ошибка: ' + err.message, 'error');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 min-h-screen flex flex-col justify-center">
      <div className="bg-[#1a2232] p-6 rounded-xl hud-border space-y-6">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-700 mx-auto flex items-center justify-center text-3xl font-bold text-white glow-accent">
            <i className="fa-solid fa-gamepad"></i>
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-wider">Quest Play HUB</h1>
          <p className="text-xs text-gray-400">Вход и регистрация по ссылки на Email</p>
        </div>

        {emailSent ? (
          <div className="bg-slate-900 p-4 rounded-lg border border-indigo-500/40 text-center space-y-2">
            <i className="fa-solid fa-envelope-circle-check text-3xl text-indigo-400 mb-1"></i>
            <h3 className="text-sm font-bold text-white">Ссылка отправлена!</h3>
            <p className="text-xs text-gray-400">Перейдите по ссылке в письме на <strong className="text-white">{email}</strong> для входа.</p>
          </div>
        ) : (
          <form onSubmit={handleSendLink} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>

            {/* Выбор роли */}
            <div>
              <label className="text-xs text-gray-400 block mb-1">Кто вы?</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('child')}
                  className={`py-2 rounded text-xs font-bold transition border ${
                    role === 'child'
                      ? 'bg-indigo-600 border-indigo-400 text-white'
                      : 'bg-slate-900 border-slate-700 text-gray-400'
                  }`}
                >
                  <i className="fa-solid fa-child mr-1"></i> Ребенок
                </button>
                <button
                  type="button"
                  onClick={() => setRole('adult')}
                  className={`py-2 rounded text-xs font-bold transition border ${
                    role === 'adult'
                      ? 'bg-amber-600 border-amber-400 text-white'
                      : 'bg-slate-900 border-slate-700 text-gray-400'
                  }`}
                >
                  <i className="fa-solid fa-user-shield mr-1"></i> Родитель
                </button>
              </div>
            </div>

            {/* Если выбыл "Ребенок", запрашиваем код семьи */}
            {role === 'child' && (
              <div>
                <label className="text-xs text-gray-400 block mb-1">Код Семейной Комнаты (от родителя)</label>
                <input 
                  type="text" 
                  required
                  placeholder="Например: HUB-123456"
                  value={familyCode}
                  onChange={(e) => setFamilyCode(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-white uppercase font-mono focus:border-indigo-500 outline-none"
                />
              </div>
            )}

            <div className="flex items-start gap-2 pt-1">
              <input 
                type="checkbox" 
                id="terms" 
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
                className="mt-0.5 rounded border-slate-700 bg-slate-900 text-indigo-500"
              />
              <label htmlFor="terms" className="text-[11px] text-gray-400 leading-tight">
                Согласен с <button type="button" onClick={() => onShowLegal('terms')} className="text-indigo-400 underline">Условиями</button> и <button type="button" onClick={() => onShowLegal('privacy')} className="text-indigo-400 underline">Политикой конфиденциальности</button>.
              </label>
            </div>

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 rounded text-xs uppercase tracking-wider transition">
              Получить ссылку для входа <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};