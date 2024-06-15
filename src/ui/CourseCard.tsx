import { Course } from "@/types/model";
import { Link } from "react-router-dom";

type CourseCardProps = {
  course: Course;
};
const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/${course?.route}`}>
      <div className="course-card">
        <div className="h3-bold mb-1 ml-2">{course?.name}</div>
        <div>
          <img
            className="rounded-lg"
            src={course?.image}
            alt={course?.name}
            width="100%"
          />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
