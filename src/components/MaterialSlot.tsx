import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Package } from 'lucide-react';
import { playBeep } from '../utils/sound';

interface MaterialSlotProps {
    selectedMaterial: string | null;
    onSelect: (material: string) => void;
}

export const MaterialSlot: React.FC<MaterialSlotProps> = ({ selectedMaterial, onSelect }) => {
    const { inventory } = useGameStore();

    return (
        <div className="mb-4">
            <div className="text-xs mb-1 text-gray-300">素材 (MATERIAL)</div>
            <div className="bg-gray-800 border-4 border-white p-2 shadow-pixel min-h-[80px] flex items-center justify-center relative">
                {selectedMaterial ? (
                    <div className="flex flex-col items-center animate-bounce">
                        {/* Placeholder Icon */}
                        <Package className="w-8 h-8 text-orange-400 mb-1" />
                        <span className="text-sm text-yellow-300">{selectedMaterial}</span>
                        <button
                            onClick={() => {
                                playBeep();
                                onSelect('');
                            }}
                            className="absolute top-1 right-1 text-xs text-red-400 hover:text-red-300"
                        >
                            x
                        </button>
                    </div>
                ) : (
                    <span className="text-gray-500 text-xs">素材を選択してください...</span>
                )}
            </div>

            {/* Simple Inventory List for Prototype */}
            <div className="mt-2 flex gap-2 overflow-x-auto pb-2">
                {inventory.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onSelect(item)}
                        className={`
              px-2 py-1 text-xs border-2 border-white bg-gray-700 hover:bg-gray-600 whitespace-nowrap
              ${selectedMaterial === item ? 'bg-blue-700' : ''}
            `}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};
