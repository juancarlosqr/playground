import React, { Component } from 'react';
import fb from './firebase'
import data from './data.json'
import random from './random'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    beers: [],
    countries: [],
    error: null,
    loading: true,
  }

  deleteBeers = () => {
    fb.collection("beers")
      .get()
      .then(querySnapshot => {
        console.log('deleting all beers')
        querySnapshot.forEach(doc => {
          fb.collection("beers").doc(doc.id)
            .delete()
            .then(() => {
              console.log("beer deleted!");
            })
            .catch((error) => {
              console.error("error removing beer:", error);
              this.setState({ error })
            });
        });
      })
      .catch(error => {
        console.log("error getting beers to delete:", error);
        this.setState({ error })
      });
  }

  addBeers = () => {
    console.log(data.beers)
    data.beers.forEach(beer => {
      fb.collection('beers').add(beer)
    })
  }

  addCountriesToBeers = () => {
    const { countries, beers } = this.state
    beers.forEach(beer => {
      const beerRef = fb.collection("beers").doc(beer.id);
      const country = random(countries)
      beerRef.update({
        countryRef: country.id
      })
        .then(function () {
          console.log("beer updated!", `${beer.brand} ${beer.color} is from ${country.name} now`);
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    })
  }

  componentDidMount() {
    console.log(1)
    this.unsubscribe = fb.collection("teams")
      .onSnapshot(querySnapshot => {
        let countries = []
        console.log(2)
        querySnapshot.forEach(doc => {
          countries.push({
            id: doc.id,
            ...doc.data(),
          })
        });
        // this.setState({ countries })
        console.log(3)
        fb.collection("beers")
          .onSnapshot(querySnapshot => {
            let beers = []
            console.log(4)
            querySnapshot.forEach(doc => {
              const docData = doc.data()
              const country = countries.filter(country => (country.id === docData.countryRef))[0]
              beers.push({
                id: doc.id,
                country,
                ...docData,
              })
            });
            beers.sort((a, b) => {
              if (a.country && b.country) {
                const countryA = a.country.name.toUpperCase();
                const countryB = b.country.name.toUpperCase();
                if (countryA < countryB) {
                  return -1;
                }
                if (countryA > countryB) {
                  return 1;
                }
              }
              // names must be equal
              return 0;
            })
            console.log(5)
            this.setState({
              beers,
              countries,
              loading: false
            })
          }, error => {
            console.log("Error getting documents: ", error);
            this.setState({ error, loading: false })
          });
      }, error => {
        console.log("Error getting documents: ", error);
        this.setState({ error, loading: false })
      });
  }
  componentWillUnmount() {
    /* might not work */
    this.unsubscribe()
    console.log('unsubscribed')
  }
  renderBeers() {
    const { error, loading, beers } = this.state
    return (
      <>
        <h2>Beers</h2>
        <div className="data">
          {!error && !loading && beers.map(beer => (
            <section className="beers" key={beer.id}>
              {beer.country && (
                <>
                  <p><img alt={beer.brand} src={beer.country.shield_img} /></p>
                </>
              )}
              <p>{beer.brand}</p>
              <small>{beer.color}</small>
            </section>
          ))}
        </div>
      </>
    )
  }

  renderCountries() {
    const { error, loading, countries } = this.state
    return (
      <>
        <h2>Countries</h2>
        <div className="data">
          {!error && !loading && countries.map(country => (
            <section className="countries" key={country.id}>
              <p>{country.name}</p>
              <img alt={country.name} src={country.shield_img} />
            </section>
          ))}
        </div>
      </>
    )
  }

  render() {
    const { error, loading, beers, countries } = this.state
    console.log(countries)
    console.log(beers)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </p>
          <p>
            <button onClick={this.deleteBeers}>Delete beers</button>
            <button onClick={this.addBeers}>Add beers</button>
            <button onClick={this.addCountriesToBeers}>Add countries to beers</button>
          </p>
          {error && (<p>{error}</p>)}
          {this.renderBeers()}
          {loading && (<p>loading...</p>)}
          {this.renderCountries()}
        </header>
      </div>
    );
  }
}

export default App;
