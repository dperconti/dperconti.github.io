import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="7" r="2" stroke="white" strokeWidth="2" fill="none"/>
          <circle cx="15" cy="17" r="2" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="7" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconGradient: 'from-pink-300 to-orange-400',
      title: 'Manual OTC & settlement workflows',
      description: 'Most OTC deals are done manually via Telegram, making it impossible to scale.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
          <path d="M2 12H22" stroke="white" strokeWidth="2"/>
          <path d="M12 2C15 6 15 18 12 22" stroke="white" strokeWidth="2"/>
          <path d="M12 2C9 6 9 18 12 22" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      iconGradient: 'from-red-600 to-orange-500',
      title: 'Operationally expensive market expansion',
      description: 'Adding a new country means finding, vetting, and onboarding new providers every time. You need a different stack per country just to move and convert funds.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="7" height="7" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="14" y="3" width="7" height="7" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="3" y="14" width="7" height="7" stroke="white" strokeWidth="2" fill="none"/>
          <rect x="14" y="14" width="7" height="7" stroke="white" strokeWidth="2" fill="none"/>
          <line x1="10" y1="6.5" x2="14" y2="6.5" stroke="white" strokeWidth="2"/>
          <line x1="10" y1="17.5" x2="14" y2="17.5" stroke="white" strokeWidth="2"/>
          <line x1="6.5" y1="10" x2="6.5" y2="14" stroke="white" strokeWidth="2"/>
          <line x1="17.5" y1="10" x2="17.5" y2="14" stroke="white" strokeWidth="2"/>
        </svg>
      ),
      iconGradient: 'from-red-600 to-orange-500',
      title: 'Fragmented infrastructure & messy reconciliation',
      description: 'Bank accounts, wallets, blockchains, local rails – none of it talks to each other. Finance teams juggle data from blockchains, wallets, and banks manually with no unified view.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M12 1C6 1 1 6 1 12C1 18 6 23 12 23C18 23 23 18 23 12C23 6 18 1 12 1Z" stroke="white" strokeWidth="2"/>
          <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconGradient: 'from-red-600 to-orange-500',
      title: 'Lack of visibility & control',
      description: 'Disconnected systems mean no consolidated view of accounts, liquidity, FX rates, or compliance risk.'
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-4 h-4 bg-[#5D4037]"></div>
          <h2 className="text-[#5D4037] text-xl font-semibold">The problem</h2>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-[#5D4037] leading-tight">
          Stablecoins are easy to send...{' '}
          <span className="text-[#4A9EFF]">but</span>{' '}
          <span className="text-[#D97706]">hard</span>{' '}
          <span className="text-[#EC4899]">to scale</span>
        </h1>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#F5F5DC] rounded-xl p-6"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${problem.iconGradient} flex items-center justify-center mb-4`}>
                {problem.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 text-[#5D4037]">
                {problem.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#8D6E63] leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
