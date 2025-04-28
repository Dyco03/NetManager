import { Device, Alert, MetricData, ConfigChange, Log, User } from './types';

export const mockDevices: Device[] = [
  {
    id: '1',
    name: 'Routeur Principal',
    status: 'OK',
    type: 'router',
    ipAddress: '192.168.1.1',
    lastSeen: '2024-03-14T12:00:00Z',
    location: 'Salle Serveur 1',
    metrics: {
      cpu: 45,
      memory: 60,
      network: 75,
      latency: 5,
      bandwidth: 950
    }
  },
  {
    id: '2',
    name: 'Switch Core',
    status: 'WARNING',
    type: 'switch',
    ipAddress: '192.168.1.2',
    lastSeen: '2024-03-14T12:00:00Z',
    location: 'Salle Serveur 1',
    metrics: {
      cpu: 75,
      memory: 80,
      network: 90,
      latency: 8,
      bandwidth: 850
    }
  }
];

export const mockAlerts: Alert[] = [
  {
    id: '1',
    severity: 'high',
    message: 'Utilisation CPU élevée sur Routeur Principal',
    timestamp: '2024-03-14T11:45:00Z',
    status: 'active',
    deviceId: '1'
  },
  {
    id: '2',
    severity: 'medium',
    message: 'Latence réseau anormale sur Switch Core',
    timestamp: '2024-03-14T11:30:00Z',
    status: 'acknowledged',
    deviceId: '2'
  }
];

export const mockMetrics: MetricData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${i}:00`,
  value: Math.floor(Math.random() * 100)
}));

export const mockConfigHistory: ConfigChange[] = [
  {
    id: '1',
    deviceId: '1',
    timestamp: '2024-03-14T10:30:00Z',
    user: 'Admin',
    changes: [
      {
        parameter: 'IP Address',
        oldValue: '192.168.1.2',
        newValue: '192.168.1.1'
      }
    ]
  },
  {
    id: '2',
    deviceId: '2',
    timestamp: '2024-03-14T09:15:00Z',
    user: 'Admin',
    changes: [
      {
        parameter: 'VLAN Configuration',
        oldValue: 'VLAN 10',
        newValue: 'VLAN 20'
      }
    ]
  }
];

export const mockLogs: Log[] = [
  {
    id: '1',
    timestamp: '2024-03-14T12:00:00Z',
    level: 'info',
    category: 'system',
    message: 'Système démarré avec succès',
    details: {}
  },
  {
    id: '2',
    timestamp: '2024-03-14T11:55:00Z',
    level: 'warning',
    category: 'security',
    message: 'Tentative de connexion échouée',
    details: {
      ip: '192.168.1.100',
      username: 'unknown'
    }
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Admin',
    email: 'admin@example.com',
    role: 'admin',
    lastLogin: '2024-03-14T11:00:00Z',
    twoFactorEnabled: true
  },
  {
    id: '2',
    name: 'Opérateur',
    email: 'operator@example.com',
    role: 'operator',
    lastLogin: '2024-03-14T10:30:00Z',
    twoFactorEnabled: false
  }
];