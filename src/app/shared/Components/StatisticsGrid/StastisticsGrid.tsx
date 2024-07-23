import React from 'react';

interface StatItemProps {
  icon: string;
  label: string;
  value: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-5xl mb-3">{icon}</div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm text-gray-600 text-center">{label}</div>
  </div>
);

const StatisticsGrid: React.FC = () => {
  const stats = [
    { icon: '🚢', label: 'Vessels', value: '50+' },
    { icon: '🛣️', label: 'Routes', value: '100+' },
    { icon: '🏙️', label: 'Ports of Call', value: '200+' },
    { icon: '🌎', label: 'Countries', value: '50+' },
    { icon: '✈️', label: 'Aircrafts', value: '25+' },
    { icon: '🏢', label: 'Offices', value: '30+' },
    { icon: '👥', label: 'Employees', value: '5000+' },
    { icon: '📦', label: 'Carried Annually', value: '10M+' },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Reach</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatItem {...stat} />
              {index < stats.length - 1 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:block">
                  <div className="flex flex-col items-center">
                    <div className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full my-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsGrid;