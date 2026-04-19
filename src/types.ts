export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "report" | "treatment";
  treatmentData?: {
    chemical: string;
    organic: string;
    prevention: string;
  };
}

export type Language = "English" | "Hindi" | "Hinglish" | "Marwadi";

export interface KisanGKEntry {
  pattern: RegExp;
  answer?: string;
  answers?: Partial<Record<Language, string>>;
}
