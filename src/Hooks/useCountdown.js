import { useEffect, useState } from "react";

const formatCounter = (time) => {
    return time.toString().padStart(2, "0");
}

const useCountDown = (data) => {
    const countDownDate = new Date(data).getTime();

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
    const SECOND = 1000;
    const MINUTE = 60 * SECOND;
    const HOUR = 60 * MINUTE;
    const DAY = 24 * HOUR;
    
    const totalDays = Math.floor(countDown / DAY);
    const totalHours = Math.floor(countDown / HOUR);
    const totalMinutes = Math.floor(countDown / MINUTE);
    const totalSeconds = Math.floor(countDown / SECOND);

    const days = totalDays;
    const hours = totalHours - totalDays * 24;
    const minutes = totalMinutes - totalHours * 60;
    const seconds = totalSeconds - totalMinutes * 60;

    return [
        formatCounter(days),
        formatCounter(hours),
        formatCounter(minutes),
        formatCounter(seconds),
    ];
};

export default useCountDown;
