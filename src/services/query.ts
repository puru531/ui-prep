import { QUERY_KEYS } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getTopics } from "./api";
import { CONSTANSTS } from "@/utils/constants";

const useAllTopics = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.TOPICS],
    queryFn: getTopics,
  });
};

export const useGetJsTopics = () => {
  const { data, isLoading, isError, error } = useAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.JAVASCRIPT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};

export const useGetReactTopics = () => {
  const { data, isLoading, isError, error } = useAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.REACT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};
