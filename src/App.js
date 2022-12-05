import "./App.css";
import { useState, useEffect } from "react";

function App() {
  let key = "a478c9e5a50807e7ef1ec861961c0739";
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");
  const [map, setMap] = useState(
    "https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
  );

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${key}`;
      const response = await fetch(URL);
      const data = await response.json();
      setCity(data.main);
      setMap(
        `https://maps.google.com/maps?q=${search}&t=&z=13&ie=UTF8&iwloc=&output=embed`
      );
    };
    fetchApi();
  }, [search]);
  return (
    <div className="main">
      <div className="App">
        <div>
          <input
            type="text"
            className="inputTxt"
            placeholder="Search"
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div>
              <h1>
                <i class="fa-solid fa-street-view"></i>
                {search}
              </h1>
              <h2>{city.temp}°C</h2>
              <h4>
                Min-{city.temp_min}°C || Max-{city.temp_max}°C
              </h4>
              <p className="humidity">Humidity-{city.humidity}</p>
            </div>
            <div className="map">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="306"
                    height="336"
                    id="gmap_canvas"
                    src={map}
                    // src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=11&ie=UTF8&iwloc=&output=embed"
                    // src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
