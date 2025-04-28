import React from 'react';
import { Log } from '../types';
import { FileText, Download, Filter } from 'lucide-react';

interface LogsViewProps {
  logs: Log[];
}

export function LogsView({ logs }: LogsViewProps) {
  const [filter, setFilter] = React.useState('all');

  const filteredLogs = logs.filter(
    log => filter === 'all' || log.category === filter
  );

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Journaux Système</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-2">
              <Filter size={16} />
              Filtrer
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
              <Download size={16} />
              Exporter
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          {['all', 'system', 'security', 'network', 'config'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-3 py-1 rounded-md ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {filteredLogs.map((log) => (
            <div
              key={log.id}
              className={`p-4 rounded-lg ${
                log.level === 'error'
                  ? 'bg-red-50'
                  : log.level === 'warning'
                  ? 'bg-yellow-50'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-gray-400" />
                <span className="font-medium">{log.category}</span>
                <span className="text-sm text-gray-500">{log.timestamp}</span>
              </div>
              <p className="text-gray-700">{log.message}</p>
              {Object.keys(log.details).length > 0 && (
                <pre className="mt-2 text-sm bg-white p-2 rounded">
                  {JSON.stringify(log.details, null, 2)}
                </pre>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}