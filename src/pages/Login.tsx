// import styles from "./index.module.css";

function Login() {
  return (
    <div className="bg-gradient-to-b from-indigo-700 to-indigo-950 h-screen flex justify-center items-center">
      <div className="bg-gray-300 p-2 w-2/4 rounded-md text-xl ">
        <h1 className="text-center text-3xl font-bold text-indigo-700">
          Sign In
        </h1>
        <form className="p-2">
          <div className="">
            <label htmlFor="username" className="block">
              Username
            </label>
            <input
              className="w-full rounded-sm"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="{styles.formGroup}">
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              className="w-full rounded-sm"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white text-xl p-3 mt-2 rounded-lg max-w-fit border-none hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
