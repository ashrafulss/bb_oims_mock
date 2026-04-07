import React from "react";

const NoticeCard = ({ content, link }) => {
  return (
    <div className=" ">
      
      <p className="text-xl font-bold text-red-500 md:text-sm  ">
        {content}
          <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-xs md:text-sm font-medium hover:underline pr-5 pl-1"
      >
        Click here to view the letter.
      </a>
      </p>

    

    </div>
  );
};

export default NoticeCard;