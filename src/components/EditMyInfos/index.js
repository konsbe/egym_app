import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import FormInput from "./../Forms/FormInput";
import Button from "./../Forms/Button";

import { updateUserStart } from "../../redux/User/user.actions";

import "./styles.css";

const mapState = ({ user, calendarData }) => ({
  currentUser: user.currentUser,
  user: user.user,
  calendars: calendarData.calendarTracker,
});

const EditMyInfos = () => {
  const [hideModal, setHideModal] = useState(true);
  const { user } = useSelector(mapState);
  const { currentUser } = useSelector(mapState);
  const [btnPopup, setBtnPopup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [weight, setWeight] = useState("");
  const [gear, setGear] = useState("");
  const [injuries, setInjuries] = useState("");
  const toggleModal = () => setHideModal(!hideModal);
  const { calendars } = useSelector(mapState);

  let x = ["profile_body"];
  let y = ["userPosts"];
  let z = ["userCalendar computer"];
  let k = ["userCalendar phone"];

  if (btnPopup) {
    x.push("profile_body popup");
    y.push("userPosts popup");
    z.push("userCalendar computer popup");
    k.push("userCalendar phone popup");
  }

  useEffect(() => {
    if (weight < 1) {
      setWeight(user.weight);
    }
    if (injuries.length < 1) {
      setInjuries(user.injuries);
    }
    if (gear.length < 1) {
      setGear(user.gear);
    }
  }, []);

  const handleSubmit = async (e) => {
    //****set the values down!***
    e.preventDefault();
    await dispatch(
      updateUserStart({
        weight,
        gear,
        injuries,
      })
    );
    history.push(`/user/${currentUser.id}`);

    setBtnPopup(false);
  };
  return (
    <div className="backgroundInfo">
      <div>
        <form onSubmit={handleSubmit}>
          <h2 className="editInfosTitle">Edit Profile Info</h2>

          <FormInput
            className="forminput"
            type="text"
            name="weight"
            placeholder="Weight in kilos"
            onChange={(e) => setWeight(e.target.value)}
          />

          <p className="textLabels">Please write your training gear here:</p>
          <textarea
            className="formtext"
            type="textarea"
            name="gear"
            rows="8"
            value={gear}
            placeholder="gym membership, exercise treadmills, bodyweight, swimming pool, dumbbells 2x5kg-2x10kg, etc.."
            onChange={(e) => setGear(e.target.value)}
          />

          <p className="textLabels">Please write any injuries here:</p>
          <textarea
            className="formtext"
            type="textarea"
            name="injuries"
            rows="8"
            value={injuries}
            placeholder="ruptured right meniscus, tendonitis of the right wrist, etc"
            onChange={(e) => setInjuries(e.target.value)}
          />

          <br />

          <Button className="btnedit" type="submit">
            EDIT
          </Button>
          <Link to={`/user/${currentUser.id}`}>
            <Button
              onClick={() => setBtnPopup(false)}
              className="btnedit"
              type="submit"
            >
              CANCEL
            </Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditMyInfos;
