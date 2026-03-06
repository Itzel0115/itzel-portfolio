import React, { useState, useEffect } from 'react';
import {
  Moon, Sun, Download, Mail, Github, Linkedin,
  Calendar, ChevronRight, Briefcase, Trophy,
  Activity, Mic, ExternalLink, X
} from 'lucide-react';

const EMAIL = 'x.itzel2685@gmail.com';

const RESUME_PDF_URL = `${import.meta.env.BASE_URL}Yi-Chen_Hsiao_Resume.pdf`;

const hostingImg = (filename) => `${import.meta.env.BASE_URL}hosting/${filename}`;

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleCopyEmail = async (e) => {
    e?.preventDefault?.();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const handleOpenResume = () => setResumeModalOpen(true);
  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = RESUME_PDF_URL;
    a.download = 'Yi-Chen_Hsiao_Resume.pdf';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-500 ${darkMode ? 'bg-[#0a0a0a] text-gray-200' : 'bg-[#fafafa] text-gray-900'}`}>

      {/* Inject Google Fonts for specific typographic elements */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@1,400;1,500&family=Playfair+Display:wght@500;600;700&display=swap');
        .font-motto { font-family: 'Lora', serif; font-style: italic; }
        .font-heading { font-family: 'Playfair Display', serif; }
      `}} />

      {/* Navigation Bar */}
      <nav className={`fixed w-full z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? 'border-white/5 bg-[#0a0a0a]/70' : 'border-gray-200 bg-white/70'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-heading text-xl font-bold tracking-tight flex items-center gap-1">
              YI-CHEN HSIAO
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 mt-1"></div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
                <a href="#about" className={`transition-colors hover:text-indigo-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>About</a>
                <a href="#experience" className={`transition-colors hover:text-indigo-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Experience</a>
                <a href="#projects" className={`transition-colors hover:text-indigo-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Projects</a>
                <a href="#competitions" className={`transition-colors hover:text-indigo-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Competitions</a>
                <a href="#hosting" className={`transition-colors hover:text-indigo-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Hosting</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full transition-all duration-300 ${darkMode ? 'hover:bg-white/10 text-indigo-400' : 'hover:bg-gray-100 text-indigo-600'}`}
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={handleOpenResume}
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col justify-center min-h-[75vh]">
        <div className="max-w-3xl relative">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500 rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-pulse"></div>
          <div className="absolute top-10 -right-10 w-32 h-32 bg-violet-500 rounded-full mix-blend-multiply filter blur-[64px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

          <h2 className="text-indigo-500 font-semibold tracking-widest uppercase text-xs mb-5 flex items-center gap-2">
            <span>Finance</span>
            <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
            <span>Statistics</span>
            <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
            <span>Data Science</span>
          </h2>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 leading-tight font-heading tracking-tight">
            Hi, I'm Itzel.
          </h1>
          <p className={`text-3xl sm:text-4xl mb-8 leading-snug font-motto ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
            "Bridging the gap between rigorous analytics and impactful storytelling."
          </p>
          <p className={`text-lg mb-10 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl`}>
            I am a student at National Chengchi University (NCCU) double majoring in Finance and Statistics.
            Whether I am building RAG pipelines for asset management, constructing quantitative trading strategies,
            or hosting a university-wide gala, I thrive on solving complex problems and communicating insights clearly.
          </p>

          <div className="flex flex-wrap gap-4">
            <button type="button" onClick={handleCopyEmail} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
              <Mail size={18} />
              Email
            </button>
            <a href="https://www.linkedin.com/in/yi-chen115" target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium border transition-all ${darkMode ? 'border-gray-800 hover:bg-white/5 text-gray-300' : 'border-gray-300 hover:bg-gray-50 text-gray-700'}`}>
              <Linkedin size={18} className="text-[#0A66C2]" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3">
          <Briefcase className="text-indigo-500" /> Work Experience
        </h2>

        <div className="relative border-l border-indigo-500/30 ml-3 md:ml-4 space-y-12 pb-4">

          {/* Gigabyte Technology */}
          <div className="relative pl-8 md:pl-10">
            <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ${darkMode ? 'ring-[#0a0a0a]' : 'ring-[#fafafa]'}`}></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold">AI Engineering Intern</h3>
              <div className={`text-sm flex items-center gap-1 mt-1 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Calendar size={14} /> Feb 2026 – Present
              </div>
            </div>
            <div className="text-indigo-500 font-medium mb-4">Gigabyte Technology</div>
            <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Participated in the development of an operational intelligence assistant integrating internal business data and external market information for management-oriented analytics.</li>
              <li>Supported the design of a local LLM and RAG-based question answering workflow, with a focus on business indicator retrieval, report generation, and mobile-first interface planning.</li>
              <li>Contributed to early-stage system planning for data integration, visualization dashboards, and operational analysis use cases involving revenue, inventory, and market disclosures.</li>
            </ul>
          </div>

          {/* Nomura */}
          <div className="relative pl-8 md:pl-10">
            <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ${darkMode ? 'ring-[#0a0a0a]' : 'ring-[#fafafa]'}`}></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold">Data Analytics Intern</h3>
              <div className={`text-sm flex items-center gap-1 mt-1 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Calendar size={14} /> Jul 2025 - Dec 2025
              </div>
            </div>
            <div className="text-indigo-500 font-medium mb-4">Nomura Asset Management</div>
            <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Optimized Python/Excel dashboards and reported performance insights in weekly meetings. Led the "Redemption Analysis Project," automating monthly data updates and reducing prep time by ~40%.</li>
              <li>Planned and executed a new client EDM project (60-75% open rate; 45-50% first-order rate, significantly up from ~30% in 2024), enhancing activation and conversion.</li>
              <li>Orchestrated an internal employee event for a new App launch, collaborating with IT, Legal, and Compliance to achieve a 48% participation rate and collect 600+ test orders for optimization.</li>
              <li>Built a RAG prototype (Python/LLMs) to automate EDM drafting, implementing vector search for compliance review.</li>
            </ul>
          </div>

          {/* NCCU RA */}
          <div className="relative pl-8 md:pl-10">
            <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-indigo-500 ring-4 ${darkMode ? 'ring-[#0a0a0a]' : 'ring-[#fafafa]'}`}></div>
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-xl font-bold">Research Assistant</h3>
              <div className={`text-sm flex items-center gap-1 mt-1 md:mt-0 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <Calendar size={14} /> Sep 2024 - Present
              </div>
            </div>
            <div className="text-indigo-500 font-medium mb-4">Empirical Asset Pricing, NCCU</div>
            <ul className={`list-disc list-outside ml-4 space-y-2 text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <li>Built and maintained a Bloomberg-based dataset of multi-country yield curves, supporting empirical studies in higher-moment risk premia.</li>
              <li>Reviewed options-related literature and ran exploratory data analysis (EDA) to check summary statistics, missing values, and correlations.</li>
              <li>Managed research funding reimbursements and professional database procurement to ensure smooth project execution.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section — 可橫向滑動的卡片 */}
      <section id="projects" className={`py-24 border-y ${darkMode ? 'border-white/5 bg-[#0f0f14]' : 'border-gray-100 bg-indigo-50/30'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3">
            <ChevronRight className="text-indigo-500" /> Featured Projects
          </h2>

          <style dangerouslySetInnerHTML={{ __html: `
              #projects-scroll::-webkit-scrollbar { height: 8px; }
              #projects-scroll::-webkit-scrollbar-track { border-radius: 4px; }
              #projects-scroll::-webkit-scrollbar-thumb { border-radius: 4px; background: rgba(99, 102, 241, 0.3); }
              #projects-scroll::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.5); }
            `}} />
          <div id="projects-scroll" className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scroll-smooth min-w-0">
            {/* Project 1: Data Science / RAG */}
            <div className={`flex-shrink-0 w-[320px] sm:w-[340px] snap-center group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#15151a] border-white/10 hover:border-indigo-500/50 shadow-lg shadow-black/20' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'}`}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
                    Data Science / RAG
                  </div>
                  <a href="https://github.com/Itzel0115/WattBot-2025" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-900'}`}>
                    <Github size={18} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">WattBot 2025</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Architected a Hybrid Retrieval System for complex ESG financial reports by fusing BM25 (lexical) and Dense Vector Embeddings (semantic). Implemented an OCR-based data extraction layer.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Python</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>LLM / Embeddings</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>RAG</span>
                </div>
              </div>
              <div className={`pt-4 border-t flex justify-between items-center ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <span className="text-sm font-semibold">Kaggle Competition</span>
                <span className="text-indigo-500 font-bold text-sm">95.1% Recall</span>
              </div>
            </div>

            {/* Project 2: Quant / Finance */}
            <div className={`flex-shrink-0 w-[320px] sm:w-[340px] snap-center group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#15151a] border-white/10 hover:border-indigo-500/50 shadow-lg shadow-black/20' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'}`}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
                    Quantitative Trading
                  </div>
                  <a href="https://github.com/Itzel0115/TXF-Project" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-900'}`}>
                    <Github size={18} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">CTA Strategy Research</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Built a quantitative research and backtesting framework for Taiwan Index Futures using 1-minute intraday data. Implemented and compared MA, Bollinger Band, and Turtle strategies with grid search, risk overlay, walk-forward evaluation, and meta-labeling.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Pandas/NumPy</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Backtesting</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Walk-Forward</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Meta-Labeling</span>
                </div>
              </div>
              <div className={`pt-4 border-t flex justify-between items-center ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <span className="text-sm font-semibold">TMBA Algorithmic</span>
                <span className="text-indigo-500 font-bold text-sm">TXF Quant Research</span>
              </div>
            </div>

            {/* Project 3: Valuation / Modeling */}
            <div className={`flex-shrink-0 w-[320px] sm:w-[340px] snap-center group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#15151a] border-white/10 hover:border-indigo-500/50 shadow-lg shadow-black/20' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'}`}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
                    Financial Modeling
                  </div>
                  <a href="https://drive.google.com/drive/folders/1jVKEOIgh8rAjLwl7US8fgZRuOM-lMZpN?usp=drive_link" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-900'}`}>
                    <ExternalLink size={18} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Equity Research Model</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Owned the DCF valuation, built key assumptions, and ran WACC and terminal growth sensitivities to link valuation outcomes to recommendation and downside cases for Delta Electronics.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>DCF Model</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>WACC</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>ESG Integration</span>
                </div>
              </div>
              <div className={`pt-4 border-t flex justify-between items-center ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <span className="text-sm font-semibold">CFA Challenge</span>
                <span className="text-indigo-500 font-bold text-sm">42% Upside</span>
              </div>
            </div>

            {/* Project 4: NLP Course */}
            <div className={`flex-shrink-0 w-[320px] sm:w-[340px] snap-center group relative flex flex-col justify-between p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#15151a] border-white/10 hover:border-indigo-500/50 shadow-lg shadow-black/20' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'}`}>
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
                    NLP / Course
                  </div>
                  <a href="https://github.com/Itzel0115/Natural_Language_Processing-1141-" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${darkMode ? 'bg-white/5 text-gray-400 hover:text-white' : 'bg-gray-100 text-gray-500 hover:text-gray-900'}`}>
                    <Github size={18} />
                  </a>
                </div>
                <h3 className="text-xl font-bold mb-2">Natural Language Processing (NTHU)</h3>
                <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Collection of four programming assignments: word embeddings (GloVe, Word2Vec, t-SNE), LSTM seq2seq for arithmetic, multi-task BERT, and RAG pipeline with LangChain (hybrid retrieval, local LLM QA).
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>PyTorch</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>Transformers</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>LangChain</span>
                  <span className={`text-xs px-2 py-1 rounded-md ${darkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>RAG</span>
                </div>
              </div>
              <div className={`pt-4 border-t flex justify-between items-center ${darkMode ? 'border-white/10' : 'border-gray-100'}`}>
                <span className="text-sm font-semibold">NTHU NLP 2025</span>
                <span className="text-indigo-500 font-bold text-sm">4 Assignments</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3">
          <Trophy className="text-indigo-500" /> Competitions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#0f0f0f] border-white/10 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>Finance / Valuation</div>
              <Trophy size={20} className="text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">CFA Institute Research Challenge</h3>
            <div className={`pt-4 mt-6 border-t flex items-center font-bold ${darkMode ? 'border-white/10 text-gray-200' : 'border-gray-100 text-gray-900'}`}>
              Taiwan Champion
            </div>
          </div>

          <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#0f0f0f] border-white/10 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>AI / NLP</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">WattBot 2025 (Kaggle)</h3>
            <div className={`pt-4 mt-6 border-t flex items-center font-bold ${darkMode ? 'border-white/10 text-gray-200' : 'border-gray-100 text-gray-900'}`}>
              4th Place
            </div>
          </div>

          <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#0f0f0f] border-white/10 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>Wealth Management</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">JPMorgan Private Bank Challenge</h3>
            <div className={`pt-4 mt-6 border-t flex items-center font-bold ${darkMode ? 'border-white/10 text-gray-400' : 'border-gray-100 text-gray-500'}`}>
              Preliminary Round
            </div>
          </div>

          <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#0f0f0f] border-white/10 hover:border-indigo-500/50' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg'}`}>
            <div className="flex justify-between items-start mb-4">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>Investment Banking</div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">NCCU NIBC</h3>
            <div className={`pt-4 mt-6 border-t flex items-center font-bold ${darkMode ? 'border-white/10 text-gray-200' : 'border-gray-100 text-gray-900'}`}>
              3rd Place
            </div>
          </div>

        </div>
      </section>

      {/* Extracurricular Section */}
      <section id="extracurricular" className={`py-24 border-y ${darkMode ? 'border-white/5 bg-[#0a0a0a]' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-12 flex items-center gap-3">
            <Activity className="text-indigo-500" /> Extracurricular
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>01</div>
              <div>
                <h3 className="text-lg font-bold mb-1">NCCU Host Team</h3>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Master of Ceremonies</div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hosted major university events. Responsible for event flow planning, script drafting, and dynamic on-stage delivery.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>02</div>
              <div>
                <h3 className="text-lg font-bold mb-1">Transfer Student Association</h3>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>President</div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Organized orientation seminars with 70+ attendees in collaboration with 104 Job Bank. Hosted online Q&A sessions for 60+ incoming students.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>03</div>
              <div>
                <h3 className="text-lg font-bold mb-1">TMBA</h3>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Algorithmic Trading & ECM Project Member</div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Developed CTA strategies. Conducted ECM equity research on passive components, built financial models, and presented at Roadshows.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>04</div>
              <div>
                <h3 className="text-lg font-bold mb-1">Department Student Association</h3>
                <div className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>Public Relations</div>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Managed external communications and sponsorships. Fostered relationships with corporate partners to support department activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Timeline Gallery */}
      <section id="hosting" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#110B1E] to-[#0A0512] text-gray-200">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-fuchsia-600/10 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-indigo-600/10 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-3 bg-fuchsia-500/10 rounded-full mb-4 text-fuchsia-400">
              <Mic size={32} />
            </div>
            <h2 className="text-4xl font-heading font-bold mb-4">Master of Ceremonies</h2>
            <p className="text-xl font-motto text-fuchsia-300 max-w-2xl mx-auto">
              Beyond the data, I build communities and drive engagement on stage.
            </p>
          </div>

          {/* Timeline Layout — 依時間由舊到新 */}
          <div className="relative border-l-2 border-fuchsia-500/30 ml-4 md:ml-[50%] md:translate-x-[-50%] space-y-16">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-fuchsia-500/20 -translate-x-1/2"></div>

            {/* 2024.05.25 商學院碩士班撥穗典禮 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full">
                <div className="md:w-5/12 text-left md:text-right pr-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2024.05.25</div>
                  <h3 className="text-2xl font-bold mb-2">商學院碩士班撥穗典禮</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">College of Commerce Master Hooding Ceremony</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pl-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('masters-hooding.jpg')} alt="商學院碩士班撥穗典禮" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2024.11.30 新生座談會 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full flex-row-reverse">
                <div className="md:w-5/12 text-left pl-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2024.11.30</div>
                  <h3 className="text-2xl font-bold mb-2">新生座談會</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">Freshman Orientation Seminar</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pr-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('orientation.jpg')} alt="新生座談會" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2025.04.30 輝瑞簽約 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full">
                <div className="md:w-5/12 text-left md:text-right pr-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2025.04.30</div>
                  <h3 className="text-2xl font-bold mb-2">輝瑞簽約儀式</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">Pfizer & College Signing Ceremony</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pl-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('pfizer-signing.jpg')} alt="輝瑞簽約儀式" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2025.05.19 政大98校慶 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full flex-row-reverse">
                <div className="md:w-5/12 text-left pl-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2025.05.19</div>
                  <h3 className="text-2xl font-bold mb-2">政大98校慶</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">NCCU 98th Anniversary</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pr-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('anniversary-98.jpg')} alt="政大98校慶" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2025.09.01 政大開學典禮 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full">
                <div className="md:w-5/12 text-left md:text-right pr-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2025.09.01</div>
                  <h3 className="text-2xl font-bold mb-2">政大開學典禮</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">NCCU Opening Ceremony</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pl-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('opening-ceremony.jpg')} alt="政大開學典禮" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2025.09.26 政大仲尼獎頒獎典禮 */}
            <div className="relative pl-8 md:pl-0">
              <div className="md:flex items-center justify-between w-full flex-row-reverse">
                <div className="md:w-5/12 text-left pl-8 mb-4 md:mb-0">
                  <div className="text-xs font-bold text-fuchsia-400 mb-1 tracking-wider uppercase">2025.09.26</div>
                  <h3 className="text-2xl font-bold mb-2">政大仲尼獎頒獎典禮</h3>
                  <div className="text-sm text-fuchsia-200/70 mb-2">NCCU Zhongni Award Ceremony</div>
                </div>
                <div className="absolute left-0 md:left-1/2 -translate-x-[11px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110B1E] border-4 border-fuchsia-500 z-10"></div>
                <div className="md:w-5/12 md:pr-8">
                  <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10">
                    <img src={hostingImg('zhongni-award.jpg')} alt="政大仲尼獎頒獎典禮" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${darkMode ? 'border-white/5 bg-[#050505]' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center">
          <h2 className="text-2xl font-heading font-bold mb-6">Let's build something great.</h2>
          <div className="flex gap-4 mb-8">
            <button type="button" onClick={handleCopyEmail} aria-label="Copy email" className={`p-3 rounded-full transition-all ${darkMode ? 'bg-white/5 hover:bg-indigo-500 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-indigo-500 text-gray-700 hover:text-white'}`}>
              <Mail size={20} />
            </button>
            <a href="https://www.linkedin.com/in/yi-chen115" target="_blank" rel="noreferrer" className={`p-3 rounded-full transition-all ${darkMode ? 'bg-white/5 hover:bg-[#0A66C2] text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-[#0A66C2] text-gray-700 hover:text-white'}`}>
              <Linkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={`p-3 rounded-full transition-all ${darkMode ? 'bg-white/5 hover:bg-indigo-500 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-indigo-500 text-gray-700 hover:text-white'}`}>
              <Github size={20} />
            </a>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
            © 2026 Yi-Chen Hsiao. Designed with React & Tailwind.
          </p>
        </div>
      </footer>

      {/* Resume 履歷彈窗：先展示，可選擇下載 */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="履歷預覽">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setResumeModalOpen(false)} />
          <div className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl ${darkMode ? 'bg-[#15151a]' : 'bg-white'}`}>
            <div className={`flex items-center justify-between px-4 py-3 border-b ${darkMode ? 'border-white/10' : 'border-gray-200'}`}>
              <span className="font-semibold">Resume</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                >
                  <Download size={16} />
                  下載履歷
                </button>
                <button
                  type="button"
                  onClick={() => setResumeModalOpen(false)}
                  className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}
                  aria-label="關閉"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 min-h-0 bg-gray-900">
              <iframe
                src={`${RESUME_PDF_URL}#toolbar=1`}
                title="Yi-Chen Hsiao Resume"
                className="w-full h-[75vh] min-h-[400px]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Email copied toast */}
      {emailCopied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-lg">
          Email 已複製到剪貼簿！
        </div>
      )}
    </div>
  );
}
