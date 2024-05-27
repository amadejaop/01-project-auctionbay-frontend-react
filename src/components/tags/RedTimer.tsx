interface TimerProps {
  time: string;
}

export default function RedTimer(props: TimerProps) {
  return (
    <>
      <p className="redtimer-tag">
        {props.time}{" "}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.12 2.88C6.535 2.295 5.77 2 5 2V5L2.88 7.12C4.05 8.29 5.95 8.29 7.125 7.12C8.295 5.95 8.295 4.05 7.12 2.88ZM5 0C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10C7.76 10 10 7.76 10 5C10 2.24 7.76 0 5 0ZM5 9C2.79 9 1 7.21 1 5C1 2.79 2.79 1 5 1C7.21 1 9 2.79 9 5C9 7.21 7.21 9 5 9Z"
            fill="#071015"
          />
        </svg>
      </p>
    </>
  );
}
