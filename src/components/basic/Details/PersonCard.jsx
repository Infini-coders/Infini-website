import React, { useState } from 'react';
import PersonDetailsModal from './PersonDetailsModal';
import teamData from './TeamData';

const PersonCard = ({ name, imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const personDetails = teamData[name] || {};

  return (
    <>
      <div
        className="relative flex flex-col items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative min-w-32 bg-[#070829] rounded-lg p-3 border border-blue-400 min-w-[120px] z-10 hover:border-blue-300 transition-colors">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-800">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/48/48";
                }}
              />
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-sm font-medium">{name}</div>
            {personDetails.designation && (
              <div className="text-blue-300 text-xs mt-1 font-semibold">
                {personDetails.designation}
              </div>
            )}
          </div>
        </div>
      </div>

      <PersonDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        person={{
          name,
          imageUrl,
          ...personDetails
        }}
      />
    </>
  );
};

export default PersonCard;
