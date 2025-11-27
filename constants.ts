import { PolicySectionData, ContactInfo } from './types';
import { Database, Server, User, ShieldCheck } from 'lucide-react';

export const APP_NAME = "Mahatma Gaandu";
export const LAST_UPDATED = "27-11-2025";

export const CONTACT_INFO: ContactInfo = {
  role: "Created By",
  name: "Worny",
  email: "wornytear@gmail.com"
};

export const POLICY_SECTIONS: PolicySectionData[] = [
  {
    id: 'intro',
    title: 'Introduction',
    icon: ShieldCheck,
    content: "Mahatma Gaandu is a Discord bot designed for entertainment and automated message interactions. This Privacy Policy explains what information the bot collects, how it is used, and how it is stored."
  },
  {
    id: 'collection',
    title: '1. Information We Collect',
    icon: Database,
    subSections: [
      {
        title: '1.1. Messages (Content)',
        content: [
          "The bot may temporarily store user messages only for generating automated responses, such as message repetition or Markov-based behavior.",
          "These messages are not shared with anyone.",
          "They are stored locally on the bot host machine.",
          "Data is only used to improve or generate bot responses."
        ],
        listStyle: 'disc'
      },
      {
        title: '1.2. Discord-provided Metadata',
        content: [
          "Discord automatically sends certain basic data to bots, such as:",
          "User ID",
          "Channel ID",
          "Server (Guild) ID",
          "Message timestamps",
          "The bot uses this only to function properly.",
          "None of this data is shared or sold."
        ],
        listStyle: 'disc'
      }
    ]
  }
];