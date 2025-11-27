import React from 'react';
import { Shield, Lock, Bot } from 'lucide-react';
import { APP_NAME, LAST_UPDATED, POLICY_SECTIONS, CONTACT_INFO } from './constants';
import { Section } from './components/Section';
import { ContactCard } from './components/ContactCard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black text-slate-200 selection:bg-indigo-500 selection:text-white pb-24">
      
      {/* Header / Hero */}
      <header className="relative border-b border-slate-800 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Bot className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-white leading-tight">{APP_NAME}</h1>
              <p className="text-xs text-slate-400 font-medium">Privacy Policy</p>
            </div>
          </div>
          <div className="hidden sm:block">
             <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                Active & Secure
             </span>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-12">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-sm mb-6">
            <Lock className="w-4 h-4" />
            <span>Effective Date: <span className="text-indigo-400 font-semibold">{LAST_UPDATED}</span></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Your Privacy Matters
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            We value transparency. Here is a breakdown of how {APP_NAME} handles your data to provide entertainment while respecting your privacy.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-4">
          {POLICY_SECTIONS.map((section) => (
            <Section key={section.id} data={section} />
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-16 border-t border-slate-800 pt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Questions or Concerns?</h2>
            <p className="text-slate-400">Reach out to the developer directly.</p>
          </div>
          <ContactCard info={CONTACT_INFO} />
        </div>

      </main>

      {/* Footer */}
      <footer className="mt-24 py-8 text-center text-slate-600 text-sm border-t border-slate-900 bg-black/20">
        <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
        <p className="mt-2 text-xs">This bot is not affiliated with Discord Inc.</p>
      </footer>

      {/* Sticky Mobile CTA (Floating Action Button) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={`mailto:${CONTACT_INFO.email}`}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-full shadow-lg shadow-indigo-600/40 transition-all active:scale-95"
        >
          <Shield className="w-5 h-5" />
          <span className="font-semibold">Contact Support</span>
        </a>
      </div>

    </div>
  );
};

export default App;