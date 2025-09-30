import "./globals.css";
import "./portfolio.css";

// Client script for sticky nav / scroll-to-top / gsap init
import LegacyScript from "@/components/legacy-script";
import "./portfolio.css";

export const metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </head>
      <body>
        {/* Scroll to top button */}
        <div className="scroll-button"><a href="#home" aria-label="Back to top">▲</a></div>

        {/* Simple nav shell compatible with legacy styles */}
        <nav>
          <div className="navbar">
            <div className="logo"><a href="#home">Portfolio.</a></div>
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#posts">Posts</a></li>
              <div className="cancel-btn">✕</div>
            </ul>
            <div className="media-icons">
              <a href="https://www.linkedin.com/in/shubham-ekkaldevi-165464197/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin" /></a>
            </div>
          </div>
          <div className="menu-btn"><i className="fas fa-bars" /></div>
        </nav>

        {/* Page content */}
        {children}

        {/* Client behaviors */}
        <LegacyScript />
      </body>
    </html>
  );
}


