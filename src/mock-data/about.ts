import type { CardItem } from '@components';

import card1 from '@assets/Card1.png';
import card2 from '@assets/Card2.png';

export const cards: CardItem[] = [
    {
        id: 1,
        title: 'About Loure',
        desc: 'At Loure Sport center, we are passionate about providing top-notch sports facilities for athletes of all levels.',
        cta: 'Book Court'
    },
    {
        id: 2,
        title: 'Indoor Area',
        img: card1,
        desc: 'Versatile space for wide range of activities.',
        cta: 'Join Now'
    },
    {
        id: 3,
        title: 'Outdoor Area',
        img: card2,
        desc: 'Discover your new favorite sport, to play, train and compete.',
        cta: 'View Events'
    }
];
