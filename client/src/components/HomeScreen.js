import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LOGOS = gql`
  {
    logos {
      _id
      text
      lastUpdate
    }
  }
`;

class HomeScreen extends Component {


    

    render() {
        return (
            <Query pollInterval={500} query={GET_LOGOS}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;

                  
                    // Show most recently updated logos first
                   data.logos.sort( function(a, b) {return Date.parse(b.lastUpdate) - Date.parse(a.lastUpdate) });

                    return (
                        <div className="container row">
                            <div className="col s4">
                                <h3>Recent Work</h3>
                                {data.logos.map((logo, index) => (
                                    <div key={index} className='home_logo_link'
                                        style={{ cursor: "pointer"}}>
                                        <Link to={`/view/${logo._id}`}style={{color:"black",textDecoration: "none"}}>{logo.text}</Link>
                                    </div>
                                ))}
                            </div>
                            <div className="col s8">
                                <div id="home_banner_container">
                                    Logo Maker
                                </div>
                                <div>
                                   <button><Link id="add_logo_button" to="/create" > Create New Logo</Link></button>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            </Query >
        );
    }
}

export default HomeScreen;
