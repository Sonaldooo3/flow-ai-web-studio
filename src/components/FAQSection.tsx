
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How can AI automation benefit my healthcare practice?",
    answer: "AI automation can streamline administrative tasks, reduce no-shows with intelligent reminders, enhance patient communication through chatbots, improve lead generation, and allow your staff to focus more on patient care rather than repetitive tasks."
  },
  {
    question: "How long does it take to implement your AI solutions?",
    answer: "Implementation timelines vary based on the complexity of your needs. Typically, basic solutions can be deployed within 2-4 weeks, while more comprehensive systems might take 1-3 months. We provide clear timelines during our initial discovery phase."
  },
  {
    question: "Will your AI solutions integrate with our existing practice management software?",
    answer: "Yes, our solutions are designed to integrate seamlessly with most popular practice management and electronic health record systems. During our discovery phase, we'll assess your current technology stack and ensure compatibility."
  },
  {
    question: "How secure is patient data with your AI solutions?",
    answer: "Data security is our top priority. All our solutions are built with HIPAA compliance in mind and utilize enterprise-grade encryption and security protocols. We never store protected health information unnecessarily and follow all relevant healthcare data regulations."
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer: "We offer comprehensive post-implementation support including staff training, technical assistance, regular maintenance, and system updates. We also provide ongoing optimization based on performance data to ensure your solutions continue to meet your evolving needs."
  }
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our AI automation solutions for healthcare practices.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <Collapsible
                open={openItems[index] || false}
                onOpenChange={() => toggleItem(index)}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {openItems[index] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
