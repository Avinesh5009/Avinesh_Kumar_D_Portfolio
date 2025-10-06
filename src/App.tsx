import React, { useState, useEffect } from 'react';
import AIChat from './components/AIChat';
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
  ChevronRight,
  Moon,
  Sun
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Avinesh Kumar D
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="flex items-center w-full text-left px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-200"
                >
                  {isDarkMode ? <Sun size={20} className="mr-3" /> : <Moon size={20} className="mr-3" />}
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 dark:from-indigo-500 dark:via-purple-500 dark:to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <User size={64} className="text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Avinesh Kumar D
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                Aspiring Software Engineer | Passionate Learner | Tech Enthusiast
              </p>
              <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8 transition-colors duration-300">
                3rd-year B.Tech Information Technology student at Adhiparasakthi Engineering College, 
                passionate about creating innovative solutions through code and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  View My Work
                  <ChevronRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white transition-colors duration-200"
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
      <section id="about" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16 transition-colors duration-300">About Me</h2>
          
          {/* Main About Content */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Visual Elements */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-80 h-80 rounded-full bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-blue-900/30 border-4 border-white dark:border-gray-700 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl hover:scale-105">
                        {/* Profile Image Placeholder */}
                        <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-800 to-purple-800 flex items-center justify-center">
                          <User size={120} className="text-indigo-600 dark:text-indigo-400 transition-colors duration-300" />
                        </div>
                        {/* Optional: Replace with actual image */}
                        {/* <img 
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                          alt="Avinesh Kumar D" 
                          className="w-full h-full object-cover"
                        /> */}
                      </div>
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-indigo-200 dark:border-indigo-700 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-4 rounded-xl text-center transition-colors duration-300">
                    <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">3+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Years Learning</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-4 rounded-xl text-center transition-colors duration-300">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 transition-colors duration-300">10+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Projects Built</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-4 rounded-xl text-center transition-colors duration-300">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Technologies</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-full transition-colors duration-300">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300 transition-colors duration-300">👋 Hello, I'm Avinesh</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight transition-colors duration-300">
                    Transforming Ideas into Digital Reality Through Code
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    I'm a passionate Information Technology student in my third year at Adhiparasakthi Engineering College, 
                    driven by the endless possibilities that technology offers to solve real-world challenges.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                    My journey in software development has been fueled by curiosity and a commitment to continuous learning. 
                    I specialize in full-stack development, with expertise spanning from backend systems to intuitive user interfaces.
                  </p>
                </div>
                
                {/* Key Highlights */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-300">What Drives Me</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Building scalable solutions that make a meaningful impact</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Collaborating with teams to bring innovative ideas to life</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">Staying at the forefront of emerging technologies and best practices</p>
                    </div>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Explore My Work
                    <ChevronRight size={18} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Core Strengths Section */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8 transition-colors duration-300">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-6 rounded-xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Code size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-300 mb-2 transition-colors duration-300">Problem Solving</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Analytical approach to breaking down complex challenges into manageable solutions</p>
              </div>
              
              <div className="group bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 p-6 rounded-xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <User size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2 transition-colors duration-300">Team Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Effective communication and seamless integration within development teams</p>
              </div>
              
              <div className="group bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 p-6 rounded-xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Globe size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 transition-colors duration-300">Adaptability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Quick to embrace new technologies and adapt to evolving project requirements</p>
              </div>
              
              <div className="group bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 p-6 rounded-xl hover:shadow-lg transition-all duration-200">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Award size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-teal-700 dark:text-teal-300 mb-2 transition-colors duration-300">Leadership</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">Natural initiative in guiding projects and mentoring fellow developers</p>
              </div>
            </div>
          </div>
          
          {/* Personal Philosophy */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-blue-900/20 p-8 rounded-2xl transition-colors duration-300">
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                "Technology is not just about writing code—it's about crafting experiences, solving problems, and building bridges between ideas and reality."
              </blockquote>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 transition-colors duration-300">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{skill.level}% proficiency</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 relative overflow-hidden transition-colors duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                    >
                      <Github size={16} className="mr-2" />
                      View Code
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors duration-200"
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
      <section id="education" className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-xl flex items-center justify-center transition-colors duration-300">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Bachelor of Technology - Information Technology
                  </h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400 font-medium mb-2 transition-colors duration-300">
                    Adhiparasakthi Engineering College
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                    Currently in 3rd Year | Expected Graduation: 2026
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3 transition-colors duration-300">Relevant Coursework:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 transition-colors duration-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          Data Structures & Algorithms
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          Object-Oriented Programming
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Database Management Systems
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          Web Technologies
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-3 transition-colors duration-300">Key Achievements:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2 transition-colors duration-300">
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                          Consistent Academic Performance
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          Active in Technical Clubs
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          Project Team Leadership
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          Peer Programming Mentor
                        </li>
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
      <section id="certifications" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Certifications & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-200 group">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent size={20} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{cert.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1 transition-colors duration-300">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">{cert.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className="py-16 bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Extracurricular Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Briefcase size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technical Club Participation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">Active member of the college coding club, organizing workshops and hackathons.</p>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium transition-colors duration-300">Skills Developed: Leadership, Event Management</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 dark:from-purple-400 dark:to-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Sports & Athletics</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">Represented college in inter-collegiate basketball tournaments and track events.</p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium transition-colors duration-300">Skills Developed: Teamwork, Discipline, Strategy</div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-200 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 dark:from-blue-400 dark:to-teal-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Community Service</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">Volunteer programming instructor for underprivileged students in local communities.</p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium transition-colors duration-300">Skills Developed: Communication, Empathy, Teaching</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                I'm always interested in discussing new opportunities, innovative projects, 
                or just connecting with fellow tech enthusiasts. Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="text-indigo-600 dark:text-indigo-400 mr-3 transition-colors duration-300" />
                  <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">avineshkumar.d@example.com</span>
                </div>
                <div className="flex items-center">
                  <Linkedin size={20} className="text-indigo-600 dark:text-indigo-400 mr-3 transition-colors duration-300" />
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    linkedin.com/in/avineshkumar
                  </a>
                </div>
                <div className="flex items-center">
                  <Github size={20} className="text-indigo-600 dark:text-indigo-400 mr-3 transition-colors duration-300" />
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    github.com/avineshkumar
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <Download size={20} className="mr-2" />
                  Download Resume
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-gray-900/50 dark:to-gray-800/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-all duration-200"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Avinesh Kumar D. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Chat Assistant */}
      <AIChat isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;