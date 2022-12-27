import React, { useState } from 'react';
import moment from 'moment';
import Calculator from './Calculator';

function useTime() {
  const [time, setTime] = useState(Date.now());
  setInterval(() => setTime(Date.now()), 60000);
  return time;
}

export default function Iphone() {
  const time = useTime();

  function getTimeString(format: string) {
    return moment(new Date(time)).format(format);
  }

  return (
    <div className="h-96">
      <div className="absolute top-[50%] flex h-96 w-full translate-y-[-50%] items-center justify-center">
        <img
          src="https://www.apple.com/v/iphone-14/d/images/overview/chip/chip_a15_hw__dpj1gy8f1sqe_large.png"
          className="right-0 z-50 h-[70%] w-auto rotate-90"
          alt=""
        />
      </div>
      <div className="absolute top-[50%] -z-10 flex w-full translate-y-[-50%] items-center justify-center">
        <div className="h-[533px] w-[258px] rounded-[33px] bg-black">
          <span className="absolute ml-[32px] mt-[8px] font-apple text-[12px] font-medium tracking-wider text-white">
            {getTimeString('H')}
            <span className="align-text-bottom">:</span>
            {getTimeString('mm')}
          </span>
          <span className="absolute">
            <div
              className="ml-[164px] h-[30px] w-[80px] bg-cover bg-no-repeat"
              style={{ backgroundImage: 'url("./images/signals.png")' }}
            ></div>
          </span>
          <Calculator />
        </div>
      </div>
    </div>
  );
}
