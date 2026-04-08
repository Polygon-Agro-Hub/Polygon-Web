import React from 'react';
import person1 from '../images/Saman.png'; // Replace with actual image paths
import person2 from '../images/Ano.png';
import person3 from '../images/Lak.png';
import person4 from '../images/Jee.png';

const LeadershipTeam = () => {
  const leaders = [
    {
      id: 1,
      image: person1,
      name: 'Mr. Samantha Ranatunga',
      position: 'Chairman',
      description:
        'A veteran of the agriculture industry, Mr. Ranatunga boasts over 30 years of industry experience. He was CEO of a leading diversified conglomerate with interests ranging from agriculture and crops to livestock to healthcare and chemical solutions.',
    },
    {
      id: 2,
      image: person2,
      name: 'Dr. Selvanathan Anojan',
      position: 'Director / Chief Executive',
      description:
        'Dr. Anojan is a serial entrepreneur who attained fair share of exposure and has been successful in both his corporate & entrepreneurial life. He is a Founder Member of the Sri Lanka Agripreneurs’ Forum (SLAF) and serves currently as the Honorary Secretary.',
    },
    {
      id: 3,
      image: person3,
      name: 'Mr. Lakshan de Silva',
      position: 'Director',
      description:
        'Lakshan is a finance and technology professional with 10+ years of experience. After starting his career in Wall Street, New York, he went on to be the CFO of a Top 10 Fintech-startup in Singapore. Lakshan brings his expertise in disruptive startups to the team.',
    },
    {
      id: 4,
      image: person4,
      name: 'Mr. Jeevan Gnanam',
      position: 'Director',
      description:
        'Jeevan is the visionary behind Orion City, Sri Lanka’s largest technology park. He is one of Sri Lanka’s leading figures in AI/ML with VeracityAI and was instrumental in launching Sri Lanka’s National AI Policy and AI forum in SLASSCOM.',
    },
  ];

  return (
    <div className="text-center p-[20px] bg-[#f9f9f9]">
      <h4 className="text-[2rem] text-[#333] mb-[20px] uppercase">Leadership Team</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] mx-auto p-[20px] max-w-[1200px]">
        {leaders.map((leader) => (
          <div className="bg-white border border-[#e0e0e0] rounded-[12px] shadow-sm text-center overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-md" key={leader.id}>
            <div className="bg-[#f0f0f0] h-[200px] overflow-hidden">
              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-[15px]">
              <h3 className="text-[1.2rem] text-[#333] mx-0 mt-[10px] mb-[5px]">{leader.name}</h3>
              <h5 className="text-[1rem] text-[#777] mb-[10px]">{leader.position}</h5>
              <p className="text-[0.9rem] text-[#555] leading-[1.4]">{leader.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
