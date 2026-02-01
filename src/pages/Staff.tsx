import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import bright from "../../public/assets/bright.jpeg"
import fale from "../../public/assets/fale.jpeg"
import idris from "../../public/assets/idris.jpeg"
import okeme from "../../public/assets/okeme.jpeg"
import jamilu from "../../public/assets/jamilu.jpeg"
import lavi from "../../public/assets/lavi.jpeg"
import aminuumar from "../../public/assets/aminuumar.jpeg"
import danladi from "../../public/assets/danladi.jpeg"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Staff() {
  const staff = [
    { name: "Bright Ibrahim Joseph", role: " ", img: bright },
    { name: "Nr. Fale Nana Favour", role: " ", img: fale },
    { name: "Nr. Lagu Idris", role: " ", img: idris },
    { name: "Dr. Okeme Arome", role: " ", img: okeme },
    { name: "Nr. Jamilu Yayawa", role: " ", img: jamilu },
    { name: "Nr. Lavi Tanko Rikin", role: " ", img: lavi },
    { name: "Dr. Aminu Umar", role: " ", img: aminuumar },
    { name: "Prof. Adamu Danladi Bojude", role: " ", img: danladi },
  ];

  return (
    <>
      <Helmet>
        <title>Our Staff | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Meet the dedicated staff members of CCI Nigeria." />
      </Helmet>

      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">Our Dedicated Staff</h1>
            <p className="text-xl text-slate-600">
              The heartbeat of our organization, working tirelessly behind the scenes.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {staff.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[3/4]">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-primary text-sm font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
