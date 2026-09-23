import {
  AcademicCapIcon,
  BookOpenIcon,
  ChartBarIcon,
  ClockIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "SSC",
      Institution: "BAF Shaheen Haji Ashraf Ali School and College",
      gpa: "4.11",
      Period: "2017-2018",
      icon: AcademicCapIcon,
    },
    {
      id: 2,
      degree: "HSC",
      Institution: "Monipur High School and College",
      gpa: "4.08",
      Period: "2019-2020",
      icon: BookOpenIcon,
    },
    {
      id: 3,
      degree: "BSc in Software Engineering",
      Institution: "Daffodil International University",
      gpa: "2.79",
      Period: "2021-2024",
      icon: ChartBarIcon,
    },
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "Programming Hero",
      date: "2024",
      icon: TrophyIcon,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  return (
    <div>
      <section
        id="education"
        className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden pt-16"
      >
        <div className="absolute top-[100px] left-64 insert-x-0 flex items-start justify-center">
          <div className="h-96 w-96 bg-linear-to-br from-[#0268b0] to-blue-500 blur-2xl opacity-40 rounded-full"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="container mx-auto px-6 relative z-10 max-w-4xl"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AcademicCapIcon className="w-12 h-12 text-cyan-400" />
              </motion.div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                Education
              </span>
            </h2>
            <p className="text-gray-300 text-lg">
              My learning journey and Certifications
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center justify-center gap-2">
                <BookOpenIcon className="w-6 h-6" />
                Education
              </h3>
              <div className="space-y-4">
                {educationData.map((edu, index) => {
                  const IconComponent = edu.icon;
                  return (
                    <motion.div
                      key={edu.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="p-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 5 }}
                        >
                          <IconComponent className="w-5 h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className=" text-white font-semibold text-sm">
                            {edu.degree}
                          </h4>
                          <p className="text-cyan-300 text-sm">
                            {edu.Institution}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            <ClockIcon className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-400 text-xs bg-gray-700/50 px-2 py-1 rounded">
                              {edu.Period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            {/* Certification */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-cyan-300 mb-6 text-center flex items-center">
                <TrophyIcon className="w-6 h-6" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 border border-blue-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <motion.div
                            className="p-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform duration-300"
                            whileHover={{ rotate: 5 }}
                          >
                            <IconComponent className="w-5 h-5 text-white " />
                            {/* start here 55:26 */}
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Education;
