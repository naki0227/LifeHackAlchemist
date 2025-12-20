import React from 'react';
import { useGameStore } from '../store/gameStore';

export const ManaGauge: React.FC = () => {
    const { mp, maxMp } = useGameStore();
    const percentage = (mp / maxMp) * 100;

    return (
        <div className="w-full mb-4">
            <div className="flex justify-between text-xs mb-1 text-blue-300 shadow-black drop-shadow-md">
                <span>MP</span>
                <span>{mp}/{maxMp}</span>
            </div>
            <div className="w-full h-6 bg-gray-800 border-4 border-white shadow-pixel relative">
                <div
                    className="h-full bg-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${percentage}%` }}
                />
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-20 pointer-events-none" />
            </div>
        </div>
    );
};
