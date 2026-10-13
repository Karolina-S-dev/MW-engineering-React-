import ProjectCardSingle from "./ProjectCardSingle";
import ProjectCategoryHeader from "./ProjectCategoryHeader";
import ProjectList from "./ProjectList";

const ProjectsCategories = ({ category }) => {
  return (
    <>
      <section className={`projects-section ${category.backgroundColor}`}>
        <ProjectCategoryHeader category={category} />

        {category.title === "Automotive" || category.title === "Przemysł lotniczy" ? (
          <ProjectCardSingle category={category} />
        ) : (
          <div className="project-cards-row">
            <ProjectList category={category} />
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectsCategories;
