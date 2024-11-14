import React from "react";

const tags = ["Facebook", "Twitter", "Instagram"];

const Tags = () => {
  return (
    <>
      {tags.map((tag, index) => (
        <a className="mr10" href="#" key={index}>
          {tag}
        </a>
      ))}
    </>
  );
};

export default Tags;
