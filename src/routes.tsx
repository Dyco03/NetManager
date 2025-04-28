import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage';
import { MonitoringPage } from './pages/MonitoringPage';
import { ConfigurationPage } from './pages/ConfigurationPage';
import { AlertsPage } from './pages/AlertsPage';
import { LogsPage } from './pages/LogsPage';
import { SecurityPage } from './pages/SecurityPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/monitoring" element={<MonitoringPage />} />
      <Route path="/configuration" element={<ConfigurationPage />} />
      <Route path="/alerts" element={<AlertsPage />} />
      <Route path="/logs" element={<LogsPage />} />
      <Route path="/security" element={<SecurityPage />} />
    </Routes>
  );
}