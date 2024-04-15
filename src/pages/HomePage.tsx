import { CourseCard } from "@/ui";

const HomePage = () => {
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
        <CourseCard
          heading="JavaScript"
          imageUrl={`/assets/javascript.png`}
          route="js"
        />
        <CourseCard
          heading="React.Js"
          imageUrl={`/assets/react.webp`}
          route="react"
        />
      </div>
    </div>
  );
};

export default HomePage;
