// import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="relative h-screen">
     <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/blue-mountain-4yl9gktprstpd5ov.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold text-center">Welcome to Our Company</h1>
          <p className="mt-6 text-lg md:text-xl text-white text-center max-w-2xl">
            We offer the best services for your business needs. Discover our range of services to take your company to the next level.
          </p>
        </div>
      </div>

      {/* Full-screen Image */}
      <div className="absolute inset-0">
        <img
          src="/blue-mountain-4yl9gktprstpd5ov.jpg"
          alt="Blue Mountain"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}


