import { useParams } from 'react-router-dom'

function ProjectPage({ projects }) {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return <div>Project not found</div>

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
      <p className="text-purple-500 mb-6">{project.tech}</p>

      <img
        src={project.image}
        alt={project.name}
        className="w-full max-h-[600px] object-contain rounded-lg mb-6"
      />

      <div className="space-y-6">
        <section>
          <h2 className="font-bold text-xl">Overview</h2>
          <p>{project.sections.overview}</p>
        </section>

        <section>
          <h2 className="font-bold text-xl">Assembly</h2>
          <p>{project.sections.assembly}</p>
        </section>

        <section>
          <h2 className="font-bold text-xl">Testing</h2>
          <p>{project.sections.testing}</p>
        </section>
      </div>
    </div>
  )
}

export default ProjectPage
