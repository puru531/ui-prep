import { useGetAllCourses } from "@/services/query";
import { CourseCard, ErrorPage, Loader } from "@/ui";

const HomePage = () => {
  const { courses, isLoading, isError } = useGetAllCourses();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorPage />;

  return (
    <div>
      <div className="h1-bold -mx-2 bg-slate-200 py-20 text-center dark:bg-slate-700">
        Get to your next
        <span className="ml-2 text-orange-500">career destination!</span>
      </div>
      <div className="text-center">
        <div className="h2-bold heading-with-line">Choose your course</div>
      </div>
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses?.map((course) => (
          <CourseCard key={course?.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
