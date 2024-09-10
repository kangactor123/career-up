import React from "react";
import { MyCourseInfoWrapper } from "./style";
import { UserType } from "../../types";

type MyCourseInfoProps = {
  user: UserType | null;
};

const MyCourseInfo: React.FC<MyCourseInfoProps> = ({ user }) => {
  if (user === null) {
    return null;
  }

  const { courses } = user;

  const totalEducatingCourseCount = courses.filter(({ done }) => !done).length;
  const totalDoneCourseCount = courses.filter(({ done }) => done).length;

  return (
    <MyCourseInfoWrapper>
      <div className="edu--my-course-info-top">
        <div className="edu--my-course-info-top-title">나의 학습 현황</div>
      </div>
      <div className="edu--my-course-info-bottom">
        <div className="edu--my-course-info-bottom-item">
          <div>전체 수강 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {courses.length}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 중인 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {totalEducatingCourseCount}
          </div>
        </div>
        <div className="edu--my-course-info-bottom-item">
          <div>수강 완료한 강좌</div>
          <div className="edu--my-course-info-bottom-item-count">
            {totalDoneCourseCount}
          </div>
        </div>
      </div>
    </MyCourseInfoWrapper>
  );
};

export default MyCourseInfo;
