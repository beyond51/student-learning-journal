import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { editentryApi } from "../apis/EditEntryApi";

export const useEditModelHook = (existEntryData, editEntryFn) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    topic: existEntryData?.topic || "",
    description: existEntryData?.description || "",
    duration: existEntryData?.duration || "",
    difficulty: existEntryData?.difficulty || "easy",
    date: existEntryData?.date || "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let mutation = useMutation({
    mutationFn: () => editentryApi(existEntryData._id, formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["entries"] });
      queryClient.invalidateQueries({ queryKey: ["entry"] });
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate();
    editEntryFn(null);
  };
  return { handleChange, handleSubmit, formData };
};
