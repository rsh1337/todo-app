import Header from "../components/header";
import Task from "../components/task";

export default function Home() {
  return (
    <h1 className="bg-[#F6F6F6] h-screen w-screen fixed">
      <div>
      <Header/>
      </div>
      <div className="mt-10">
      <Task/>
      </div>
    </h1>
  )
}
