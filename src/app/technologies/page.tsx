'use client';

import { motion } from 'framer-motion';
import { Code, Database, Cloud, Shield, Award, Server, Wrench, Globe, Layers, TestTube, Settings, GitBranch, Monitor, Zap } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const technologies = [
  {
    category: "PROGRAMMING LANGUAGES",
    icon: Code,
    image: "/images/tech/programming-languages.jpg",
    skills: [
      "JavaScript",
      "TypeScript",
      "Java",
      "Kotlin",
      "C#"
    ]
  },
  {
    category: "FRONTEND FRAMEWORKS",
    icon: Monitor,
    image: "/images/tech/frontend-frameworks.jpg",
    skills: [
      "Angular",
      "React",
      "React Native",
      "Electron",
      "D3.js",
      "NgRx",
      "RxJS",
      "Redux",
      "NX",
      "PrimeNG",
      "Bootstrap",
      "ng-bootstrap",
      "Mustache"
    ]
  },
  {
    category: "BACKEND FRAMEWORKS",
    icon: Server,
    image: "/images/tech/backend-frameworks.jpg",
    skills: [
      "Spring",
      "Spring Boot",
      "Quarkus",
      "NestJS",
      "Hibernate / JPA",
      "Liquibase",
      "Flyway",
      "Node.js",
      "Dropwizard",
      ".Net Core",
      "TypeScript"
    ]
  },
  {
    category: "DATABASES",
    icon: Database,
    image: "/images/tech/databases.jpg",
    skills: [
      "PostgreSQL",
      "PSQL",
      "MongoDB",
      "DynamoDB",
      "Oracle DB"
    ]
  },
  {
    category: "CLOUD & DEVOPS",
    icon: Cloud,
    image: "/images/tech/cloud-devops.jpg",
    skills: [
      "AWS",
      "AWS Lambda",
      "DynamoDB",
      "AWS API Gateway",
      "AWS SQS/ SNS/ SES",
      "Terraform"
    ]
  },
  {
    category: "CI/CD & PROJECT TOOLS",
    icon: GitBranch,
    image: "/images/tech/cicd-tools.jpg",
    skills: [
      "GitLab CI",
      "Jenkins",
      "Spinnaker",
      "GitLab",
      "GitHub",
      "Bitbucket",
      "Confluence",
      "Nexus",
      "Jira",
      "Artifactory",
      "Keycloak",
      "Henshin",
      "Storybook",
      "GamAV",
      "Figma"
    ]
  },
  {
    category: "DEVELOPMENT TOOLS",
    icon: Wrench,
    image: "/images/tech/development-tools.jpg",
    skills: [
      "IntelliJ IDEA",
      "Visual Studio Code",
      "Rider",
      "Eclipse",
      "Apache Kafka",
      "Docker",
      "Docker-compose",
      "Kubernetes",
      "Helm",
      "HashiCorp Vault"
    ]
  },
  {
    category: "FRONTEND TECHNOLOGIES",
    icon: Globe,
    image: "/images/tech/frontend-technologies.jpg",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "BEM"
    ]
  },
  {
    category: "TESTING",
    icon: TestTube,
    image: "/images/tech/testing.jpg",
    skills: [
      "Junit",
      "Jest",
      "Mockito",
      "MockK",
      "Spectator",
      "Cypress",
      "Ng-mocks"
    ]
  },
  {
    category: "BUILD TOOLS",
    icon: Settings,
    image: "/images/tech/build-tools.jpg",
    skills: [
      "Maven",
      "Gradle",
      "Npm"
    ]
  },
  {
    category: "ARCHITECTURE & SERVICES",
    icon: Layers,
    image: "/images/tech/architecture-services.jpg",
    skills: [
      "Services (SOA)",
      "Microservices",
      "Hexagonale Architektur",
      "Microfrontends"
    ]
  },
  {
    category: "API & INTERFACES",
    icon: Zap,
    image: "/images/tech/api-interfaces.jpg",
    skills: [
      "REST",
      "OpenAPI",
      "API First",
      "Protobuf",
      "Websocket"
    ]
  },
  {
    category: "METHODOLOGIES",
    icon: Shield,
    image: "/images/tech/methodologies.jpg",
    skills: [
      "Scrum",
      "Kanban",
      "SAFe"
    ]
  }
];

const certifications = [
  {
    name: "Professional NGRX: Advanced State Management & Best Practices",
    issuer: "Professional Training",
    year: "2022",
    status: "Completed",
    type: "Workshop"
  },
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    year: "2021",
    status: "Active",
    type: "Certification"
  },
  {
    name: "AWS Certified Solution Architect - Associate",
    issuer: "Amazon Web Services",
    year: "2020",
    status: "Active",
    type: "Certification"
  },
  {
    name: "Test-driven development: Theory and practice",
    issuer: "Professional Training",
    year: "2019",
    status: "Completed",
    type: "Workshop"
  },
  {
    name: "ISTQB Certified Tester - Foundation Level",
    issuer: "International Software Testing Qualifications Board",
    year: "2018",
    status: "Active",
    type: "Certification"
  },
  {
    name: "IREB Certified Professional for Requirements Engineering - Foundation Level",
    issuer: "International Requirements Engineering Board",
    year: "2018",
    status: "Active",
    type: "Certification"
  },
  {
    name: "SAP Certified Associate - Business Process Integration with SAP ERP 6.0 EhP6",
    issuer: "SAP",
    year: "2016",
    status: "Active",
    type: "Certification"
  }
];

const education = [
  {
    degree: "Master of Science Angewandte Informatik – Software Systems Engineering",
    period: "2015 – 2017",
    type: "Master's Degree"
  },
  {
    degree: "Bachelor of Science, Angewandte Informatik – Systems Engineering",
    period: "2012 – 2015",
    type: "Bachelor's Degree"
  }
];

export default function Technologies() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Technologies & Expertise
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              A comprehensive overview of my technical skills and expertise, built through years of hands-on development
              and continuous learning in the ever-evolving world of software engineering.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-gray-50 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Technical Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                My comprehensive technical skill set spans across modern development stacks, from programming languages
                to cloud infrastructure, enabling me to deliver full-stack solutions across diverse technology ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {technologies.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <motion.div
                    key={tech.category}
                    variants={fadeIn}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    {/* Image Header */}
                    <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img
                        src={tech.image}
                        alt={tech.category}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-4 flex items-center">
                        <IconComponent className="w-6 h-6 text-white mr-2 drop-shadow-sm" />
                        <h3 className="text-xs uppercase tracking-wider text-white font-medium drop-shadow-sm">
                          {tech.category}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                        {tech.skills.map((skill) => (
                          <li key={skill} className="text-sm text-gray-700 leading-relaxed flex items-center">
                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="truncate">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Education Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                Education, Workshops & Certifications
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Continuous learning and professional development through formal education,
                industry certifications, and specialized training programs.
              </p>
            </div>

            {/* Education Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Education</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {education.map((edu) => (
                  <motion.div
                    key={edu.degree}
                    variants={fadeIn}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-6 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-6 h-6 text-blue-600 mt-1" />
                      <span className="text-xs uppercase tracking-wider px-2 py-1 rounded bg-blue-100 text-blue-700">
                        {edu.type}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900 mb-2 leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-gray-600 font-medium">
                      {edu.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Workshops */}
            <div>
              <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Certifications & Workshops</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    variants={fadeIn}
                    className="border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Award className="w-5 h-5 text-gray-600 mt-1" />
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${
                          cert.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {cert.status}
                        </span>
                        <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded ${
                          cert.type === 'Certification'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}>
                          {cert.type}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-base font-medium text-gray-900 mb-3 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {cert.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2024 Enno Lohmann. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
