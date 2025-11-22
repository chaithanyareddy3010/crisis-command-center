import axios from "axios";
import { Incident, ChatMessage, DashboardStats, Technician } from "@/types";

// Mock technicians data
export const mockTechnicians: Technician[] = [
  { id: "1", name: "Arun Kumar", skill: "electrical", availability: "available" },
  { id: "2", name: "Simran Patel", skill: "networking", availability: "busy" },
  { id: "3", name: "Rohan Das", skill: "mechanical", availability: "available" },
  { id: "4", name: "Aisha Khan", skill: "security", availability: "available" },
  { id: "5", name: "Vikram Singh", skill: "IT support", availability: "busy" },
];

// Mock incidents data
const mockIncidents: Incident[] = [
  {
    id: "INC001",
    title: "Network Router Malfunction",
    description: "Main router in Plant A experiencing intermittent connectivity",
    location: "Plant A",
    category: "networking",
    priority: "high",
    status: "in-progress",
    assignedTechnician: "Simran Patel",
    assignmentReason: "Expert in networking with router configuration experience",
    requiredSkill: "networking",
    sopSteps: [
      "Verify physical connections and LED status",
      "Check router logs for error messages",
      "Test network connectivity with diagnostic tools",
      "Apply firmware updates if available",
      "Replace router if hardware failure detected",
    ],
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    updatedAt: new Date(),
  },
  {
    id: "INC002",
    title: "Power Outage in Server Room",
    description: "Backup generator failed to start during power outage",
    location: "HQ Server Room",
    category: "electrical",
    priority: "high",
    status: "open",
    assignedTechnician: "Arun Kumar",
    assignmentReason: "Specialized in electrical systems and backup power",
    requiredSkill: "electrical",
    sopSteps: [
      "Ensure safety protocols are followed",
      "Check generator fuel levels",
      "Test generator battery and connections",
      "Inspect automatic transfer switch",
      "Perform manual start test",
    ],
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    updatedAt: new Date(),
  },
  {
    id: "INC003",
    title: "HVAC System Failure",
    description: "Air conditioning not cooling in Plant B data center",
    location: "Plant B",
    category: "mechanical",
    priority: "medium",
    status: "open",
    assignedTechnician: "Rohan Das",
    assignmentReason: "Experienced in HVAC maintenance and repair",
    requiredSkill: "mechanical",
    sopSteps: [
      "Check thermostat settings and sensors",
      "Inspect air filters and replace if needed",
      "Verify refrigerant levels",
      "Test compressor functionality",
      "Check electrical connections to HVAC unit",
    ],
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    updatedAt: new Date(),
  },
];

// API Base URL (placeholder - not used in mock)
const API_BASE_URL = "/api";

/**
 * Submit a new incident
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const submitIncident = async (incidentData: Partial<Incident>): Promise<Incident> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Mock AI processing response
  const newIncident: Incident = {
    id: `INC${String(mockIncidents.length + 1).padStart(3, "0")}`,
    title: incidentData.title || "",
    description: incidentData.description || "",
    location: incidentData.location || "",
    category: incidentData.category || "other",
    priority: incidentData.priority || "medium",
    status: "open",
    assignedTechnician: mockTechnicians.find((t) => t.availability === "available")?.name,
    assignmentReason: "AI-selected based on skill match and availability",
    requiredSkill: incidentData.category,
    sopSteps: [
      "Initial assessment and safety check",
      "Identify root cause using diagnostic tools",
      "Apply standard troubleshooting procedures",
      "Implement solution or escalate if needed",
      "Verify resolution and document findings",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  mockIncidents.unshift(newIncident);
  return newIncident;
};

/**
 * Get all incidents
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const getIncidents = async (): Promise<Incident[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return mockIncidents;
};

/**
 * Get incident by ID
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const getIncidentById = async (id: string): Promise<Incident | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockIncidents.find((incident) => incident.id === id) || null;
};

/**
 * Get all technicians
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const getTechnicians = async (): Promise<Technician[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return mockTechnicians;
};

/**
 * Chat with AI agent
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const chatWithAgent = async (message: string, conversationHistory: ChatMessage[]): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock AI responses
  const responses = [
    "I've analyzed your request. Based on the incident details, I recommend escalating this to a senior technician with electrical expertise.",
    "The current status shows 3 high-priority incidents. Would you like me to help prioritize them based on business impact?",
    "I've reviewed the SOP for this type of incident. The key steps include safety verification, diagnostic assessment, and targeted intervention.",
    "Based on historical data, similar incidents were resolved in an average of 2.5 hours. I can assign the most suitable technician now.",
    "I can help with that. Let me check the current workload of available technicians and suggest the best assignment.",
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};

/**
 * Get dashboard statistics
 * TODO: Connect to IBM watsonx Orchestrate here
 */
export const getDashboardStats = async (): Promise<DashboardStats> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    totalIncidents: mockIncidents.length,
    highPriorityIncidents: mockIncidents.filter((i) => i.priority === "high").length,
    availableTechnicians: mockTechnicians.filter((t) => t.availability === "available").length,
    avgResolutionTime: "2.5 hrs",
  };
};
