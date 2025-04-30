import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/items";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: getUsers,
    refetchOnWindowFocus: false
  });
};
