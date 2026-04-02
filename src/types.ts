export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "report";
}

export type Language = "English" | "Hindi" | "Hinglish" | "Marwadi";

export interface KisanGKEntry {
  pattern: RegExp;
  answer: string;
}
