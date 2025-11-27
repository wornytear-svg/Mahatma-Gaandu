import React from 'react';
import { PolicySectionData } from '../types';

interface SectionProps {
  data: PolicySectionData;
}

export const Section: React.FC<SectionProps> = ({ data }) => {
  const Icon = data.icon;

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 mb-6 shadow-xl hover:border-indigo-500/30 transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-indigo-500/10 rounded-xl">
          <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <h2 className="text-xl font-bold text-slate-100">{data.title}</h2>
      </div>

      {data.content && (
        <p className="text-slate-300 leading-relaxed mb-4">
          {data.content}
        </p>
      )}

      {data.subSections && (
        <div className="space-y-6">
          {data.subSections.map((sub, idx) => (
            <div key={idx} className="pl-2 border-l-2 border-slate-800 ml-2">
              {sub.title && (
                <h3 className="text-lg font-semibold text-slate-200 mb-2 pl-4">
                  {sub.title}
                </h3>
              )}
              <ul className={`space-y-2 pl-4 ${sub.listStyle === 'disc' ? 'list-disc marker:text-indigo-500' : ''}`}>
                {sub.content.map((line, lineIdx) => (
                  <li key={lineIdx} className="text-slate-400 leading-relaxed">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};