import Header from "../components/header";
import Task from "../components/task";

export default function Home() {
  return (
    <h1 className="bg-[#FCFCFC] min-h-screen w-screen">
      <div className="top-0 sticky">
        <Header />
      </div>
      <div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
        <div className="mt-10">
          <Task />
        </div>
      </div>
    </h1>
  )
}
