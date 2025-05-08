
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Mic, Phone, TrendingUp, Users } from "lucide-react";

const serviceItems = [
  {
    title: "Voice AI Agent",
    description: "Deploy intelligent voice assistants that can handle patient inquiries, schedule appointments, and provide information naturally and efficiently.",
    icon: <Mic className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Lead Generation",
    description: "Leverage AI-powered analytics to identify and engage potential clients, expanding your patient base and growing your practice with qualified leads.",
    icon: <Users className="h-8 w-8 text-blue-600" />
  },
  {
    title: "AI Chatbot Solutions",
    description: "Implement conversational AI chatbots that provide instant responses to patient questions, schedule appointments, and gather important information.",
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Appointment Reminders",
    description: "Boost attendance rates with personalized AI-powered appointment reminders that reduce no-shows and keep your schedule running efficiently.",
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Patient Follow-up Automation",
    description: "Automate post-visit follow-ups to improve patient care, gather feedback, and ensure proper recovery without overwhelming your staff.",
    icon: <Phone className="h-8 w-8 text-blue-600" />
  },
  {
    title: "Custom AI Development",
    description: "Build proprietary AI models designed specifically for your healthcare practice's unique challenges and operational needs.",
    icon: <div className="text-3xl">⚙️</div>
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
            innovation, and growth for healthcare providers and practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
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
