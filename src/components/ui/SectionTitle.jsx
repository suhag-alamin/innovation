import PropTypes from "prop-types";

const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <div className="line"></div>
      <h2>{title}</h2>
      <div className="line"></div>
    </div>
  );
};
SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
