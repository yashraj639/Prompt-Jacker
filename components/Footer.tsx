import React from "react";
import { Heart } from "./SVGIcon";

export const Footer = () => {
  return (
    <footer className="mt-20 flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-8 text-sm text-mist md:flex-row">
      <p>
        &copy; {new Date().getFullYear()} Prompt Jacker. All rights reserved.
      </p>
      <p className="flex items-center gap-2">
        Made with <span className="text-brass"><Heart/></span> by Yashraj Yadav
      </p>
    </footer>
  );
};
