import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface AIChatProps {
  isDarkMode: boolean;
}

const AIChat: React.FC<AIChatProps> = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Avinesh's AI assistant. I can answer questions about his background, skills, projects, and experience. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Avinesh's knowledge base
  const knowledgeBase = {
    personal: {
      name: "Avinesh Kumar D",
      title: "Aspiring Software Engineer",
      education: "3rd-year B.Tech Information Technology student at Adhiparasakthi Engineering College",
      graduation: "Expected graduation in 2026",
      location: "India"
    },
    skills: {
      programming: ["Java", "Python", "JavaScript"],
      web: ["HTML", "CSS", "React", "Node.js"],
      database: ["MySQL", "SQL"],
      tools: ["Git", "GitHub", "VS Code"],
      frameworks: ["Express", "Django", "Spring Boot"]
    },
    projects: [
      {
        name: "E-Commerce Web Application",
        description: "A full-stack e-commerce platform with user authentication, product catalog, and payment integration",
        technologies: ["React", "Node.js", "MySQL", "Express"]
      },
      {
        name: "Task Management System",
        description: "A collaborative task management application with real-time updates and team collaboration features",
        technologies: ["Python", "Django", "PostgreSQL", "JavaScript"]
      },
      {
        name: "Student Information Portal",
        description: "A comprehensive portal for managing student records, grades, and academic information",
        technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf"]
      },
      {
        name: "Weather Forecasting App",
        description: "A responsive weather application with location-based forecasts and interactive visualizations",
        technologies: ["React", "REST APIs", "Chart.js", "CSS3"]
      }
    ],
    certifications: [
      "Programming in Java - NPTEL (IIT)",
      "Database Management Systems - NPTEL (IIT)",
      "Web Development Bootcamp - Coursera",
      "Regional Hackathon Winner - TechFest 2023"
    ],
    strengths: ["Problem-solving", "Team collaboration", "Adaptability", "Leadership"],
    activities: [
      "Technical Club Participation - Active member organizing workshops and hackathons",
      "Sports & Athletics - Represented college in basketball and track events",
      "Community Service - Volunteer programming instructor for underprivileged students"
    ]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn more about Avinesh Kumar D. You can ask me about his education, skills, projects, certifications, or any other aspect of his professional background.";
    }

    // Education queries
    if (message.includes('education') || message.includes('college') || message.includes('study') || message.includes('degree')) {
      return `Avinesh is currently a ${knowledgeBase.personal.education}. He's expected to graduate in ${knowledgeBase.personal.graduation}. His academic focus is on Information Technology, where he's building strong foundations in programming, database management, and web development.`;
    }

    // Skills queries
    if (message.includes('skill') || message.includes('programming') || message.includes('technology') || message.includes('language')) {
      return `Avinesh has expertise in several key areas:
      
**Programming Languages:** ${knowledgeBase.skills.programming.join(', ')}
**Web Technologies:** ${knowledgeBase.skills.web.join(', ')}
**Databases:** ${knowledgeBase.skills.database.join(', ')}
**Development Tools:** ${knowledgeBase.skills.tools.join(', ')}

He's particularly strong in Java and Python, with growing expertise in modern web development frameworks.`;
    }

    // Projects queries
    if (message.includes('project') || message.includes('work') || message.includes('built') || message.includes('developed')) {
      const projectList = knowledgeBase.projects.map((project, index) => 
        `${index + 1}. **${project.name}**: ${project.description} (Technologies: ${project.technologies.join(', ')})`
      ).join('\n\n');
      
      return `Avinesh has worked on several impressive projects:\n\n${projectList}\n\nThese projects demonstrate his full-stack development capabilities and problem-solving skills.`;
    }

    // Certifications queries
    if (message.includes('certification') || message.includes('achievement') || message.includes('award')) {
      return `Avinesh has earned several notable certifications and achievements:

• ${knowledgeBase.certifications.join('\n• ')}

These certifications demonstrate his commitment to continuous learning and excellence in his field.`;
    }

    // Experience queries
    if (message.includes('experience') || message.includes('background') || message.includes('about')) {
      return `Avinesh Kumar D is an ${knowledgeBase.personal.title} and ${knowledgeBase.personal.education}. He's passionate about technology and has hands-on experience in full-stack development, database management, and software engineering. His academic journey combined with practical project experience makes him well-prepared for software engineering roles.`;
    }

    // Strengths queries
    if (message.includes('strength') || message.includes('quality') || message.includes('soft skill')) {
      return `Avinesh's key strengths include:

• **${knowledgeBase.strengths.join('**: Demonstrated through various projects and team collaborations\n• **')}**: Essential for effective software development and team success

These qualities make him an excellent team player and problem solver.`;
    }

    // Activities queries
    if (message.includes('activity') || message.includes('extracurricular') || message.includes('hobby') || message.includes('interest')) {
      return `Beyond academics, Avinesh is actively involved in:

• ${knowledgeBase.activities.join('\n• ')}

These activities showcase his leadership skills, community involvement, and well-rounded personality.`;
    }

    // Contact queries
    if (message.includes('contact') || message.includes('reach') || message.includes('email') || message.includes('linkedin')) {
      return "You can connect with Avinesh through the contact section of this portfolio. He's available via email and LinkedIn for professional opportunities, collaborations, or networking. Feel free to reach out using the contact form below!";
    }

    // Default response
    return "I'd be happy to help you learn more about Avinesh! You can ask me about his education, technical skills, projects, certifications, achievements, or any other aspect of his professional background. What specific information are you looking for?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        aria-label="Open AI Chat"
      >
        <MessageCircle size={24} />
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 flex flex-col transition-all duration-300 ${isMinimized ? 'h-14' : 'h-[500px]'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={18} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Avinesh's AI Assistant</h3>
            <p className="text-xs opacity-90">Ask me anything about Avinesh!</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Minimize chat"
          >
            <Minimize2 size={16} />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-white/20 rounded transition-colors"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                  }`}>
                    {message.isUser ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-70 ${
                      message.isUser ? 'text-indigo-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2 max-w-[80%]">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Avinesh's skills, projects, experience..."
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIChat;