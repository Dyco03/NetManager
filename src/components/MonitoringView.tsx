import React from 'react';
import { Device } from '../types';
import { Server, Wifi, HardDrive, Shield } from 'lucide-react';

interface MonitoringViewProps {
  devices: Device[];
}

const getDeviceIcon = (type: string) => {
  switch (type) {
    case 'router':
      return Wifi;
    case 'server':
      return Server;
    case 'firewall':
      return Shield;
    default:
      return HardDrive;
  }
};

export function MonitoringView({ devices }: MonitoringViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Équipements Connectés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {devices.map((device) => {
            const Icon = getDeviceIcon(device.type);
            return (
              <div key={device.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={24} className="text-blue-600" />
                  <h3 className="font-medium">{device.name}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p>IP: {device.ipAddress}</p>
                  <p>Localisation: {device.location}</p>
                  <div className="flex justify-between mt-2">
                    <span>CPU: {device.metrics.cpu}%</span>
                    <span>RAM: {device.metrics.memory}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Latence: {device.metrics.latency}ms</span>
                    <span>Débit: {device.metrics.bandwidth}Mbps</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Carte du Réseau</h2>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Carte interactive du réseau</p>
        </div>
      </div>
    </div>
  );
}