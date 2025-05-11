import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  const scrollToTop = () => {
    // Get the main content container
    const mainContent = document.querySelector('.App');
    if (mainContent) {
      mainContent.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Fallback to window scroll if main content not found
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  // Handle route changes
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  // Expose the scrollToTop function globally
  window.scrollToTop = scrollToTop;

  return null;
}

export default ScrollToTop;
