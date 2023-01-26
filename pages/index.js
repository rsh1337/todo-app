import { useEffect, useState } from "react";
import Header from "../components/header";
import Task from "../components/task";
import { Modal, ModalBody, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDetails, setNewTaskDetails] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        console.log(storedTasks)
        setTasks(storedTasks);
      }
    }
  }, []);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: newTaskName,
      details: newTaskDetails,
      checked: false,
    }
    setTasks([...tasks, newTask]);
    setNewTaskName("");
    setNewTaskDetails("");
  }
  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  const handleCheck = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        task.checked = !task.checked;
      }
      console.log(task.checked)
      return task;
    });
    setTasks(updatedTasks);
  }
  const handleDeleteChecked = () => {
    const updatedTasks = tasks.filter((task) => !task.checked);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  return (
    <div className="bg-[#FCFCFC] h-screen w-screen">
      <div className="top-0 sticky">
        <Header />
      </div>
      <div className="flex justify-end fixed bottom-0 w-screen">
        <button className="mr-6 mb-10 bg-[#F6F6F6] rounded-full p-3" onClick={onOpen}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M12 16V8M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mt-5">
                <input className="focus:rounded-md focus:border-[0px] font-thin mx-7" value={newTaskName} onChange={e => setNewTaskName(e.target.value)} placeholder="Task name" />
                <div className="flex justify-center">
                  <h1 className="font-light text-[#737373] text-xs">Details</h1>
                </div>
                <textarea className="mx-7 rounded-lg font-thin bg-[#F6F6F6] min-h-[60px]" value={newTaskDetails} onChange={e => setNewTaskDetails(e.target.value)} placeholder="Task details" />
              </div>
              <div className="flex flex-row justify-between">
                <button className="bg-[#F6F6F6] py-[10px] px-2 text-sm font-medium rounded-md flex flex-row items-center transition-all ml-7 mt-3" type="button" onClick={onClose}>
                  <svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.16669 9.86416C8.05586 9.86416 7.94502 9.82333 7.85752 9.73583L5.54753 7.42583C5.46616 7.3435 5.42053 7.23241 5.42053 7.11666C5.42053 7.00091 5.46616 6.88982 5.54753 6.80749C5.71669 6.63833 5.99669 6.63833 6.16586 6.80749L8.47586 9.11749C8.64502 9.28666 8.64502 9.56666 8.47586 9.73583C8.38836 9.81749 8.27752 9.86416 8.16669 9.86416Z" fill="#575757" />
                    <path d="M5.83335 9.88751C5.72252 9.88751 5.61169 9.84667 5.52419 9.75917C5.44282 9.67684 5.39719 9.56576 5.39719 9.45001C5.39719 9.33425 5.44282 9.22317 5.52419 9.14084L7.83419 6.83084C8.00335 6.66167 8.28335 6.66167 8.45252 6.83084C8.62169 7 8.62169 7.28 8.45252 7.44917L6.14252 9.75917C6.05502 9.84667 5.94419 9.88751 5.83335 9.88751ZM8.16669 3.93751H5.83335C5.27335 3.93751 4.22919 3.93751 4.22919 2.33334C4.22919 0.729172 5.27335 0.729172 5.83335 0.729172H8.16669C8.72669 0.729172 9.77085 0.729172 9.77085 2.33334C9.77085 2.89334 9.77085 3.93751 8.16669 3.93751ZM5.83335 1.60417C5.25585 1.60417 5.10419 1.60417 5.10419 2.33334C5.10419 3.06251 5.25585 3.06251 5.83335 3.06251H8.16669C8.89585 3.06251 8.89585 2.91084 8.89585 2.33334C8.89585 1.60417 8.74419 1.60417 8.16669 1.60417H5.83335Z" fill="#575757" />
                    <path d="M8.75 13.2708H5.25C1.97167 13.2708 1.3125 11.7658 1.3125 9.33333V5.83333C1.3125 3.17333 2.275 2.03583 4.64333 1.91333C4.88833 1.90167 5.0925 2.0825 5.10417 2.3275C5.11583 2.5725 4.92917 2.77083 4.69 2.7825C3.03333 2.87583 2.1875 3.37167 2.1875 5.83333V9.33333C2.1875 11.4917 2.61333 12.3958 5.25 12.3958H8.75C11.3867 12.3958 11.8125 11.4917 11.8125 9.33333V5.83333C11.8125 3.37167 10.9667 2.87583 9.31 2.7825C9.1943 2.77542 9.08601 2.72313 9.00853 2.63692C8.93104 2.5507 8.89056 2.43747 8.89583 2.32167C8.9075 2.0825 9.1175 1.89583 9.35667 1.9075C11.725 2.03583 12.6875 3.17333 12.6875 5.8275V9.3275C12.6875 11.7658 12.0283 13.2708 8.75 13.2708Z" fill="#575757" />
                  </svg>
                  Cancel
                </button>
                <button className="bg-[#F6F6F6] py-[10px] px-2 text-sm font-medium rounded-md flex flex-row items-center transition-all mr-7 mt-3" type="submit" onClick={onClose}>
                  <svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.57666 10.9375C5.33749 10.9375 5.13916 10.7392 5.13916 10.5V7.58333C5.13916 7.34416 5.33749 7.14583 5.57666 7.14583C5.81583 7.14583 6.01416 7.34416 6.01416 7.58333V10.5C6.01416 10.7392 5.81583 10.9375 5.57666 10.9375Z" fill="#575757" />
                    <path d="M6.99998 9.47917H4.08331C3.84415 9.47917 3.64581 9.28084 3.64581 9.04167C3.64581 8.8025 3.84415 8.60417 4.08331 8.60417H6.99998C7.23915 8.60417 7.43748 8.8025 7.43748 9.04167C7.43748 9.28084 7.23915 9.47917 6.99998 9.47917ZM4.66665 3.35417C4.42748 3.35417 4.22915 3.15584 4.22915 2.91667V1.16667C4.22915 0.927505 4.42748 0.729172 4.66665 0.729172C4.90581 0.729172 5.10415 0.927505 5.10415 1.16667V2.91667C5.10415 3.15584 4.90581 3.35417 4.66665 3.35417ZM9.33331 3.35417C9.09415 3.35417 8.89581 3.15584 8.89581 2.91667V1.16667C8.89581 0.927505 9.09415 0.729172 9.33331 0.729172C9.57248 0.729172 9.77081 0.927505 9.77081 1.16667V2.91667C9.77081 3.15584 9.57248 3.35417 9.33331 3.35417Z" fill="#575757" />
                    <path d="M5.16251 13.3058C3.72168 13.3058 2.77084 12.9908 2.17584 12.3142C1.48751 11.5383 1.37668 10.3775 1.35334 9.34501L1.27751 5.74584C1.21918 2.98667 2.13501 1.83751 4.52668 1.65667L9.21668 1.56334H9.24001C11.6375 1.64501 12.5942 2.75334 12.6525 5.51834L12.7225 9.11751C12.7458 10.15 12.6758 11.3167 12.0225 12.1158C11.4275 12.845 10.4242 13.2008 8.86668 13.2358L5.36667 13.3058H5.16251ZM9.21668 2.43251L4.56751 2.52584C2.93418 2.65417 2.10001 3.17917 2.15251 5.72834L2.22834 9.32751C2.25168 10.5642 2.43251 11.2875 2.82918 11.7367C3.27251 12.2383 4.07168 12.46 5.35501 12.4308L8.85501 12.3608C10.1325 12.3375 10.9258 12.0808 11.3517 11.5617C11.7308 11.1008 11.8825 10.3717 11.8533 9.13501L11.7833 5.53584C11.725 2.99251 10.8733 2.49084 9.21668 2.43251Z" fill="#575757" />
                  </svg>
                  Create
                </button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <div className="ml-10 mt-5">
        <button className="bg-[#F6F6F6] py-[10px] px-2 text-sm font-medium rounded-md flex flex-row items-center transition-all" onClick={handleDeleteChecked}>
          <svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.25 3.92584H12.2033C9.11751 3.61667 6.03751 3.50001 2.98668 3.80917L1.79668 3.92584C1.73879 3.93188 1.68028 3.92638 1.62453 3.90967C1.56878 3.89296 1.51689 3.86537 1.47187 3.82848C1.42685 3.7916 1.38958 3.74615 1.36223 3.69478C1.33488 3.6434 1.31798 3.58712 1.31251 3.52917C1.28918 3.28417 1.46418 3.07417 1.70335 3.05084L2.89335 2.93417C5.99668 2.61917 9.14084 2.74167 12.2908 3.05084C12.53 3.07417 12.705 3.29001 12.6817 3.52917C12.6729 3.63749 12.6235 3.73849 12.5435 3.81202C12.4635 3.88555 12.3587 3.9262 12.25 3.92584Z" fill="#575757" />
            <path d="M4.95832 3.33667C4.93499 3.33667 4.91166 3.33667 4.88249 3.33084C4.76932 3.31044 4.66865 3.24648 4.60212 3.15268C4.53559 3.05888 4.50849 2.94273 4.52666 2.82917L4.65499 2.06501C4.74833 1.50501 4.87666 0.729172 6.23582 0.729172H7.76416C9.12916 0.729172 9.25749 1.53417 9.34499 2.07084L9.47332 2.82917C9.51416 3.06834 9.35082 3.29584 9.11749 3.33084C8.87832 3.37167 8.65083 3.20834 8.61583 2.975L8.48749 2.21667C8.40583 1.70917 8.38832 1.61001 7.76999 1.61001H6.24166C5.62332 1.61001 5.61166 1.69167 5.52416 2.21084L5.38999 2.96917C5.37337 3.0717 5.32082 3.16497 5.24174 3.2323C5.16265 3.29963 5.06219 3.33662 4.95832 3.33667ZM8.87249 13.272H5.12749C3.09166 13.272 3.00999 12.1462 2.94583 11.2362L2.56666 5.36201C2.54916 5.12284 2.73583 4.91284 2.97499 4.89534C3.21999 4.88367 3.42416 5.06451 3.44166 5.30367L3.82083 11.1778C3.88499 12.0645 3.90832 12.397 5.12749 12.397H8.87249C10.0975 12.397 10.1208 12.0645 10.1792 11.1778L10.5583 5.30367C10.5758 5.06451 10.7858 4.88367 11.025 4.89534C11.2642 4.91284 11.4508 5.11701 11.4333 5.36201L11.0542 11.2362C10.99 12.1462 10.9083 13.272 8.87249 13.272Z" fill="#575757" />
            <path d="M7.96832 10.0625H6.02582C5.78666 10.0625 5.58832 9.86417 5.58832 9.62501C5.58832 9.38584 5.78666 9.18751 6.02582 9.18751H7.96832C8.20749 9.18751 8.40582 9.38584 8.40582 9.62501C8.40582 9.86417 8.20749 10.0625 7.96832 10.0625ZM8.45832 7.72917H5.54166C5.30249 7.72917 5.10416 7.53084 5.10416 7.29167C5.10416 7.05251 5.30249 6.85417 5.54166 6.85417H8.45832C8.69749 6.85417 8.89582 7.05251 8.89582 7.29167C8.89582 7.53084 8.69749 7.72917 8.45832 7.72917Z" fill="#575757" />
          </svg>
          Delete Checked
        </button>
      </div>
      <div className="mb-10">
        {tasks.map((task, index) => (
          <div className="mt-5 mb-10" key={index}>
            <Task name={task.name} details={task.details} deletetask={() => handleRemove(index)} checked={task.checked} ischecked={() => handleCheck(index)} />
          </div>
        ))}
      </div>
    </div>
  )
}
