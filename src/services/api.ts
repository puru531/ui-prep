import supabase from "./supabase";
export async function getTopics() {
  try {
    const { data: topics, error } = await supabase.from("topics").select("*");

    if (error) throw Error;
    return topics;
  } catch (error) {
    console.error(error);
  }
}
