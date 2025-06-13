import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        position: "relative",
        marginTop: 60,
        padding: "2rem 1rem",
        backgroundColor: "var(--color-surface)",
        color: "var(--color-muted)",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>
        <p>© {new Date().getFullYear()} Ashok Lama — Built with React & ❤️</p>
      </div>
    </footer>
  );
};

export default Footer;
