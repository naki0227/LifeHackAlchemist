import { useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { synthesizeAlchemy } from '../services/gemini';
import { playMagicCast, playSuccess, playFailure, playBeep } from '../utils/sound';

export const useAlchemy = () => {
    const { mp, decreaseMp, addLog, addToInventory } = useGameStore();
    const [isSynthesizing, setIsSynthesizing] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

    const handleSelectMaterial = (material: string) => {
        if (material) playBeep();
        setSelectedMaterial(material);
    };

    const castMagic = async (magic: string) => {
        if (!selectedMaterial) {
            playFailure();
            alert("素材を選択してください！");
            return;
        }

        if (mp < 10) {
            playFailure();
            alert("MPが足りません！");
            return;
        }

        if (isSynthesizing) return;

        playMagicCast();
        setIsSynthesizing(true);
        decreaseMp(10); // Cost 10 MP

        try {
            const result = await synthesizeAlchemy(selectedMaterial, magic);

            addLog({
                material: selectedMaterial,
                magic: magic,
                result: result.result_item_name,
                flavor: result.flavor_text,
                success: result.is_success
            });

            if (result.is_success) {
                playSuccess();
                addToInventory(result.result_item_name);
                // Clear selection on success? Or keep it? Let's keep it for now.
            } else {
                playFailure();
            }
        } catch (e) {
            console.error(e);
            playFailure();
        } finally {
            setIsSynthesizing(false);
        }
    };

    return {
        selectedMaterial,
        setSelectedMaterial: handleSelectMaterial,
        castMagic,
        isSynthesizing
    };
};
