import React from 'react';
import { ConfigurationView } from '../components/ConfigurationView';
import { mockDevices, mockConfigHistory } from '../mockData';

export function ConfigurationPage() {
  return (
    <ConfigurationView
      devices={mockDevices}
      configHistory={mockConfigHistory}
    />
  );
}