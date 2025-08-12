'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Users, Target, ArrowRight, Clock } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

const projects = [
  {
    title: "Insurance Platform Evolution & Claims Processing",
    company: "The NextGen GmbH",
    client: "Large Insurance Company",
    period: "12.2023 – 07.2025",
    duration: "19 months",
    team: "2 Release Trains (6-8 Scrum teams each)",
    role: "Full-Stack Developer",
    image: "/images/insurance-platform.jpg",
    description: "Further development of the new insurance platform for a large insurance company. Focus on claims reporting and processing systems, including customer-facing claims reporting and integration with legacy systems for streamlined claims processing.",
    responsibilities: [
      "Full-stack development of claims reporting and processing systems",
      "Frontend development with Angular for customer-facing interfaces",
      "Backend development with Spring Boot using Java and Kotlin",
      "Integration with legacy systems via REST interfaces",
      "Kubernetes deployment and orchestration",
      "Cross-functional team collaboration with domain experts"
    ],
    outcomes: [
      "Enhanced claims reporting workflow for customers",
      "Seamless integration with legacy claims processing systems",
      "Improved system scalability through Self-Contained Systems",
      "Successful deployment in Kubernetes environment"
    ],
    technologies: ["Spring Boot", "Hibernate", "Liquibase", "PostgreSQL", "Apache Kafka", "Protobuf", "Hexagonal Architecture", "Angular", "RxJS", "NX", "Jenkins", "Spinnaker", "GitHub", "Docker", "Kubernetes", "Storybook", "Jest", "Spectator", "Testinglibrary", "Cypress", "JUnit", "Mockito", "ng-mocks", "TypeScript", "Java 16", "Kotlin", "Keycloak", "REST", "HTML", "SCSS", "BEM", "Gradle", "Artifactory", "MockK"],
    methodology: "SAFe",
    status: "Completed"
  },
  {
    title: "Internal Systems Development",
    company: "The NextGen GmbH",
    client: "Large Transport and Logistics Company",
    period: "11.2022 – 11.2023",
    duration: "12 months",
    team: "Scrum team with multiple developers",
    role: "Full-Stack Developer",
    image: "/images/transport-logistics.jpg",
    description: "Development and enhancement of various internal applications to improve employee workflows through self-service capabilities and provide management with timely key performance indicators.",
    responsibilities: [
      "Full-stack development from requirements to deployment",
      "Requirements analysis with domain experts",
      "UI/UX design with Figma prototypes",
      "Frontend development with Angular and Bootstrap",
      "Backend development with NestJS",
      "Database design with shared PostgreSQL schemas",
      "Complete application lifecycle management"
    ],
    outcomes: [
      "Replaced manual PDF forms with digital self-service",
      "Improved data availability for management decisions",
      "Streamlined employee workflows",
      "Reduced administrative overhead"
    ],
    technologies: ["Angular", "Bootstrap", "ng-bootstrap", "NestJS", "PostgreSQL", "TypeORM", "Figma", "Jira", "TypeScript", "SQL", "PSQL"],
    methodology: "Scrum",
    status: "Completed"
  },
  {
    title: "Case Management System Modernization",
    company: "rola Security Solutions GmbH",
    client: "Government Agencies and Institutions",
    period: "01.2022 – 10.2022",
    duration: "10 months",
    team: "7 developers + team lead + project manager",
    role: "Full-Stack Developer (Web Basis Team)",
    image: "/images/case-management.jpg",
    description: "Modernization of rsCase, a case management system used by various government agencies, transitioning from a 20-year-old Java Fat-Client to modern Self-Contained-Systems with Spring Boot and Angular microfrontends.",
    responsibilities: [
      "Development of core application components",
      "Creation of reusable Angular microfrontends",
      "Publishing microfrontends as npm modules",
      "Backend API development for legacy system integration",
      "Core functionality implementation (search, favorites management)"
    ],
    outcomes: [
      "Successfully modernized legacy case management system",
      "Created reusable component library",
      "Established microfrontend architecture",
      "Improved system maintainability and scalability"
    ],
    technologies: ["Spring Boot", "Hibernate", "Liquibase", "Oracle DB", "Angular", "NX", "RxJS", "NgRx", "PrimeNG", "OpenAPI", "Jenkins", "Git", "Bitbucket", "Docker", "Storybook", "Jest", "Cypress", "JUnit", "Mockito", "TypeScript", "Java", "REST", "HTML", "SCSS", "BEM", "Maven", "Nexus"],
    methodology: "Scrum",
    status: "Completed"
  },
  {
    title: "Digital Liability Insurance Platform",
    company: "codecentric AG",
    client: "Large Insurance Company",
    period: "06.2020 – 12.2021",
    duration: "18 months",
    team: "8 Scrum teams (100+ people total)",
    role: "Full-Stack Developer",
    image: "/images/digital-insurance.jpg",
    description: "Development of a completely new system for digital insurance offerings, starting with a fully digital liability insurance including all functions from contract conclusion to payment and claims processing. The project used modern technology stack with Domain Driven Design architecture.",
    responsibilities: [
      "Full-stack development in cross-functional teams",
      "Frontend development with Angular for claims reporting and processing",
      "Backend development with Spring Boot and hexagonal architecture",
      "Database design and implementation with PostgreSQL",
      "Knowledge sharing through pair and mob programming",
      "Workshop facilitation and requirement analysis with domain experts",
      "Infrastructure development and deployment"
    ],
    outcomes: [
      "Successfully launched digital liability insurance after 9 months",
      "First insurance policies sold to end users",
      "Significantly improved deployment speed through modern CI/CD",
      "Established Self-Contained Systems architecture",
      "Enhanced development velocity through containerization"
    ],
    technologies: ["Spring Boot", "Hibernate", "Liquibase", "PostgreSQL", "Apache Kafka", "Protobuf", "Hexagonal Architecture", "Angular", "RxJS", "Jenkins", "Spinnaker", "Git", "GitHub", "Docker", "Kubernetes", "Storybook", "Jest", "Spectator", "Testinglibrary", "Cypress", "JUnit", "Mockito", "ng-mocks", "TypeScript", "Java 16", "Kotlin", "Keycloak", "REST", "HTML", "SCSS", "BEM", "Gradle", "Artifactory", "MockK"],
    methodology: "SAFe",
    status: "Completed"
  },
  {
    title: "Production Facility Monitoring System",
    company: "codecentric AG",
    client: "Large Industrial Client",
    period: "10.2019 – 05.2020",
    duration: "8 months",
    team: "3 developers + Product Owner",
    role: "Frontend Developer",
    image: "/images/production-monitoring.jpg",
    description: "Development of a web application for monitoring production facilities that manufacture films, utilizing sensor data throughout the production process to evaluate quality and quickly identify issues with returns.",
    responsibilities: [
      "Angular application development",
      "Production batch and quality parameter interfaces",
      "Complex graph component with timeline visualization",
      "NgRx state management for real-time data",
      "WebSocket integration for live data updates",
      "Microservices integration (C# and Node.js)"
    ],
    outcomes: [
      "Real-time production quality monitoring",
      "Faster identification of production vs. shipping issues",
      "Improved quality control processes",
      "Enhanced production transparency"
    ],
    technologies: ["Angular", "RxJS", "NgRx", "D3.js", "GitLab", "GitLab CI", "Git", "Docker", "Docker-Compose", ".Net Core", "Node.js", "Express.js", "TypeScript", "C#", "Keycloak", "REST", "HTML", "SCSS", "Rider", "IntelliJ IDEA", "Visual Studio"],
    methodology: "Scrum",
    status: "Completed"
  },
  {
    title: "Citizen Information Mobile App",
    company: "codecentric AG",
    client: "City Administration",
    period: "04.2019 – 09.2019",
    duration: "6 months",
    team: "3 developers + PO + UX/UI designers",
    role: "Full-Stack Developer",
    image: "/images/citizen-app.jpg",
    description: "Development of a mobile app for city administration to provide citizens with information and interfaces to city services, bundling existing interfaces and providing them through a unified mobile application.",
    responsibilities: [
      "React Native mobile app development",
      "AWS serverless backend with Lambda functions",
      "MongoDB data caching and anti-corruption layer",
      "Infrastructure as Code with Terraform",
      "CI/CD pipeline setup with multi-factor authentication",
      "Requirements analysis with city administration"
    ],
    outcomes: [
      "Unified citizen service interface",
      "Improved accessibility to city services",
      "Serverless architecture with high availability",
      "Automated deployment pipeline"
    ],
    technologies: ["React Native", "Redux", "Redux Saga", "Node.js", "JavaScript", "AWS Lambda", "AWS API Gateway", "AWS DynamoDB", "AWS SES", "AWS SNS", "AWS SQS", "Terraform", "GitLab", "GitLab CI", "REST", "HTML", "SCSS", "Maven"],
    methodology: "Kanban",
    status: "Completed"
  },
  {
    title: "Team Skill Management Platform",
    company: "codecentric AG",
    client: "Internal Project",
    period: "06.2019 – 12.2021",
    duration: "30 months (part-time)",
    team: "6 developers + Product Owner + UX/UI designers",
    role: "Full-Stack Developer",
    image: "/images/skill-management.jpg",
    description: "Internal system development for IT consulting to help find the right consultants for projects by allowing consultants to maintain their skills and enabling managers to search for specific skill profiles.",
    responsibilities: [
      "Microservice architecture development",
      "Spring Boot and Quarkus backend services",
      "React frontend development",
      "Integration with internal systems",
      "Resume generator integration",
      "Requirements gathering with management"
    ],
    outcomes: [
      "Improved consultant-project matching",
      "Centralized skill management system",
      "Enhanced project staffing efficiency",
      "Integrated internal tool ecosystem"
    ],
    technologies: ["Spring Boot", "Hibernate", "Quarkus", "Express", "React", "TypeScript", "JavaScript", "Kubernetes", "Docker", "Cypress", "JUnit", "Mockito", "GitLab", "GitLab CI", "REST", "WebSocket", "Messaging", "Kafka", "Microservices", "HTML", "SCSS", "BEM"],
    methodology: "Kanban",
    status: "Completed"
  },
  {
    title: "Insurance Claims Chatbot",
    company: "codecentric AG",
    client: "Insurance Company",
    period: "12.2018 – 03.2019",
    duration: "4 months",
    team: "2 developers + Product Owner",
    role: "Backend Developer",
    image: "/images/insurance-chatbot.jpg",
    description: "Development of a chatbot for insurance claims reporting to make the process as simple as possible for users, including backend service for frontend-chatbot engine communication with structured data storage.",
    responsibilities: [
      "Spring Boot service development",
      "REST API design for frontend and chatbot engine",
      "Structured chat data storage implementation",
      "File upload functionality",
      "Captcha and virus scan integration",
      "End-to-end testing with Cypress"
    ],
    outcomes: [
      "Simplified claims reporting process",
      "Structured chat data for follow-up analysis",
      "Integrated security measures (captcha, virus scan)",
      "Comprehensive test coverage"
    ],
    technologies: ["Spring Boot", "Hibernate", "AWS DynamoDB", "AWS SES", "WebSocket", "ClamAV", "Kubernetes", "Docker", "Cypress", "JUnit", "Mockito", "GitLab", "GitLab CI", "REST", "Gradle"],
    methodology: "Kanban",
    status: "Completed"
  },
  {
    title: "Medical Certification Software",
    company: "adesso AG",
    client: "Medical Certification Authority",
    period: "05.2018 – 11.2018",
    duration: "7 months",
    team: "50+ people (developers, designers, project managers)",
    role: "Full-Stack Developer (Trainee)",
    image: "/images/medical-certification.jpg",
    description: "Development of unified software to replace individual state-specific solutions, providing functionality for all federal states and integrating necessary external systems for medical facility inspections and certifications.",
    responsibilities: [
      "Electron desktop client development",
      "Spring Boot microservices development",
      "Complex form development with dynamic validation",
      "Cross-validation implementation",
      "Frontend and backend validation logic",
      "Large form handling with conditional display"
    ],
    outcomes: [
      "Unified solution across all federal states",
      "Improved inspector workflow efficiency",
      "Offline capability for field inspections",
      "Comprehensive validation system"
    ],
    technologies: ["Spring Boot", "PostgreSQL", "Hibernate", "Flyway", "Angular", "Bootstrap", "RxJS", "Electron", "JUnit", "Mockito", "Jest", "Kubernetes", "Docker", "Keycloak", "GitLab", "GitLab CI", "REST", "HTML", "SCSS"],
    methodology: "Scrum-based",
    status: "Completed"
  },
  {
    title: "Secure Healthcare Communication Platform",
    company: "adesso AG",
    client: "Healthcare Communication Platform",
    period: "11.2017 – 04.2018",
    duration: "6 months",
    team: "6 developers + project manager",
    role: "Full-Stack Developer (Trainee)",
    image: "/images/healthcare-communication.jpg",
    description: "Development of an end-to-end encrypted communication platform for doctor-patient communication, extending the Signal Messenger with role concepts and healthcare-specific functionality.",
    responsibilities: [
      "Signal Messenger extension development",
      "Role-based system implementation (doctors/patients)",
      "Backend services development (Java and Spring Boot)",
      "Practice management frontend (Angular)",
      "Desktop client development (Electron with Mustache)",
      "Billing and practice data management"
    ],
    outcomes: [
      "Secure end-to-end encrypted communication",
      "Role-based healthcare communication system",
      "Integrated practice management features",
      "GDPR-compliant patient communication"
    ],
    technologies: ["Spring Boot", "PostgreSQL", "Hibernate", "Dropwizard", "Protobuf", "Angular", "Bootstrap", "Electron", "Mustache", "Docker", "GitLab", "GitLab CI", "REST", "HTML", "SCSS"],
    methodology: "Scrum-based",
    status: "Completed"
  },
  {
    title: "SVG-based Import for Network Analysis",
    company: "paluno - The Ruhr Institute for Software Technology",
    client: "Research Project",
    period: "01.2017 – 03.2017",
    duration: "3 months",
    team: "Student assistant role",
    role: "Student Developer",
    image: "/images/svg-network-analysis.jpg",
    description: "Implementation of a new import interface for a network analysis application. Goal was to import Visio diagrams into the application by exporting to SVG format and using graph transformation to generate the input format for the network analysis tool.",
    responsibilities: [
      "Development of SVG to network format transformer",
      "Eclipse application development",
      "Graph transformation implementation using Henshin",
      "Triple-Graph-Grammar development"
    ],
    outcomes: [
      "Successful Visio diagram import capability",
      "Automated graph transformation pipeline",
      "Enhanced network analysis tool functionality"
    ],
    technologies: ["Java", "Eclipse", "Henshin"],
    methodology: "Research Project",
    status: "Completed"
  },
  {
    title: "Model-to-Code Transformations",
    company: "paluno - The Ruhr Institute for Software Technology",
    client: "Research Project",
    period: "01.2016 – 12.2016",
    duration: "12 months",
    team: "Student assistant role",
    role: "Student Developer",
    image: "/images/model-transformations.jpg",
    description: "Research project exploring bidirectional model-code transformations for Enterprise Java applications. The goal was to enable seamless switching between code and model views with automatic transformation of changes between representations.",
    responsibilities: [
      "Development of new transformation models",
      "Triple-Graph-Grammar creation and integration",
      "Support for different modeling standards",
      "Eclipse application enhancement"
    ],
    outcomes: [
      "Bidirectional model-code transformation capability",
      "Support for multiple modeling standards",
      "Enhanced Enterprise Java application modeling",
      "Seamless code-model synchronization"
    ],
    technologies: ["Java", "Eclipse", "Henshin"],
    methodology: "Research Project",
    status: "Completed"
  }
];

export default function Projects() {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <section className="py-12 md:py-16 w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-6xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8 leading-tight">
              Projects
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
              A showcase of meaningful projects where I've applied my fullstack development skills
              to solve real-world problems and create impactful software solutions.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Timeline Section */}
      <section className="py-16 bg-white w-full">
        <div className="w-full max-w-none px-6 md:px-12 lg:px-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 text-center">
              Project Timeline
            </h2>

            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 hidden lg:block"></div>

              {/* Timeline Items */}
              <div className="space-y-4 lg:-space-y-32">
                {projects.map((project, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={project.title}
                      variants={isEven ? slideInLeft : slideInRight}
                      className={`relative flex items-center ${
                        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } flex-col lg:gap-16`}
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 hidden lg:block"></div>

                      {/* Project Card */}
                      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`} style={{ zIndex: projects.length - index }}>
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative">
                          {/* Project Header */}
                          <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div className="absolute top-4 right-4">
                              <span className={`text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium ${
                                project.status === 'Completed'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-6 right-6">
                              <h3 className="text-xl font-semibold text-white mb-2 drop-shadow-sm">
                                {project.title}
                              </h3>
                              <div className="flex items-center gap-2 text-sm text-white/90">
                                <span className="font-medium">{project.company}</span>
                              </div>
                            </div>
                          </div>

                          {/* Project Content */}
                          <div className="p-6">
                            {/* Period and Duration */}
                            <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{project.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{project.duration}</span>
                              </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                              {project.description}
                            </p>

                            {/* Key Info Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="flex items-start gap-3">
                                <Briefcase className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Role</p>
                                  <p className="text-sm font-medium text-gray-900">{project.role}</p>
                                </div>
                              </div>
                              <div className="flex items-start gap-3">
                                <Users className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                                <div>
                                  <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Team</p>
                                  <p className="text-sm font-medium text-gray-900">{project.team}</p>
                                </div>
                              </div>
                            </div>

                            {/* Key Outcomes */}
                            <div className="mb-6">
                              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                                Key Outcomes
                              </h4>
                              <ul className="space-y-1">
                                {project.outcomes.slice(0, 3).map((outcome, idx) => (
                                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                                    <ArrowRight className="w-3 h-3 text-gray-400 mr-2 mt-1 flex-shrink-0" />
                                    {outcome}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Technologies */}
                            <div>
                              <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                                Key Technologies
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies.slice(0, 8).map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 bg-gray-50 text-gray-700 text-xs rounded border border-gray-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies.length > 8 && (
                                  <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                                    +{project.technologies.length - 8} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Timeline Date (visible on larger screens) */}
                      <div className={`hidden lg:block w-2/12 ${isEven ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 ${isEven ? 'ml-auto' : 'mr-auto'}`}>
                          <p className="text-sm font-semibold text-blue-700">{project.period.split(' – ')[0]}</p>
                          <p className="text-xs text-blue-600">{project.duration}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
