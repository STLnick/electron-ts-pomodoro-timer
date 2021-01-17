import React from 'react';
import { Link } from 'react-router-dom';
import timerIcon from '../../assets/timer.svg';

interface Props {
  name: string;
}

const Greeting = ({ name }: Props) => {
  // const [msg, setMsg] = useState('location');

  const getGreetingMessage = (): string => {
    let greetingMsg = '';
    const hours = new Date().getHours();

    if (hours >= 4 && hours < 12) {
      // 4am - 12pm
      greetingMsg = `Good morning, ${name}!`;
    } else if (hours >= 12 && hours < 17) {
      // 12pm - 5pm
      greetingMsg = `Good afternoon, ${name}!`;
    } else if (hours >= 17 && hours <= 20) {
      // 5pm - 8pm
      greetingMsg = `Good evening, ${name}!`;
    } else {
      // 8pm - 4am
      greetingMsg = `It's late, ${name}! Let's get some stuff done!`;
    }

    return greetingMsg;
  };

  return (
    <div className="flex flex--column flex--justify-center flex--align-center">
      <h1>Nick&apos;s Timer</h1>
      <img id="logo" alt="Timer icon" src={timerIcon} />
      <span className="greeting-msg">{getGreetingMessage()}</span>
      <Link className="button cta" to="/timer">
        Go to Timer
      </Link>
    </div>
  );
};

export default Greeting;
