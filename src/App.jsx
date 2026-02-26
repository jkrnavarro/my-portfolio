import React, { useState } from 'react';
import { 
  MonitorPlay, 
  Users, 
  FileText, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Briefcase, 
  PenTool, 
  Lightbulb, 
  Target,
  BarChart,
  X,
  Globe,
  Award
} from 'lucide-react';

// --- MOCK DATA BASED ON UPLOADED IMAGES ---
const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: "Self-Service Replacement Flow",
    category: "Process Training / eLearning",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-50",
    shortDesc: "A multi-lingual learning path teaching specialists how to assess and submit self-service replacement requests.",
    tools: ["360Learning (LMS)", "Video Animation", "Localized Subtitles", "Knowledge Checks"],
    challenge: "Specialists needed a clear, standardized process for handling customer replacement requests efficiently across different regions and languages.",
    solution: "Developed a comprehensive learning path featuring animated video scenarios, multi-lingual subtitles (English, French, German), and interactive knowledge checks to ensure process mastery and application.",
    result: "Streamlined the replacement process, ensuring specialists can confidently navigate request scenarios and utilize the self-service flow."
  },
  {
    id: 2,
    title: "Design Assistance Program",
    category: "Learning Path & Assessments",
    image: "https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&w=800&q=80",
    color: "bg-emerald-50",
    shortDesc: "An introductory learning path and comprehensive prior knowledge assessment covering core graphic design principles.",
    tools: ["360Learning (LMS)", "Assessment Design", "Instructional Design"],
    challenge: "The program required a way to accurately assess the baseline graphic design knowledge of incoming participants to tailor subsequent training effectively.",
    solution: "Created a structured path beginning with program goals, followed by targeted, randomized 10-question prior knowledge checks for key disciplines: Typography, Color & Artwork, and Layout & Composition.",
    result: "Enabled targeted training interventions by accurately identifying knowledge gaps, ensuring learners are adequately prepared for the Design Assistance Program."
  },
  {
    id: 3,
    title: "CARE Quality Guidelines Training",
    category: "Quality Assurance Framework",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
    color: "bg-purple-50",
    shortDesc: "A comprehensive training program introducing the CARE Quality Framework for delivering 'Jaw Dropping Customer Value' (JDCV).",
    tools: ["360Learning (LMS)", "Level AI Integration", "Graded Assessments", "Multi-language Support"],
    challenge: "Customer service specialists needed to be aligned on a unified set of 20 quality criteria to ensure consistent, high-value customer interactions globally.",
    solution: "Designed a 4-part localized training path combining framework introductions, interactive activities, Level AI training integration for specialists, and rigorous graded assessments.",
    result: "Successfully onboarded specialists to the new quality framework, standardizing the evaluation of customer interactions across multiple languages (English, French, German, Italian, Spanish)."
  }
];

const PROCESS_STEPS = [
  { phase: "Analyze", icon: <BarChart className="w-6 h-6 text-indigo-600" />, desc: "Conducting needs assessments, defining target audiences, and establishing measurable learning objectives." },
  { phase: "Design", icon: <PenTool className="w-6 h-6 text-indigo-600" />, desc: "Storyboarding, outlining content, selecting modalities, and mapping the instructional strategy." },
  { phase: "Develop", icon: <Briefcase className="w-6 h-6 text-indigo-600" />, desc: "Building the course using authoring tools, creating multimedia assets, and iterative prototyping." },
  { phase: "Implement", icon: <MonitorPlay className="w-6 h-6 text-indigo-600" />, desc: "Deploying via LMS, conducting train-the-trainer sessions, and rolling out to learners." },
  { phase: "Evaluate", icon: <Target className="w-6 h-6 text-indigo-600" />, desc: "Measuring impact using Kirkpatrick's levels, analyzing feedback, and iterating for continuous improvement." }
];

// --- MAIN COMPONENT ---
export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeTab setActiveTab={setActiveTab} />;
      case 'portfolio':
        return <PortfolioTab onSelectProject={setSelectedProject} />;
      case 'process':
        return <ProcessTab />;
      case 'contact':
        return <ContactTab />;
      default:
        return <HomeTab setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer group"
              onClick={() => setActiveTab('home')}
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-indigo-700 transition-colors">
                ID
              </div>
              <span className="ml-3 font-semibold text-xl tracking-tight text-slate-900">My Portfolio</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['Home', 'Portfolio', 'Process', 'Contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors min-h-[44px] ${
                    activeTab === tab.toLowerCase()
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile Nav */}
          <div className="sm:hidden flex flex-wrap justify-center gap-2 py-3 border-t border-slate-100">
            {['Home', 'Portfolio', 'Process', 'Contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
          {renderContent()}
        </div>
      </main>

      {/* Project Modal Overlay */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

// --- TAB COMPONENTS ---

function HomeTab({ setActiveTab }) {
  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="text-center md:text-left flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        <div className="md:w-3/5 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designing <span className="text-indigo-600">Impactful</span> Learning Paths.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
            I am a passionate Instructional Designer specializing in comprehensive learning paths, scalable LMS deployments, and targeted knowledge assessments that drive performance and quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <button 
              onClick={() => setActiveTab('portfolio')}
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors w-full sm:w-auto"
            >
              View My Work
            </button>
            <button 
              onClick={() => setActiveTab('process')}
              className="px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors w-full sm:w-auto"
            >
              How I Work
            </button>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center w-full">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 sm:border-8 border-white shadow-xl overflow-hidden bg-slate-900 flex items-center justify-center text-slate-500 text-sm text-center p-4">
             {/* The code now points to your exact local file. It won't load in this preview, but will work on your live site! */}
             <img 
               src="./1772019967638.jpg" 
               alt="My Portrait" 
               className="w-full h-full object-cover absolute inset-0 z-10"
             />
             <span className="z-0">Image: 1772019967638.jpg</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Core Competencies & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <SkillCard title="LMS Management" icon={<MonitorPlay className="mx-auto h-8 w-8 mb-2"/>} />
          <SkillCard title="Assessment Design" icon={<FileText className="mx-auto h-8 w-8 mb-2"/>} />
          <SkillCard title="Localization" icon={<Globe className="mx-auto h-8 w-8 mb-2"/>} />
          <SkillCard title="Quality Frameworks" icon={<Target className="mx-auto h-8 w-8 mb-2"/>} />
        </div>
      </section>
    </div>
  );
}

function PortfolioTab({ onSelectProject }) {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          A selection of recent learning paths, framework trainings, and assessments designed to solve specific business problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO_PROJECTS.map((project) => (
          <div 
            key={project.id} 
            onClick={() => onSelectProject(project)}
            className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer flex flex-col h-full"
          >
            <div className={`h-48 ${project.color} flex items-center justify-center relative overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {project.shortDesc}
              </p>
              <div className="flex items-center text-sm font-medium text-indigo-600 mt-auto">
                View Project Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessTab() {
  return (
    <div className="space-y-8 sm:space-y-12">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">My Instructional Design Process</h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600">
          I follow a modified ADDIE and Agile framework, ensuring that the end product is deeply aligned with business goals while remaining adaptable to stakeholder feedback.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line connecting steps */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-indigo-100 transform md:-translate-x-1/2"></div>
        
        <div className="space-y-12 relative z-10">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.phase} className={`flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white border-4 border-indigo-100 flex items-center justify-center transform -translate-x-1/2 shadow-sm">
                {step.icon}
              </div>

              {/* Content box */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors">
                  <span className="text-sm font-bold text-indigo-500 uppercase tracking-wider mb-1 block">Phase {index + 1}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.phase}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactTab() {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 px-4 sm:px-0">
      <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Let's build something great.</h2>
        <p className="text-base sm:text-lg text-slate-600 mb-8">
          Whether you need a full curriculum developed from scratch or an existing training program revamped, I'm ready to help your team succeed.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto">
            <Mail className="w-5 h-5 mr-2" />
            Email Me
          </a>
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 w-full sm:w-auto">
            <Linkedin className="w-5 h-5 mr-2 text-blue-600" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
}

// --- HELPER COMPONENTS ---

function SkillCard({ title, icon }) {
  return (
    <div className="group p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all duration-300 cursor-default">
      <div className="text-slate-400 group-hover:text-indigo-500 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        {icon}
      </div>
      <h4 className="font-medium text-slate-800 text-sm transition-colors duration-300 group-hover:text-indigo-700">{title}</h4>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 mt-16 sm:mt-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-slate-100 text-slate-800 shadow-sm transition-colors z-10"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Header Image Area */}
        <div className="h-40 sm:h-56 md:h-72 w-full flex items-center justify-center border-b border-slate-100 relative overflow-hidden bg-slate-100">
           <img 
             src={project.image} 
             alt={project.title} 
             className="w-full h-full object-cover" 
           />
        </div>

        {/* Body Area */}
        <div className="p-5 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
          <div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">{project.title}</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2 space-y-6">
              
              <section>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-slate-400" /> The Challenge
                </h3>
                <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-amber-500" /> The Solution
                </h3>
                <p className="text-slate-600 leading-relaxed">{project.solution}</p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center">
                  <BarChart className="w-5 h-5 mr-2 text-emerald-500" /> The Result
                </h3>
                <p className="text-slate-600 leading-relaxed bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  {project.result}
                </p>
              </section>

            </div>

            <div className="md:col-span-1">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Focus & Tools</h3>
                <ul className="space-y-3">
                  {project.tools.map((tool, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}