import React from 'react';
import { useGameStore } from '../store/gameStore';

export const ResultLog: React.FC = () => {
    const { logs } = useGameStore();
    // const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to top (since new logs are added to top, but maybe we want bottom?)
    // Actually, usually logs scroll down. Let's keep newest at top for mobile.

    return (
        <div className="flex-1 bg-black border-4 border-white p-2 shadow-pixel overflow-y-auto min-h-[150px] font-mono text-sm">
            {logs.length === 0 && (
                <div className="text-gray-500 text-center mt-4">
                    錬成準備完了...
                </div>
            )}
            {logs.map((log) => (
                <div key={log.id} className="mb-4 border-b border-gray-800 pb-2 last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-400">
                            [{log.material} + {log.magic}]
                        </span>
                        <span className={`text-xs px-1 ${log.success ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                            {log.success ? '成功' : '失敗'}
                        </span>
                    </div>
                    <div className="text-white leading-relaxed">
                        {log.flavor}
                    </div>
                    {log.success && (
                        <div className="mt-1 text-yellow-400 text-xs">
                            生成: {log.result}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
