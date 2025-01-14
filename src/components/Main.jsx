import SearchLocation from "./SearchLocation";
import SavedLocationCard from "./SavedLocationCard";
import LocationMap from "./LocationMap";
import { IoNotificationsOutline } from "react-icons/io5";

function Main({
  locationObj,
  changeLocation,
  changeTheme,
  theme,
  handleSaveLocation,
}) {
  let date = JSON.stringify(locationObj) !== "{}" ? locationObj.time : "";
  date = date && date.match(/\d{4}\-\d{1,2}\-\d{2,4}/)[0];
  let dateText = new Date(date);
  dateText = dateText.toDateString();

  return (
    <div className={`Main ${theme}`}>
      <div className="main-header">
        <div className="date">
          {dateText === "Invalid Date" ? "No date data" : dateText}
        </div>
        <SearchLocation changeLocation={changeLocation} />
        <div className="theme-symbol-save-alert">
          <button className="theme-btn" onClick={changeTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>

          <button className="save-btn" onClick={handleSaveLocation}>
            Save Location
          </button>
        </div>
      </div>
      <div className="weather-information">
        <LocationMap theme={theme} locationObj={locationObj} />
        <SavedLocationCard theme={theme} locationObj={locationObj} />
      </div>
    </div>
  );
}

export default Main;
