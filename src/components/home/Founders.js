import React from 'react';

const FounderCard = ({ name, title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={`/Hoxha-engineering/images/Founders/${image}`} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary mb-1">{name}</h3>
        <p className="text-lg text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const Founders = () => {
  const founders = [
    { name: 'Selman Ajdini', title: 'Founder', image: 'founder.png' },
    { name: 'Sevdail Ajdini', title: 'CEO', image: 'ceo.png' },
  ];

  return (
    <section className="section bg-accent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">About Founders</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            We are a leading local company in North Macedonia with a rich history of excellence in construction 
            and engineering. Our leadership team brings decades of experience and a passion for innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {founders.map((founder) => (
            <FounderCard 
              key={founder.name}
              name={founder.name}
              title={founder.title}
              image={founder.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
