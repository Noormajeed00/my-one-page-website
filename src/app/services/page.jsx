
export default function Services() {
    return (
      <div>
        <div className="py-16 bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/service1.png" alt="Service 1" className="w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">Service One</h2>
              <p className="text-gray-600 text-center">
                We provide top-notch service one that enhances your business efficiency and boosts productivity.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/service2.png" alt="Service 2" className="w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">Service Two</h2>
              <p className="text-gray-600 text-center">
                Our service two is designed to help you streamline your workflow and improve operational processes.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="/service3.png" alt="Service 3" className="w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4 text-center">Service Three</h2>
              <p className="text-gray-600 text-center">
                We offer service three to ensure your business stays ahead of the competition with cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }