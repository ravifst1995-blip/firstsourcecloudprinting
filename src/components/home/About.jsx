import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

const features = [
  { icon: Award, text: "Award-winning strategies" },
  { icon: Users, text: "Dedicated account managers" },
  { icon: Zap, text: "Real-time performance tracking" }
];

export default function About() {
  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl shadow-slate-200/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">12+</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Years of</div>
                  <div className="text-slate-600">Excellence</div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-violet-200 rounded-3xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-violet-100 to-blue-100 rounded-3xl -z-10" />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              About Us
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              We're Not Just an Agency,
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                We're Your Growth Partner
              </span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2012, First Source Cloud Printing has grown from a small startup to a leading 
              digital marketing powerhouse. We combine creativity with data science to 
              deliver campaigns that don't just look good—they perform exceptionally.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000000000}?w=100&h=100&fit=crop&face`}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=Team+${i}&background=7c3aed&color=fff`;
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-slate-900">150+ Experts</span>
                <span className="text-slate-600"> ready to help you grow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}