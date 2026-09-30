import React from 'react';
import { UserProfile, FamilyData } from '../types';

interface HeaderProps {
  userProfile: UserProfile;
  familyData: FamilyData;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ userProfile, familyData, onSignOut }) => {
  return (
    <header className="bg-[#1a2232] p-4 rounded-xl hud-border mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center text-white text-xl font-bold glow-accent">
          <i className="fa-solid fa-gamepad"></i>
        </div>
        <div>
          <h1 className="text-lg font-black text-white tracking-wider uppercase flex items-center gap-2">
            HUB СЕМЬИ: <span className="text-indigo-400">{userProfile.familyId}</span>
          </h1>
          <p className="text-[11px] text-gray-400">
            {userProfile.email} ({userProfile.role === 'adult' ? 'Родитель' : 'Участник'})
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
          <span className="text-amber-400 font-bold flex items-center gap-1">
            <i className="fa-solid fa-coins"></i> +{familyData.bonusBank}ч
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-indigo-400 font-bold">Lvl {familyData.level}</span>
          <span className="text-gray-500">|</span>
          <span className="text-red-400 font-bold flex items-center gap-1">
            <i className="fa-solid fa-fire"></i> {familyData.streak} дн
          </span>
        </div>

        <button 
          onClick={onSignOut}
          className="bg-slate-800 hover:bg-slate-700 text-xs text-gray-300 px-3 py-2 rounded-lg font-bold border border-slate-700 transition flex items-center gap-2"
        >
          <i className="fa-solid fa-right-from-bracket"></i> Выйти
        </button>
      </div>
    </header>
  );
};