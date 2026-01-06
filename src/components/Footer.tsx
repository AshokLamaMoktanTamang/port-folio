import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 px-4 bg-surface text-muted text-center overflow-hidden py-8">
      <div className="relative z-10">
        <p>© {new Date().getFullYear()} Ashok Lama — Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
