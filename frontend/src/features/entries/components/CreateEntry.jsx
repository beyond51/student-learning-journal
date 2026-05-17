import { useForm } from "react-hook-form";
import { useCreateEntryHook } from "../hooks/useCreateEntryHook";

const CreateEntry = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // hook
  let { mutation, submitform } = useCreateEntryHook(reset);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Journal Entry
          </h1>

          <p className="text-gray-500 mt-2">
            Document your daily learning progress
          </p>
        </div>

        <form onSubmit={handleSubmit(submitform)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Topic
              </label>

              <input
                {...register("topic", { required: true })}
                type="text"
                name="topic"
                placeholder="Enter learning topic"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Study Duration (Hours)
              </label>

              <input
                {...register("duration", { required: true })}
                type="number"
                name="duration"
                placeholder="Enter study duration"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Difficulty Level
              </label>

              <select
                {...register("difficulty", { required: true })}
                name="difficulty"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Date
              </label>

              <input
                {...register("date", { required: true })}
                type="date"
                name="date"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>

            <textarea
              {...register("description", { required: true })}
              name="description"
              rows="6"
              placeholder="Describe what you learned today..."
              className="w-full h-30 border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold transition"
          >
            Create Entry
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEntry;
