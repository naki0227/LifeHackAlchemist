import React from 'react';

// Placeholder for background image
// In real implementation, this would be: url('/assets/background_alchemy_lab.png')
const BackgroundPlaceholder = "https://placehold.co/1280x720/202020/444444?text=Alchemy+Lab+Background";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen w-full bg-gray-900 flex items-center justify-center overflow-hidden font-pixel">
            {/* Background Layer */}
            <div
                className="absolute inset-0 z-0 opacity-50"
                style={{
                    backgroundImage: `url(${BackgroundPlaceholder})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    imageRendering: 'pixelated'
                }}
            />

            {/* Scanline Effect (Optional Retro Feel) */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] bg-repeat" />

            {/* Content Layer */}
            <div className="relative z-20 w-full max-w-md h-full max-h-[90vh] flex flex-col p-4">
                {children}
            </div>
        </div>
    );
};
