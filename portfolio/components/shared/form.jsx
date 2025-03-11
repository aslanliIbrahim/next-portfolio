export default function Form() {
  return (
    <form className="mb-16" id="form">
      <div className="bg-[#F9F9F9] p-8 max-w-4xl mx-auto rounded shadow-sm">
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-gray-700 mb-2 leading-7">
            Looking for help with design
          </h3>
          <p className="font-light text-gray-400 leading-7">Send me details</p>
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="detail" className="block mb-2 text-gray-700">
            Detail
          </label>
          <textarea
            id="detail"
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-300 bg-white"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="text-gray-700 underline  underline-offset-1 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
