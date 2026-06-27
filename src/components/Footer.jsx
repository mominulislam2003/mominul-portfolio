import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  function top() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">Mominul Islam</p>
          <p className="mt-1 text-sm text-slate-400">Modern web experiences with performance, clarity, and motion.</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-sm text-slate-500">Copyright 2026. All rights reserved.</p>
          <button onClick={top} className="back-top" aria-label="Back to top"><FiArrowUp /></button>
        </div>
      </div>
    </footer>
  );
}
