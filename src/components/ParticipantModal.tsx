import React from 'react';
import { 
  Dialog, 
  DialogTitle,
  DialogClose 
} from './ui/dialog';
import { ProfileSection } from './ProfileSection';
import { PaymentTable } from './PaymentTable';
import { RemarksSection } from './RemarksSection';
import { ActionButtons } from './ActionButtons';
import { StatusBar } from './StatusBar';

// Custom SVG Icon
const X = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface ParticipantData {
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  address: {
    street: string;
    building: string;
    apartment: string;
    postalCode: string;
    city: string;
    country: string;
  };
  status: 'SUPPRIMÉ' | 'ACTIVE';
  payments: {
    acompte: {
      amount: string;
      date: string;
      method: 'Par chèque' | 'Par virement';
    };
    soldeRestant: {
      amount: string;
      date: string;
      method: 'Par chèque' | 'Par virement';
    };
  };
  remarks: {
    trainer: string;
    comment: string;
  }[];
  profileImage: string;
  flagUrl?: string;
}

interface ParticipantModalProps {
  isOpen: boolean;
  onClose: () => void;
  participant: ParticipantData;
  onDelete?: () => void;
  onEdit?: () => void;
}

export function ParticipantModal({ isOpen, onClose, participant, onDelete, onEdit }: ParticipantModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Blue Overlay covering entire screen */}
      <div className="fixed inset-0 z-50 bg-blue-400/80 flex flex-col p-3 sm:p-6 lg:px-[12%] lg:py-3">
        {/* Header on overlay */}
        <div className="flex items-center justify-between py-1 sm:py-2 lg:py-1 text-white">
          <DialogTitle className="text-base sm:text-lg lg:text-xl font-semibold">
            Informations Participant(e)
          </DialogTitle>
          <DialogClose className="text-white hover:text-gray-200 p-1">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </div>

        {/* Modal Content - White card positioned in overlay */}
        <div className="flex-1 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <StatusBar status={participant.status} />

          <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar">
            <div className="p-3 sm:p-6 lg:p-4 xl:px-12">
              <ProfileSection participant={participant} />
              <PaymentTable payments={participant.payments} />
              <RemarksSection remarks={participant.remarks} />
            </div>
            
            {/* Action buttons luôn dính sát bottom */}
            <ActionButtons onDelete={onDelete} onEdit={onEdit} />
          </div>
        </div>
      </div>
    </Dialog>
  );
} 