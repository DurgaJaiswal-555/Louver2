import type { TestimonialProps } from "@components";

import user1 from "@assets/test1.avif";
import user2 from "@assets/test2.avif";
import user3 from "@assets/test3.avif";

export const TESTIMONIALS: TestimonialProps[] = [
    {
        id: 1,
        name: "Alex Morgan",
        role: "Member",
        img: user1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        date: "March 15, 2024",
    },
    {
        id: 2,
        name: "Ravi Sharma",
        role: "Coach",
        img: user2,
        text: "Well-maintained courts and a welcoming community — perfect for training. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: "March 15, 2024",
    },
    {
        id: 3,
        name: "Sofia Gomez",
        role: "Athlete",
        img: user3,
        text: "Booking is simple and the staff are helpful. Love the environment here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        date: "March 15, 2024",
    },
];
