import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../components/ui/Button";

export default function Contact() {

  const onSubmit = () => {
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Comprehensive Cancer Initiative</title>
        <meta name="description" content="Get in touch with CCI Nigeria. We'd love to hear from you." />
      </Helmet>

      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-600">
              Have questions or want to volunteer? We are here to help.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "123 Health Avenue, Victoria Island, Lagos, Nigeria",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+234 916 046 2316",
                    link: "tel:+2349160462316"
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "info@ccinitiativenig.org",
                    link: "mailto:info@ccinitiativenig.org"
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    content: "Mon - Fri: 8am - 5pm",
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="space-y-3"
                  >
                    <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center">
                      <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.link ? (
                      <a href={item.link} className="text-slate-600 hover:text-primary transition-colors">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-80 bg-slate-100 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.04259837775!2d3.2847683935272373!3d6.54805503049658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714521456208!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                    <input
                      id="name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="John Doe"
                    />
                    {(
                      <p className="text-red-500 text-xs mt-1"></p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                    <input
                      id="email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                    {(
                      <p className="text-red-500 text-xs mt-1"></p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone (Optional)</label>
                    <input
                      id="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+234..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
                    <input
                      id="subject"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="How can we help?"
                    />
                    {(
                      <p className="text-red-500 text-xs mt-1"></p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Tell us more..."
                  />
                  { (
                    <p className="text-red-500 text-xs mt-1"></p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg rounded-xl shadow-lg shadow-primary/20"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
