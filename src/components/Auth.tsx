import React, { useState } from 'react';
import { sendSignInLinkToEmail } from 'firebase/auth';
import { auth } from '../firebase';

interface AuthProps {
  onShowLegal: (tab: 'privacy' | 'terms') => void;
  onToast: (msg: string, type?: string) => void;
}

export const Auth: React.FC<AuthProps> = ({ onShowLegal, onToast }) => {
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSendLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      onToast('Необходимо принять условия и политику!', 'warning');
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.href,
        handleCodeInApp: true,
      });
      window.localStorage.setItem('emailForSignIn', email);
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
          <p className="text-xs text-gray-400">Вход по одноразовой ссылке без пароля</p>
        </div>

        {emailSent ? (
          <div className="bg-slate-900 p-4 rounded-lg border border-indigo-500/40 text-center space-y-2">
            <i className="fa-solid fa-envelope-circle-check text-3xl text-indigo-400 mb-1"></i>
            <h3 className="text-sm font-bold text-white">Ссылка отправлена!</h3>
            <p className="text-xs text-gray-400">Проверьте почту <strong className="text-white">{email}</strong> и перейдите по ссылке.</p>
          </div>
        ) : (
          <form onSubmit={handleSendLink} className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Email родителя или ребенка</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="family@example.com"
                className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-xs text-white focus:border-indigo-500 outline-none"
              />
            </div>

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
              Войти по Email <i className="fa-solid fa-arrow-right ml-1"></i>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};