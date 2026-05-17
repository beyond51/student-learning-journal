import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { createEntryApi } from "../apis/createEntryApi";

export const useCreateEntryHook = (reset) => {
  let navigate = useNavigate();

  let mutation = useMutation({
    mutationFn: (e) => createEntryApi(e),
    onSuccess: () => {
      toast.success("entry created successfully", {
        style: {
          backgroundColor: "#22c55e",
          color: "white",
          width: "320px",
          fontSize: "16px",
          padding: "16px",
          borderRadius: "10px",
        },
      });
      navigate("/home/journal");
    },
  });
  const submitform = (e) => {
    mutation.mutate(e);
    reset();
  };

  return { mutation, submitform };
};
