import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  const zentryRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const zentry = zentryRef.current;
    const footer = footerRef.current;

    // GSAP hover animation for Zentry text
    gsap.set(zentry, { transformPerspective: 500 });
    const hoverAnimation = gsap.to(zentry, {
      rotationX: 45,
      rotationY: 15,
      scale: 1.2,
      paused: true,
      duration: 0.4,
      ease: "power2.inOut",
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    zentry.addEventListener("mouseenter", handleMouseEnter);
    zentry.addEventListener("mouseleave", handleMouseLeave);

    // GSAP tilt animation for the footer
    gsap.set(footer, { transformPerspective: 500 });
    const footerTilt = gsap.to(footer, {
      rotationX: 10,
      rotationY: 10,
      scale: 1.05,
      paused: true,
      duration: 0.4,
      ease: "power2.inOut",
    });

    const handleFooterMouseEnter = () => footerTilt.play();
    const handleFooterMouseLeave = () => footerTilt.reverse();

    footer.addEventListener("mouseenter", handleFooterMouseEnter);
    footer.addEventListener("mouseleave", handleFooterMouseLeave);

    return () => {
      zentry.removeEventListener("mouseenter", handleMouseEnter);
      zentry.removeEventListener("mouseleave", handleMouseLeave);
      footer.removeEventListener("mouseenter", handleFooterMouseEnter);
      footer.removeEventListener("mouseleave", handleFooterMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full bg-[#5542ff] text-black">
      {/* Zentry Text */}
      <div className="flex justify-center py-8"> {/* Reduced padding */}
        <p
          ref={zentryRef}
          className="text-9xl font-extrabold text-white cursor-pointer"
        >
          Zentry
        </p>
      </div>

      {/* Footer Section */}
      <footer ref={footerRef} className="w-full py-12"> {/* Reduced padding */}
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row"> {/* Reduced gap */}
          {/* Social Links Section */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-2xl font-semibold text-white">Stay Connected</p>
            <div className="flex justify-center gap-6 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-4xl text-black transition-transform duration-300 hover:scale-125 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-2xl font-semibold text-white">
              Subscribe to our Newsletter
            </h4>
            <form className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-64 rounded-lg px-4 py-2 text-black outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white px-6 py-2 text-black rounded-lg hover:bg-black hover:text-white transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 border-t-2 border-gray-300 pt-4"> {/* Reduced margin and padding */}
          <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:flex-row md:gap-6"> {/* Reduced gap */}
              <a
                href="#about-us"
                className="text-sm text-white transition-colors duration-300 hover:text-gray-300"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-sm text-white transition-colors duration-300 hover:text-gray-300"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-sm text-white transition-colors duration-300 hover:text-gray-300"
              >
                Contact
              </a>
            </div>

            {/* Copyright and Privacy */}
            <div className="text-center text-sm text-white">
              <p>© Suraj 2025. All rights reserved.</p>
              <a
                href="#privacy-policy"
                className="hover:underline hover:text-gray-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
