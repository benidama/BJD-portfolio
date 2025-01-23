function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {date} Jean Damascene. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://github.com/benidama"
            className="hover:text-gray-400 text-lg"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/benidama"
            className="hover:text-pink-500 text-lg hover:bg-white hover:rounded hover:p-2"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
