import { trackEvent } from "@/utils/trackEvent";

const VariantB = () => {
  const handleClick = () => {
    trackEvent("B", "button_click");
    console.log("User clicked on Variant B button!");
  };

  return (
    <div className="text-center p-8 border rounded shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Variant B!</h1>
      <p className="mb-4">This is the A/B test version B of the landing page.</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click me!
      </button>
    </div>
  );
};

export default VariantB;
