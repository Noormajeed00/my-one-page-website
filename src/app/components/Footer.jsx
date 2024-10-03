import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-orange-400 transition duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-orange-400 transition duration-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  