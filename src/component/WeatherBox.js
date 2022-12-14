import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons';

const WeatherBox = ({ weather, icon }) => {
    console.log('웨더 정보 확인', weather);
    /* 오늘 날짜 데이터 함수 */
    const todayData = () => {
        let now = new Date();
        let todayMonth = now.getMonth() + 1 > 9 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);
        let todayDate = now.getDate() > 9 ? now.getDate() : '0' + now.getDate();
        return todayMonth + '-' + todayDate;
    };
    return (
        <div className="weather_box">
            <div className="today">{todayData()}</div>
            <div className="location_wrap">
                <div className="location">{weather?.name}</div> {/* weather가 참이면 실행 (삼항연산자의 또다른 표기법) */}
            </div>
            <div className="weather_data_text">
                <h2 className="temp">{Math.round(weather && weather?.main.temp)}º</h2>
                <div className="weather_data_box">
                    <h2 className="feels_like">
                        <FontAwesomeIcon icon={faTemperatureHalf} /> min {Math.round(weather && weather?.main.temp_min)}º / max {Math.round(weather && weather?.main.temp_max)}º{' '}
                    </h2>
                    <h2 className="humidity">
                        <FontAwesomeIcon className="faDroplet" icon={faDroplet} /> humidity {weather && weather?.main.humidity}%{' '}
                    </h2>
                </div>
                <h3 className="weather_description">{weather && weather?.weather[0].main}</h3>
                <h3 className="weather_icon">
                    <img className="icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
                </h3>
            </div>
        </div>
    );
};

export default WeatherBox;