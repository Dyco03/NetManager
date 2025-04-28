import React from 'react';
import { MonitoringView } from '../components/MonitoringView';
import { mockDevices } from '../mockData';

export function MonitoringPage() {
  return (
    <MonitoringView devices={mockDevices} />
  );
}