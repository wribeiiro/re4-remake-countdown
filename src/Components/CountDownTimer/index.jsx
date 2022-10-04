import "./style.css";
import DisplayTimer from "../DisplayTimer";
import useCountDown from "../../Hooks/useCountdown";

const GameWasReleased = () => {
    return (
        <div className="expired-notice">
            <span>Boooooooom!!!</span>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <a
                href="https://wribeiiro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="countdown-link"
            >
                <DisplayTimer
                    value={days}
                    type={"Days"}
                />

                <DisplayTimer
                    value={hours}
                    type={"Hours"}
                />

                <DisplayTimer
                    value={minutes}
                    type={"Minutes"}
                />

                <DisplayTimer
                    value={seconds}
                    type={"Seconds"}
                />
            </a>
        </div>
    );
};

const CountDownTimer = ({ data }) => {
    const [days, hours, minutes, seconds] = useCountDown(data);

    if (days + hours + minutes + seconds <= 0) {
        return <GameWasReleased/>;
    }

    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );
};

export default CountDownTimer;
