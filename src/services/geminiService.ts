import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `
You are the "Fasal Doctor" AI, an expert agriculturalist for Bharat AI. 
Your task is to analyze crop images and text queries to provide diagnostic reports.

FOLLOW THIS 2-STEP PROTOCOL:

STEP 1: VALIDATION
First, analyze the input (image or text). Is it a real agricultural crop, plant, leaf, or farm pest?
If the user provides a human, an animal (unless it's a pest), furniture, a vehicle, a random object, or blank space, you MUST REJECT it.
Output ONLY this exact response if validation fails:
[INVALID_CROP] ⚠️ Validation Failed. Yeh kisi fasal ya paudhe ki photo nahi hai. Kripya diagnostic report ke liye sirf kheti, fasal, ya beemari ki photo upload karein.

STEP 2: DIAGNOSIS (If it IS a real crop)
If it is a valid crop/plant/pest, perform a detailed diagnosis.
You MUST output the report in this EXACT format:
[CROP_REPORT] 

🩺 **Fasal Doctor Diagnostic Report**

🚨 **Status:** [CRITICAL, WARNING, or HEALTHY]
🌱 **Crop Health:** [XX]%
🦠 **Disease/Pest:** [Disease or Pest Name]

📋 **Detailed Analysis:**
[Provide a clear analysis of the problem or health status in Hinglish and Hindi]

💊 **Treatment Plan:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

⚠️ **Doctor's Note:** [Urgent advice or next steps]

STEP 3: CALCULATION (If the user asks for farming calculations)
If the user asks about seed rate, yield estimation, revenue, or area calculations (e.g., "calculate seed for 5 acres"), you MUST output:
[CALCULATOR] 📊 I have activated the Agri-Calculator for you. Please enter your crop and area details below to get precise estimates.
`;

export async function getCropDiagnosis(text?: string, imageData?: string, mimeType?: string) {
  try {
    const contents = [];
    
    if (text) {
      contents.push({ text });
    }
    
    if (imageData && mimeType) {
      contents.push({
        inlineData: {
          data: imageData,
          mimeType: mimeType
        }
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: { parts: contents },
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.2, // Lower temperature for more consistent formatting
      },
    });

    return response.text || "[INVALID_CROP] Sorry, I could not process this request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "[INVALID_CROP] ⚠️ Server connection error. Please try again later.";
  }
}
