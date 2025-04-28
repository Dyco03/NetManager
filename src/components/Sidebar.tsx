import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Activity,
  Settings,
  Bell,
  FileText,
  Shield,
  Menu,
} from 'lucide-react';

const navigation = [
  { name: 'Tableau de bord', icon: LayoutDashboard, href: '/' },
  { name: 'Supervision', icon: Activity, href: '/monitoring' },
  { name: 'Configuration', icon: Settings, href: '/configuration' },
  { name: 'Alertes', icon: Bell, href: '/alerts' },
  { name: 'Journaux', icon: FileText, href: '/logs' },
  { name: 'Sécurité', icon: Shield, href: '/security' },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const location = useLocation();

  return (
    <div className={`bg-gray-900 text-white transition-all duration-300 ${collapsed ? 'w-16' : 'w-64'} h-screen fixed`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <h1 className="text-xl font-bold">NetManager</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-gray-800"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="p-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.href
                ? 'bg-blue-600 text-white'
                : 'hover:bg-gray-800'
            }`}
          >
            <item.icon size={20} />
            {!collapsed && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
}