const Footer = () => {
  return (
    <footer>
      <p className="text-center">
        © {new Date().getFullYear()}
        {` `}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.rise-consulting.net/consulting"
        >
          Rise Technology Case Study
        </a>
      </p>
    </footer>
  );
};

export default Footer;
