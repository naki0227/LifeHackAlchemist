# プロジェクト企画書：Lifehack Alchemist

> **キャッチコピー:** 「その『生活魔法』、科学で使えば大量破壊兵器。」

## 1. プロジェクト基本情報
- **プロジェクト名:** Lifehack Alchemist (ライフハック・アルケミスト)
- **ジャンル:** 生活魔法 × 科学合成シミュレーション RPG
- **プラットフォーム:** Web (PC/Mobile) ※将来的にCapacitorでアプリ化予定
- **ビジュアルスタイル:** 16-bit レトロピクセルアート（SFC風ドット絵）

## 2. ゲーム概要 (Overview)

### コンセプト
**"Stealth Education" (ステルス教育)**
プレイヤーに「勉強させている」と感じさせることなく、ゲームプレイを通じて「物理法則」や「化学反応」の面白さに気づかせる。

### ストーリー
舞台は属性魔法が至高とされる中世ファンタジー世界。現代日本から転生した主人公は、攻撃魔法が一切使えない「生活魔法（着火・洗浄・乾燥・注水）」しか使えない落ちこぼれ。
しかし、彼は現代科学の知識を持っていた。「洗浄」でウランを濃縮し、「着火」で粉塵爆発を起こす……。
これは、科学の知識（ライフハック）で異世界を蹂躙する物語。

### コアゲームループ
1. **素材収集:** ダンジョンで「ゴミ」や「ありふれた素材」を拾う。
2. **科学合成:** 素材に対し、適切な「生活魔法」と「条件（密閉・圧縮など）」を組み合わせる。
3. **AI判定:** Google Gemini API が組み合わせを解析し、「科学的に正しい現象」をシミュレートして結果（爆発、生成物）を返す。
4. **図鑑埋め:** 新たな現象を発見し、世界を変えていく。

## 3. 主要機能 (Key Features)
- **Generative Physics Engine:** 決まった答え合わせではなく、LLM (Gemini 2.5) がプレイヤーの自由な入力を物理法則に基づいてリアルタイムに判定。
- **Pixel Art World:** 懐かしくも温かいドット絵の世界観と、リアルな科学現象テキストのギャップ。
- **No Lecture, Just Action:** 教科書的な解説は一切なし。プレイヤーは「実験結果」から自ら法則を学ぶ。

## 4. 技術スタック (Tech Stack)
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS (Pixel Art fonts/theme)
- **AI Logic:** Google Gemini API (Gemini 2.5 Flash)
- **State Management:** React Hooks
- **Deployment:** Vercel (予定)
- **Build Tool:** Capacitor (将来的なモバイルアプリ化用)

## 5. フォルダ構成 (Directory Structure)
```
lifehack-alchemist/
├── src/
│   ├── components/      # UIパーツ (RetroPixelUI)
│   ├── hooks/           # useGeminiClient (API通信)
│   ├── assets/          # ピクセルアート画像 (Background, Icons)
│   └── types/           # ゲーム内型定義
├── public/              # 静的アセット
└── .env                 # APIキー管理
```
