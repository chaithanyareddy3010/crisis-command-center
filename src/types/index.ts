export type Priority = "low" | "medium" | "high";
export type Status = "open" | "in-progress" | "closed";
export type Category = "electrical" | "networking" | "mechanical" | "security" | "IT support" | "other";
export type Availability = "available" | "busy";

export interface Technician {
  id: string;
  name: string;
  skill: string;
  availability: Availability;
}

export interface Incident {
  id: string;
  title: string;
  description: string;
  location: string;
  category: Category;
  priority: Priority;
  status: Status;
  assignedTechnician?: string;
  assignmentReason?: string;
  requiredSkill?: string;
  sopSteps?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface DashboardStats {
  totalIncidents: number;
  highPriorityIncidents: number;
  availableTechnicians: number;
  avgResolutionTime: string;
}
