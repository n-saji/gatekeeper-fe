import Main from "./components/landing/main";
import NavBar from "./components/landing/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <NavBar />
      <Main />
    </div>
  );
}
