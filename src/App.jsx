import { useState } from 'react'
import profilePhoto from './assets/IMG_6590.JPG'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('education')
  const [selectedProjectIds, setSelectedProjectIds] = useState([])

  const tabs = [
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' }
  ]

  // Resume data with linked projects
  const resumeData = {
    experience: [
      {
        title: 'Research Engineer',
        company: 'Weill Cornell Medicine Dalio Institute',
        period: 'July 2022 - September 2025',
        bullets: [
          'Led new product development of a mechanical IR intubation robot',
          'Prototyped iterations in SolidWorks, 3D-printing, laser cutting, and casting for assembly',
          'Developed and maintained Python code for data acquisition and live performance assessment',
          'Designed and fabricated 3 mechanical test environments for a single-modal, multifunctional biosensor',
          'Built fluid dynamic tests for 60 segmented coronary arteries and ran CFD in tandem',
          'Automated data collection using LabVIEW and JavaScript to reduce runtime by 75%',
          'Collaborated with team of 5 to manage project finances, timelines, IRB protocols, and Design History File entries'
        ],
        linkedProjects: ['proj-4', 'proj-5', 'proj-6', 'proj-7']
      },
      {
        title: 'Formulation Scientist',
        company: 'Haima Therapeutics',
        period: 'October 2020 - May 2022',
        bullets: [
          'Formulated 30 unique lipid nanoparticles and buffers in a cleanroom environment',
          'Authored over 200 batch records reporting outcomes from 4 separate functional assays',
          'Raised $3m in DARPA grant funding and developed SOPs for CMs in preparation',
          'Articulated and defended engineering decisions to 6-person scientist team and C-suite executives'
        ],
        linkedProjects: []
      }
    ],
    education: [
      {
        degree: 'Master\'s of Science in Mechanical Engineering',
        school: 'Columbia University',
        period: 'August 2025 - December 2026',
        bullets: [
          'Concentration: Robotics, Automation, and Control',
          'Courses: Robot Learning, Discrete Controls, Robotics Studio, Mechatronics',
          'GPA: 3.92/4.0',
          'Activities: Creative Machines Lab, Columbia MEGA'
        ],
        linkedProjects: ['proj-1', 'proj-2', 'proj-3']
      },
      {
        degree: 'Bachelor of Science in Biomedical Engineering',
        school: 'Case Western Reserve University',
        period: 'August 2018 - May 2022',
        bullets: [
          'Concentration: Biomechanics. Minor: Music',
          'Awards: Dean\'s High Honor List',
          'Courses: Biomedical Signals and Systems, Biomaterials, Biomechanics, Computer-Aided Design/Manufacturing',
          'Activities: BME Society, Undergraduate Student Government, Sen Gupta Lab'
        ],
        linkedProjects: []
      }
    ],
    skills: {
      technical: ['CAD (Solidworks, Autodesk Fusion 360)', 'MATLAB', 'LabVIEW', 'Python', 'JavaScript'],
      soft: ['Team Leadership', 'Problem Solving', 'Risk Management', 'Project Management'],
      certifications: ['Certified SolidWorks Professional (CSWA)', 'CITI Training (Group 1)']
    },
    projects: [
      {
        id: 'proj-1',
        name: 'A novel drone-based system for building maintenance and inspection',
        tech: 'SolidWorks, Python, ROS, Computer Vision',
        image: '/projects/drone-drill.png', // Replace with your actual image path
        sections: {
          overview: 'Designing and building a tethered drone-based system for building maintenance. Fitting a modular toolhead for autonomous drilling and facade cleaning.',
          assembly: 'Custom flight controller integrated with ROS navigation system. Vacuum-mounted drone with a modular toolhead for swapping between cleaning and drill modes. Shrouded bit for minimal cleanup. Tethered power for continuous transmission.',
          testing: 'Field testing on at least 3 building drill sites above 30 feet. Validated flight patterns and vibration resistance in various weather conditions and on multiple facade materials.',
          supervisor: 'Dr. Hod Lipson, Creative Machines Laboratory, Columbia University.',
        },
        link: '#'
      },
      {
        id: 'proj-2',
        name: 'A low-cost polar 3D printer for multi-material printing',
        tech: 'SolidWorks, Python, 3D Printing',
        image: '/projects/polar3didex.png', // Replace with your actual image path
        sections: {
          overview: 'Designing and building a polar 3D printer for multi-material applications with simultaneous multi-nozzle extrusion to reduce waste generation.',
          assembly: 'Polar coordinate 3D printer with rotating bed and cartesian extruder movement. >2 simultaneously active hotends with automatic filament switching mechanism. Integrated slicer for complex geometries.',
          testing: 'Successful print of complex geometries with 0.1mm precision. Testing with PLA, PETG, and TPU materials with seamless transitions. Waste generation reduced by 50% compared to industry standard IDEX or tool-changing mechanisms.',
          credit: 'Teammates: Maysarah Sukkar & Jayeshwar Singh.',
          supervisor: 'Dr. Yevgeniy Yesilevskiy, Columbia University.',
        },
        link: '#'
      },
      {
        id: 'proj-3',
        name: 'FIDO: an open-source and trainable 3D-printed robotic quadruped',
        tech: 'SolidWorks, Python, 3D Printing, RL',
        image: '/projects/IMG_7425 (2).JPG', // Replace with your actual image path
        sections: {
          overview: 'Designed and built a 3D-printed robot dog for education and research. Used reinforcement learning and proximal policy optimization for gait generation.',
          assembly: 'Fully 3D-printed chassis with  8 LX-16A serial bus servo motors. Custom control circuit using Raspberry Pi for on-board computation. Modular quasi-direct drive leg design for easy replacement with passive tension.',
          testing: 'Trained using PPO algorithm in MuJoCo, achieving stable standing in 10 minutes. Optimized gait parameters through Random Search/Hillclimber to navigate uneven terrain. Completed Sim2Real transfer to achieve forward gait of 25cm/second in real-world testing.',
          supervisor: 'Dr. Hod Lipson, Creative Machines Laboratory, Columbia University.',
        },
        link: '#'
      },
      {
        id: 'proj-4',
        name: 'Development of a Mechanical IR Intubation Robot for Difficult Airway Management',
        tech: 'SolidWorks, 3D Printing, C++, Python',
        media: {
          type: 'video',
          src: '/projects/IMG_5905.mp4'
        },
        sections: {
          overview: 'Led new product development of a mechanical IR intubation robot for difficult airway scenarios. Designed for rapid deployment in emergency settings.',
          assembly: 'Hybrid manufacturing using Solidworks, 3D printing, laser cutting, and casting for assembly. PID-controlled cable-driven actuator with dual embedded IR fiber optic cables for intensity tracking.',
          testing: 'Validated ex vivo and on anatomical airway models with 90% success rate. Reduced intubation time by 50% in prelim. trials compared to manual methods in difficult airway scenarios.',
          supervisor: 'Dr. Simon Dunham, Dalio Institute for Cardiovascular Imaging, Weill Cornell Medical College.',
        },
        link: '#'
      },
      {
        id: 'proj-5',
        name: 'Development of a single-modal, multifunctional biosensor for real-time monitoring of tissue health',
        tech: 'Python, 3D Printing, CAD, Electronics',
        image: '/projects/biosensor.png', // Replace with your actual image path
        sections: {
          overview: 'Designed a single-modal,multifunctional capacitive sensor for real-time monitoring of muscular strength and tissue health.',
          assembly: 'Designed capacitive yarn sensors with silicone-molded flex casing. Arduino and Python-based data acquisition system with eventual wireless connectivity.',
          testing: 'Validated against camera-based joint angle analysis with ~95% movement correlation. Successfully monitored range of motion in 10+ different exercises.',
          credit: 'Teammates: Dr. Mohsen Annabestani.',
          supervisor: 'Dr. Bobak Mosadegh, Dalio Institute for Cardiovascular Imaging, Weill Cornell Medical College.',
        },
        link: '#'
      },
      {
        id: 'proj-6',
        name: 'Fluid Mechanic Analysis of Realistic Coronary Arteries',
        tech: 'LabVIEW, Python, 3D Printing, CFD',
        image: '/projects/kranthi-flowloop.png', // Replace with your actual image path
        sections: {
          overview: 'Developed a novel method to assess fluid mechanic properties of 3D-printed coronary arteries. Validated against physiological flow patterns, ischemic coronary artery disesase identification, and CFD simulation.',
          assembly: 'Constructed benchtop flow loop to collect proximal and distal pressure changes over varying downstream microcirculatory resistances and flow rates. Tested 65 patient-specific coronary models to assess coronary heart health against CFD benchmarks.',
          testing: 'CFD validation average showed >90% correlation with clinical flow data and correct identification of coronary artery disease. Mechanical testing confirmed realistic compliance matching human tissue properties. Paper submitted for publication in Nature Magazine.',
          credit: 'Teammates: Dr. Sahar Jalal, Dr. Fay Lin, Dr. David Moloney, Lilia Soriano.',
          supervisor: 'Drs. Simon Dunham & Bobak Mosadegh, Dalio Institute for Cardiovascular Imaging, Weill Cornell Medical College.',
        },
        link: '#'
      },
      {
        id: 'proj-7',
        name: '3D-Printed Coronary Arteries with Realistic Tissue-Mimicking Biomechanics',
        tech: 'LabVIEW, Python, 3D Printing, CFD',
        image: '/projects/kranthi-credence.png', // Replace with your actual image path
        sections: {
          overview: 'Developed a novel method to 3D print and test fluid mechanic properties of realistic coronary arteries. Validated geometry reconstruction with Micro-CT.',
          assembly: 'Developed extraction policy to convert CT images to STL meshes with 100% accuracy through MEDIS, Geomagic, and Solidworks. Multi-material 3D printing of 65 coronary arteries with Stratasys PolyJet resins. Fitted models with barbs, pressure taps, and fiducial markings.',
          testing: 'Mesh quality allowed for 100% recapturing of anatomical features, verified by Micro-CT. Novel workflow accelerated model generation by 40%. Paper submitted for publication in Nature Magazine.',
          credit: 'Teammates: Dr. Sahar Jalal, Lilia Soriano.',
          supervisor: 'Dr. Simon Dunham, Dalio Institute for Cardiovascular Imaging, Weill Cornell Medical College',
        },
        link: '#'
      },
    ]
  }

  // Function to highlight projects when clicking on linked items
  const handleProjectLinkClick = (projectIds) => {
    setActiveTab('projects')
    setSelectedProjectIds(projectIds)
    // Scroll to projects section
    setTimeout(() => {
      const firstProject = document.getElementById(projectIds[0])
      firstProject?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }, 100)
  }

  // Clear highlights when switching tabs
  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    if (tabId !== 'projects') {
      setSelectedProjectIds([])
    }
  }

  const handleNextTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
    const nextIndex = (currentIndex + 1) % tabs.length
    setActiveTab(tabs[nextIndex].id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrevTab = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab)
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length
    setActiveTab(tabs[prevIndex].id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen via-purple-900 to-slate-900">
      {/* Header/Hero Section */}
      <header className="text-black py-12 md:py-20 px-4 md:px-6">
        <div className="w-full mx-auto text-center px-6">

          <img 
            src={profilePhoto}
            alt="Alexander Dornback" 
            className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 object-cover border-4 border-purple-400"
          />
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">Alexander Dornback</h1>
          <p className="text-base md:text-xl text-black mb-4 md:mb-6 px-4">
            MS Candidate, Mechanical Engineering @ Columbia University | Robotics, Automation Engineering, Medical Devices
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <a 
              href="mailto:alexander.dornback@gmail.com" 
              className="px-6 py-3 bg-slate-500 hover:bg-slate-400 rounded-lg transition text-center !text-white"
            >
              <span className="text-white">Contact Me</span>
            </a>
            <a 
              href="/resume.pdf" 
              download="Alexander_Dornback_Resume.pdf"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition text-center !text-white"
            >
              Download Resume
            </a>
          </div>
        </div>
      </header>

      {/* Resume Section with Tabs */}
      <main className="w-full mx-auto pb-12 md:pb-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 md:p-8 shadow-2xl">
          {/* Tab Navigation - Scrollable on mobile, inline on desktop */}
          <div className="overflow-x-auto -mx-4 md:mx-0 mb-6 md:mb-8">
            <div className="flex gap-2 border-b border-white/20 px-4 md:px-0 min-w-max md:min-w-0">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-4 md:px-6 py-3 font-semibold transition relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-purple-800'
                      : 'text-purple-400 hover:text-purple-800'
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="text-black">
            {/* Education Tab - Timeline on desktop, stacked on mobile */}
            {activeTab === 'education' && (
              <div className="md:flex md:gap-8">
                {/* Timeline Sidebar - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block md:w-48 flex-shrink-0">
                  <div className="sticky top-8 space-y-6">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-400 rounded-full ring-4 ring-purple-400/30"></div>
                          <div className="text-sm">
                            <div className="font-semibold text-purple-800">{edu.period}</div>
                          </div>
                        </div>
                        {index < resumeData.education.length - 1 && (
                          <div className="absolute left-[5px] top-8 w-0.5 h-12 bg-purple-400/30"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Content */}
                <div className="flex-1 space-y-6 md:space-y-8">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 md:p-6">
                      {/* Show period on mobile, hidden on desktop (shown in sidebar) */}
                      <div className="md:hidden text-sm font-semibold text-purple-800 mb-2">
                        {edu.period}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-purple-800 font-semibold mb-3 md:mb-4">{edu.school}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {edu.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex gap-3 text-sm md:text-base text-black text-left">
                            <span className="text-purple-800 mt-1 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {edu.linkedProjects && edu.linkedProjects.length > 0 && (
                        <button
                          onClick={() => handleProjectLinkClick(edu.linkedProjects)}
                          className="text-purple-800 hover:text-purple-400 font-semibold text-sm flex items-center gap-2"
                        >
                          <span>View Related Projects</span>
                          <span>→</span>
                        </button>
                      )}
                    </div>
                  ))}
                  {activeTab === 'education' && (
                    <div className="flex justify-center gap-4 mt-8">
                      <button
                        onClick={handleNextTab}
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                      >
                        <span>Next: Experience</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Experience Tab - Timeline on desktop, stacked on mobile */}
            {activeTab === 'experience' && (
              <div className="md:flex md:gap-8">
                {/* Timeline Sidebar - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block md:w-48 flex-shrink-0">
                  <div className="sticky top-8 space-y-6">
                    {resumeData.experience.map((job, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-purple-400 rounded-full ring-4 ring-purple-400/30"></div>
                          <div className="text-sm">
                            <div className="font-semibold text-purple-800">{job.period}</div>
                          </div>
                        </div>
                        {index < resumeData.experience.length - 1 && (
                          <div className="absolute left-[5px] top-8 w-0.5 h-12 bg-purple-400/30"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Content */}
                <div className="flex-1 space-y-6 md:space-y-8">
                  {resumeData.experience.map((job, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 md:p-6">
                      {/* Show period on mobile, hidden on desktop (shown in sidebar) */}
                      <div className="md:hidden text-sm font-semibold text-purple-800 mb-2">
                        {job.period}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-1">{job.title}</h3>
                      <p className="text-purple-800 font-semibold mb-3 md:mb-4">{job.company}</p>
                      
                      <ul className="space-y-2 mb-4">
                        {job.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex gap-3 text-sm md:text-base text-black text-left">
                            <span className="text-purple-800 mt-1 flex-shrink-0">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {job.linkedProjects && job.linkedProjects.length > 0 && (
                        <button
                          onClick={() => handleProjectLinkClick(job.linkedProjects)}
                          className="text-purple-800 hover:text-purple-400 font-semibold text-sm flex items-center gap-2"
                        >
                          <span>View Related Projects</span>
                          <span>→</span>
                        </button>
                      )}
                    </div>
                  ))}
                  {activeTab === 'experience' && (
                    <div className="flex justify-center gap-4 mt-8">
                      <button
                        onClick={handlePrevTab}
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                      >
                        <span>←</span>
                        <span>Previous: Education</span>
                      </button>
                      <button
                        onClick={handleNextTab}
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                      >
                        <span>Next: Skills</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-800">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {resumeData.skills.technical.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-800/50 rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-800">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {resumeData.skills.soft.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-pink-600/50 rounded-full text-sm font-semibold"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-purple-800">
                    Certifications
                  </h3>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {resumeData.skills.certifications.map((cert, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-green-600/50 rounded-full text-sm font-semibold"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                  {activeTab === 'skills' && (
                    <div className="flex justify-center gap-4 mt-8">
                      <button
                        onClick={handlePrevTab}
                        className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                      >
                        <span>←</span>
                        <span>Previous: Education</span>
                      </button>
                      <button
                        onClick={handleNextTab}
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                      >
                        <span>Next: Projects</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Projects Tab - Alternating Image Layout */}
            {activeTab === 'projects' && (
              <div className="space-y-8 md:space-y-12">
                {resumeData.projects.map((project, index) => (
                  <div 
                    key={project.id}
                    id={project.id}
                    className={`rounded-lg overflow-hidden transition-all ${
                      selectedProjectIds.includes(project.id)
                        ? 'ring-2 ring-purple-400'
                        : ''
                    }`}
                  >
                    {/* Alternating Layout: Even indices = image left, Odd indices = image right */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                      {/* Media Section (Image or Video) */}
                      <div className="md:w-1/2">
                        {project.media && project.media.type === 'video' ? (
                          <video 
                            src={project.media.src}
                            className="w-full h-auto md:h-full object-contain rounded-lg"
                            autoPlay
                            loop
                            muted
                            playsInline
                          >
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img 
                            src={project.image || project.media?.src} 
                            alt={project.name}
                            className="w-full max-h-[500px] object-contain rounded-lg"
                          />
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="md:w-1/2 space-y-4 p-4 md:p-0">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold mb-2">{project.name}</h3>
                          <p className="text-purple-1000 font-semibold mb-3">{project.sections.credit}</p>
                          <p className="text-purple-700 font-semibold mb-3">{project.sections.supervisor}</p>
                          <p className="text-purple-400 text-sm mb-3">{project.tech}</p>
                        </div>

                        {/* Overview Section */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-purple-800 rounded-full"></span>
                            Overview
                          </h4>
                          <p className="text-sm md:text-base text-black text-right">{project.sections.overview}</p>
                        </div>

                        {/* Assembly Section */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            Assembly
                          </h4>
                          <p className="text-sm md:text-base text-black text-right">{project.sections.assembly}</p>
                        </div>

                        {/* Testing Section */}
                        <div className="bg-white/5 rounded-lg p-4">
                          <h4 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            Testing
                          </h4>
                          <p className="text-sm md:text-base text-black text-right">{project.sections.testing}</p>
                        </div>

                        {/* Link */}
                        {/*<a
                          href={project.link}
                          className="text-purple-400 hover:text-purple-400 font-semibold text-sm inline-flex items-center gap-2"
                        >
                          <span>View Project</span>
                          <span>→</span>
                        </a>*/}
                      </div>
                    </div>
                  </div>
                ))}
                {activeTab === 'projects' && (
                  <div className="flex justify-center gap-4 mt-8">
                    <button
                      onClick={handlePrevTab}
                      className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-purple-800 rounded-lg transition font-semibold flex items-center gap-2"
                    >
                      <span>←</span>
                      <span>Previous: Skills</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-purple-800 py-6 md:py-8 px-4">
        <p className="text-sm md:text-base">© 2026 Alex Dornback. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App