import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface LogEntry {
    id: string;
    material: string;
    magic: string;
    result: string;
    flavor: string;
    success: boolean;
}

interface GameState {
    mp: number;
    maxMp: number;
    inventory: string[];
    logs: LogEntry[];
    decreaseMp: (amount: number) => boolean;
    restoreMp: (amount: number) => void;
    addToInventory: (item: string) => void;
    addLog: (entry: Omit<LogEntry, 'id'>) => void;
    resetGame: () => void;
}

export const useGameStore = create<GameState>()(
    persist(
        (set, get) => ({
            mp: 100,
            maxMp: 100,
            inventory: ["錆びた歯車", "泥水", "小麦粉", "木炭"], // Starting items
            logs: [],

            decreaseMp: (amount) => {
                const currentMp = get().mp;
                if (currentMp >= amount) {
                    set({ mp: currentMp - amount });
                    return true;
                }
                return false;
            },

            restoreMp: (amount) => {
                set((state) => ({ mp: Math.min(state.maxMp, state.mp + amount) }));
            },

            addToInventory: (item) => {
                set((state) => {
                    // Prevent duplicates for now, or allow stacking? Let's prevent duplicates to keep it simple
                    if (state.inventory.includes(item)) return state;
                    return { inventory: [...state.inventory, item] };
                });
            },

            addLog: (entry) => {
                set((state) => ({
                    logs: [
                        { ...entry, id: Math.random().toString(36).substring(7) },
                        ...state.logs
                    ]
                }));
            },

            resetGame: () => {
                set({
                    mp: 100,
                    inventory: ["錆びた歯車", "泥水", "小麦粉", "木炭"],
                    logs: []
                });
            }
        }),
        {
            name: 'lifehack-alchemist-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
