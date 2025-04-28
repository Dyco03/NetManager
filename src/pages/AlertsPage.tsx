import React from 'react';
import { AlertList } from '../components/AlertList';
import { mockAlerts } from '../mockData';

export function AlertsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Gestion des Alertes</h1>
      <AlertList alerts={mockAlerts} />
    </div>
  );
}