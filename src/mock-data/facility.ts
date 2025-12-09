import facility1 from '@assets/F1.png';
import facility2 from '@assets/F2.jpg';
import facility3 from '@assets/F3.jpg';
import facility4 from '@assets/F4.jpg';

import type { FacilityItem } from '@components/Facilities/Facilities.types';

export const facilities: FacilityItem[] = [
  {
    id: 1,
    title: 'Tennis court',
    img: facility1,
    desc: 'Professionally Designed Courts for Every Skill Level',
  },
  {
    id: 2,
    title: 'Swimming Pool',
    img: facility2,
    desc: 'Dive In - Relax and Enjoy in Our Pool',
  },
  {
    id: 3,
    title: 'Basketball court',
    img: facility3,
    desc: 'Full-Sized Courts for Play and Competition',
  },
  {
    id: 4,
    title: 'Outdoor Area',
    img: facility4,
    desc: 'Enjoy the fresh air and beautiful surroundings',
  },
];
