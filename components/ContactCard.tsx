import React from 'react';
import { ContactInfo } from '../types';
import { Mail, Github, Heart } from 'lucide-react';

interface ContactCardProps {
  info: ContactInfo;
}

export const ContactCard: React.FC<ContactCardProps> = ({ info }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-8">
      {/* Developer Card */}
      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors">
        <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center mb-3">
          <Heart className="w-6 h-6 text-pink-400" />
        </div>
        <span className="text-sm text-slate-400 uppercase tracking-wider text-xs font-semibold mb-1">
          {info.role}
        </span>
        <h3 className="text-xl font-bold text-white">{info.name}</h3>
      </div>

      {/* Support Card */}
      <a 
        href={`mailto:${info.email}`}
        className="group bg-indigo-600/10 border border-indigo-500/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all cursor-pointer"
      >
        <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <Mail className="w-6 h-6 text-indigo-400" />
        </div>
        <span className="text-sm text-indigo-300 uppercase tracking-wider text-xs font-semibold mb-1">
          Support Email
        </span>
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-200 break-all">
          {info.email}
        </h3>
      </a>
    </div>
  );
};