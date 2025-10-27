import Spline from '@splinetool/react-spline';
import { CheckCircle2, ClipboardList, FolderOpen } from 'lucide-react';

export default function DashboardHero() {
  return (
    <section className="relative">
      <div className="h-64 md:h-80 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        <StatCard
          icon={<FolderOpen className="text-blue-600" size={18} />}
          title="Total Projects"
          value="12"
        />
        <StatCard
          icon={<ClipboardList className="text-amber-600" size={18} />}
          title="Open Tasks"
          value="34"
        />
        <StatCard
          icon={<CheckCircle2 className="text-emerald-600" size={18} />}
          title="Completed"
          value="128"
        />
      </div>
    </section>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}
