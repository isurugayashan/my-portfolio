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
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React 19, Vite, and Node.js 22. Features include user authentication, payment integration, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=400&text=E-Commerce Platform",
      technologies: ["React 19", "Vite", "Node.js 22", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce-platform",
      live: "https://ecommerce-demo.vercel.app",
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application built with React 19 and Vite. Features real-time updates, drag-and-drop functionality, and team collaboration.",
      image: "/placeholder.svg?height=200&width=400&text=Task Management App",
      technologies: ["React 19", "Vite", "TypeScript", "Socket.io"],
      github: "https://github.com/username/task-manager",
      live: "https://taskmanager-demo.vercel.app",
      category: "Web App",
    },
    {
      title: "Weather Analytics Dashboard",
      description:
        "Real-time weather data visualization dashboard with interactive charts, forecasting, and location-based weather tracking using modern React.",
      image: "/placeholder.svg?height=200&width=400&text=Weather Dashboard",
      technologies: ["React 19", "Vite", "D3.js", "Node.js 22"],
      github: "https://github.com/username/weather-dashboard",
      live: "https://weather-analytics.vercel.app",
      category: "Data Visualization",
    },
    {
      title: "Social Media API",
      description:
        "RESTful API built with Node.js 22 for social media platform with user management, post creation, real-time messaging, and content moderation.",
      image: "/placeholder.svg?height=200&width=400&text=Social Media API",
      technologies: ["Node.js 22", "Express", "PostgreSQL", "Redis"],
      github: "https://github.com/username/social-api",
      live: "https://api-docs.vercel.app",
      category: "Backend",
    },
    {
      title: "React 19 Component Library",
      description:
        "Modern component library built with React 19, Vite, and shadcn/ui. Features TypeScript support, Storybook documentation, and npm publishing.",
      image: "/placeholder.svg?height=200&width=400&text=Component Library",
      technologies: ["React 19", "Vite", "shadcn/ui", "Storybook"],
      github: "https://github.com/username/component-library",
      live: "https://component-library.vercel.app",
      category: "Library",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation tool using React 19 and Vite with OpenAI API integration, custom prompts, and export functionality.",
      image: "/placeholder.svg?height=200&width=400&text=AI Content Generator",
      technologies: ["React 19", "Vite", "OpenAI API", "Tailwind"],
      github: "https://github.com/username/ai-content-generator",
      live: "https://ai-content.vercel.app",
      category: "AI/ML",
    },
  ]

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Lead development of scalable web applications using React 19, Vite, Node.js 22, and cloud technologies. Mentor junior developers and architect system solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed and maintained multiple client projects using modern web technologies including React, Vite, and Node.js. Collaborated with design teams to implement responsive user interfaces.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "Austin, TX",
      description:
        "Built responsive web applications with React and modern build tools. Worked closely with UX designers to implement pixel-perfect designs using Tailwind CSS.",
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
                src="/assets/placeholder.svg?height=150&width=150&text=Profile"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full mx-auto border-4 border-blue-500/20"
              />
            </div>
            <h1 className="text-5xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
               FULL-STACK DEVELOPER | SYSTEM ANALYST | FREELANCE GROWTH HACKER
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Passionate about creating innovative web solutions with React 19, Vite, and Node.js 22. Specialized in
              modern full-stack development with cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
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
              I'm a passionate software engineer with expertise in building modern web applications using React 19,
              Vite, and Node.js 22, solving complex technical challenges with cutting-edge technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="mt-2">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                With over 5 years of experience in software development, I've worked on diverse projects using modern
                technologies like React 19, Vite, and Node.js 22. I'm passionate about writing clean, efficient code and
                staying up-to-date with the latest technologies.
              </p>
              <p className="text-gray-300 mb-6">
                I enjoy collaborating with cross-functional teams and have experience leading development projects from
                conception to deployment. My goal is to create solutions that not only meet technical requirements but
                also provide exceptional user experiences using modern tools like shadcn/ui and Tailwind CSS.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
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
                  <p className="text-sm text-gray-400">React 19, Vite, TypeScript</p>
                </div>
                <div className="text-center">
                  <Database className="h-8 w-8 mx-auto mb-2 text-green-400" />
                  <h4 className="font-semibold">Backend</h4>
                  <p className="text-sm text-gray-400">Node.js 22, Python, PostgreSQL</p>
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
              Here are some of my recent projects built with React 19, Vite, Node.js 22, and modern web technologies
              that showcase my skills in full-stack development and problem-solving.
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
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
              My professional journey in software development using modern technologies like React 19, Vite, and Node.js
              22, and the companies I've contributed to.
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2024 Your Name. Built with React 19, Vite, and Tailwind CSS.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
