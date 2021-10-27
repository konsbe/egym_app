import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {

  const onClick = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    const newdate = year + "/" + month + "/" + day;
    console.log(newdate);
  };

  return (
    <header className="headerAddDay">
      <h2>{title}</h2>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Exercise",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
