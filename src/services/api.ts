import supabase from "./supabase";

export async function getCourses() {
  try {
    const { data: courses, error } = await supabase.from("courses").select("*");

    if (error) throw Error;
    return courses;
  } catch (error) {
    console.error(error);
  }
}

export async function getTopics() {
  try {
    const { data: topics, error } = await supabase.from("topics").select("*");

    if (error) throw Error;
    return topics;
  } catch (error) {
    console.error(error);
  }
}
export async function getTopicsContentById(topicId) {
  if (topicId === undefined) return [];
  try {
    const { data, error } = await supabase
      .from("questions")
      .select("*")
      .eq("topic_id", topicId);
    if (error) throw Error;
    return data;
  } catch (error) {
    console.error(error);
  }
}
export async function getTopicByTopicId(topicId) {
  if (topicId === undefined) return [];
  try {
    const { data, error } = await supabase
      .from("topics")
      .select("*")
      .eq("id", topicId);
    if (error) throw Error;
    return data;
  } catch (error) {
    console.error(error);
  }
}
