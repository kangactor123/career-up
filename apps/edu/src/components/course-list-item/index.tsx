import React from "react";
import { CourseListItemWrapper } from "./style";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
};

const CourseListItem: React.FC<Props> = ({
  thumbnail,
  title,
  description,
  id,
}) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`${id}`);
  };
  return (
    <CourseListItemWrapper onClick={onClick}>
      <div className="edu--course-list-item-thumbnail">
        <img src={thumbnail} />
      </div>
      <div className="edu--course-list-item-info">
        <div className="edu--course-list-item-info-title">{title}</div>
        <div
          className="edu--course-list-item-info-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </CourseListItemWrapper>
  );
};

export default CourseListItem;
