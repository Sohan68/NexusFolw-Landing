import logo from "../../assets/icons/logo.svg";

const Navber = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-black/80 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-6 h-6 flex items-center justify-center text-white group-hover:opacity-80 transition-opacity">
                <img
                  src={logo}
                  alt="NexusFlow Logo"
                  className="w-5 h-5 invert"
                />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                NexusFlow
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md">
                v2.4.0
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a
                href="#features"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Solutions
              </a>
              <a
                href="#testimonials"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Customers
              </a>
              <a
                href="#pricing"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                Faq
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#login"
                className="text-sm text-neutral-400 hover:text-white px-3 py-1.5 transition-colors"
              >
                Log In
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <span>Deploy Free</span>
                <img
                  src="assets/icons/arrow-right.svg"
                  alt=""
                  className="w-3.5 h-3.5 invert"
                />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                id="mobile-menu-btn"
                type="button"
                aria-label="Toggle Navigation"
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800"
              >
                <img
                  id="menu-icon-open"
                  src="assets/icons/menu.svg"
                  alt="Menu"
                  className="w-5 h-5 invert"
                />
                <img
                  id="menu-icon-close"
                  src="assets/icons/close.svg"
                  alt="Close"
                  className="w-5 h-5 invert hidden"
                />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navber;
