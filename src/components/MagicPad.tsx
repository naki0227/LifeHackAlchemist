import React from 'react';
import { Flame, Sparkles, Wind, Droplets } from 'lucide-react';
import { playBeep } from '../utils/sound';

interface MagicPadProps {
    onCast: (magic: string) => void;
    disabled: boolean;
}

const MAGIC_SPELLS = [
    { id: 'Ignite', icon: Flame, color: 'text-red-500', label: '着火' },
    { id: 'Clean', icon: Sparkles, color: 'text-yellow-400', label: '洗浄' },
    { id: 'Dry', icon: Wind, color: 'text-gray-300', label: '乾燥' },
    { id: 'Water', icon: Droplets, color: 'text-blue-400', label: '注水' },
];

export const MagicPad: React.FC<MagicPadProps> = ({ onCast, disabled }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
            {MAGIC_SPELLS.map((spell) => (
                <button
                    key={spell.id}
                    onClick={() => {
                        playBeep();
                        onCast(spell.id);
                    }}
                    disabled={disabled}
                    className={`
            group relative pixel-btn flex flex-col items-center justify-center h-24
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}
          `}
                >
                    <spell.icon className={`w-8 h-8 mb-2 ${spell.color}`} />
                    <span className="text-xs">{spell.label}</span>
                </button>
            ))}
        </div>
    );
};
