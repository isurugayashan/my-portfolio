"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  Twitter,
  Code,
  Database,
  Globe,
  Smartphone,
  ArrowDown,
  MapPin,
  Calendar,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const skills = [
    "Java",
    "PHP",
    "C#.Net",
    "VB.Net",
    "React + Vite",
    "AngularJs",
    "Laravel",
    "Spring Boot",
    "JavaScript",
    "TypeScript",
    "MySQL",
    "MongoDB",
    "Docker",
    "Git",
    "Jenkins (CI/CD)",
    "HTML/CSS",
    "Tailwind CSS",
    "Shadcn/ui",
    "Bootstrap",
    "OpenAI",
    "Stripe",
    "Clerk",
    "Postman",
    "Wordpress",
    "Google Analytics",
    "Google Search Console",
    "SEMrush",
  ]

  const projects = [
    {
      title: "Management Information System",
      description:
          "Designed and enhanced a comprehensive academic MIS as a System Analyst. Developed modules for student enrollment, attendance tracking, and grading with secure JWT-based authentication and role-based access. Implemented microservices architecture design for scalability and maintainability, optimized database performance, and managed CI/CD pipelines.",
      image: "./assets/ss3.png",
      technologies: ["Laravel", "Angular", "MySQL", "JWT", "Docker", "Jenkins", "Microservices Architecture","REST APIs","Git","Sourcetree"],
      // github: "https://github.com/username/student-management-system",
      // live: "https://fogsadmin.fohss.lk/",
      category: "Enterprise System",
    },
    {
      title: "AI-Driven Full-Stack Hotel Management System",
      description: "Developed a cloud-based hotel management platform integrating AI-powered search using RAG (Retrieval-Augmented Generation) and vector databases for personalized recommendations. Designed  user authentication secure using clerk, secure payment processing via Stripe. Deployed using CI/CD pipelines for continuous integration using Render and Netlify tools",
      image: "/assets/ss4.png",
      technologies: ["MERN Stack", "TailwindCSS", "Clerk", "Stripe", "RAG", "Vector Databases", "OpenAI", "ShadCN", "Netlify", "Render", "Render","REST APIs","Git","Sourcetree"],
      github: "https://github.com/isurugayashan/AIDF-Front",
      live: "https://aidf-horizone-frontend-isuru.netlify.app/",
      category: "AI - Web Application",
    },
    {
      title: "Student Chat Application Module",
      description: "Developed front-end and back-end APIs for a real-time student chat feature within an enterprise-level Management Information System. Built using Angular, Laravel, and MySQL, ensuring secure data handling and seamless integration with existing academic workflows.",
      image: "/assets/ss5.png",
      technologies: ["Angular", "Laravel", "MySQL", "JWT", "Docker", "REST APIs","Git","Sourcetree"],
      //github: "https://github.com/username/student-chat-module",
      // live: "https://admin.fohss.lk/",
      category: "Enterprise Module",
    },
    {
      title: "Ravanas Web Page",
      description:
          "Built and hosted Ravans Group a custom WordPress site with Elementor—leveraging AWS for scalable, cloud-based deployment.",
      image: "/assets/ss1.png",
      technologies: ["WordPress", "Elementor", "PHP", "MySQL (RDS)", "Apache", "AWS EC2", "AWS Route 53", "AWS Certificate Manager (SSL)"],
      // github: "https://github.com/username/ecommerce-platform",
      live: "https://ravana.com.au/",
      category: "E-Commerce Platform",
    },

    {
      title: "E-Certificate Management Service",
      description:
          "Developed a dedicated service for managing digital certificates at the Faculty of Humanities and Social Sciences, University of Ruhuna. Implemented secure APIs using Angular, Laravel, and MySQL to generate, validate, and store certificates. Integrated QR-based certificate download for quick access and verification, ensuring seamless integration with existing academic platforms.",
      image: "/assets/ss6.png",
      technologies: ["Angular", "Laravel", "MySQL", "REST APIs", "QR Code","Git","Sourcetree"],
     // github: "https://github.com/username/e-certificate-management-service",
      live: "https://ruichss.fohss.lk/user",
      category: "Frontend + Backend",
    },
    {
      title: "Daham Pasal Exam Management System",
      description:
          "Designed and developed a full-stack exam management platform for the Buddhist Ministry of Sri Lanka. Built using Angular and Laravel with JWT-based authentication and authorization. Deployed with Docker to ensure portability and scalability, supporting secure exam creation, student management, and result processing.",
      image: "/assets/ss2.png",
      technologies: ["Angular", "Laravel", "MySQL", "JWT", "Docker","REST APIs", "Git","Sourcetree","MVC Architecture"],
      github: "https://github.com/isurugayashan/dept-bud-aff-front",
      //live: "https://daham-pasal-demo.example.com",
      category: "Web Application",
    },
    {
      title: "Academic Administrative Processes Management System",
      description:
          "Developed a full-stack academic administrative management platform for the Zonal Education Office in Akuressa. Focused on Customer Relationship Management (CRM) features for higher education centers. Implemented an MVC architecture using Angular (with Angular Material) for the front-end, Spring Boot for the back-end, and MySQL as the database. Integrated JWT-based authentication, tested APIs with Postman, and used Gradle for build automation. Designed using MySQL Workbench for efficient database modeling.",
      image: "/assets/ss7.png",
      technologies: [
        "Angular",
        "Spring Boot",
        "MySQL Workbench",
        "Gradle",
        "JWT",
        "Postman",
        "REST APIs",
        "Git",
        "MVC Architecture"
      ],
      github: "https://github.com/isurugayashan/Academic-Administrative-System-Client-App",
      //live: "https://academic-admin-demo.example.com",
      category: "Web Application",
    }
  ]

  const experience = [
    {
      title: "System Analyst",
      company: "Faculty of Graduate Studies, University of Ruhuna.",
      period: "2025 - Present",
      location: "Matara",
      description:
        "Analyzed user requirements, designed system architecture, and led the implementation of academic management features to improve institutional workflows and decision-making.",
    },
    {
      title: "Freelance Growth Hacker",
      company: "ISHARASHEHAN CONSULTANCY (PVT) LTD",
      period: "2024 - Present",
      location: "Remote",
      description:
          "Improved website visibility and user engagement through strategic SEO audits, performance optimization, and data-driven content enhancements.",
    },
    {
      title: "Temporary IT Demonstrator",
      company: "Faculty of Humanities and Social Science, University of Ruhuna.",
      period: "2022 - 2024",
      location: "Matara",
      description:
        "Assisted in academic IT instruction and supported system development tasks, contributing to digital projects and student learning activities.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white ">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-400 transition-colors cursor-pointer"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <img
                  src="/assets/profile3.jpg"
                  alt="Profile"
                  width={200}
                  height={150}
                  className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500/30 shadow-lg object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
               FULL-STACK DEVELOPER | SYSTEM ANALYST | FREELANCE GROWTH HACKER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experienced Full Stack Developer, System Analyst, and SEO Specialist with a proven track record in building
              web-based academic and business systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="mailto:isurugayashan178@gmail.com">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
              </a>

              <a
                  href="https://github.com/isurugayashan"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>

            </div>
            <div className="animate-bounce">
              <ArrowDown className="h-6 w-6 mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I am a software developer passionate about creating modern, efficient solutions using a wide range of frameworks and up‑to‑date technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="mt-2">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                With experience as a Full-Stack Developer, System Analyst, and SEO Specialist, I’ve delivered academic and business
                systems using Laravel, Angular, React, Node.js. My expertise includes designing scalable cloud architectures,
                optimizing application performance, and implementing modern UI frameworks like Tailwind CSS and shadcn/ui.
              </p>
              <p className="text-gray-300 mb-6">
                I have led end-to-end projects involving CI/CD pipelines, Dockerized deployments, and technical SEO enhancements.
                Skilled in improving Core Web Vitals, search visibility, and secure cloud-based solutions, I stay current with evolving
                technologies to deliver efficient, user-focused applications.
              </p>

              <div className="flex space-x-4">
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>

                <a
                    href="https://www.linkedin.com/in/isuru-gayashan/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <Button
                      variant="outline"
                      size="sm"
                      className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Button>
                </a>

                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  Twitter
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="justify-center py-2 bg-gray-700 text-white hover:bg-gray-600"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Code className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                  <h4 className="font-semibold">Frontend</h4>
                  <p className="text-sm text-gray-400">React, Angular, Laravel</p>
                </div>
                <div className="text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray-400">Node.js, Laravel, Spring Boot</p>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 mx-auto mb-2 text-purple-400" />
                  <h4 className="font-semibold">Web</h4>
                  <p className="text-sm text-gray-400">Full-stack Development</p>
                </div>
                <div className="text-center">
                  <Smartphone className="h-8 w-8 mx-auto mb-2 text-pink-400" />
                  <h4 className="font-semibold">Tools</h4>
                  <p className="text-sm text-gray-400">Vite, shadcn/ui, Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects developed using various frameworks and technologies, including React, Node.js, Laravel, Angular, highlighting my full-stack development expertise and problem-solving skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/assets/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-blue-600 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    { project.github && project.github.trim() !== "" && (
                        <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                            onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                    )}

                    {project.live && project.live.trim() !== "" && (
                        <Button
                            size="sm"
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                    )}
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Contributed to digital transformation in academic and administrative environments through impactful and result-driven projects.

            </p>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">{job.company}</CardDescription>
                    </div>
                    <div className="flex flex-col md:items-end mt-2 md:mt-0">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            I'm always interested in new opportunities and exciting projects using React 19, Vite, Node.js 22, and
            modern web technologies. Let's discuss how we can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">

            <a href="mailto:isurugayashan178@gmail.com">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </a>
            <a
                href="https://www.linkedin.com/in/isuru-gayashan/"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
                <Linkedin className="mr-2 h-5 w-5" />
                Connect on LinkedIn
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2025 Isuru Gayashan. Built with React. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
