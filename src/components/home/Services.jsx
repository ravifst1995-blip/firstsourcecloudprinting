import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Share2, 
  FileText, 
  Code2, 
  BarChart3,
  ArrowUpRight
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that drive organic traffic and sustainable growth.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with precision-targeted campaigns across Google, Meta, and programmatic platforms.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Share2,
    title: "Social Media",
    description: "Build engaged communities and viral content strategies that amplify your brand presence.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description: "Compelling narratives and SEO-optimized content that educates, engages, and converts.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Lightning-fast, conversion-optimized websites built with cutting-edge technology.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Transform data into actionable insights with advanced tracking and reporting dashboards.",
    color: "from-amber-500 to-yellow-500"
  }
];

export default function Services() {
  return (
    <section className="relative py-32 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Full-Stack Digital
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Marketing Solutions
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            End-to-end digital marketing services designed to accelerate your growth 
            and maximize your online presence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} mb-6`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-violet-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex items-center text-violet-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </div>
              
              <div className="absolute top-8 right-8 w-24 h-24 bg-gradient-to-br from-slate-100 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}