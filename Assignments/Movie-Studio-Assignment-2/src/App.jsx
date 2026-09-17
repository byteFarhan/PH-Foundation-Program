import FooterComp from "./components/FooterComp";
import NavbarComp from "./components/NavbarComp";

export default function App() {
  return (
    <main className="bg-gray-800 min-h-screen">
      <NavbarComp />
      <FooterComp />
    </main>
  );
}
