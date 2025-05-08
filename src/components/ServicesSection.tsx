
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceItems = [
  {
    title: "AI Workflow Automation",
    description: "Streamline your business processes with custom AI workflows that eliminate repetitive tasks and improve efficiency.",
    icon: "🔄"
  },
  {
    title: "Smart Data Analysis",
    description: "Transform raw data into actionable insights using advanced AI algorithms tailored to your business goals.",
    icon: "📊"
  },
  {
    title: "Natural Language Processing",
    description: "Implement conversational AI solutions that enhance customer service and internal communications.",
    icon: "💬"
  },
  {
    title: "Computer Vision Solutions",
    description: "Use AI-powered image and video analysis to detect patterns, ensure quality control, or enhance security.",
    icon: "👁️"
  },
  {
    title: "Custom AI Development",
    description: "Build proprietary AI models designed specifically for your industry challenges and business needs.",
    icon: "⚙️"
  },
  {
    title: "AI Integration Services",
    description: "Seamlessly integrate AI solutions with your existing software infrastructure and business processes.",
    icon: "🔌"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge AI automation solutions that drive business efficiency, 
            innovation, and growth across various industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
