
import { Lightbulb, Code, Rocket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const processSteps = [
  {
    title: "Discovery & Analysis",
    description: "We begin with a thorough assessment of your practice's unique needs and challenges. Our team works closely with you to identify automation opportunities and develop a strategic implementation plan.",
    icon: <Lightbulb className="h-12 w-12 text-blue-600" />
  },
  {
    title: "Solution Development",
    description: "Our expert developers create customized AI solutions tailored to your specific requirements. We build and fine-tune tools that seamlessly integrate with your existing systems and workflows.",
    icon: <Code className="h-12 w-12 text-blue-600" />
  },
  {
    title: "Deployment & Support",
    description: "We ensure smooth implementation of your new AI solutions with comprehensive staff training and ongoing technical support. Our team continues to optimize your systems for maximum efficiency and results.",
    icon: <Rocket className="h-12 w-12 text-blue-600" />
  }
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-vitalflow-light-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a streamlined approach to implement AI automation solutions for your healthcare practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <CardTitle className="text-xl font-bold">Step {index + 1}: {step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
