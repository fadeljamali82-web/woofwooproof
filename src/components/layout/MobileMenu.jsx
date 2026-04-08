import { navItems } from "@/content/nav";
import { scrollToId } from "@/utils/scrollToId";

export default function MobileMenu({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-panel">
        <button className="close-button" onClick={onClose}>
          Close
        </button>

        <div className="mobile-menu-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToId(item.id);
                onClose();
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
