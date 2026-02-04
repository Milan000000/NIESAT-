
import { Project, Member, Resource, CommunityRequest, AttendanceRecord } from './types';
import { INITIAL_PROJECTS, INITIAL_MEMBERS, INITIAL_RESOURCES } from './constants';

const KEYS = {
  PROJECTS: 'niesat_projects',
  MEMBERS: 'niesat_members',
  RESOURCES: 'niesat_resources',
  REQUESTS: 'niesat_requests',
  ATTENDANCE: 'niesat_attendance',
  IS_DARK_MODE: 'niesat_dark_mode'
};

const get = <T,>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const set = <T,>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const storageService = {
  getProjects: () => get<Project[]>(KEYS.PROJECTS, INITIAL_PROJECTS),
  saveProject: (p: Project) => {
    const projects = storageService.getProjects();
    const index = projects.findIndex(item => item.id === p.id);
    if (index > -1) projects[index] = p;
    else projects.push(p);
    set(KEYS.PROJECTS, projects);
  },
  deleteProject: (id: string) => {
    const projects = storageService.getProjects().filter(p => p.id !== id);
    set(KEYS.PROJECTS, projects);
  },

  getMembers: () => get<Member[]>(KEYS.MEMBERS, INITIAL_MEMBERS),
  saveMember: (m: Member) => {
    const members = storageService.getMembers();
    const index = members.findIndex(item => item.id === m.id);
    if (index > -1) members[index] = m;
    else members.push(m);
    set(KEYS.MEMBERS, members);
  },
  deleteMember: (id: string) => {
    const members = storageService.getMembers().filter(m => m.id !== id);
    set(KEYS.MEMBERS, members);
  },

  getResources: () => get<Resource[]>(KEYS.RESOURCES, INITIAL_RESOURCES),
  saveResource: (r: Resource) => {
    const resources = storageService.getResources();
    resources.push(r);
    set(KEYS.RESOURCES, resources);
  },

  getRequests: () => get<CommunityRequest[]>(KEYS.REQUESTS, []),
  saveRequest: (r: CommunityRequest) => {
    const requests = storageService.getRequests();
    requests.push(r);
    set(KEYS.REQUESTS, requests);
  },

  getAttendance: () => get<AttendanceRecord[]>(KEYS.ATTENDANCE, []),
  saveAttendance: (records: AttendanceRecord[]) => {
    const existing = storageService.getAttendance();
    set(KEYS.ATTENDANCE, [...existing, ...records]);
  },

  getDarkMode: () => get<boolean>(KEYS.IS_DARK_MODE, false),
  setDarkMode: (val: boolean) => set(KEYS.IS_DARK_MODE, val)
};
