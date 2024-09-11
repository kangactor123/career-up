import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { coursesAtom } from "../../../atoms";
import CourseDetailItem from "../../../components/course-detail-item";
import { CourseContentsType } from "../../../types";
import { getCourseContents } from "../../../api";
import CourseContents from "../../../components/course-contents";
import CourseActions from "../../../components/course-actions";
import { useAuth0Client } from "@career-up/shell-router";

const PageDetail: React.FC = () => {
  const { id } = useParams();
  const auth0Client = useAuth0Client();
  const [courseContents, setCourseContents] =
    useState<CourseContentsType | null>(null);

  const course = useAtomValue(
    useMemo(() => {
      return selectAtom(coursesAtom, (courses) =>
        courses.find((course) => course.id === Number(id))
      );
    }, [id])
  );

  useEffect(() => {
    if (course === undefined) return;

    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const courseContents = await getCourseContents(token, course.id);

        setCourseContents(courseContents);
      } catch (err) {
        alert(err);
      }
    })();
  }, [course]);

  if (course === undefined) {
    return null;
  }

  return (
    <>
      <CourseDetailItem {...course} />
      {courseContents !== null && <CourseContents {...courseContents} />}
      <CourseActions />
    </>
  );
};

export default PageDetail;
