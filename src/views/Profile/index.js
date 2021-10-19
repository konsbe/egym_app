import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";

import Calendar from "../../components/Calendar";
import UserProfile from "../../components/UserProfile";
import Posts from "./../../components/Posts";

import Modal from "./../../components/Modal";
import FormInput from "../../components/Forms/FormInput";
import FormSelect from "./../../components/Forms/FormSelect";
import Button from "./../../components/Forms/Button";
import Popup from "../../components/Popup";
import { updateUserStart } from "../../redux/User/user.actions";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  user: state.user.user,
});

const Profile = ({}) => {
  const [hideModal, setHideModal] = useState(true);
  const { user } = useSelector(mapState);
  const [btnPopup, setBtnPopup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [weight, setWeight] = useState("");
  const [gear, setGear] = useState("");
  const [injuries, setInjuries] = useState("");
  const toggleModal = () => setHideModal(!hideModal);

  // const configModal = {
  //   hideModal,
  //   toggleModal,
  // };
  // const { height } = user;
  // const resetForm = () => {
  //   setHideModal(true);
  //   setWeight("");
  //   setGear("");
  //   setInjuries("");
  // };

  useEffect(() => {
    // if (weight < 1) {

    // setWeight(user.weight);
    // }
    if (injuries.length < 1) {
      setInjuries(user.injuries);
    }
    if (gear.length < 1) {
      setGear(user.gear);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUserStart({
        weight,
        gear,
        injuries,
      })
    );

    setBtnPopup(false);
  };

  return (
    <div className="profilePage">
      <div className="profile_body">
        <div className="userProfile">
          <div className="callToActions">
            <ul className="btnPopup">
              <li>
                <Button onClick={() => setBtnPopup(true)}>
                  Edit Profile Infos
                </Button>
              </li>
            </ul>
          </div>

          <UserProfile />
        </div>
        <div className="userPosts">
          <Posts />
          <Popup trigger={btnPopup} setTrigger={setBtnPopup}>
            <div className="addNewProductForm">
              <form onSubmit={handleSubmit}>
                <h2>Edit Profile Info</h2>

                <FormInput
                  className="forminput"
                  type="text"
                  name="weight"
                  value={weight}
                  placeholder="Weight in kilos"
                  handleChange={(e) =>
                    setWeight(e.target.value) > 1
                      ? setWeight(e.target.value)
                      : (e) => setWeight(user.weight)
                  }
                />

                <p className="textLabels">
                  Please write your training gear here:
                </p>
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

                {/* <CKEditor
                onChange={(evt) => setProductDesc(evt.editor.getData())}
              /> */}

                <br />

                <Button className="btnedit" type="submit">
                  EDIT
                </Button>
              </form>
            </div>
          </Popup>
        </div>
        <div className="userCalendar">
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Profile;
