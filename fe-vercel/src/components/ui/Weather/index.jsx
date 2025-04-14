import React, { useState, useEffect } from 'react';
import './Weather.css';

const translations = {
  en: {
    currentWeather: 'Current Weather',
    loading: 'Loading weather data...',
    error: {
      title: 'Error',
      apiKey: 'API key not configured in .env file',
      geolocation: 'Your browser does not support geolocation',
      checkList: 'Please check:',
      checkItems: {
        apiKey: '1. API key in .env file',
        location: '2. Browser location access',
        internet: '3. Internet connection'
      }
    },
    feels_like: 'Feels like',
    humidity: 'Humidity',
    wind: 'Wind',
    clouds: 'Clouds',
    high_temp: 'High',
    low_temp: 'Low'
  },
  vi: {
    currentWeather: 'Thời Tiết Hiện Tại',
    loading: 'Đang tải dữ liệu thời tiết...',
    error: {
      title: 'Lỗi',
      apiKey: 'API key không được cấu hình trong file .env',
      geolocation: 'Trình duyệt của bạn không hỗ trợ định vị',
      checkList: 'Vui lòng kiểm tra:',
      checkItems: {
        apiKey: '1. API key trong file .env',
        location: '2. Quyền truy cập vị trí của trình duyệt',
        internet: '3. Kết nối internet'
      }
    },
    feels_like: 'Cảm giác',
    humidity: 'Độ ẩm',
    wind: 'Gió',
    clouds: 'Mây',
    high_temp: 'Cao',
    low_temp: 'Thấp'
  },
  zh: {
    currentWeather: '当前天气',
    loading: '正在加载天气数据...',
    error: {
      title: '错误',
      apiKey: 'API密钥未在.env文件中配置',
      geolocation: '您的浏览器不支持地理定位',
      checkList: '请检查：',
      checkItems: {
        apiKey: '1. .env文件中的API密钥',
        location: '2. 浏览器位置访问权限',
        internet: '3. 网络连接'
      }
    },
    feels_like: '体感温度',
    humidity: '湿度',
    wind: '风速',
    clouds: '云量',
    high_temp: '最高温',
    low_temp: '最低温'
  }
};

const Weather = ({ language = 'en' }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const t = translations[language];

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        if (!apiKey) {
          throw new Error(t.error.apiKey);
        }

        if (!navigator.geolocation) {
          throw new Error(t.error.geolocation);
        }

        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=${language}`
          );
          
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Could not fetch weather data');
          }
          
          const data = await response.json();
          setWeather(data);
          setLoading(false);
        }, (err) => {
          throw new Error(`Location error: ${err.message}`);
        });
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeather();
  }, [language, t]);

  if (loading) {
    return (
      <div className="weather-loading">
        <div className="loading-spinner"></div>
        <p>{t.loading}</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-error">
        <i className="fas fa-exclamation-triangle"></i>
        <p>{error}</p>
        <p className="error-help">
          {t.error.checkList}
          <br />
          {t.error.checkItems.apiKey}
          <br />
          {t.error.checkItems.location}
          <br />
          {t.error.checkItems.internet}
        </p>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };

  return (
    <div className="weather-container">
      <div className="weather-header">
        <h2>{t.currentWeather}</h2>
        <p className="location">{weather.name}, {weather.sys.country}</p>
      </div>
      
      <div className="weather-content">
        <div className="weather-main">
          <img 
            src={getWeatherIcon(weather.weather[0].icon)} 
            alt={weather.weather[0].description}
            className="weather-icon"
          />
          <div className="temperature">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather-description">
            {weather.weather[0].description}
          </div>
        </div>
        
        <div className="weather-info">
          <div className="info-item">
            <i className="fas fa-temperature-high"></i>
            <span>{t.high_temp}: {Math.round(weather.main.temp_max)}°C</span>
          </div>
          <div className="info-item">
            <i className="fas fa-temperature-low"></i>
            <span>{t.low_temp}: {Math.round(weather.main.temp_min)}°C</span>
          </div>
          <div className="info-item">
            <i className="fas fa-thermometer-half"></i>
            <span>{t.feels_like}: {Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>

        <div className="weather-info">
          <div className="info-item">
            <i className="fas fa-tint"></i>
            <span>{t.humidity}: {weather.main.humidity}%</span>
          </div>
          <div className="info-item">
            <i className="fas fa-wind"></i>
            <span>{t.wind}: {weather.wind.speed} m/s</span>
          </div>
          <div className="info-item">
            <i className="fas fa-cloud"></i>
            <span>{t.clouds}: {weather.clouds.all}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather; 