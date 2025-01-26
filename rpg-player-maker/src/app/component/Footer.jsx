const Footer = () => {
  return (
    <div
      className="fixed bottom-0 left-0 w-full text-center p-10 text-2xl"
      style={{ color: "var(--color4)" }}
    >
      <footer>
        Made by
        <a
          href="https://portfolio-adrian-martin-gonzalo.netlify.app/"
          target="_blank"
          rel="noreferrer"
          style={{ color: "var(--color1)" }}
          className="ml-2"
        >
          Adrian Martin Gonzalo ❤️
        </a>
      </footer>
    </div>
  );
};

export default Footer;
