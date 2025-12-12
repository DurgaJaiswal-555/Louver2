import type { TabItem } from "@components/SportsCategory/SportsCategory.types";
import tabImage from '@assets/SportsCategoryTab.jpg';

export const SPORTS_TAB_DATA: TabItem[] = [
    {
        id: 'competition',
        label: 'Competition',
        title: 'Experience the best in Courts, Fields, and More',
        desc:
            'Our state-of-art sports facilities offer a variety of courts and fields, including tennis, basketball and football — designed for casual players and competitive athletes.',
        img: tabImage
    },
    {
        id: 'training',
        label: 'Training',
        title: 'Train Like a Pro',
        desc:
            'Personalised coaching, performance tracking and dedicated training zones to help athletes improve technique and stamina.',
        img: tabImage
    },
    {
        id: 'friendly',
        label: 'Friendly Match',
        title: 'Organise Friendly Matches',
        desc:
            'Book fields and courts for friendly matches, team meetups and community events — easy scheduling and instant confirmations.',
        img: tabImage
    }
];
