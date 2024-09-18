import React from 'react';

const StepsSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Subscribe',
      description: 'Subscribe to the website plan on Intraverse.',
    },
    {
      number: '2',
      title: 'Customize',
      description: 'Customize every content on your website to fit your brand.',
    },
    {
      number: '3',
      title: 'Start selling',
      description: 'Publish to your own domain and start selling instantly.',
    },
  ];

  return (
    <div className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold mb-12">The fastest way to sell travel</h2>
      <div className="flex justify-center space-x-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-blue-100 w-16 h-16 flex justify-center items-center rounded">
              <span className="text-2xl font-bold">{step.number}</span>
            </div>
            <h3 className="text-lg font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-500 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
