import React from 'react';
import { User } from '../types';
import { Shield, Key, UserPlus, Lock } from 'lucide-react';

interface SecurityViewProps {
  users: User[];
}

export function SecurityView({ users }: SecurityViewProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Gestion des Utilisateurs</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
            <UserPlus size={16} />
            Nouvel Utilisateur
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Rôle:</span>
                  <span className="font-medium">{user.role}</span>
                </div>
                <div className="flex justify-between">
                  <span>2FA:</span>
                  <span className={user.twoFactorEnabled ? 'text-green-600' : 'text-red-600'}>
                    {user.twoFactorEnabled ? 'Activé' : 'Désactivé'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Dernière connexion:</span>
                  <span>{user.lastLogin}</span>
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center gap-2">
                  <Key size={16} />
                  Réinitialiser
                </button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2">
                  <Lock size={16} />
                  Modifier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Paramètres de Sécurité</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="text-blue-600" size={24} />
              <div>
                <h3 className="font-medium">Authentification à deux facteurs</h3>
                <p className="text-sm text-gray-500">Exiger la 2FA pour tous les utilisateurs</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}