import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import timerIcon from '../../assets/timer.svg';

interface Props {
  text: string;
}

const Greeting = ({ text }: Props) => {
  const [msg, setMsg] = useState('location');

  return (
    <div className="flex flex--column flex--justify-center flex--align-center">
      <h1>Nick&apos;s Timer</h1>
      <img id="logo" alt="Timer icon" src={timerIcon} />
      {msg}
      <Link className="button cta" to="/timer">
        Go to Timer
      </Link>
    </div>
  );
};

export default Greeting;
