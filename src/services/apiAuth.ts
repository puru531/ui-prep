import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import supabase from "./supabase";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
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

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries(); //delete all queries from react query cache
      navigate("/", { replace: true });
    },
  });
  return { logout, isLoading };
}

async function logoutApi() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
