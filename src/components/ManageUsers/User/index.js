import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { updateUserStart } from "../../../redux/User/user.actions";
import { AiOutlineFileDone } from "@react-icons/all-files/ai/AiOutlineFileDone";
import { useDispatch } from "react-redux";

const User = ({
  documentID,
  firstName,
  lastName,
  weight,
  birthDay,
  payment,
  month,
  pos,
  createdDate,
  lastProgram,
  course,
}) => {
  // const [conjuctionPayment, setConjuctionPayment] = useState(false);
  // const [monthProgram, setMonthProgram] = useState(false);
  const dispatch = useDispatch();

  // const [conjuctionPayment, setConjuctionPayment] = useState(payment);
  const [monthProgram, setMonthProgram] = useState(month);

  // const [payment, setPayment] = useState(payment);
  // const handleChangeMonth = (e) => {
  //   setMonthProgram(!monthProgram);
  // };
  const [bool, setBool] = useState(false);

  const handleChangeMonth = (e) => {
    console.log(documentID);
    dispatch(
      updateUserStart({
        month: !month,
        documentID,
      })
    );
  };

  const handleChangePayment = (e) => {
    console.log(documentID);
    dispatch(
      updateUserStart({
        payment: !payment,
        documentID,
      })
    );
    console.log(payment);
  };

  const handleChangeLastProgram = async (e) => {
    const lastProgram = new Date();
    setBool(!bool);

    dispatch(
      updateUserStart({
        lastProgram: lastProgram,
        documentID,
      })
    );
    console.log(lastProgram);
  };
  //
  const c = new Date(createdDate.seconds * 1000).toLocaleDateString("en-US");

  let z = new Date(lastProgram.seconds * 1000).toLocaleDateString("en-US");
  // console.log(createdDate, c, z, "dasdasdsadsaasdddddddddd");
  if (!documentID || !firstName || !lastName) return null;
  return (
    <div className="user">
      <span>
        <Link to={`/user/${documentID}`}>{pos}</Link>
      </span>
      <span style={{ fontSize: 15 }}>
        <Link to={`/user/${documentID}`}>{firstName} </Link>
        <Link to={`/user/${documentID}`}>{lastName}</Link>
      </span>

      <span>
        <Link to={`/user/${documentID}`}>{birthDay}</Link>
      </span>
      <span>
        <Link to={`/user/${documentID}`}>{weight} kg</Link>
      </span>
      <span>
        <Link to={`/user/${documentID}`}> {c}</Link>
      </span>
      <span>
        <Link to={`/user/${documentID}`}> {course}</Link>
      </span>
      <span>
        <input
          type="checkbox"
          // checked={conjuctionPayment}
          defaultChecked={payment}
          onChange={handleChangePayment}
          // onChange={(e) => setConjuctionPayment(!conjuctionPayment)}
          // onChange={handleChange}
        ></input>
        <label>Pay</label>
      </span>
      <span>
        {z}
        <span className="changeDay" onClick={handleChangeLastProgram}>
          <AiOutlineFileDone />
        </span>
      </span>
      <span>
        <input
          type="checkbox"
          // checked={monthProgram}
          defaultChecked={month}
          onChange={handleChangeMonth}
          // onChange={(e) => handleChange(e.target.value)}
          // onChange={(e) => setMonthProgram(!monthProgram)}
          // onChange={handleChange}
        ></input>
        <label>Month Program</label>
      </span>
    </div>
  );
};;

export default User;
