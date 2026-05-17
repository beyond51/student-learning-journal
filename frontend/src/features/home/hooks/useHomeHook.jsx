import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { fetchStatsApi } from "../apis/fetchStatsApi";

export const useHomeHook = () => {
  let navigate = useNavigate();

  let { data, isPending } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStatsApi,
    staleTime: 5000,
  });

  const openEntryDetailsFn = (entry) => {
    navigate(`/home/entry/${entry._id}`);
  };
  return { navigate, data, openEntryDetailsFn, isPending };
};
