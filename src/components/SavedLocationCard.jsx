import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { BsCloudRainHeavy } from "react-icons/bs";

function SavedLocationCard({ theme, locationObj }) {
  let time = JSON.stringify(locationObj) !== "{}" ? locationObj.time : "";
  time = time && time.match(/\d{1,2}:\d{2}/)[0];

  let currentTime =
    JSON.stringify(locationObj) !== "{}" ? locationObj.time : "";
  currentTime = currentTime && currentTime.match(/\d{1,2}:/)[0].split(":")[0];

  let pastHours =
    JSON.stringify(locationObj) !== "{}" ? locationObj.sunrise : "";
  pastHours = pastHours && pastHours.match(/\d{1,2}:/)[0].split(":")[0];

  let toHours = JSON.stringify(locationObj) !== "{}" ? locationObj.sunset : "";
  toHours = toHours && Number(toHours.match(/\d{1,2}:/)[0].split(":")[0]) + 12;

  let sunriseHours = Number(currentTime) - Number(pastHours);
  let sunsetHours = Number(toHours) - Number(currentTime);

  return (
    <div className={`saved-location-card ${theme}`}>
      {JSON.stringify(locationObj) !== "{}" ? (
        <div className="saved-location-card-content">
          <div className="city-time">
            <div className="city">
              <h2>{locationObj.city}</h2>
              <p>
                {locationObj.region},{locationObj.country}
              </p>
            </div>
            <div className="time">{time}</div>
          </div>
          <div className="temp-condition-text">
            <img src={`${locationObj.condition.icon}`} />
            <div className="temp-text">
              <div className="temp">°C</div>
              <div className="condition-text">{locationObj.condition.text}</div>
            </div>
          </div>
          <div className="line"></div>
          <div className="chance-of-rain">
            <h4>Chance of rain</h4>
            <div className="chance-of-rain-info">
              <BsCloudRainHeavy id="chance-of-rain-icon" />
              <div>{locationObj.chance_of_rain}%</div>
            </div>
          </div>
          <div className="sunrise-sunset">
            <h4>Sunrise & Sunset</h4>
            <div className="sunrise">
              <div className="sun-icon-info">
                <WiSunrise id="sunrise-icon" />

                <div className="sunrise-info">
                  <h5>Sunrise</h5>
                  <div>{locationObj.sunrise}</div>
                </div>
              </div>
              <div>{sunriseHours} hours ago</div>
            </div>
            <div className="sunset">
              <div className="set-icon-info">
                <TbSunset2 id="sunset-icon" />

                <div className="sunset-info">
                  <h5>Sunset</h5>
                  <div>{locationObj.sunset}</div>
                </div>
              </div>
              <div>{sunsetHours} hours to go</div>
            </div>
          </div>
        </div>
      ) : (
        <div>No location data to show</div>
      )}
    </div>
  );
}
export default SavedLocationCard;
