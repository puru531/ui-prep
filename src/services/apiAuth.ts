import { useMutation, useQuery } from "@tanstack/react-query";
import supabase from "./supabase";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      console.log("login successful", user);
      navigate("/admin");
    },
    onError: (err) => {
      console.error("ERROR", err);
    },
  });

  return { login, isLoading };
}

async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
}

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUserApi,
  });
  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}

async function getCurrentUserApi() {
  const { data, error } = await supabase.auth.getUser();
  if (!data?.user) return null;

  if (error) throw new Error(error.message);
  return data?.user;
}
