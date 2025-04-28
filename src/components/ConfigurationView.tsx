import React from 'react';
import { Device, ConfigChange } from '../types';
import { Save, RotateCcw, Clock } from 'lucide-react';

interface ConfigurationViewProps {
  devices: Device[];
  configHistory: ConfigChange[];
}

export function ConfigurationView({ devices, configHistory }: ConfigurationViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Configuration des Équipements</h2>
        <div className="space-y-4">
          {devices.map((device) => (
            <div key={device.id} className="border rounded-lg p-4">
              <h3 className="font-medium mb-3">{device.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Adresse IP
                    <input
                      type="text"
                      defaultValue={device.ipAddress}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Localisation
                    <input
                      type="text"
                      defaultValue={device.location}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </label>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium">
                    Seuil CPU (%)
                    <input
                      type="number"
                      defaultValue="80"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    Seuil Mémoire (%)
                    <input
                      type="number"
                      defaultValue="90"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-2">
                  <RotateCcw size={16} />
                  Réinitialiser
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
                  <Save size={16} />
                  Sauvegarder
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Historique des Modifications</h2>
        <div className="space-y-4">
          {configHistory.map((change) => (
            <div key={change.id} className="flex items-start gap-4 p-3 border-l-4 border-blue-500 bg-gray-50">
              <Clock size={20} className="text-gray-400" />
              <div>
                <p className="font-medium">{change.user}</p>
                <p className="text-sm text-gray-600">{change.timestamp}</p>
                <ul className="mt-2 space-y-1">
                  {change.changes.map((c, i) => (
                    <li key={i} className="text-sm">
                      {c.parameter}: {c.oldValue} → {c.newValue}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}