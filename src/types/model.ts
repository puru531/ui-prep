export type CourseTopic = {
  id: number;
  name: string;
  course_id: number;
};
export type Course = {
  id: number;
  name: string;
  image: string;
  route: string;
};
export type Questions = {
  id?: number;
  topic_id?: number;
  question: string;
  answer: string;
};
export type RootState = {
  topics: {
    allTopics: CourseTopic[];
    currentTopic: CourseTopic;
  };
  courses: {
    allCourses: Course[];
  };
  // other slices of state...
};
