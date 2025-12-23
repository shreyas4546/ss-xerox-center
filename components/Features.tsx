import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Zap, Truck } from 'lucide-react';

const features = [
  {
    icon: UploadCloud,
    title: "Upload in Seconds",
    description: "Drag and drop your PDF, AI, or PSD files. Our system auto-checks for print readiness instantly.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Zap,
    title: "Instant Pricing",
    description: "No waiting for emails. Configure paper, binding, and quantity to see your exact quote in real-time.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Truck,
    title: "Fast Pickup & Delivery",
    description: "Choose same-day studio pickup or tracked courier delivery straight to your office desk.",
    color: "bg-emerald-50 text-emerald-600"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-slate-100">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group p-8 rounded-3xl bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} strokeWidth={2} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                {feature.title}
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;