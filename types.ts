import { LucideIcon } from "lucide-react";

export interface PolicySubSection {
  title?: string;
  content: string[];
  listStyle?: 'disc' | 'none';
}

export interface PolicySectionData {
  id: string;
  title: string;
  icon: LucideIcon;
  content?: string;
  subSections?: PolicySubSection[];
}

export interface ContactInfo {
  role: string;
  name: string;
  email: string;
}