import { Questions } from "@/types/model";

const Content = ({ item }: { item: Questions }) => {
  return (
    <div className="mb-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-4 shadow dark:border-gray-700 dark:bg-gray-800">
      <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        {item.question}
      </h5>
      <p className="text-base text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: item.answer}}>
      </p>
    </div>
  );
};

export default Content;
