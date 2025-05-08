
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechSolutions Inc.",
    content: "Vital Flow AI transformed our customer service operations. Their AI chatbot solution has reduced response times by 80% while improving customer satisfaction scores.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Michael Chen",
    position: "Operations Director, Global Retail",
    content: "The workflow automation system built by Vital Flow AI has eliminated countless hours of manual work. Our team can now focus on strategic initiatives rather than repetitive tasks.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop"
  },
  {
    name: "Emily Rodriguez",
    position: "CTO, Healthcare Innovations",
    content: "Implementing Vital Flow AI's predictive analytics solution has revolutionized how we approach patient care. The insights generated have improved outcomes while reducing costs.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-vitalflow-light-blue/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with our AI automation solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
