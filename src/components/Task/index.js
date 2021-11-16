import Days from "./TaskComponents/Days";
import AdminDays from "./AdminTaskComponents/AdminDays";
import Weeks from "./TaskComponents/Weeks";
import AdminWeeks from "./AdminTaskComponents/AdminWeeks";
import { useSelector } from "react-redux";
import "./styles.css";
import { checkUserIsAdmin } from "../../Utils";

const mapState = ({ user, trainingData }) => ({
  currentUser: user.currentUser,
  userWeeks: trainingData.trainingWeeks,
});

const Task = ({ onDelete }) => {
  const { currentUser } = useSelector(mapState);
  const isAdmin = checkUserIsAdmin(currentUser);
  if (isAdmin) {
    return (
      <div className="postTask">
        <AdminWeeks onDelete={onDelete} />
        <Weeks onDelete={onDelete} />
      </div>
    );
  } else {
    return (
      <div className="postTask">
        <Weeks onDelete={onDelete} />
      </div>
    );
  }
};
export default Task;
