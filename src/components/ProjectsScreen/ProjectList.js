import ProjectCard from "./ProjectCard";

const ProjectList = ({ category }) => {
  return (
    <>
      {category.projects.map((project) => (
        <ProjectCard project={project} key={project.id} category={category} />
      ))}
    </>
  );
};

export default ProjectList;
