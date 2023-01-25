import { Disclosure, Transition } from '@headlessui/react'
import { useState } from 'react'

export default function Task({ task, details, deletetask }) {
    const [isShowing, setIsShowing] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="rounded-lg shadow-md mx-10">
            <Disclosure>
                <div className="flex flex-row items-center h-[60px]">
                    <div className="transition-all">
                        {
                            (() => {
                                if (isShowing) {
                                    return (
                                        <div onClick={() => { setIsShowing(!isShowing), setIsDeleting(false) }} className='px-5 py-3'>
                                            <svg width="17" height="17" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_15_7)">
                                                    <path d="M5.34916 8.65083L8.65082 5.34917M8.65082 8.65083L5.34916 5.34917M6.99999 12.8333C10.2083 12.8333 12.8333 10.2083 12.8333 7C12.8333 3.79167 10.2083 1.16667 6.99999 1.16667C3.79166 1.16667 1.16666 3.79167 1.16666 7C1.16666 10.2083 3.79166 12.8333 6.99999 12.8333Z" stroke="#B3B3B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_15_7">
                                                        <rect width="14" height="14" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            {
                                                (() => {
                                                    if (!isChecked) {
                                                        return (
                                                            <div className="px-5 py-3 transition-all" onClick={() => setIsChecked(true)}>
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="8" cy="8" r="7.5" fill="#FAFAFA" stroke="#B3B3B3" />
                                                                </svg>
                                                            </div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div className="px-5 py-3 transition-all" onClick={() => setIsChecked(false)}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                                                    <path d="M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L10.8535534,14.8535534 C10.6582912,15.0488155 10.3417088,15.0488155 10.1464466,14.8535534 L8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 C8.34170876,11.9511845 8.65829124,11.9511845 8.85355339,12.1464466 L10.5,13.7928932 L15.1464466,9.14644661 Z" fill="#FAFAFA" stroke="#B3B3B3" />
                                                                </svg>
                                                            </div>
                                                        )
                                                    }
                                                })()
                                            }
                                        </div>

                                    )
                                }
                            })()
                        }
                    </div>
                    <div className="truncate w-full">
                        {
                            (() => {
                                if (!isChecked) {
                                    return (
                                        <Disclosure.Button onClick={() => { setIsShowing((isShowing) => !isShowing), setIsDeleting(false) }} className="font-thin text-left py-3 truncate w-full transition-all">
                                            {task}
                                        </Disclosure.Button>
                                    )
                                } else {
                                    return (
                                        <Disclosure.Button onClick={() => { setIsShowing((isShowing) => !isShowing), setIsDeleting(false) }} className="font-thin text-left py-3 truncate w-full line-through transition-all">
                                            {task}
                                        </Disclosure.Button>
                                    )
                                }
                            })()
                        }
                    </div>
                </div>
                <Transition show={isShowing} className='overflow-hidden'
                    enter='transition transition-[max-height] duration-500 ease-in'
                    enterFrom='transform max-h-0'
                    enterTo='transform max-h-screen'
                    leave='transition transition-[max-height] duration-500 ease-out'
                    leaveFrom='transform max-h-screen'
                    leaveTo='transform max-h-0'>
                    <Disclosure.Panel>
                        <div className="pb-2">
                            <div className="flex justify-center">
                                <h1 className="font-light text-[#737373] text-xs">Details</h1>
                            </div>
                            <div className="mx-7 rounded-lg bg-[#F6F6F6] min-h-[60px]">
                                {
                                    (() => {
                                        if (details === "") {
                                            return (
                                                <h1 className="text-[#737373] px-2 py-1 font-thin">Is nothing here...</h1>
                                            )
                                        } else {
                                            return (
                                                <h1 className="px-2 py-1 font-thin">{details}</h1>
                                            )
                                        }
                                    })()
                                }
                            </div>
                            <div className="flex flex-row mx-7 mt-2 justify-between">
                                <div className='transition-all'>
                                    {
                                        (() => {
                                            if (!isDeleting) {
                                                return (
                                                    <button className="bg-[#F6F6F6] py-[10px] px-2 text-sm font-medium rounded-md flex flex-row items-center transition-all" onClick={() => setIsDeleting(true)}>
                                                        <svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.25 3.92584H12.2033C9.11751 3.61667 6.03751 3.50001 2.98668 3.80917L1.79668 3.92584C1.73879 3.93188 1.68028 3.92638 1.62453 3.90967C1.56878 3.89296 1.51689 3.86537 1.47187 3.82848C1.42685 3.7916 1.38958 3.74615 1.36223 3.69478C1.33488 3.6434 1.31798 3.58712 1.31251 3.52917C1.28918 3.28417 1.46418 3.07417 1.70335 3.05084L2.89335 2.93417C5.99668 2.61917 9.14084 2.74167 12.2908 3.05084C12.53 3.07417 12.705 3.29001 12.6817 3.52917C12.6729 3.63749 12.6235 3.73849 12.5435 3.81202C12.4635 3.88555 12.3587 3.9262 12.25 3.92584Z" fill="#575757" />
                                                            <path d="M4.95832 3.33667C4.93499 3.33667 4.91166 3.33667 4.88249 3.33084C4.76932 3.31044 4.66865 3.24648 4.60212 3.15268C4.53559 3.05888 4.50849 2.94273 4.52666 2.82917L4.65499 2.06501C4.74833 1.50501 4.87666 0.729172 6.23582 0.729172H7.76416C9.12916 0.729172 9.25749 1.53417 9.34499 2.07084L9.47332 2.82917C9.51416 3.06834 9.35082 3.29584 9.11749 3.33084C8.87832 3.37167 8.65083 3.20834 8.61583 2.975L8.48749 2.21667C8.40583 1.70917 8.38832 1.61001 7.76999 1.61001H6.24166C5.62332 1.61001 5.61166 1.69167 5.52416 2.21084L5.38999 2.96917C5.37337 3.0717 5.32082 3.16497 5.24174 3.2323C5.16265 3.29963 5.06219 3.33662 4.95832 3.33667ZM8.87249 13.272H5.12749C3.09166 13.272 3.00999 12.1462 2.94583 11.2362L2.56666 5.36201C2.54916 5.12284 2.73583 4.91284 2.97499 4.89534C3.21999 4.88367 3.42416 5.06451 3.44166 5.30367L3.82083 11.1778C3.88499 12.0645 3.90832 12.397 5.12749 12.397H8.87249C10.0975 12.397 10.1208 12.0645 10.1792 11.1778L10.5583 5.30367C10.5758 5.06451 10.7858 4.88367 11.025 4.89534C11.2642 4.91284 11.4508 5.11701 11.4333 5.36201L11.0542 11.2362C10.99 12.1462 10.9083 13.272 8.87249 13.272Z" fill="#575757" />
                                                            <path d="M7.96832 10.0625H6.02582C5.78666 10.0625 5.58832 9.86417 5.58832 9.62501C5.58832 9.38584 5.78666 9.18751 6.02582 9.18751H7.96832C8.20749 9.18751 8.40582 9.38584 8.40582 9.62501C8.40582 9.86417 8.20749 10.0625 7.96832 10.0625ZM8.45832 7.72917H5.54166C5.30249 7.72917 5.10416 7.53084 5.10416 7.29167C5.10416 7.05251 5.30249 6.85417 5.54166 6.85417H8.45832C8.69749 6.85417 8.89582 7.05251 8.89582 7.29167C8.89582 7.53084 8.69749 7.72917 8.45832 7.72917Z" fill="#575757" />
                                                        </svg>
                                                        Delete
                                                    </button>
                                                )
                                            } else {
                                                return (
                                                    <button className="bg-[#FF8787] py-[10px] px-2 text-sm font-medium rounded-md flex flex-row items-center transition-all" onClick={deletetask}>
                                                        Are you sure?
                                                    </button>
                                                )
                                            }
                                        })()
                                    }
                                </div>
                                <button className="bg-[#F6F6F6] py-1 px-[16.722px] text-sm font-medium rounded-md flex flex-row items-center">
                                    <svg className="mr-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_15_13)">
                                            <path d="M8.74999 13.2708H5.24999C2.08249 13.2708 0.729156 11.9175 0.729156 8.75001V5.25001C0.729156 2.08251 2.08249 0.729172 5.24999 0.729172H6.41666C6.65582 0.729172 6.85416 0.927505 6.85416 1.16667C6.85416 1.40584 6.65582 1.60417 6.41666 1.60417H5.24999C2.56082 1.60417 1.60416 2.56084 1.60416 5.25001V8.75001C1.60416 11.4392 2.56082 12.3958 5.24999 12.3958H8.74999C11.4392 12.3958 12.3958 11.4392 12.3958 8.75001V7.58334C12.3958 7.34417 12.5942 7.14584 12.8333 7.14584C13.0725 7.14584 13.2708 7.34417 13.2708 7.58334V8.75001C13.2708 11.9175 11.9175 13.2708 8.74999 13.2708Z" fill="#575757" />
                                            <path d="M4.95834 10.3186C4.60251 10.3186 4.27584 10.1903 4.03667 9.95692C3.75084 9.67109 3.62834 9.25692 3.69251 8.81942L3.94334 7.06359C3.99001 6.72526 4.21167 6.28776 4.45084 6.04859L9.04751 1.45192C10.2083 0.291091 11.3867 0.291091 12.5475 1.45192C13.1833 2.08776 13.4692 2.73526 13.4108 3.38276C13.3583 3.90776 13.0783 4.42109 12.5475 4.94609L7.95084 9.54276C7.71167 9.78192 7.27417 10.0036 6.93584 10.0503L5.18001 10.3011C5.10417 10.3186 5.02834 10.3186 4.95834 10.3186ZM9.66584 2.07026L5.06917 6.66692C4.95834 6.77776 4.83001 7.03442 4.80667 7.18609L4.55584 8.94192C4.53251 9.11109 4.56751 9.25109 4.65501 9.33859C4.74251 9.42609 4.88251 9.46109 5.05167 9.43776L6.80751 9.18692C6.95917 9.16359 7.22167 9.03526 7.32667 8.92442L11.9233 4.32776C12.3025 3.94859 12.5008 3.61026 12.53 3.29526C12.565 2.91609 12.3667 2.51359 11.9233 2.06442C10.99 1.13109 10.3483 1.39359 9.66584 2.07026Z" fill="#575757" />
                                            <path d="M11.5792 5.73416C11.5383 5.73416 11.4975 5.72833 11.4625 5.71666C10.7044 5.5008 10.014 5.09496 9.45659 4.53759C8.89922 3.98022 8.49338 3.28977 8.27751 2.53166C8.24685 2.41952 8.26146 2.29983 8.31819 2.19835C8.37493 2.09688 8.46925 2.02176 8.58085 1.98916C8.81418 1.925 9.05335 2.05916 9.11751 2.2925C9.46751 3.535 10.4533 4.52083 11.6958 4.87083C11.9292 4.935 12.0633 5.18 11.9992 5.41333C11.9467 5.61166 11.7717 5.73416 11.5792 5.73416Z" fill="#575757" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_15_13">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Edit
                                </button>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </Transition>
            </Disclosure>
        </div>
    )
}

