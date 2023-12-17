require('./db');
const mongoose = require('mongoose');
const fs = require('fs')

const Car = require('./models/car');
const Movie = require('./models/movieModel');

const jsonData = fs.readFileSync('./movies.json');
const moviesData = JSON.parse(jsonData);

async function seedDatabase() {
  try {
    for (const movieData of moviesData) {
      const newMovie = new Movie({
        title: movieData.title,
        releaseYear: movieData.releaseYear,
        genre: movieData.genre,
        director: movieData.director,
        actors: movieData.actors,
        language: movieData.language,
        country: movieData.country,
        rating: movieData.rating,
        plot: movieData.plot,
        awards: movieData.awards,
        posterUrl: movieData.postedUrl,
        trailerUrl: movieData.trailerUrl
      });

      await newMovie.save();
      console.log(`Movie "${newMovie.director}" seeded.`);
    }
    console.log('Database seeding complete.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedDatabase();

/*async function addCarData() {
  const newCar = new Car({
    make: 'Toyota',
    model: 'Corolla',
    year: 2022,
  })

  try {
    const savedCar = await newCar.save()
    console.log('Car data saved successfully:', savedCar)
  } catch (error) {
    console.error('Error saving car data:', error)
  }
}

addCarData()

async function addAnotherCarData() {
  const anotherCar = new Car({
    make: 'Honda',
    model: 'Civic',
    year: 2023,
  })

  try {
    const savedAnotherCar = await anotherCar.save()
    console.log('Another car data saved successfully:', savedAnotherCar)
  } catch (error) {
    console.error('Error saving another car data:', error)
  }
}

addAnotherCarData()

async function findAllCars() {
  try {
    const allCars = await Car.find()
    console.log('All cars in the database:', allCars)
  } catch (error) {
    console.error('Error fetching all cars:', error)
  }
}

findAllCars()*/