import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  GraduationCap,
  User,
  Briefcase,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'extracurricular', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'extracurricular', label: 'Activities' },
    { id: 'contact', label: 'Contact' }
  ];

  const skills = [
    { name: 'Java', level: 85, icon: Code },
    { name: 'Python', level: 80, icon: Code },
    { name: 'JavaScript', level: 75, icon: Code },
    { name: 'React', level: 70, icon: Globe },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'HTML/CSS', level: 90, icon: Globe },
    { name: 'Git/GitHub', level: 80, icon: Github },
    { name: 'MySQL', level: 75, icon: Database }
  ];

  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      github: 'https://github.com/avineshkumar',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'JavaScript'],
      github: 'https://github.com/avineshkumar',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Student Information Portal',
      description: 'A comprehensive portal for managing student records, grades, and academic information.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
      github: 'https://github.com/avineshkumar',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Weather Forecasting App',
      description: 'A responsive weather application with location-based forecasts and interactive visualizations.',
      technologies: ['React', 'REST APIs', 'Chart.js', 'CSS3'],
      github: 'https://github.com/avineshkumar',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const certifications = [
    {
      title: 'Programming in Java - NPTEL',
      issuer: 'Indian Institute of Technology',
      year: '2024',
      icon: Award
    },
    {
      title: 'Database Management Systems - NPTEL',
      issuer: 'Indian Institute of Technology',
      year: '2024',
      icon: Database
    },
    {
      title: 'Web Development Bootcamp',
      issuer: 'Coursera',
      year: '2023',
      icon: Globe
    },
    {
      title: 'Regional Hackathon Winner',
      issuer: 'TechFest 2023',
      year: '2023',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Avinesh Kumar D
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                <User size={64} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Avinesh Kumar D
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Aspiring Software Engineer | Passionate Learner | Tech Enthusiast
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
                3rd-year B.Tech Information Technology student at Adhiparasakthi Engineering College, 
                passionate about creating innovative solutions through code and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  View My Work
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <Code size={80} className="text-blue-600" />
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  I am a dedicated Information Technology student with a strong foundation in programming 
                  and software development. Currently in my third year at Adhiparasakthi Engineering College, 
                  I am passionate about leveraging technology to solve real-world problems.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  My journey in IT has equipped me with expertise in multiple programming languages and 
                  modern web technologies. I thrive in collaborative environments and am always eager to 
                  learn new technologies and take on challenging projects.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Problem Solving</h4>
                    <p className="text-sm text-gray-600">Analytical approach to complex challenges</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Team Collaboration</h4>
                    <p className="text-sm text-gray-600">Effective communication and teamwork</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Adaptability</h4>
                    <p className="text-sm text-gray-600">Quick to learn new technologies</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Leadership</h4>
                    <p className="text-sm text-gray-600">Initiative in project management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-center mb-4">
                    <IconComponent size={24} className="text-blue-600 mr-3" />
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-teal-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500">{skill.level}% proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="aspect-video bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Bachelor of Technology - Information Technology
                  </h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">
                    Adhiparasakthi Engineering College
                  </p>
                  <p className="text-gray-600 mb-4">
                    Currently in 3rd Year | Expected Graduation: 2026
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Relevant Coursework:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Data Structures & Algorithms</li>
                        <li>• Object-Oriented Programming</li>
                        <li>• Database Management Systems</li>
                        <li>• Web Technologies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consistent Academic Performance</li>
                        <li>• Active in Technical Clubs</li>
                        <li>• Project Team Leadership</li>
                        <li>• Peer Programming Mentor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center">
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{cert.title}</h3>
                      <p className="text-blue-600 font-medium mb-1">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Extracurricular Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Club Participation</h3>
              <p className="text-gray-600 mb-4">Active member of the college coding club, organizing workshops and hackathons.</p>
              <div className="text-sm text-blue-600 font-medium">Skills Developed: Leadership, Event Management</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sports & Athletics</h3>
              <p className="text-gray-600 mb-4">Represented college in inter-collegiate basketball tournaments and track events.</p>
              <div className="text-sm text-blue-600 font-medium">Skills Developed: Teamwork, Discipline, Strategy</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Community Service</h3>
              <p className="text-gray-600 mb-4">Volunteer programming instructor for underprivileged students in local communities.</p>
              <div className="text-sm text-blue-600 font-medium">Skills Developed: Communication, Empathy, Teaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just connecting with fellow tech enthusiasts. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-600">avineshkumar.d@example.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={20} className="text-blue-600 mr-3" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    linkedin.com/in/avineshkumar
                  </a>
                </div>
                <div className="flex items-center">
                  <Github size={20} className="text-blue-600 mr-3" />
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                    github.com/avineshkumar
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-teal-700 transition-colors duration-200">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Avinesh Kumar D. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;