import React from 'react';

import user1 from '@assets/user1.jpg';
import user2 from '@assets/user2.jpg';
import user3 from '@assets/user3.jpg';
import user4 from '@assets/user4.jpg';

const HeroOverlayTestimonialImages: React.FC = () => {
  const users: string[] = [user1, user2, user3, user4];

  return (
    <div className="inline-flex items-center overflow-visible justify-center m-auto">
      {users.map((user, idx) => (
        <img
          key={idx}
          src={user}
          alt={`User ${idx + 1}`}
          className={`object-cover z-[${idx + 1}] w-14 h-14 rounded-full border-2 border-white ${idx !== 0 ? '-ml-5' : ''}`}
        />
      ))}
    </div>
  );
};

export default HeroOverlayTestimonialImages;
