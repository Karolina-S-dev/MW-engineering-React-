import ProjectsHero from "./ProjectsScreen/ProjectsHero";
import "../assets/css/projects.css";
import "../assets/css/projects-queries.css";
import ScreenWrapper from "./ScreenWrapper";
import ProjectsCategories from "./ProjectsScreen/ProjectsCategories";
import { projectsCategoriesData } from "../utils/ProjectsScreen.js/projectsCategoriesData";
import ContactBanner from "./ProjectsScreen/ContactBanner";

const ProjectsScreen = () => {
  return (
    <>
      <ScreenWrapper>
        <ProjectsHero />
        {projectsCategoriesData.map((category, index) => (
          <ProjectsCategories category={category} key={index} />
        ))}
        <ContactBanner />
      </ScreenWrapper>
    </>
  );
};

export default ProjectsScreen;
