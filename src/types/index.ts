export interface Device {
  id: string;
  name: string;
  status: 'OK' | 'WARNING' | 'ERROR';
  type: 'router' | 'switch' | 'server' | 'firewall';
  ipAddress: string;
  lastSeen: string;
  location: string;
  metrics: {
    cpu: number;
    memory: number;
    network: number;
    latency: number;
    bandwidth: number;
  };
}

export interface Alert {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: string;
  status: 'active' | 'acknowledged' | 'resolved';
  deviceId: string;
}

export interface MetricData {
  timestamp: string;
  value: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'operator' | 'viewer';
  lastLogin: string;
  twoFactorEnabled: boolean;
}

export interface ConfigChange {
  id: string;
  deviceId: string;
  timestamp: string;
  user: string;
  changes: {
    parameter: string;
    oldValue: string;
    newValue: string;
  }[];
}

export interface Log {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  category: 'system' | 'security' | 'network' | 'config';
  message: string;
  details: Record<string, any>;
}