import React, { useState } from 'react';

const Jinwoo = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const onClick = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };
  return (
    <>
      <span>{time.m >= 10 ? time.m : '0' + time.m}</span>
      &nbsp;:&nbsp;
      <span>{time.s >= 10 ? time.s : '0' + time.s}</span>
      <div>
        <button onClick={onClick}>Start</button>
      </div>
    </>
  );
};

export default Jinwoo;
