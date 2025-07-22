function LoginPage() {
  return (
    <div className="bg-red-900 md:w-[100%] md:h-[100vh] p-3 text-center md-flex md-flex-col">
      <div>
        <img
          src="/images/"
          className="h-134 object-fill md:w-[100%] md:h-[50px] o"
          alt="banner"
        />
      </div>

      <div>
        <form>
          <input
            type="email"
            placeholder="enter name"
            className="email"
            id="email"
          />
          <input
            type="password"
            className="password"
            placeholder="password"
            id="password"
          />
          <button className="bg-red-400">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
