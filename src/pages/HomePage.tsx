import { useGetAllCourses } from "@/services/query";
import { CourseCard, Loader } from "@/ui";

const HomePage = () => {
  const { courses, isLoading, isError, error } = useGetAllCourses();
  console.log("========== course", courses, isLoading, isError, error);
  if (isLoading) return <Loader />;
  if (isError) return <h1>Something went wrong</h1>;

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
