import ProjectCardSingle from "./ProjectCardSingle";
import ProjectCategoryHeader from "./ProjectCategoryHeader";
import ProjectList from "./ProjectList";
import { motion } from "motion/react";

const ProjectsCategories = ({ category }) => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0.2, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}        
        transition={{ duration: 0.6, ease: "easeOut" }}
        id={category.id}
        className={`projects-section ${category.backgroundColor}`}
      >
        <ProjectCategoryHeader category={category} />

        {category.title === "categories.automotive.title" ||
        category.title === "categories.aviation.title" ? (
          <ProjectCardSingle category={category} />
        ) : (
          <div className="project-cards-row">
            <ProjectList category={category} />
          </div>
        )}
      </motion.section>
    </>
  );
};

export default ProjectsCategories;
