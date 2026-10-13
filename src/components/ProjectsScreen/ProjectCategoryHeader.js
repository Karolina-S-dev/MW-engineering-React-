const ProjectCategoryHeader = ({category}) => {
  return (
    <>
      <div className="projects-content">
        <img src={category.icon} alt="" />
        <h2 className="projects-title">{category.title}</h2>
        <p className="projects-description">
          {category.desc}
        </p>
      </div>
    </>
  );
};

export default ProjectCategoryHeader;
