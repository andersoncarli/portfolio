import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
