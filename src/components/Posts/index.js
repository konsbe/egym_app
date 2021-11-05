import React from "react";

import Task from "../Task";

import Button from "./../Forms/Button";

import "./styles.css";

const Posts = (props) => {
  return (
    <div className="posts">
      <Task />
      <Button type="submit" className="btnform">
        Load More
      </Button>
    </div>
  );
};

export default Posts;
