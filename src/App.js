import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      races: [
        {
          name: 'IRONMAN South Africa',
          id: 'IMZA',
          logo: 'https://cdn1.sportngin.com/attachments/photo/2763-135730058/IRONMAN_African_Championship_South_Africa_Logo_2020_pos_large.png'
        },
        {
          name: 'IRONMAN Taiwan',
          id: 'IMTW',
          logo: 'https://cdn2.sportngin.com/attachments/photo/5677-135691719/IRONMAN_Taiwan_100x-8_large.png'
        },
        {
          name: 'IRONMAN Texas',
          id: 'IMTX',
          logo: 'https://cdn1.sportngin.com/attachments/photo/df0a-135696449/im_texas_10years_large.png'
        },
        {
          name: 'IRONMAN Frankfurt',
          id: 'IMFR',
          logo: 'https://cdn4.sportngin.com/attachments/photo/1b54-135308098/Mainova_IRONMANFfm_EuroChamp_2016_pos_large.png'
        },
        {
          name: 'IRONMAN Western Australia',
          id: 'IMWA',
          logo: 'https://cdn4.sportngin.com/attachments/photo/517e-136112430/IRONMAN_WesternAustralia_Busselton_large.png'
        }
      ],
      searchField: ''
    };
  }
  
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  
  render() {
    const { races, searchField } = this.state;
    const filteredRaces = races.filter(race =>
      race.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
    <div className="App">
      <h1 className='irontitle'>ANYTHING IS POSSIBLE</h1>
      <SearchBox
      placeholder='search races'
      handleChange={this.handleChange}
      />
      <CardList races={filteredRaces}>
      </CardList>

    </div>
    );
  }
}

export default App;
