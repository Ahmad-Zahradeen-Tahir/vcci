import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Info } from "lucide-react";

const projects = [
  {
    title: "The Spirit of Pinktober",
    category: "Outreach",
    shortDescription:
      "Pinktober is the annual commemoration of the Breast Cancer month October with high level Advocacy events.",
    description:
      "Pinktober is the annual commemoration of the Breast Cancer month October with high level Advocacy events. An event carried out in states where the TeleOncology Hub operates, it includes Townhall Meetings and MegaRally Cancer Walk to enable awareness about breast cancer, enable breast cancer screening in designated places, healthworker training, community engagement and policy dialogue with stakeholders. This raises awareness, reduces stigma and encourages community support for the persons living with cancer.",
    image:
      "https://images.unsplash.com/photo-1576091160550-217358c7db81?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584362924004-23340393f3bd?w=400&q=80",
      "https://images.unsplash.com/photo-1579154234411-7801f0107583?w=400&q=80",
    ],
  },
  {
    title: "TeleOncology Hub",
    category: "Education",
    shortDescription:
      "TeleOncology Hub increases access to specialist cancer care for patients in remote areas.",
    description: "The Teleoncology Hub is a health system strengthening initiative and digital health innovation that provides specialist cancer care services remotely, bridging the gap in access to quality oncological care, particularly in underserved communities. The model comprises: (1)Telemedicine Consultations: Provider to Provider mode. Patients with their healthcare providers can connect with oncology experts remotely, reducing the need for travel and enabling timely medical interventions. (2)Virtual Multidisciplinary Team (MDT) Meetings: Healthcare professionals collaborate to discuss patient cases, ensuring comprehensive care, tailored treatment plans and improved treatment outcomes. Telemonitoring with a proactive electronic medical records PocketpatientMD enables the tracking of information and follow up after the MDT meetings, and (3)Patient Navigation Services: Trained patient navigators guide patients through the care process, facilitating prompt diagnoses, treatments, and follow-ups. Hospital patient navigation working in synchrony with the Community Patient Navigation Program when available in the state.",
    image:
      "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?w=400&q=80",
    ],
  },
  {
    title: "⁠⁠Melanoma Awareness Campaign",
    category: "Financial Aid",
    shortDescription:
      "Fighting Melanoma, Surviving and Thriving",
    description:
      "Melanoma Awareness Campaign sparked at The Taraba Town hall Pinktober 2025  with storytelling by Melanoma Survivor Pharm Hauwa Baba Idris to the Townhall audience. Melanoma Awareness campaigns,  meetings, webinars, screening events etc to be conducted periodically. The fight against Melanoma is taken to the community as we train patient navigators to raise awareness in the community about skin lesions, chronic ulcers and leg lesions , images are sent to the community patient navigation coordinator who sends to the MDT. Persons with suspicious lesions are referred for further evaluation.",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=400&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80",
    ],
  },
  {
    title: "Community Oncology",
    category: "Advocacy",
    shortDescription:
      "Providing access to equitable Cancer care given at the community level.",
    description:
      "Community Oncology is an area we are passionate about, enabling awareness, screening, early detection and referral of cancer cases and supporting care and survivorship care in the community level. The Community Patient Navigators are the trust builders, translators and advocates who enable the elimination of myths and stigma  while enabling the navigation of the patient with Cancer in the community. This is carried with support of the patient navigators in the tertiary hospitals.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560439514-4e9645039924?w=400&q=80",
      "https://images.unsplash.com/photo-1459183885447-553a41af6844?w=400&q=80",
    ],
  },
  {
    title: "Capacity Training and Mentorship",
    category: "Science",
    shortDescription:
      "At CCI we enable capacity building , continuing education and mentorship enabling the mentoring of  future leaders in oncology.",
    description:
      "Our Program enables continuing education and mentorship. The program aligns with the WHO Patient Navigation , NCCN sub-Saharan harmonized Clinical practice guidelines, AACR Cancer Disparities Recommendations etc The resource persons from several leadership programs like The ASCO City Cancer Challenge Leadership Program for Women in Oncology LPWO, and Oncology Nursing Leadership Programs, American Cancer Society Building Expertise for Advocacy and Capacity for Oncology Navigation BEACON Initiative contribute to the training modules. This enables continous medical education and training to strengthen the healthcare workforce involved in the program.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?w=400&q=80",
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=400&q=80",
    ],
  },
  {
    title: "Cancer ⁠Awareness Efforts",
    category: "Capacity Building",
    shortDescription:
      "Cancer Awareness campaigns, Screening and Advocacy events are important in the right against cancer.",
    description:
      "coming soon",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
    ],
  },
  {
    title: "Global Health",
    category: "Collaboration",
    shortDescription:
      "Multisectoral collaboration is crucial in providing lasting sustainable solutions to the health system while enabling digital health innovation and networking.",
    description:
      "At CCI, we appreciate that Global Health strengthens Cancer care and Health Systems by providing standards, funding, training opportunities, technology and political push to make cancer care more equitable. CVI convened The ECHAlliance Nigerian Ecosystem launch which brought together different sector players locally and internationally in progressive discussions and subsequent collaborAction!. An interesting pitching session for digital innovators and Startups was a great highlight of the event. ",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80",
    ],
  },
];

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Our Projects | Cancer Consciousness Initiative</title>
        <meta
          name="description"
          content="Explore our initiatives in cancer screening, awareness, and patient support."
        />
      </Helmet>

      <div className="bg-slate-50 pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-display mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-slate-600">
              Real initiatives making a real difference in communities across
              Nigeria.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    {project.shortDescription}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="gap-2">
                          <Info className="w-4 h-4" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-2xl h-[80vh] flex flex-col p-0 overflow-hidden">
                        <DialogHeader className="p-6 pb-0 flex-shrink-0">
                          <DialogTitle className="text-2xl font-display">
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-primary font-bold uppercase tracking-wider text-xs">
                            {project.category}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="flex-grow overflow-y-auto p-6">
                          <div className="space-y-6">
                            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="space-y-4 pb-4">
                              <p className="text-slate-600 leading-relaxed text-lg">
                                {project.description}
                              </p>

                              <h4 className="text-lg font-bold pt-2 border-t border-slate-100">
                                Project Highlights
                              </h4>
                              <div className="grid grid-cols-2 gap-4">
                                {project.gallery.map((img, i) => (
                                  <div
                                    key={i}
                                    className="aspect-square rounded-lg overflow-hidden border border-slate-100 shadow-sm"
                                  >
                                    <img
                                      src={img}
                                      alt={`${project.title} gallery ${i}`}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                ))}
                              </div>

                              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                <h4 className="font-bold mb-2">
                                  Impact Summary
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Directly benefited over 5,000 community
                                    members.
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Supported by 50+ medical volunteers
                                    annually.
                                  </li>
                                  <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    Expanding to three new states in the coming
                                    year.
                                  </li>
                                </ul>
                                <Link href="/contact" className="block mt-6">
                                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                                    Donate to this Project
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Link href="/contact">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-between bg-primary text-white border-primary"
                      >
                        Support
                        <span className="text-lg">→</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 rounded-l-full blur-3xl"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl text-white font-display mb-6">
            Help Us Do More
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Every donation goes directly towards funding screenings and
            treatment for those who need it most.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              variant="default"
              className="rounded-full shadow-lg shadow-accent/20 px-10"
            >
              Donate to CCI
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
