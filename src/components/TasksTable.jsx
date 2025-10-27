import ThreeOrbs from './ThreeOrbs.jsx';

const mockTasks = [
  { id: 'TSK-101', title: 'Design login page', status: 'In Progress', priority: 'High', assignee: 'Alex', due: '2025-11-10' },
  { id: 'TSK-102', title: 'Setup CI/CD', status: 'To Do', priority: 'Medium', assignee: 'Jamie', due: '2025-11-12' },
  { id: 'TSK-103', title: 'Implement Kanban board', status: 'To Do', priority: 'High', assignee: 'Taylor', due: '2025-11-20' },
  { id: 'TSK-104', title: 'Create project cards', status: 'Done', priority: 'Low', assignee: 'Riley', due: '2025-10-30' },
];

export default function TasksTable() {
  return (
    <div className="mt-6">
      <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 pointer-events-none opacity-60 dark:opacity-70">
          <ThreeOrbs className="w-full h-full" />
        </div>
        <div className="relative z-10 p-4 flex items-center justify-between bg-white/70 dark:bg-gray-900/70 backdrop-blur">
          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Assigned Tasks</h3>
          <div className="text-xs text-gray-600 dark:text-gray-400">Showing {mockTasks.length} items</div>
        </div>
        <div className="relative z-10 overflow-hidden bg-white dark:bg-gray-900">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50/80 dark:bg-gray-800/60 text-gray-600 dark:text-gray-300">
                <tr>
                  <Th>Task ID</Th>
                  <Th>Title</Th>
                  <Th>Status</Th>
                  <Th>Priority</Th>
                  <Th>Assignee</Th>
                  <Th>Due Date</Th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {mockTasks.map((t) => (
                  <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <Td className="font-medium text-gray-900 dark:text-gray-100">{t.id}</Td>
                    <Td>{t.title}</Td>
                    <Td>
                      <Badge intent={t.status === 'Done' ? 'success' : t.status === 'In Progress' ? 'warning' : 'neutral'}>
                        {t.status}
                      </Badge>
                    </Td>
                    <Td>
                      <Badge intent={t.priority === 'High' ? 'danger' : t.priority === 'Medium' ? 'warning' : 'neutral'}>
                        {t.priority}
                      </Badge>
                    </Td>
                    <Td>{t.assignee}</Td>
                    <Td>{t.due}</Td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-wide">{children}</th>
  );
}

function Td({ children, className = '' }) {
  return (
    <td className={`px-4 py-3 text-gray-700 dark:text-gray-300 ${className}`}>{children}</td>
  );
}

function Badge({ children, intent = 'neutral' }) {
  const styles = {
    neutral: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300',
    danger: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-300',
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium ${styles[intent]}`}>
      {children}
    </span>
  );
}
