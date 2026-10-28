import { useTranslation } from "react-i18next";

const ProjectCategoryHeader = ({ category }) => {
  const { t, i18n } = useTranslation("projects");
  return (
    <>
      <div className="projects-content">
        <img src={category.icon} alt="" />
        <h2 lang={i18n.language} className="projects-title">
          {t(category.title)}
        </h2>
        <p className="projects-description">{t(category.desc)}</p>
      </div>
    </>
  );
};

export default ProjectCategoryHeader;
