import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import bright from "../../public/assets/bright.jpeg"
// import fale from "../../public/assets/fale.jpeg"
// import idris from "../../public/assets/idris.jpeg"
import okeme from "../../public/assets/okeme.jpeg"
// import jamilu from "../../public/assets/jamilu.jpeg"
// import lavi from "../../public/assets/lavi.jpeg"
// import aminuumar from "../../public/assets/aminuumar.jpeg"
// import danladi from "../../public/assets/danladi.jpeg"
import abubakaraliyu from "../../public/assets/abubakaraliyu.jpeg"
import msibrahim from "../../public/assets/msib.jpeg"
// import aminuibrahim from "../../public/assets/aminuibrahim.jpeg"
// import ekhibise from "../../public/assets/ekhibise.jpeg"
// import halimaaliyu from "../../public/assets/halimaaliyu.jpeg"
// import hauwaidris from "../../public/assets/hauwaidris.jpeg"
// import ibrahimlawal from "../../public/assets/ibrahimlawal.jpeg"
// import jamilabayero from "../../public/assets/jamilabayero.jpeg"
// import madu from "../../public/assets/madu.jpeg"
// import maimunaharuna from "../../public/assets/maimunaharuna.jpeg"
// import markwien from "../../public/assets/markwien.jpeg"
import t1 from "../../public/assets/t1.jpeg"
import t2 from "../../public/assets/t2.jpeg"
import t3 from "../../public/assets/t3.jpeg"
import t4 from "../../public/assets/t4.jpeg"
import t5 from "../../public/assets/t5.jpeg"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Staff() {
  const staff = [
    { name: "Bright Ibrahim Joseph", role: "System Administrator", img: bright },
    // { name: "Mark Wien", role: "Founder PocketPatientMD", img: markwien },
    // { name: "Nr. Fale Nana Favour", role: "Nurse", img: fale },
    // { name: "Nr. Lagu Idris", role: "Nurse", img: idris },
    { name: "Dr. Okeme Arome", role: "Doctor", img: okeme },
    { name: "Prof Muhammad S Ibrahim", role: "Consultant Public Health Physician", img: msibrahim },
    // { name: "Nr. Jamilu Yayawa", role: "Nurse", img: jamilu },
    // { name: "Nr. Lavi Tanko Rikin", role: "Pioneer Patient Navigator", img: lavi },
    // { name: "Dr. Aminu Umar", role: "Doctor", img: aminuumar },
    // { name: "Prof. Adamu Danladi Bojude", role: "Chief Consultant Radiation & Clinical Oncologist", img: danladi },
    { name: "Barr. Abubakar Aliyu", role: "Legal Advisor", img: abubakaraliyu },
    // { name: "Mr Aminu Ibrahim", role: "ICT SystemAdmin", img: aminuibrahim },
    // { name: "Dr Bright Ekhibise", role: "Volunteer Coordinator", img: ekhibise },
    // { name: "Halima Aliyu", role: "ICT SystemAdmin", img: halimaaliyu },
    // { name: "Pharm. Hauwa Idris", role: "Peer Navigator", img: hauwaidris },
    // { name: "Mr. Ibrahim Lawal", role: "Sign Language /Interpreter, Patient Navigator", img: ibrahimlawal },
    // { name: "Dr Jamillah Bayero Okpatuma", role: "Consultant Gastroenterologist", img: jamilabayero },
    // { name: "Alh. Madu Pindar", role: "ICT SystemAdmin", img: madu },
    // { name: "Maimuna Haruna", role: "Peer Navigator", img: maimunaharuna },
  ];

  return (
    <>
      <Helmet>
        <title>Our Staff | Cancer Consciousness Initiative</title>
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
          <br />
          <br />
          <br />
          <img src={t1} alt="Our Staff" className="w-full lg:w-3/5 mx-auto rounded-2xl shadow-lg" />
          <br />
          <br />
          <img src={t2} alt="Our Staff" className="w-full lg:w-3/5 mx-auto rounded-2xl shadow-lg" />
          <br />
          <br />
          <img src={t3} alt="Our Staff" className="w-full lg:w-3/5 mx-auto rounded-2xl shadow-lg" />
          <br />
          <br />
          <img src={t4} alt="Our Staff" className="w-full lg:w-3/5 mx-auto rounded-2xl shadow-lg" />
          <br />
          <br />
          <img src={t5} alt="Our Staff" className="w-full lg:w-3/5 mx-auto rounded-2xl shadow-lg" />
        </div>
      </section>
    </>
  );
}
