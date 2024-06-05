import { QUERY_KEYS } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { getTopicByTopicId, getTopics, getTopicsContentById } from "./api";
import { CONSTANSTS } from "@/utils/constants";
import { CourseTopic, RootState } from "@/types/model";
import { useDispatch, useSelector } from "react-redux";
import { setAllTopics } from "../reducers/topicsSlice";

const useGetAllTopics = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.TOPICS],
    queryFn: getTopics,
  });
  const dispatch = useDispatch();
  if (data?.length > 0) {
    dispatch(setAllTopics(data));
  }
  return { data, isLoading, isError, error };
};

export const useGetJsTopics = () => {
  const { data, isLoading, isError, error } = useGetAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.JAVASCRIPT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};

export const useGetReactTopics = () => {
  const { data, isLoading, isError, error } = useGetAllTopics();
  const topics = data?.filter(
    (topic) => topic.course_id === CONSTANSTS.REACT_COURSE_ID,
  );
  return { topics, isLoading, isError, error };
};

export const useGetTopicsByPath = (basePath) => {
  const topics: CourseTopic[] = useSelector((state: RootState) => {
    let data: CourseTopic[] = [];
    switch (basePath) {
      case QUERY_KEYS.JAVASCRIPT:
        data = state.topics.jsTopics;
        break;
      case QUERY_KEYS.REACT:
        data = state.topics.reactTopics;
        break;
      default:
        break;
    }
    return data;
  });
  return topics;
};

export const useGetTopicsContentById = (topicId) => {
  return useQuery({
    queryKey: [`topic_${topicId}`],
    queryFn: () => getTopicsContentById(topicId),
  });
};
export const useGetTopicByTopicId = (topicId) => {
  return useQuery({
    queryKey: [`topics_${topicId}`],
    queryFn: () => getTopicByTopicId(topicId),
  });
};
