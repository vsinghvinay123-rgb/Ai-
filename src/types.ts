export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "report" | "treatment" | "calculator";
  treatmentData?: {
    chemical: string;
    organic: string;
    prevention: string;
  };
}

export type Topic = "Agriculture" | "Finance" | "Tech" | "Personal" | "Other";

export interface Chat {
  id: string;
  title: string;
  summary: string;
  topic: Topic;
  timestamp: Date;
  messages: Message[];
}

export type Language = "English" | "Hindi" | "Hinglish" | "Marwadi";

export interface KisanGKEntry {
  pattern: RegExp;
  answer?: string;
  answers?: Partial<Record<Language, string>>;
}
