export interface UserProfile {
  email: string;
  role: 'adult' | 'child';
  familyId: string;
  createdAt: string;
}

export interface FamilyData {
  baseHours: number;
  bonusBank: number;
  usedToday: number;
  xp: number;
  level: number;
  streak: number;
  lastResetDate: string;
  unlockedAchievements: string[];
}

export interface Quest {
  id: string;
  title: string;
  bonus: number;
  category: 'school' | 'scooter' | 'discipline';
  desc: string;
}

export interface QuestRequest {
  id: string;
  questId: string;
  questTitle: string;
  bonus: number;
  timestamp: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ShopItem {
  id: string;
  title: string;
  cost: number;
  icon: string;
}

export interface HistoryItem {
  id: number;
  text: string;
  date: string;
}