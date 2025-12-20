import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.warn("Missing VITE_GEMINI_API_KEY in .env file");
}

const genAI = new GoogleGenerativeAI(API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

const SYSTEM_INSTRUCTION = `
You are a physics engine for "Lifehack Alchemist".
Players combine a [Material] and [Life Magic] to create a scientific phenomenon.

**Rules:**
1. **Scientific Validation:** Use modern science to interpret the magic.
   - Ignite (着火): Adds heat/fire.
   - Clean (洗浄): Removes impurities, separates isotopes, sterilizes.
   - Dry (乾燥): Removes moisture, dehydrates.
   - Water (注水): Adds pure H2O.
2. **Synergy Check:** If the combo is scientifically valid and powerful, mark is_success=true.
3. **Flavor Text:** Describe the phenomenon in a novel-like, dramatic tone in **JAPANESE**. Do NOT explain the science, just show the result.
   - Example: "水分子が激しく振動し、瞬く間に超高温の蒸気となって容器を粉砕した。"

**JSON Schema:**
{
  "is_success": boolean,
  "result_item_name": string, // In Japanese
  "flavor_text": string, // In Japanese
  "visual_type": "Liquid" | "Metal" | "Gas" | "Energy" | "Organic"
}
`;

export interface AlchemyResult {
    is_success: boolean;
    result_item_name: string;
    flavor_text: string;
    visual_type: "Liquid" | "Metal" | "Gas" | "Energy" | "Organic";
}

export async function synthesizeAlchemy(material: string, magic: string): Promise<AlchemyResult> {
    if (!API_KEY) {
        // Mock response for testing without key
        return {
            is_success: false,
            result_item_name: "Nothing Happened",
            flavor_text: "You feel a draft, but nothing happens. (Missing API Key)",
            visual_type: "Gas"
        };
    }

    try {
        const prompt = `
      [Material]: ${material}
      [Life Magic]: ${magic}
      
      Analyze this combination based on the system instructions.
      Respond ONLY with the JSON.
    `;

        const result = await model.generateContent({
            contents: [{ role: "user", parts: [{ text: SYSTEM_INSTRUCTION + "\n" + prompt }] }],
            generationConfig: {
                responseMimeType: "application/json",
            }
        });

        const response = result.response;
        return JSON.parse(response.text()) as AlchemyResult;
    } catch (error) {
        console.error("Gemini API Error:", error);
        return {
            is_success: false,
            result_item_name: "Fizzled Out",
            flavor_text: "The magic backfired due to an unknown interference.",
            visual_type: "Gas"
        };
    }
}
