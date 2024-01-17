export default function Test2() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-between p-4">
        <h2 className="text-2xl font-bold">title</h2>
        <p className="text-base">description</p>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Button
        </button>
      </div>
      <img
        src="https://i.imgur.com/I4dsioZ.png"
        alt="{title}"
        className="w-1/2"
      />
    </div>
  );
}
