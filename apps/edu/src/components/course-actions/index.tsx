import React from "react";
import { Button } from "@career-up/ui-kit";
import { CourseActionsWrapper } from "./style";

const CourseActions: React.FC = () => {
  return (
    <CourseActionsWrapper>
      <Button>Like this Course</Button>
      <Button>Add to My Course</Button>
    </CourseActionsWrapper>
  );
};

export default CourseActions;
