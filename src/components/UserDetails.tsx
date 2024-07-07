import {
  checkBoxCircleStyle,
  checkBoxStyle,
  inputStyle,
} from "../constants/formStyle.ts";

export const UserDetails: React.FC = () => {
  return (
    <div className="max-w-full p-4 h-64 md:h-52 overflow-y-scroll">
      <form className="bg-white ">
        <div className="mb-4">
          <label className="block mb-2">
            <span className="text-red-500"> *</span> I am:
          </label>
          <div className="flex items-center mb-4 md:space-x-16  ">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="owner"
              >
                <input
                  name="type"
                  type="radio"
                  defaultChecked
                  className={`${checkBoxStyle}`}
                  id="owner"
                />
                <span className={`${checkBoxCircleStyle}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none"
                htmlFor="owner"
              >
                Owner
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor="builder"
              >
                <input
                  name="type"
                  type="radio"
                  className={`${checkBoxStyle}`}
                  id="builder"
                />
                <span className={`${checkBoxCircleStyle}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none"
                htmlFor="builder"
              >
                Builder
              </label>
            </div>
          </div>
        </div>
        <div className="md:w-4/6">
          <div className="mb-4 ">
            <label className="block    mb-2">
              Your Name <span className="text-red-500"> *</span>
            </label>
            <input className={`${inputStyle}`} type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">
              Country <span className="text-red-500"> *</span>
            </label>
            <select className={`${inputStyle}`}>
              <option>India</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block    mb-2">
              Phone <span className="text-red-500"> *</span>
            </label>
            <div className="flex">
              <select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>+91</option>
              </select>
              <input
                className={`${inputStyle}`}
                type="text"
                placeholder="000-000-0000"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">OR</label>
            <div className="mb-4">
              <label className="block    mb-2">
                Email <span className="text-red-500"> *</span>
              </label>
            </div>
            <input
              className={`${inputStyle}`}
              type="email"
              placeholder="email"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
