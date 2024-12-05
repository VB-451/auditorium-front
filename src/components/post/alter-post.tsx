import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AlterPost({alterType} : {alterType: string}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [type, setType] = useState('ANNOUNCEMENT');
    const [deadline, setDeadline] = useState(new Date());
    const [markInterval, setMarkInterval] = useState(50);

    const filterPassedTime = (time: Date) => {
        const currentDate = new Date();
        return currentDate.getTime() < time.getTime();
    };

    return (
        <div className="w-[790px] h-80 bg-white rounded-xl flex items-center justify-center">
            <div className="w-8/12 h-full pl-3 py-4 flex flex-col">
                <input type="text" placeholder="Title" className="bg-gray-100 rounded py-1 px-2 text outline-0"
                onChange={(e) => setTitle(e.target.value)} value={title}/>
                <textarea placeholder="Content" className="bg-gray-100 mt-5 rounded h-5/6 py-1 px-2 text outline-0 resize-none"
                onChange={(e) => setContent(e.target.value)} value={content}/>
            </div>
            <div className="w-4/12 h-full px-3 py-4 flex-col">
                {alterType === 'create' && (
                    <div className="h-[32px] flex justify-between items-center">
                        <button className={`text-white font-semibold py-1 px-1 rounded
                        ${type === "ANNOUNCEMENT" ? "bg-primary_green" : "bg-gray-300"}`}
                                onClick={() => {
                                    setType("ANNOUNCEMENT")
                                }}>
                            Announcement
                        </button>
                        <button className={`bg-gray-300 text-white font-semibold py-1 px-1 rounded
                        ${type === "HOMEWORK" ? "bg-primary_green" : "bg-gray-300"}`}
                                onClick={() => {
                                    setType("HOMEWORK")
                                }}>
                            Homework
                        </button>
                    </div>
                )}
                {type === "HOMEWORK" && (
                    <>
                        <p className="mt-5 text-gray-700">Deadline:</p>
                        <DatePicker
                            selected={deadline}
                            onChange={(date) => setDeadline(date)}
                            showTimeSelect
                            filterTime={filterPassedTime}
                            dateFormat="MMMM d, yyyy h:mm aa"
                            showMonthYearDropdown
                            className="w-60 bg-gray-100 rounded py-1 px-2 text-center"
                        />
                        <p className="mt-5 text-gray-700">Maximum points available: {markInterval}</p>
                        <input
                            id="slider"
                            type="range"
                            min="1"
                            max="100"
                            value={markInterval}
                            onChange={(e) => setMarkInterval(Number(e.target.value))}
                            className="w-full max-w-md h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                    </>
                )}
            </div>
        </div>
    )
}