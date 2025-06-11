import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse">​​🔘​​​</span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
             Ingeniero de Sistemas | Especialista Gerencia de Proyectos e Inteligencia de Negocios | MBA 👨‍💻
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05, color: "#4b5563" }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-purple-500/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-purple-500/20 dark:border-purple-500/10 shadow-sm">
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              <p>🚀 Ingeniero de Sistemas con 19 años de experiencia en tecnología.Experto en arquitectura de software, liderazgo de equipos y
                  transformación digital. Cuento con un MBA en Administración de Negocios y una sólida experiencia en la implementación
                  de soluciones tecnológicas, así como en la gestión de equipos multidisciplinarios siguiendo los estándares del
                  PMI y gestión de proyectos agiles agregando valor a los productos y creando equipos de trabajo de alto
                  desempeño. </p>
                  <br />
                  <p>Experiencia en la gestión de proyectos de tecnología de la información y desarrollo de software y
                  TIC, planificación, ejecución, seguimiento y cierre de proyectos, así como la gestión de recursos, presupuestos y
                  tiempos.</p>
                  
                  <br />
                  <p>
                  Experiencia en la dirección de proyectos de Inteligencia Artificial enfocado en el desarrollo y la implementación
                  de sistemas de procesamiento de lenguaje natural (NLP) utilizando modelos generativos avanzados como
                  ChatGPT, llamaIndex, Qwen, RAG y Machine Learning. Experiencia en Digital Performance Managment en
                  ecosistemas digitales el diseño e Implementación de estrategias de Observabilidad, integración de arquitecturas
                  de Software, y estrategias de optimización continua.</p>

                   <br />
                  <p>
                  Experiencia en Liderazgo de departamentos de tecnología, áreas de soporte técnico (Mesas de Ayuda), proyectos
                  de desarrollo de Software, redes, servidores onPremise y Cloud (AWS,Azure), ERP’s (Zeus), Creación de
                  presupuestos anuales, planeación estratégica, Balance Score Card, gestión de proveedores.</p>

                                    <br />
                  <p>
                  Alta experiencia como líder técnico con conocimientos en arquitectura de software, habilidades en captura, diseño
                  y gestión de requerimientos, lenguaje de modelado UML, bases de datos relacionales y no relacionales,
                  infraestructura tecnológica, Java, Salesforce, Python, conocimientos en SOA y Web Services Rest, experiencia
                  en Tecnologías Low Code como Power Apps y experiencia en Análisis de Datos con Power BI, DataLakes y
                  DataWhare House. Experiencia en Transformación Digital aplicando tecnologías como IA Generativa, Chatbots,
                  Arquitectura SOA y Microservicios, Aplicaciones mobiles, Landing Page.</p> 

                  
                                    <br />
                  <p>
                  Experiencia profesional en sector educación, seguros, financiero, contexto humanitario, salud, hotelería y turismo,
                  tecnología.</p>
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
