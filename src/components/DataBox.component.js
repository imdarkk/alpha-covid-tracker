import "../css/DataBox.css";
import * as React from "react";

class DataBox extends React.Component {
  render(props) {
    return (
        <div className="wrapper">
          <div id="wrapperCountry">
            <p id="countryName">{this.props.country}</p>
          </div>
          <div className="wrapperNumbers">
            <div className="cases">
              <p id="casesText">Infected</p>
              <p id="totalCases">{this.props.infected}</p>
              {/*<p id="confirmedToday">+100000</p>*/}
            </div>
            <div className="deaths">
              <p id="casesTextDeaths">Total Deaths</p>
              <p id="totalDeaths">{this.props.deceased}</p>
              {/*<p id="deathsToday">+2000</p>*/}
            </div>
            <div className="recovered">
              <p id="casesTextRecovered">Recovered</p>
              <p id="recoveredCases">{this.props.recovered}</p>
              {/*<p id="recoveredToday">+20</p>*/}
            </div>
            <div className="critical">
              <p id="casesTextCritical">Tested</p>
              <p id="criticalCases">{this.props.tested}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default DataBox;
