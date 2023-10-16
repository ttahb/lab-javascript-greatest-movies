const moviesArray = [
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      score: 9.3
    },
    {
      title: 'The Godfather',
      year: 1972,
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      score: 9.2
    },
    {
      title: 'The Godfather: Part II',
      year: 1974,
      director: 'Francis Ford Coppola',
      duration: '3h 22min',
      genre: ['Crime', 'Drama'],
      score: 9
    },
    {
      title: 'The Dark Knight',
      year: 2008,
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      score: 9
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
        director: 'Irvin Kershner',
        duration: '2h 4min',
        genre: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
        score: 8.8
      },
      {
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan',
        duration: '2h 28min',
        genre: ['Action', 'Adventure', 'Sci-Fi', 'Thriller'],
        score: 8.8
      }
  ];
  

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
function orderByYear(moviesArray) {
    const newArray = [...moviesArray].sort((movie1,movie2)=>{
        if(movie1.title < movie2.title) return -1;
        if(movie1.title > movie2.title) return 1;
        if(movie1.title === movie2.title) return 0;
    })
    
    newArray.sort(function(a,b){
        return a.year - b.year;
    });

    return newArray;
}

// console.log('sortedAlphatically', orderByYear(moviesArray));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedByTitleAlpha = [...moviesArray].map(movie => movie.title)
    .sort()
    .reduce((arrayWithTwenty, title)=>{
        console.log("arrayWithTwenty", arrayWithTwenty, "title", title);
        if(arrayWithTwenty.length < 20){ //one iteration goes for the empty array [0-19]
            arrayWithTwenty.push(title);
        }
        return arrayWithTwenty;
    },[])

    console.log("orderedByTitleAlpha", orderedByTitleAlpha.length);
    return orderedByTitleAlpha;
}

//Testing Locally
// orderAlphabetically( [
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' },
//     { title: 'aab' },
//     { title: 'bab' },
//     { title: 'acb' }
//   ]);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    // const copyArray = [...moviesArray];
    const newArray = moviesArray.map( movie => {
        if(movie.duration !== undefined){
            const durationArray = movie.duration.split(' ');   
            const hours = parseInt(durationArray[0].substring(0, durationArray[0].length-1));
            let minutes = 0;
            if(durationArray.length === 2){
                 minutes = parseInt(durationArray[1].substring(0, durationArray[1].length-3))
            }
            movie.duration = hours*60 + minutes;
            return movie;
        }
    });

    // console.log("mutated",!arraysAreEqual(moviesArray, copyArray));
    //  console.log("newArray", newArray);
    // console.log("type of duration", typeof newArray[0].duration)
    return newArray;
}

// function arraysAreEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//       return false;
//     }
  
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) {
//         return false;
//       }
//     }
  
//     return true;
//   }

// //Tesing
// turnHoursToMinutes([{ duration: '2h' }]);
// turnHoursToMinutes(moviesArray);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(moviesArray.length === 0){
        return null;
    }

    // Iterate through the array and check pick year -> and score
    // Also while iterating check if this year is repeated and add to the score   average = sum/count  => newAvg = (avg * count + nextelem)/ (count+1)
    // { 2001: 8, 2002}
    // let uniqueYearAndAvgScore = [{ 
    //     year: moviesArray[0].year,
    //     average: moviesArray[0].score, 
    //     count: 1,
    //     sum: moviesArray[0].score
    // }];
    
    // if(moviesArray.length === 1){
    //     return `The best year was ${uniqueYearAndAvgScore[0].year} with an average score of ${uniqueYearAndAvgScore[0].average}`;
    // }

    let uniqueYearAndAvgScore = [];
    moviesArray.forEach(movie => {
        if(uniqueYearAndAvgScore.some(yearAndAvg => yearAndAvg.year === movie.year)){
            uniqueYearAndAvgScore.forEach((yearAndAvg, index) => {
                if(yearAndAvg.year === movie.year){
                    uniqueYearAndAvgScore[index].count++;
                    uniqueYearAndAvgScore[index].sum += movie.score;
                    uniqueYearAndAvgScore[index].average = uniqueYearAndAvgScore[index].sum/ uniqueYearAndAvgScore[index].count;
                }
            });

        } else {
            uniqueYearAndAvgScore.push({
                year: movie.year,
                average: movie.score,
                count: 1,
                sum: movie.score
            })
        }
        
    });
    uniqueYearAndAvgScore.sort((yearAndAvg1, yearAndAvg2) => yearAndAvg1.year - yearAndAvg2.year)
    .sort((yearAndAvg1, yearAndAvg2) => yearAndAvg2.average - yearAndAvg1.average)
    
    
    // console.log("uniqueYearAndAvgScore", uniqueYearAndAvgScore);
    // console.log(`The best year was ${uniqueYearAndAvgScore[0].year} with an average score of ${uniqueYearAndAvgScore[0].average}`);
    return `The best year was ${uniqueYearAndAvgScore[0].year} with an average score of ${uniqueYearAndAvgScore[0].average}`;
}


// console.log(bestYearAvg([
//     { year: 2000, score: 9 },
//     { year: 2000, score: 8 },
//     { year: 1978, score: 10 },
//     { year: 1978, score: 7 }
//   ]));

// console.log(bestYearAvg(moviesArray));