import Navbar from "./Navbar";
import Footer from "./Footer";
import SectionAnchorNav from "./SectionAnchorNav";

export default function SiteShell({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <SectionAnchorNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
