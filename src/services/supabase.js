import { createClient } from "@supabase/supabase-js";

const projectUrl = "https://mjxhdokabhvjtzmvpjjs.supabase.co";
const projectKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qeGhkb2thYmh2anR6bXZwampzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMwMzU0NzksImV4cCI6MjAyODYxMTQ3OX0.kSDUUzVbY-KRwuj-PeWYECcbDXlJkLk71WtPah2D350";
const supabase = createClient(projectUrl, projectKey);

export default supabase;
