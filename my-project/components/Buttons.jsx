const Buttons = ({ platformItems, filterItems, activePlatform }) => {
  return (
    <div className="flex justify-between hidden m-4 rounded md:block bg-stone-800">
      {platformItems.map((platform, index) => (
        <button
          key={index}
          className={`px-2 text-sm py-2 ${
            activePlatform === platform
              ? "text-white bg-stone-900 border-b border-cyan-400"
              : "text-white bg-transparent"
          }`}
          onClick={() => filterItems(platform)}>
          {platform}
        </button>
      ))}
    </div>
  );
};

export default Buttons;