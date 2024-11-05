import AddThoughts from "./components/AddThoughts";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-12">
      <NavBar />
      <div className="w-full flex flex-col items-center gap-8">
        <p className="text-xl">Dump your thoughts and ideas and watch AI categorize them for you.</p>
        <AddThoughts />
      </div>
      <Categories />
    </div>
  );
}
