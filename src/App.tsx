
import { Layout } from './components/Layout';
import { ManaGauge } from './components/ManaGauge';
import { MaterialSlot } from './components/MaterialSlot';
import { MagicPad } from './components/MagicPad';
import { ResultLog } from './components/ResultLog';
import { useAlchemy } from './hooks/useAlchemy';

function App() {
  const {
    selectedMaterial,
    setSelectedMaterial,
    castMagic,
    isSynthesizing
  } = useAlchemy();

  return (
    <Layout>
      <header className="mb-4 text-center border-b-4 border-white pb-2">
        <h1 className="text-xl text-yellow-400 drop-shadow-md">ライフハック・アルケミスト</h1>
      </header>

      <ManaGauge />

      <div className="flex-1 flex flex-col gap-4">
        <MaterialSlot
          selectedMaterial={selectedMaterial}
          onSelect={setSelectedMaterial}
        />

        <MagicPad
          onCast={castMagic}
          disabled={isSynthesizing}
        />

        <ResultLog />
      </div>

      {isSynthesizing && (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="text-white text-xl animate-pulse">錬成中...</div>
        </div>
      )}
    </Layout>
  );
}

export default App;
