const TimeRender = ({ dateObj }) => {
    const [hours, minutes, seconds] = dateObj.toDate().toLocaleTimeString().split(":");
    console.log(dateObj.toDate().toLocaleTimeString().split(":"), "here is the data")
    const date = new Date();
    date.setUTCHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);

    return (
        <div className="flex justify-between text-gray-600 dark:text-gray-300/50 " >
            <p className="text-[.65rem] xs:text-[0.7rem] md:text-xs" >{dateObj.toDate().toLocaleDateString()}</p>
            <p className=" text-[.65rem] xs:text-[0.7rem] md:text-xs" >{dateObj.toDate().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
        </div>
    )
}

export default TimeRender