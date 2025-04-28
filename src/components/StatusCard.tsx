import React from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

interface StatusCardProps {
  title: string;
  value: number;
  status: 'OK' | 'WARNING' | 'ERROR';
}

export function StatusCard({ title, value, status }: StatusCardProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'OK':
        return 'text-green-500';
      case 'WARNING':
        return 'text-yellow-500';
      case 'ERROR':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'OK':
        return <CheckCircle className={getStatusColor()} />;
      case 'WARNING':
        return <AlertTriangle className={getStatusColor()} />;
      case 'ERROR':
        return <XCircle className={getStatusColor()} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {getStatusIcon()}
      </div>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
}