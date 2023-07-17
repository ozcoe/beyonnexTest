'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Temperature from '@/components/temperature';

export default function Home() {
  const [targetTemperature, setTargetTemperature] = useState(20);
  const [min, setMin] = useState(10);
  const [max, setMax] = useState(50);
  useEffect(() => {}, [min, max, targetTemperature]);

  const handleTargetTemperatureChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(event.target.value);
    setTargetTemperature(newNumber);
  };

  const handleMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(event.target.value);
    setMin(newNumber);
  };

  const handleMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = parseInt(event.target.value);
    setMax(newNumber);
  };

  return (
    <main>
      <div>
        <label>Min Temperature</label>
        <input type='number' min={0} max={max - 1} placeholder='Min temparature' value={min} onChange={handleMinChange}></input>
        <br />
        <label>Target Temperature</label>
        <input type='number' min={0} max={100} placeholder='Target temparature' value={targetTemperature} onChange={handleTargetTemperatureChange}></input>
        <br />
        <label>Max Temperature</label>
        <input type='number' min={min + 1} max={100} placeholder='Max temparature' value={max} onChange={handleMaxChange}></input>
      </div>
      <Temperature targetTemperature={targetTemperature} min={min} max={max} />
    </main>
  );
}
