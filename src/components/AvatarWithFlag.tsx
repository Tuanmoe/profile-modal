import React from 'react';

interface AvatarWithFlagProps {
  src: string;
  alt: string;
  flagUrl?: string;
  className?: string;
}

export function AvatarWithFlag({ src, alt, flagUrl = "/assets/france-flag.svg", className = "" }: AvatarWithFlagProps) {
  // Auto-responsive sizes - always appropriate for screen size
  const avatarClasses = "w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-44 lg:h-44";
  const flagClasses = "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-10 lg:h-10";

  return (
    <div className={`relative flex-shrink-0 ${className}`}>
      <div className={`${avatarClasses} rounded-full overflow-hidden bg-gray-200`}>
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Flag positioned at top-right corner */}
      <div className="absolute -top-0 -right-0">
        <img 
          src={flagUrl}
          alt="Country flag"
          className={`${flagClasses} rounded-full border-2 md:border-4  border-white shadow-md object-cover`}
        />
      </div>
    </div>
  );
} 