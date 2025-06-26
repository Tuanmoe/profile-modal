import React from 'react';
import { Badge } from './ui/badge';

interface StatusBarProps {
  status: 'SUPPRIMÉ' | 'ACTIVE';
}

export function StatusBar({ status }: StatusBarProps) {
  return (
    <div className="flex-shrink-0 px-3 py-2 sm:px-6 lg:py-2">
      <div className="flex items-center justify-end gap-2">
        <span className="text-xs sm:text-sm md:text-md font-bold text-gray-700">STATUT</span>
        <Badge 
          variant="outline" 
          className=" border-none text-red-500 px-2 py-1 text-lg rounded-full"
        >
          <span className="text-3xl mr-1 mt-[-8px]">●</span> {status}
        </Badge>
      </div>
    </div>
  );
} 