export default function Contact() {
    return (
      <div>
    
        {/* Contact Form */}
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <form className="max-w-lg w-full space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  }