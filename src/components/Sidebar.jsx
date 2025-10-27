import { Home, ListChecks, PlusCircle, User, LogOut, Folder } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
  const [active, setActive] = useState('dashboard');

  const items = [
    { key: 'dashboard', label: 'Projects', icon: Folder },
    { key: 'tasks', label: 'My Tasks', icon: ListChecks },
    { key: 'create', label: 'Create Task', icon: PlusCircle },
    { key: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 h-screen sticky top-0 border-r border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur">
      <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Home className="text-blue-600" size={22} />
          <span className="font-semibold text-gray-900 dark:text-gray-100">Jira 2.0</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {items.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
              active === key
                ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
