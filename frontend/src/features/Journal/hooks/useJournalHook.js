import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate } from "react-router";
import { fetchApi } from "../apis/fetchApi";
import { deleteEntryApi } from "../apis/DeleteEntryApi";

export const useJournalHook = (entry) => {
  let navigate = useNavigate();
  let location = useLocation();

  let { data, isPending, refetch } = useQuery({
    queryKey: ["entries"],
    queryFn: fetchApi,
  });
  let deleteFn = async (id) => {
    deleteEntryApi(id);
    refetch();
  };
  let openEntryDetailFn = () => {
    navigate(`/home/entry/${entry._id}`);
  };
  return { data, isPending, navigate, deleteFn, openEntryDetailFn, location };
};
