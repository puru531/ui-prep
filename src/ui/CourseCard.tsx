import { Link } from "react-router-dom";

type CourseCardProps = {
  heading: string;
  imageUrl: string;
  route: string;
};
const CourseCard = ({ heading, imageUrl, route }: CourseCardProps) => {
  return (
    <Link to={`/${route}`}>
      <div className="course-card">
        <div className="h3-bold mb-1 ml-2">{heading}</div>
        <div>
          <img
            className="rounded-lg"
            src={imageUrl}
            alt={heading}
            width="100%"
          />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
