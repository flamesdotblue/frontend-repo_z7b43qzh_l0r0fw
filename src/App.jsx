import { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Topbar from './components/Topbar.jsx';
import DashboardHero from './components/DashboardHero.jsx';
import TasksTable from './components/TasksTable.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 min-w-0">
          <Topbar darkMode={darkMode} onToggleTheme={() => setDarkMode((d) => !d)} />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="mb-6">
              <h1 className="text-2xl font-semibold">Welcome back</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your work at a glance</p>
            </div>

            <DashboardHero />
            <TasksTable />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
