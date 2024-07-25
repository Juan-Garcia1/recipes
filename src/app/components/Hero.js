import Image from "next/image";
import Link from "next/link";
import "./Hero.scss";

/**
 * @param {string} title
 * @param {string} subText
 */
const Hero = ({ title, subText, children }) => {
  return (
    <header className="hero">
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/logo.svg"
            alt="Taste Trail Logo"
            width={80}
            height={80}
          />
        </Link>
        <div className="hero__content">
          <h1 className="hero__title">{title}</h1>
          <p className="hero__subtext">{subText}</p>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Hero;
