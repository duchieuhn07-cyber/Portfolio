import { useState } from 'react';
import Hero from './components/Hero'
import ProjectsHero from './components/ProjectsHero'
import SummaryHero from './components/SummaryHero'
import Project1Hero from './components/Project1Hero'
import Project2Hero from './components/Project2Hero'
import Project3Hero from './components/Project3Hero'
import Project4Hero from './components/Project4Hero'
import Project5Hero from './components/Project5Hero'
import Project6Hero from './components/Project6Hero'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects' | 'summary' | 'project-1' | 'project-2' | 'project-3' | 'project-4' | 'project-5' | 'project-6'>('summary');

  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      {currentPage === 'home' && (
        <Hero 
          onNavigate={() => setCurrentPage('projects')} 
          onNavigateSummary={() => setCurrentPage('summary')}
        />
      )}
      {currentPage === 'projects' && (
        <ProjectsHero 
          onBack={() => setCurrentPage('home')} 
          onNavigateSummary={() => setCurrentPage('summary')}
          onNavigateToProject={(id) => setCurrentPage(`project-${id}` as any)}
        />
      )}
      {currentPage === 'summary' && (
        <SummaryHero 
          onBack={() => setCurrentPage('home')} 
          onNavigateProjects={() => setCurrentPage('projects')}
        />
      )}
      {currentPage === 'project-1' && <Project1Hero onBack={() => setCurrentPage('projects')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} onNavigateNext={() => setCurrentPage('project-2')} />}
      {currentPage === 'project-2' && <Project2Hero onBack={() => setCurrentPage('project-1')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} onNavigateNext={() => setCurrentPage('project-3')} />}
      {currentPage === 'project-3' && <Project3Hero onBack={() => setCurrentPage('project-2')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} onNavigateNext={() => setCurrentPage('project-4')} />}
      {currentPage === 'project-4' && <Project4Hero onBack={() => setCurrentPage('project-3')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} onNavigateNext={() => setCurrentPage('project-5')} />}
      {currentPage === 'project-5' && <Project5Hero onBack={() => setCurrentPage('project-4')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} onNavigateNext={() => setCurrentPage('project-6')} />}
      {currentPage === 'project-6' && <Project6Hero onBack={() => setCurrentPage('project-5')} onNavigateHome={() => setCurrentPage('home')} onNavigateProjects={() => setCurrentPage('projects')} onNavigateSummary={() => setCurrentPage('summary')} />}
    </main>
  )
}

export default App
