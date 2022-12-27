import React from 'react';

export default function Calculator() {
  return (
    <div className="absolute top-[50%] left-[50%] z-40 translate-y-[-50%] translate-x-[-50%] text-center text-white">
      <div className="text-right font-apple text-3xl">0</div>
      <div className="grid grid-flow-row grid-cols-4 gap-4">
        <div>AC</div>
        <div
          style={{ backgroundImage: 'url("/images/symbol.png")' }}
          className="w-[20px] items-center text-center"
        ></div>
        <div>%</div>
        <div>÷</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>&times;</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>-</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>+</div>
        <div className="col-span-2 text-left">0</div>
        <div>.</div>
        <div>=</div>
      </div>
    </div>
  );
}
