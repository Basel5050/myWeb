import React from 'react'
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="flex mx-auto bg-brown-800 max-w-screen-2xl p-10 bottom-0 w-full flex-row flex-wrap items-baseline justify-center align-baseline gap-x-12 gap-y-3 border-t border-surface py-4 text-center md:justify-between">
      <Typography>&copy; {YEAR} Jumia</Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map(({ title, href },k) => (
          <li key={k}>
            <Typography  as="a" href={href} className="hover:text-primary">
              {title}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}



export default Footer