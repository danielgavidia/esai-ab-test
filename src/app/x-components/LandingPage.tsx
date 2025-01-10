import { trackEvent } from "@/utils/trackEvent";
import { House } from "lucide-react";

interface LandingPageProps {
  variant: "A" | "B";
}

const LandingPage = ({ variant }: LandingPageProps) => {
  const navButtons = ["For Schools", "Internship", "FAQ", "Blog", "Get AI Certified"];

  const handleClick = () => {
    trackEvent(variant, "button_click");
    console.log(`User clicked on Variant ${variant} button!`);
  };

  return (
    <div className="w-full p-4 flex flex-col space-y-4">
      {/* Navbar */}
      <div className="flex items-center justify-between border-[0.5px] rounded-3xl p-2 px-8">
        {/* Nav buttons */}
        <div className="flex space-x-3 flex-1 font-semibold">
          <House />
          {navButtons.map((b, i) => (
            <div key={i} className="text-sm flex items-center justify-center">
              {b}
            </div>
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
          <button
            onClick={handleClick}
            className="rounded-3xl border-[0.5px] p-3 w-28 text-sm bg-yellow-100 font-semibold"
          >
            Join
          </button>
        </div>
      </div>

      {/* Card */}
      <div
        className={`flex border-[0.5px] rounded-3xl p-2 ${
          variant === "A" ? "" : "flex-row-reverse"
        }`}
      >
        {/* Left Section */}
        <div className="w-1/2 p-14 h-full flex flex-col justify-between">
          <p className="text-6xl font-bold">AI-Powered Storytelling for Your Future</p>
          <p className="font-semibold">
            Applying to college? Join over 300,000 students saving time and money building their
            story with ESAI. Brainstorm topics, outline essays, edit writing, match skills to
            specific schools and more. ESAI&#39;s library of tools help you create a custom strategy
            so you can stand out, and get in!
          </p>
          <button
            onClick={handleClick}
            className="rounded-3xl border-[0.5px] p-3 w-44 text-sm bg-yellow-100 font-semibold"
          >
            Join
          </button>
        </div>
        {/* Right Section */}
        <div className="w-1/2 p-4">
          <div className="h-[500px] overflow-hidden rounded-3xl">
            <img
              src="https://strapi-aws-images.s3.us-east-1.amazonaws.com/intro_banner_281dfaa097.jpeg?w=1200&q=75"
              alt="User"
              className="w-full h-full object-cover object-[center_40%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
