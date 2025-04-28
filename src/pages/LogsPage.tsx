import React from 'react';
import { LogsView } from '../components/LogsView';
import { mockLogs } from '../mockData';

export function LogsPage() {
  return (
    <LogsView logs={mockLogs} />
  );
}