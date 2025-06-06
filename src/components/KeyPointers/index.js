'use client';

import { FaGlobeAmericas, FaBuilding, FaUserTie, FaHeadset } from 'react-icons/fa';
import './styles.css';

const KeyPointers = () => {
  const pointers = [
    {
      title: 'World-class Services',
      description: 'Providing cutting-edge laboratory automation solutions',
      icon: <FaGlobeAmericas className="pointer-icon" />,
    },
    {
      title: 'Trusted Company',
      description: 'Over 25 years of experience in the industry',
      icon: <FaBuilding className="pointer-icon" />,
    },
    {
      title: 'Professional Work',
      description: 'Expert team delivering excellence in automation',
      icon: <FaUserTie className="pointer-icon" />,
    },
    {
      title: 'Help Any Time',
      description: '24/7 support for all your automation needs',
      icon: <FaHeadset className="pointer-icon" />,
    },
  ];

  return (
    <section className="key-pointers">
      <div className="key-pointers-container">
        {pointers.map((pointer, index) => (
          <div key={index} className="pointer-item">
            {pointer.icon}
            <h3 className="pointer-title">{pointer.title}</h3>
            <p className="pointer-description">{pointer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyPointers;