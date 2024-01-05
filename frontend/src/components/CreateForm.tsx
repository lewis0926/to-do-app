import React from "react";

interface CreateFormProps {
  onSubmit: (title: string, details: string) => void;
  actionText: string;
  titleState: [string, React.Dispatch<React.SetStateAction<string>>];
  detailsState: [string, React.Dispatch<React.SetStateAction<string>>];
}
const CreateForm: React.FC<CreateFormProps> = ({
    onSubmit,
    actionText,
    titleState,
    detailsState,
  }) => {
  const [title, setTitle] = titleState;
  const [details, setDetails] = detailsState;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(title, details);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="px-4 sm:px-0">
        <h1 className="text-3xl font-bold leading-7 text-gray-900 text-center my-8">{`${actionText} To Do Task`}</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-6 border-t border-gray-100">
          <div className="my-8">
            <div className="mb-4">
              <label className="text-lg font-medium leading-6 text-gray-900">
                Title
              </label>
            </div>

            <div className="mx-auto max-w-2xl">
              <input
                type="text"
                name="title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter to do title"
              />
            </div>
          </div>
        </div>

        <div className="my-10">
          <div className="mb-4">
            <label className="text-lg font-medium leading-6 text-gray-900">
              Details
            </label>
          </div>

          <div className="mx-auto max-w-2xl min-w-[200px]">
              <textarea
                name="title"
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter details"
              />
          </div>
        </div>

        <div className="my-10">
          <button className="mt-4 sm:mt-0 bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 rounded mx-8">
            {actionText}
          </button>
          <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-1 px-3 rounded mx-8" onClick={() => window.location.href = "/"}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
