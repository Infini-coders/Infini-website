import React,{useState} from 'react';
import Grid from '../background/Grid';
import GradientAnimation from '../background/GradientAnimation';
import PersonCard from './PersonCard';

const ConnectorLine = ({ className, showOnMobile = false }) => (
  <div className={`absolute border-4 border-white-700 ${!showOnMobile ? 'hidden lg:block' : ''} ${className}`} />
);

const OrgChart = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const personImages = {  
    'S Md Ishrath': 'images/team/ishrath.jpg',
    'C Samsundar': 'images/team/sam.jpg',
    'N. Pawan': 'images/team/pawan.jpg',
    'R Gnana Prakash': 'images/team/gnana.jpg',
    'B Krishna Arjun': 'images/team/blank.png',
    'G Sudarshan': 'images/team/sudharshan.jpg',
    'Koteswar Mani': '/images/team/koti.jpg',
    'S Sainath': '/images/team/sainath.jpg',
    'N Teja Kumar': '/images/team/tej .jpg',
    'B Nani': '/images/team/nani.jpg',
    'G Ganesh': '/images/team/gani.jpg',
    'K Chaitanya': '/images/team/chaithu.jpg',
    'B Ganesh': '/images/team/ganesh.jpg',
    'B Srinu': '/images/team/srinu.jpg',
    'V Phanindra': '/images/team/phani.jpg',
    'Y Santi Kumar': '/images/team/santhi.jpg',
    'G Jayanth Kumar': '/images/team/jayanth.jpg'
  };

  return (
    <div className="min-h-screen bg-[#1f0f5e] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0B021C]/80" />
      <GradientAnimation>
        <Grid>
          <div className="w-full min-h-screen p-2 md:p-4 relative">
            <div className="max-w-7xl mx-auto relative">
              {/*UI/UX, Founders, DevOps */}
              <div className="grid grid-cols-2 lg:grid-cols-7 gap-4 lg:gap-12 mb-8">

                {/* UI/UX*/}
                <div className="lg:col-span-2 relative">
                  <div className="text-white text-xl md:text-2xl font-bold mb-2 text-center lg:text-left">UI UX</div>
                  <div className="space-y-2 flex flex-col items-center lg:items-start">
                    <PersonCard name="S Md Ishrath" imageUrl={personImages['S Md Ishrath']} />
                    <PersonCard name="C Samsundar" imageUrl={personImages['C Samsundar']} />
                    <PersonCard name="N. Pawan" imageUrl={personImages['N. Pawan']}/> 
                  </div>
                </div>

                {/* Founders*/}
                <div className="lg:col-span-3 relative mt-4 lg:mt-10">
                  <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 lg:gap-2">
                    <PersonCard name="R Gnana Prakash" imageUrl={personImages['R Gnana Prakash']} />
                    <PersonCard name="B Krishna Arjun" imageUrl={personImages['B Krishna Arjun']} />
                    <PersonCard name="G Sudarshan" imageUrl={personImages['G Sudarshan']} />
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold mt-3 text-center">FOUNDERS</div>
                </div>

                {/* DevOps*/}
                <div className="lg:col-span-2 relative mt-4 lg:mt-0">
                  <div className="text-white text-xl md:text-2xl font-bold mb-2 text-center lg:text-right">DEVOPS</div>
                  <div className="flex justify-center lg:justify-end">
                    <PersonCard name="Koteswar Mani" imageUrl={personImages['Koteswar Mani']} />
                  </div>
                </div>
              </div>

              {/*Logo*/}
              <div className="relative lg:absolute left-1/2 transform -translate-x-1/2 -mt-24 lg:-mt-36 mb-8 lg:mb-0 hidden lg:block">
                <div className="w-28 md:w-36 h-28 md:h-36 rounded-full bg-blue-500/10 border-4 border-white-400 flex items-center justify-center overflow-hidden mx-auto">
                  <img
                    src="/images/team/logo.jpg"
                    alt="Company Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.insertAdjacentHTML('afterend', `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" class="w-16 md:w-20 h-16 md:h-20 text-blue-400">
                          <path d="M13 21C13 21 21 14.5 21 9.5C21 4.5 17 2 13 2C9 2 5 4.5 5 9.5C5 14.5 13 21 13 21Z" />
                        </svg>
                      `);
                      e.target.remove();
                    }}
                  />
                </div>

                <ConnectorLine className="w-px h-24 lg:h-[6rem] -top-24 left-1/2 -translate-x-1/2" />
                <ConnectorLine className="w-48 lg:w-[21rem] h-px left-[calc(50%-12rem)] lg:left-[calc(40%-24rem)] top-1/4" />
                <ConnectorLine className="w-48 lg:w-[21rem] h-px right-[calc(50%-12rem)] lg:right-[calc(40%-24rem)] top-1/4" />
                <ConnectorLine className="w-px h-[20rem] lg:h-[calc(285%)] -top-[18rem] lg:-top-[23rem] left-[calc(50%-12rem)] lg:left-[calc(39%-24rem)]" />
                <ConnectorLine className="w-16 lg:w-[7rem] h-px -top-[18rem] lg:-top-[23rem] left-[calc(42%-15rem)] lg:left-[calc(32%-30rem)]" />
                <ConnectorLine className="w-px h-[20rem] lg:h-[calc(285%)] -top-[18rem] lg:-top-[23rem] right-[calc(50%-12rem)] lg:right-[calc(39%-24rem)]" />
                <ConnectorLine className="w-16 lg:w-[7rem] h-px -top-[18rem] lg:-top-[23rem] right-[calc(42%-15rem)] lg:right-[calc(32%-30rem)]" />
                <ConnectorLine className="w-40 lg:w-[18rem] h-px left-[calc(45%-10rem)] lg:left-[calc(35%-21rem)] lg:-top-[-5rem] top-1/2" />
                <ConnectorLine className="w-40 lg:w-[18rem] h-px right-[calc(45%-10rem)] lg:right-[calc(35%-21rem)] lg:-top-[-5rem] top-1/2" />
                <ConnectorLine className="w-px h-24 lg:h-[3rem] top-[5rem] left-[calc(45%-10rem)] lg:left-[calc(35%-21rem)]" />
                <ConnectorLine className="w-px h-24 lg:h-[3rem] top-[5rem] right-[calc(45%-10rem)] lg:right-[calc(35%-21rem)]" />
              </div>

              {/* Frontend and Backend Headers */}
              <div className="flex justify-around w-full my-4">
                <div className="text-white text-xl md:text-2xl font-bold text-center flex-1">
                  <span className="inline-block">FRONTEND</span>
                </div>
                <div className="text-white text-xl md:text-2xl font-bold text-center flex-1">
                  <span className="inline-block">BACKEND</span>
                </div>
              </div>

              {/* Frontend and Backend Teams */}
              <div className="grid grid-cols-2 gap-4 lg:gap-8">
                {/* Frontend*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                  <PersonCard name="S Sainath" imageUrl={personImages['S Sainath']} />
                  <PersonCard name="N Teja Kumar" imageUrl={personImages['N Teja Kumar']} />
                  <PersonCard name="B Nani" imageUrl={personImages['B Nani']} />
                  <PersonCard name="G Ganesh" imageUrl={personImages['G Ganesh']} />
                  <PersonCard name="K Chaithanya" imageUrl={personImages['K Chaitanya']} />
                  <PersonCard name="B Ganesh" imageUrl={personImages['B Ganesh']} />
                </div>

                {/* Backend */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
                  <PersonCard name="B Srinu" imageUrl={personImages['B Srinu']} />
                  <PersonCard name="V Phanindra" imageUrl={personImages['V Phanindra']} />
                  <PersonCard name="Y Santi Kumar" imageUrl={personImages['Y Santi Kumar']} />
                  <PersonCard name="G Jayanth Kumar" imageUrl={personImages['G Jayanth Kumar']} />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </GradientAnimation>
    </div>
  );
};
 
export default OrgChart;