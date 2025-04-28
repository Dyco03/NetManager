import React from 'react';
import { SecurityView } from '../components/SecurityView';
import { mockUsers } from '../mockData';

export function SecurityPage() {
  return (
    <SecurityView users={mockUsers} />
  );
}