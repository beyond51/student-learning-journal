import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { updateProfileApi } from "../apis/UpdateDetailsApi";
import toast from "react-hot-toast";

export const useProfileHook = () => {
  const [isEdit, setIsEdit] = useState(false);
  let { user } = useSelector((store) => store.user);
  const [student, setStudent] = useState({
    studentName: user.studentName || "",
    studentEmail: user.studentEmail || "",
    course: user.course || "",
    semesterYear: user.semesterYear || "",
    phoneNumber: user.phoneNumber || "",
    profileImage: user.profileImage,
  });

  const handleChange = (e) => {
    let { name, value, files } = e.target;
    setStudent({
      ...student,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };
  let mutation = useMutation({
    mutationFn: (formdata) => updateProfileApi(formdata),
    onSuccess: () => {
      toast.success("profile updated successfully", {
        style: {
          backgroundColor: "#22c55e",
          color: "white",
          width: "320px",
          fontSize: "16px",
          padding: "16px",
          borderRadius: "10px",
        },
      });
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    Object.keys(student).forEach((key) => {
      formdata.append(key, student[key]);
    });
    mutation.mutate(formdata);
    setIsEdit(false);
  };

  return {
    student,
    setStudent,
    isEdit,
    setIsEdit,
    user,
    handleChange,
    handleSubmit,
  };
};
