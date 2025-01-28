import React ,{useEffect} from 'react';
import { X } from 'lucide-react';

const PersonDetailsModal = ({ isOpen, onClose, person }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed -inset-5 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div 
        className="bg-[#070829] border border-blue-400 rounded-lg max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-800">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/api/placeholder/80/80";
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{person.name}</h3>
              <p className="text-blue-300 font-medium">{person.designation}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-400">Department</h4>
              <p className="text-white">{person.department}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400">Experience</h4>
              <p className="text-white">{person.experience}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400">Skills</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {person.skills?.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {person.projects && (
              <div>
                <h4 className="text-sm font-medium text-gray-400">Key Projects</h4>
                <ul className="list-disc list-inside text-white mt-1 space-y-1">
                  {person.projects.map((project, index) => (
                    <li key={index}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
            {person.bio && (
              <div>
                <h4 className="text-sm font-medium text-gray-400">Bio</h4>
                <p className="text-white">{person.bio}</p>
              </div>
            )}
            {person.contact && (
              <div>
                <h4 className="text-sm font-medium text-gray-400">Contact</h4>
                <a 
                href={person.contact} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'blue'}}
                >
                LinkedIn Profile
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetailsModal;