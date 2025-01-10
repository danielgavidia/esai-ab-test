const LandingPage = () => {
  const navButtons = ["For Schools", "Internship", "FAQ", "Blog", "Get AI Certified"];
  return (
    <div className="w-full p-4">
      {/* Navbar */}
      <div className="flex items-center justify-between border-[0.5px] rounded-3xl p-2">
        {/* Nav buttons */}
        <div className="flex space-x-3 flex-1">
          {navButtons.map((b, i) => (
            <p key={i} className="text-sm">
              {b}
            </p>
          ))}
        </div>
        {/* Logo */}
        <div className="">
          <img
            src="https://www.esai.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4b6d8299.png&w=1080&q=75"
            alt="ESAI LOGO"
            className="w-24"
          />
        </div>
        {/* Join button */}
        <div className="flex-1 flex justify-end">
          <button className="rounded-3xl">Join</button>
        </div>
      </div>
      {/* Card */}
    </div>
  );
};

export default LandingPage;
