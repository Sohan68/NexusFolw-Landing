import acmeIcon from "../../assets/logos/acme.svg";
import cloudforgeIcon from "../../assets/logos/cloudforge.svg";
import devmatrixIcon from "../../assets/logos/devmatrix.svg";
import linearIcon from "../../assets/logos/linear.svg";
import novasphereIcon from "../../assets/logos/novasphere.svg";
import pulseIcon from "../../assets/logos/pulse.svg";

const LogoCloud = () => {
  return (
    <div>
      <section className="py-12 border-y border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono text-neutral-500 uppercase">
            POWERS THE WORLD'S BEST ENGINEERING TEAMS
          </p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
            <img src={acmeIcon} alt="Acme" className="h-6 invert" />
            <img src={linearIcon} alt="Linearify" className="h-6 invert" />
            <img src={pulseIcon} alt="PulseScale" className="h-6 invert" />
            <img src={novasphereIcon} alt="NovaSphere" className="h-6 invert" />
            <img src={cloudforgeIcon} alt="CloudForge" className="h-6 invert" />
            <img src={devmatrixIcon} alt="DevMatrix" className="h-6 invert" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoCloud;
