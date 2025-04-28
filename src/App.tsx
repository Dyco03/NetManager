import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 p-8 ml-64">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;