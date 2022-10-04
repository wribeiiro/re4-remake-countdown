const DisplayTimer = ({ value, type }) => {
    return (
        <div className="countdown">
            <p>{value}</p>
            <span>{type}</span>
        </div>
    );
};

export default DisplayTimer;
