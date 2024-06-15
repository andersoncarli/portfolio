export default function ProjectCard({ project }) {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <a href={project.link} className="text-blue-500 hover:underline">View Project</a>
    </div>
  );
}
