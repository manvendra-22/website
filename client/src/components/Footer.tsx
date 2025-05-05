import ScrollLink from "./ScrollLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <ScrollLink href="#home" className="text-xl font-bold">
              John<span className="text-secondary">Doe</span>
            </ScrollLink>
            <p className="mt-2 text-gray-400">Frontend Developer & UI/UX Designer</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <ScrollLink href="#home" className="text-gray-400 hover:text-white transition duration-300">
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#about" className="text-gray-400 hover:text-white transition duration-300">
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#skills" className="text-gray-400 hover:text-white transition duration-300">
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#projects" className="text-gray-400 hover:text-white transition duration-300">
                    Projects
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink href="#contact" className="text-gray-400 hover:text-white transition duration-300">
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Social Media</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
          <p className="text-gray-400 mt-4 md:mt-0">Designed and Built with <span className="text-red-500">♥</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
