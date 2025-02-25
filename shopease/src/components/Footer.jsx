const Footer = () => {
  return (
    //Fix this
    <footer className="bg-gray-900 text-white flex justify-center items-center">
      <p className="text-sm">
        &copy;{new Date().getFullYear()} Shopease. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
