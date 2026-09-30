import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { onAuthStateChanged, signOut, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { auth, db } from './firebase';
import { UserProfile, FamilyData, Quest, QuestRequest, ShopItem } from './types';
import { Auth } from './components/Auth';
import { Header } from './components/Header';
import { AdultDashboard } from './components/AdultDashboard';
import { ChildDashboard } from './components/ChildDashboard';
import { LegalModal } from './components/LegalModal';
import { QuestModal, ShopModal } from './components/Modals';
import './index.css';

const DEFAULT_FAMILY_DATA: FamilyData = {
  baseHours: 2,
  bonusBank: 0,
  usedToday: 0,
  xp: 0,
  level: 1,
  streak: 0,
  lastResetDate: new Date().toISOString().split('T')[0],
  unlockedAchievements: []
};

const App: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [familyData, setFamilyData] = useState<FamilyData>(DEFAULT_FAMILY_DATA);
  const [quests, setQuests] = useState<Quest[]>([]);
  const [requests, setRequests] = useState<QuestRequest[]>([]);
  const [shopItems, setShopItems] = useState<ShopItem[]>([]);

  // Modals state
  const [showLegal, setShowLegal] = useState(false);
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');
  const [showQuestModal, setShowQuestModal] = useState(false);
  const [showShopModal, setShowShopModal] = useState(false);
  const [editingShopItem, setEditingShopItem] = useState<ShopItem | null>(null);
  const [notification, setNotification] = useState<{ msg: string; type: string } | null>(null);

  const showToast = (msg: string, type = 'info') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3500);
  };

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn');
      if (!email) email = window.prompt('Подтвердите ваш Email:');
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then(() => window.localStorage.removeItem('emailForSignIn'))
          .catch(err => showToast("Ошибка входа: " + err.message, "error"));
      }
    }

    return onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userSnap = await getDoc(doc(db, "users", currentUser.uid));
        if (userSnap.exists()) {
          const profile = userSnap.data() as UserProfile;
          setUserProfile(profile);
          subscribeToFamily(profile.familyId);
        } else {
          // Считываем сохраненную роль (по умолчанию 'child', а не 'adult')
          const savedRole = window.localStorage.getItem('pendingRole') as 'adult' | 'child' | null;
          const role = savedRole || 'child'; 
          const savedCode = window.localStorage.getItem('pendingFamilyCode') || '';

          const familyId = savedCode 
            ? savedCode.toUpperCase() 
            : "HUB-" + Math.floor(100000 + Math.random() * 900000);
        
          const newProfile: UserProfile = {
            email: currentUser.email!,
            role,
            familyId,
            createdAt: new Date().toISOString()
          };
        
          await setDoc(doc(db, "users", currentUser.uid), newProfile);

          // Создаем документ семьи только если это Родитель
          if (role === 'adult') {
            await setDoc(doc(db, "families", familyId), DEFAULT_FAMILY_DATA);
          }
        
          // Очищаем временные ключи
          window.localStorage.removeItem('pendingRole');
          window.localStorage.removeItem('pendingFamilyCode');
        
          setUserProfile(newProfile);
          subscribeToFamily(familyId);
        }
      } else {
        setUserProfile(null);
      }
    });
  }, []);

  const subscribeToFamily = (familyId: string) => {
    onSnapshot(doc(db, "families", familyId), (snap) => {
      if (snap.exists()) setFamilyData(snap.data() as FamilyData);
    });

    onSnapshot(collection(db, "families", familyId, "quests"), (snap) => {
      setQuests(snap.docs.map(d => ({ id: d.id, ...d.data() } as Quest)));
    });

    onSnapshot(collection(db, "families", familyId, "requests"), (snap) => {
      setRequests(snap.docs.map(d => ({ id: d.id, ...d.data() } as QuestRequest)));
    });

    onSnapshot(collection(db, "families", familyId, "shop_items"), (snap) => {
      setShopItems(snap.docs.map(d => ({ id: d.id, ...d.data() } as ShopItem)));
    });
  };

  if (!user || !userProfile) {
    return (
      <>
        <Auth 
          onShowLegal={(tab) => { setLegalTab(tab); setShowLegal(true); }} 
          onToast={showToast} 
        />
        {showLegal && (
          <LegalModal 
            activeTab={legalTab} 
            onTabChange={setLegalTab} 
            onClose={() => setShowLegal(false)} 
          />
        )}
      </>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-3 sm:p-6 min-h-screen flex flex-col justify-between">
      <div>
        <Header 
          userProfile={userProfile} 
          familyData={familyData} 
          onSignOut={() => signOut(auth)} 
        />

        {notification && (
          <div className="fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-xl text-sm font-semibold bg-indigo-900 border border-indigo-500 text-white">
            {notification.msg}
          </div>
        )}

        {userProfile.role === 'adult' ? (
          <AdultDashboard 
            familyId={userProfile.familyId}
            familyData={familyData}
            quests={quests}
            requests={requests}
            shopItems={shopItems}
            onOpenQuestModal={() => setShowQuestModal(true)}
            onOpenShopModal={(item) => { setEditingShopItem(item || null); setShowShopModal(true); }}
            onToast={showToast}
          />
        ) : (
          <ChildDashboard 
            familyId={userProfile.familyId}
            familyData={familyData}
            quests={quests}
            requests={requests}
            shopItems={shopItems}
            onToast={showToast}
          />
        )}
      </div>

      {showQuestModal && (
        <QuestModal 
          familyId={userProfile.familyId} 
          onClose={() => setShowQuestModal(false)} 
          onToast={showToast} 
        />
      )}

      {showShopModal && (
        <ShopModal 
          familyId={userProfile.familyId} 
          editingItem={editingShopItem} 
          onClose={() => setShowShopModal(false)} 
          onToast={showToast} 
        />
      )}

      {showLegal && (
        <LegalModal 
          activeTab={legalTab} 
          onTabChange={setLegalTab} 
          onClose={() => setShowLegal(false)} 
        />
      )}

      <footer className="mt-8 text-center text-xs text-gray-600 border-t border-slate-900 pt-4 flex justify-between items-center">
        <span>Quest Play HUB v3.2 (TypeScript)</span>
        <button onClick={() => setShowLegal(true)} className="hover:text-gray-400">
          Политика конфиденциальности
        </button>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);