const Footer = () => {
  return (
    <footer className="py-12 bg-[#0f172a] border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
          © {new Date().getFullYear()} Ashok Lama • Boudha, Kathmandu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
