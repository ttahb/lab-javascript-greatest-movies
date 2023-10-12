// const moviesArray = [
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
//     {
//       title: 'The Godfather: Part II',
//       year: 1974,
//       director: 'Francis Ford Coppola',
//       duration: '3h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9
//     },
//     {
//       title: 'The Dark Knight',
//       year: 2008,
//       director: 'Christopher Nolan',
//       duration: '2h 32min',
//       genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//       score: 9
//     },
//     {
//         title: 'Star Wars: Episode V - The Empire Strikes Back',
//         year: 1980,
//         director: 'Irvin Kershner',
//         duration: '2h 4min',
//         genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
//         score: 8.8
//       },
//       {
//         title: 'Inception',
//         year: 2010,
//         director: 'Christopher Nolan',
//         duration: '2h 28min',
//         genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
//         score: 8.8
//       }
//   ];
  

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    console.log(allDirectors);

    const uniqueDirectors = allDirectors.reduce((newArray, director) => {
        if(!newArray.includes(director)){
            newArray.push(director);
        }
        return newArray;
    }, []);

    console.log("uniqueDirectors", uniqueDirectors);
    return allDirectors;
}

//Test for the duplicates.
// getAllDirectors([{
//     title: 'PK',
//     year: 2014,
//     director: 'Rajkumar Hirani',
//     duration: '2h 33min',
//     genre: ['Comedy', 'Drama', 'Fantasy', 'Sci-Fi'],
//     score: 8.2
//   },
//   {
//     title: 'Dog Day Afternoon',
//     year: 1975,
//     director: 'Sidney Lumet',
//     duration: '2h 5min',
//     genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
//     score: 8
//   },
//   {
//     title: 'Dead Poets Society',
//     year: 1989,
//     director: 'Peter Weir',
//     duration: '2h 8min',
//     genre: ['Comedy', 'Drama'],
//     score: 8
//   },{
//     title: 'Dead Poets Society',
//     year: 1989,
//     director: 'Peter Weir',
//     duration: '2h 8min',
//     genre: ['Comedy', 'Drama'],
//     score: 8
//   },
//   {
//     title: 'Dog Day Afternoon',
//     year: 1975,
//     director: 'Sidney Lumet',
//     duration: '2h 5min',
//     genre: ['Biography', 'Crime', 'Drama', 'Thriller'],
//     score: 8
//   }]);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }

    const dramaMoviesBySpielberg = moviesArray.filter(function(movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

    if(dramaMoviesBySpielberg.length === 0){
        return 0;
    }
    //console.log("dramaMoviesBySpielberg", dramaMoviesBySpielberg);
   // console.log("count", dramaMoviesBySpielberg.length);
    return dramaMoviesBySpielberg.length;
    
}

//howManyMovies(moviesArray);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
    
    const sumOfScores = moviesArray.filter(movie => movie.score !== undefined)
                                    .reduce((sum, movie) => sum + movie.score, 0);
    
    const averageOfScores = sumOfScores/moviesArray.length;
    // const averageOfScores = 8.517;
    // console.log("averageOfScores", averageOfScores);
    // console.log("Math.round(averageOfScores)", Math.round(averageOfScores));
    // console.log("Math.round(averageOfScores*100)/100", Math.round(averageOfScores*100)/100);
    return Math.round(averageOfScores*100)/100;
}

//scoresAverage(moviesArray);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if(dramaMovies.length === 0){
        return 0;
    }

    // console.log("dramaMovies", dramaMovies);
    const sumOfScores = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    // console.log(sumOfScores)
    // console.log(sumOfScores/dramaMovies.length);
    // console.log('floating', Math.round((sumOfScores/dramaMovies.length)*100)/100);
    return Math.round((sumOfScores/dramaMovies.length)*100)/100;

}

//dramaMoviesScore(moviesArray);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
