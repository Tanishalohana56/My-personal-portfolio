import { motion } from "motion/react";
import { X, Printer, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { portfolioData } from "../data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6" id="resume-modal-container">
      {/* Dark overlay backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm print:hidden"
      />

      {/* Modal Dialog container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        className="relative bg-white border border-slate-200 rounded-2xl max-w-4xl w-full h-[85vh] overflow-hidden flex flex-col shadow-2xl print:h-auto print:border-none print:bg-white print:text-black print:shadow-none"
        id="resume-modal-content"
      >
        {/* Modal bar */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between print:hidden">
          <div className="space-y-0.5 text-left">
            <h3 className="font-display font-bold text-lg text-slate-900">Curriculum Vitae</h3>
            <p className="text-slate-500 text-xs font-sans">Print or export to PDF using standard browser print options.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white cursor-pointer transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Export PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV printable body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-grow bg-white text-gray-900 print:overflow-visible print:p-0" id="cv-print-body">
          <div className="max-w-3xl mx-auto space-y-8 text-left">
            
            {/* Header: Name and contacts */}
            <div className="text-center space-y-2 border-b-2 border-gray-900 pb-5">
              <h1 className="text-4xl font-display font-bold tracking-wide text-gray-900 uppercase">
                {portfolioData.name}
              </h1>
              <p className="text-sm text-gray-600 font-mono flex items-center justify-center flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{portfolioData.socials.location}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Mail className="w-3.5 h-3.5" />
                  <span>{portfolioData.socials.email}</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </span>
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed font-light">
                {portfolioData.aboutSummary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Education
              </h2>
              <div className="space-y-4">
                {portfolioData.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-sm">
                    <div className="space-y-0.5">
                      <h4 className="font-bold text-gray-900">{edu.institution}</h4>
                      <p className="text-gray-700 font-medium">{edu.degree} in {edu.field}</p>
                    </div>
                    <span className="font-mono font-semibold text-gray-600 text-xs flex-shrink-0">
                      {edu.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-3">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Skills Profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs leading-normal">
                {portfolioData.skillGroups.map((group, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-bold text-gray-900">{group.category}:</h4>
                    <p className="text-gray-700 font-light">
                      {group.skills.map(s => s.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {portfolioData.experience.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-start text-sm">
                      <div>
                        <h4 className="font-bold text-gray-900">{exp.role}</h4>
                        <p className="text-gray-700 font-medium">{exp.company}</p>
                      </div>
                      <span className="font-mono font-semibold text-gray-600 text-xs flex-shrink-0">
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 pl-1 text-xs text-gray-700 font-light leading-relaxed">
                      {exp.points.map((pt, pIdx) => (
                        <li key={pIdx}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Key Academic Projects
              </h2>
              <div className="space-y-4">
                {portfolioData.projects.map((proj, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-sm text-gray-900">{proj.title}</h4>
                      <span className="font-mono text-gray-500 font-medium">({proj.techUsed.join(", ")})</span>
                    </div>
                    <p className="text-gray-700 font-light leading-normal">{proj.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h2 className="text-lg font-display font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1">
                Certifications
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {portfolioData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-gray-100 pb-1">
                    <div>
                      <h4 className="font-bold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-500">{cert.issuer}</p>
                    </div>
                    <span className="font-mono font-semibold text-gray-600 ml-2">{cert.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
