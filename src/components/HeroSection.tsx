
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="absolute inset-0 bg-vitalflow-light-blue bg-opacity-70 -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block mb-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="h-2 w-2 rounded-full bg-vitalflow-blue animate-pulse"></div>
                <span className="text-sm font-medium">AI Automation Experts</span>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vitalflow-dark leading-tight mb-6">
              Transform Your Business With <span className="text-blue-600">AI Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Vital Flow AI helps businesses streamline operations, increase productivity, and drive growth with cutting-edge AI automation solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-vitalflow-blue hover:bg-blue-600 text-white px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-vitalflow-blue text-vitalflow-dark hover:bg-vitalflow-light-blue">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-flow rounded-full blur-lg opacity-70 animate-pulse-slow"></div>
              <div className="relative bg-white p-6 rounded-xl shadow-lg">
                <img 
                  src="/lovable-uploads/0a884bea-c445-450f-bb93-9c2c5973f805.png" 
                  alt="Vital Flow AI" 
                  className="h-64 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
