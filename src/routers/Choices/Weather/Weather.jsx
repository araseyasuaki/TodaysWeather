import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Weather = ({ AreaValue, btn, btnSwitch }) => {
  const [w, setw] = useState(null);
  useEffect(() => {
    fetch(`https://weather.tsukumijima.net/api/forecast/city/${AreaValue}`)
      .then((response) => response.json())
      .then((data) => {
        setw(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, [AreaValue]);
  return (
    <main id={`${btn ? '' : 'no'}`}>
      {w ? (
        <section>
          <header>
            <img
              onClick={btnSwitch}
              src="../arrow.png"
            />
            <h3>{w.title}</h3>
          </header>

          <section className="weatherlogo">
            <img src={w.forecasts[0].image.url} />
            <ul>
              <li>{w.forecasts[0].telop}</li>
              <li>
                <p>min:{w.forecasts[0].temperature.min.celsius}°</p>
                <p>MAX:{w.forecasts[0].temperature.max.celsius}°</p>
              </li>
            </ul>
          </section>

          <section className="precipitation">
            <h3>降水確率</h3>
            <ul>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T00_06}</p>
                <p>0-6時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T06_12}</p>
                <p>6-12時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T12_18}</p>
                <p>12-18時</p>
              </li>
              <li>
                <p>{w.forecasts[0].chanceOfRain.T18_24}</p>
                <p>18-24時</p>
              </li>
            </ul>
          </section>

          <section className='notice'>
            <h3>お知らせ</h3>
            <p>{w.description.text}</p>
          </section>

          <section className="schedule">
            <ul>
              <li>
                <p>今日</p>
                <p>
                  min:{w.forecasts[0].temperature.min.celsius}°
                </p>
                <p>
                  MAX:{w.forecasts[0].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[0].image.url} />
              </li>
              <li>
                <p>明日</p>
                <p>
                  min:{w.forecasts[1].temperature.min.celsius}°
                </p>
                <p>
                  MAX:{w.forecasts[1].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[1].image.url} />
              </li>
              <li>
                <p>明後日</p>
                <p>
                  min:{w.forecasts[2].temperature.min.celsius}°
                </p>
                <p>
                MAX:{w.forecasts[2].temperature.max.celsius}°
                </p>
                <img src={w.forecasts[2].image.url} />
              </li>
            </ul>
          </section>
        </section>
      ) : (
        <p>Loading weather data...</p>
      )}
    </main>
  );
};

export default Weather;