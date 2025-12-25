// ==================== AUTH TYPES ====================
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
  created_at?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  user: User | null;
}

export interface IFormInput {
  name?: string;
  email: string;
  password: string;
}

export interface LoginFormInput {
  email: string;
  password: string;
}

export interface RegisterFormInput {
  name: string;
  email: string;
  password: string;
}

// ==================== TICKET TYPES ====================
export interface Ticket {
  id: number;
  subject: string;
  description: string;
  status_id: number;
  priority_id: number;
  status_name: string;
  priority_name: string;
  created_by: number;
  assigned_to: number;
  created_at: string;
  updated_at: string;
}

export interface TicketFormInput {
  subject: string;
  description: string;
}

export interface TicketAssignedTo {
  status_id: number;
  priority_id: number;
  assigned_to: number;
}

// ==================== PRIORITY TYPES ====================
export interface Priority {
  id: number;
  name: string;
}

// ==================== STATUS TYPES ====================
export interface Status {
  id: number;
  name: string;
}

// ==================== COMMENT TYPES ====================
export interface Comment {
  id: number;
  ticket_id: number;
  author_id: number;
  content: string;
  author_name: string;
  author_email: string;
  created_at: string;
}

// ==================== STORE TYPES ====================
export interface DataState {
  users: any[];
  priorities: any[];
  statuses: any[];
}
