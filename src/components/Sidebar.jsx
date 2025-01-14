import { RiDashboardLine } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

function Sidebar({
  theme,
  savedLocations,
  changeLocation,
  handleDeleteSavedLocation,
}) {
  return (
    <div className={`Sidebar ${theme}`}>
      <div className="logo">
        <div className="loader"></div>
        <h3>Weather Travel App</h3>
      </div>
      <div className="dashboard-saved">
        <div className="dashboard">
          <RiDashboardLine />
          Dashboard
        </div>
        <div className="saved">
          <div className="saved-btn">
            <FaHistory />
            Saved Locations
          </div>
          <div className="sub-menu">
            {savedLocations.length > 0 ? (
              <ul>
                {savedLocations.map((location, i) => (
                  <li key={i} onClick={() => changeLocation(location)}>
                    <p>{location}</p>
                    <span
                      className="location-delete"
                      onClick={() => handleDeleteSavedLocation(location)}
                    >
                      <TiDelete />
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No saved locations.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
