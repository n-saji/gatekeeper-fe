import Image from "next/image";
import GateKeeper from "../../asset/icons/gatekeeper.png";

export default function NavBar() {
  return (
    <nav
      className="w-full h-16 flex items-center px-16 py-4 shadow space-x-4 
    fixed top-0 backdrop-blur-xl z-50"
    >
      <Image src={GateKeeper} width={40} height={40} alt="gatekeeper logo" />
      <span className="text-2xl tracking-wide font-bold">GateKeeper</span>
    </nav>
  );
}
