# Lifehack Alchemist (ライフハック・アルケミスト) 🧪

<p align="center">
  <b>「その『生活魔法』、科学で使えば大量破壊兵器。」</b><br>
  Pixel Art Science Synthesis RPG powered by Gemini 2.5
</p>

![Status](https://img.shields.io/badge/status-planning-yellow)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Mobile-blue)

---

## 📖 概要 (Overview)

**Lifehack Alchemist** は、「生活魔法」しか使えない落ちこぼれ主人公が、現代科学の知識（ライフハック）を駆使して異世界を無双する **"Stealth Education" (ステルス教育) RPG** です。

プレイヤーは「勉強させられている」と感じることなく、ゲームプレイを通じて物理法則や化学反応の面白さに没頭します。
Google Gemini API がプレイヤーの自由な「素材」×「魔法」×「条件」の組み合わせを解析し、科学的に正しい現象をリアルタイムにシミュレートします。

### 🗺 ストーリー
舞台は属性魔法が至高とされる中世ファンタジー世界。現代日本から転生した主人公は、攻撃魔法が一切使えない「生活魔法（着火・洗浄・乾燥・注水）」しか使えない落ちこぼれだった。
しかし、彼は知っていた。「洗浄」でウランを濃縮し、「着火」で粉塵爆発を起こせることを……。
これは、科学の知識で常識を覆す、下剋上の物語。

---

## 🎮 ゲームループ (Core Loop)

1.  **素材収集 (Scavenge):** ダンジョンで「ゴミ」や「ありふれた素材」を拾う。
2.  **科学合成 (Synthesize):** 素材に対し、適切な「生活魔法」と「条件（密閉・圧縮など）」を組み合わせる。
3.  **AI判定 (AI Judge):** Gemini 2.5 が組み合わせを解析し、科学的に正しい現象（爆発、凍結、生成物など）をシミュレート。
4.  **図鑑埋め (Discovery):** 新たな現象を発見し、世界（と物理法則）を解き明かす。

---

## ✨ 特徴 (Key Features)

### 1. ⚛️ Generative Physics Engine
決まった「正解」はありません。プレイヤーが思いついた実験（例：小麦粉＋密閉空間＋着火魔法）をLLMが物理法則に基づいて判定。「粉塵爆発」などの結果をダイナミックに生成します。

### 2. 👾 Pixel Art World
16-bit レトロピクセルアート（SFC風）の懐かしくも温かい世界観。その裏で、Geminiによる超リアルで冷徹な科学テキストが流れるギャップ体験を提供します。

### 3. 🚫 No Lecture, Just Action
教科書的な解説テキストは一切なし。プレイヤーは実験の「結果」を見て、「なぜこうなったのか？」を自ら推論し、次の実験に活かすことで自然と科学的思考を身につけます。

---

## 🛠 技術スタック (Tech Stack)

| Category | Technology | Usage |
| :--- | :--- | :--- |
| **Frontend** | **React + Vite** | High-performance Web UI |
| **Language** | **TypeScript** | Type-safe logic |
| **Data/AI** | **Google Gemini 2.5 Flash** | Physics Simulation & Flavor Text |
| **Styling** | **Tailwind CSS** | Pixel Art Theme & Layout |
| **Build** | **Capacitor** | Native Mobile App Wrapper (Planned) |
| **Deploy** | **Vercel** | CI/CD & Hosting |

---

## 📂 ディレクトリ構成 (Structure)

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

---

## 🚀 セットアップ (Getting Started)

1. **Clone the repo**
   ```bash
   git clone https://github.com/naki0227/LifeHackAlchemist.git
   cd lifehack-alchemist
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create `.env` file:
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

4. **Run Dev Server**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 開発者 (Developer)
**Enludus**

Focus: Gamification & EdTech
Contact: <https://enludus.vercel.app>

<p align="center"> 
    © 2025 Lifehack Alchemist Project. All rights reserved. 
</p>
