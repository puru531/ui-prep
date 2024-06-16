import { QUERY_KEYS } from "@/utils/queryKeys";
import { useQuery } from "@tanstack/react-query";
import {
  getCourses,
  getTopicByTopicId,
  getTopics,
  getTopicsContentById,
} from "./api";
import { CourseTopic, RootState } from "@/types/model";
import { useDispatch, useSelector } from "react-redux";
import { setAllTopics } from "../reducers/topicsSlice";
import { setAllCourses } from "../reducers/coursesSlice";

export const useGetAllCourses = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.COURSES],
    queryFn: getCourses,
  });
  const dispatch = useDispatch();
  if (data?.length > 0) {
    dispatch(setAllCourses(data));
  }
  return { courses: data, isLoading, isError, error };
};

export const useGetCurrentCourse = (courseRoute: string) => {
  // const selectedCourse = useSelector((state: RootState) => {
  //   return state.courses.allCourses?.filter(
  //     (item) => item.route === courseRoute,
  //   );
  // });
  const { courses } = useGetAllCourses();
  const selectedCourse = courses?.filter((item) => item.route === courseRoute);

  return selectedCourse?.[0];
};

export const useGetAllTopics = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEYS.TOPICS],
    queryFn: getTopics,
  });
  const dispatch = useDispatch();
  if (data?.length > 0) {
    dispatch(setAllTopics(data));
  }
  return { allTopics: data, isLoading, isError, error };
};

export const useGetTopicsByCourseId = (courseId) => {
  const topics: CourseTopic[] = useSelector((state: RootState) => {
    return state?.topics?.allTopics?.filter((topic) => topic.id === courseId);
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
