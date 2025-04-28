import React from 'react';
import { StatusCard } from '../components/StatusCard';
import { MetricsChart } from '../components/MetricsChart';
import { AlertList } from '../components/AlertList';
import { mockDevices, mockAlerts, mockMetrics } from '../mockData';

export function DashboardPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Tableau de Bord</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCard
            title="Équipements Actifs"
            value={mockDevices.length}
            status="OK"
          />
          <StatusCard
            title="Alertes Actives"
            value={mockAlerts.filter(a => a.status === 'active').length}
            status={mockAlerts.some(a => a.severity === 'critical') ? 'ERROR' : 'WARNING'}
          />
          <StatusCard
            title="Santé Réseau"
            value={98}
            status="OK"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <MetricsChart
          data={mockMetrics}
          title="Trafic Réseau (24h)"
        />
        <MetricsChart
          data={mockMetrics}
          title="Ressources Système"
        />
      </div>

      <div className="mb-8">
        <AlertList alerts={mockAlerts} />
      </div>
    </>
  );
}