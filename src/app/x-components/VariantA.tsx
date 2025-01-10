const VariantA = () => {
  const handleClick = () => {
    console.log("User clicked on Variant A button!");
  };

  return (
    <div className="text-center p-8 border rounded shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">Welcome to Variant A!</h1>
      <p className="mb-4">This is the A/B test version A of the landing page.</p>
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Click me!
      </button>
    </div>
  );
};

export default VariantA;
