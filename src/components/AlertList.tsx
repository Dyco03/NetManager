import React from 'react';
import { Alert } from '../types';
import { AlertTriangle, CheckCircle, Clock } from 'lucide-react';

interface AlertListProps {
  alerts: Alert[];
}

export function AlertList({ alerts }: AlertListProps) {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-blue-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <AlertTriangle className="text-red-500" />;
      case 'acknowledged':
        return <Clock className="text-yellow-500" />;
      case 'resolved':
        return <CheckCircle className="text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Alertes Actives</h2>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-gray-200"
          >
            {getStatusIcon(alert.status)}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className={`font-medium ${getSeverityColor(alert.severity)}`}>
                  {alert.severity.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{alert.timestamp}</span>
              </div>
              <p className="mt-1 text-gray-900">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}