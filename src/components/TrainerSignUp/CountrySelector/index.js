import React, { Component } from "react";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { country: "", region: "" };
  }

  selectCountry(val) {
    this.setState({ country: val });
    // ontoggleCountry(val);

    this.props.func(val)

  }

  selectRegion(val) {

    this.setState({ region: val });
    // ontoggleRegion(val);
    this.props.func2(val)
  }
  render(

  ) {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          className="countryDropdown"
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        <RegionDropdown
          className="regionDropdown"
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        />
      </div>
    );
  }
}

export default Example;
