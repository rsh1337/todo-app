export default function Task({task}) {
    return (
        <div className="flex flex-row rounded-lg shadow-md h-[60px] items-center mx-10">
            <div className="pl-5 pr-5 pt-4 pb-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7.5" fill="#FAFAFA" stroke="#B3B3B3" />
            </svg>
            </div>
            <div>
                <h1 className="font-thin">
                    {task}
                </h1>
            </div>
        </div>
    )
}