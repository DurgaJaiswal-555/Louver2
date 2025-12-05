import React from 'react';

const user1 = new URL('../../assets/user1.jpg', import.meta.url).href;
const user2 = new URL('../../assets/user2.jpg', import.meta.url).href;
const user3 = new URL('../../assets/user3.jpg', import.meta.url).href;
const user4 = new URL('../../assets/user4.jpg', import.meta.url).href;

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
