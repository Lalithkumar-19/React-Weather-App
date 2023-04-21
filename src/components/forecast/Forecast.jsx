import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import "./forecast.css";


const Forecast = ({ data }) => {
    const WEEK_DAYS = ['Monday', "Tueday", 'Wedsnesday', 'Thurday', 'Friday', 'Saturday', 'Sunday'];
    const dayinInWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayinInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinInWeek));


    return (
        <>
            <label className="title">Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />

                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <lable>pressure</lable>
                                    <lable>{item.main.pressure}Pha</lable>

                                </div>
                                <div className="daily-details-grid-item">
                                    <lable>Humidity</lable>
                                    <lable>{item.main.humidity}%</lable>

                                </div>
                                <div className="daily-details-grid-item">
                                    <lable>Clouds</lable>
                                    <lable>{item.clouds.all}%</lable>

                                </div>
                                <div className="daily-details-grid-item">
                                    <lable>Wind speed</lable>
                                    <lable>{item.wind.speed} m/s</lable>

                                </div>
                                <div className="daily-details-grid-item">
                                    <lable>Sea level</lable>
                                    <lable>{item.main.sea_level}m</lable>

                                </div>
                                <div className="daily-details-grid-item">
                                    <lable>Feels like:</lable>
                                    <lable>{Math.round(item.main.feels_like)}°C</lable>

                                </div>

                            </div>

                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </>
    )

}
export default Forecast;