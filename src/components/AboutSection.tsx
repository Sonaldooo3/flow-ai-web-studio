
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-flow rounded-lg blur-lg opacity-50"></div>
              <div className="relative bg-white p-6 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-vitalflow-light-blue p-6 rounded-lg">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-700">Cutting-edge AI solutions for modern businesses</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="text-xl font-bold mb-2">Efficiency</h3>
                    <p className="text-gray-700">Streamlined processes that save time and resources</p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="text-4xl mb-2">🔍</div>
                    <h3 className="text-xl font-bold mb-2">Precision</h3>
                    <p className="text-gray-700">Data-driven insights for informed decisions</p>
                  </div>
                  <div className="bg-vitalflow-light-blue p-6 rounded-lg">
                    <div className="text-4xl mb-2">🤝</div>
                    <h3 className="text-xl font-bold mb-2">Partnership</h3>
                    <p className="text-gray-700">Collaborative approach to client success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Vital Flow AI</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Vital Flow AI, we're passionate about harnessing the power of artificial intelligence 
                to solve complex business challenges. Our team of experts combines deep technical knowledge 
                with business acumen to deliver AI solutions that create real impact.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe that AI should be accessible to businesses of all sizes. That's why we focus 
                on creating customized, scalable solutions that address your specific needs and integrate 
                seamlessly with your existing systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-vitalflow-blue mr-3"></div>
                  <span className="text-gray-800">Expert team of AI specialists and data scientists</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-vitalflow-blue mr-3"></div>
                  <span className="text-gray-800">Proven track record across multiple industries</span>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-vitalflow-blue mr-3"></div>
                  <span className="text-gray-800">Customized solutions tailored to your business goals</span>
                </div>
              </div>
              
              <Button className="mt-8 bg-vitalflow-blue hover:bg-blue-600 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
