export default function AddThoughts() {
  return (
    <div className="w-1/2 h-14 flex flex-row justify-between gap-4">
      <input type="text" className="w-full px-5 text-xl text-black border rounded-xl" />
      <button className="w-16 px-4 flex items-center justify-center text-xl text-black font-semibold bg-white border hover:border-2 hover:border-blue-400 rounded-xl">
        Add
      </button>
    </div>
  );
}
