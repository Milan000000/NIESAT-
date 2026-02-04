
export enum Category {
  SCHOOLS = 'Schools',
  WATER = 'Water',
  ICT = 'ICT',
  POWER = 'Power',
  ENVIRONMENT = 'Environment'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  category: Category;
}

export interface Member {
  id: string;
  name: string;
  role: 'Executive' | 'General';
  position?: string;
  department: string;
  stateCode: string;
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'PDF' | 'DOC' | 'Link';
  url: string;
}

export interface CommunityRequest {
  id: string;
  requesterName: string;
  contact: string;
  location: string;
  category: Category;
  description: string;
  timestamp: string;
}

export interface AttendanceRecord {
  id: string;
  date: string;
  memberId: string;
  status: 'Present' | 'Absent' | 'Excused';
}
