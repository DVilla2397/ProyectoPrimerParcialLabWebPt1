import React, {useEffect, useRef, useState} from "react";
import './clock.css';
import './App.css';
import { useNavigate } from "react-router-dom";

export const Clock = () => {
    const[timerDays, setTimerDays] = useState('00');
    const[timerHours, setTimerHours] = useState('00');
    const[timerMinutes, setTimerMinutes] = useState('00');
    const[timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const CountdownDate = new Date('Dec 24, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = CountdownDate - now;
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            }else{
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    
    const navigate = useNavigate();

    return(
    <section className="timer-container">
        <section className="timer">
        <div>
        <button className="boton-home" onClick={()=>navigate("/")}>Home</button>
            <span className="mdi mdi-calendar-clock timer-icon">
            <h2>Todavia no es tiempo.</h2> 
            <p>Para que empiece la rifa faltan:</p>
            </span>
        </div>
        <div>
            <section>
                <p>{timerDays}</p>
                <p><small>Días</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerHours}</p>
                <p><small>Horas</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerMinutes}</p>
                <p><small>Minutos</small></p>
            </section>
            <span>:</span>
            <section>
                <p>{timerSeconds}</p>
                <p><small>Segundos</small></p>
            </section>
        </div>
        </section>
    </section>
    );
};