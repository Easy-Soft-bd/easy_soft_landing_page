import { Layout, Bot, Server, Link as LinkIcon, MonitorDot } from 'lucide-react';
import { ReactNode } from 'react';

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  includes: string[];
  icon: ReactNode;
}

export const services: Service[] = [
  {
    id: "01",
    slug: "web-development",
    title: "Web Development",
    description: "We design and develop modern, high-performance websites that help businesses build credibility and attract customers.",
    includes: ["Business websites", "Landing pages", "E-commerce platforms", "Performance optimization"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: "02",
    slug: "ai-automation",
    title: "AI Integration & Automation",
    description: "We help businesses save time and reduce manual work by automating repetitive processes using AI-powered solutions.",
    includes: ["Chatbots", "Workflow automation", "AI tools integration", "Customer support automation"],
    icon: <Bot className="w-6 h-6" />
  },
  {
    id: "03",
    slug: "business-solutions",
    title: "Digital Business Solutions",
    description: "Custom systems designed to manage and optimize your business operations efficiently.",
    includes: ["CRM systems", "Inventory management", "Admin dashboards", "SaaS platforms"],
    icon: <MonitorDot className="w-6 h-6" />
  },
  {
    id: "04",
    slug: "system-integration",
    title: "System Integration",
    description: "We connect different tools and systems so your business runs smoothly without manual effort.",
    includes: ["API integration", "Payment gateway integration", "Third-party services", "Cloud systems"],
    icon: <LinkIcon className="w-6 h-6" />
  },
  {
    id: "05",
    slug: "consultancy",
    title: "IT Consultancy",
    description: "We guide businesses in choosing the right technology and building scalable digital strategies.",
    includes: ["Technology planning", "System architecture", "Process optimization", "Growth strategy"],
    icon: <Server className="w-6 h-6" />
  }
];
