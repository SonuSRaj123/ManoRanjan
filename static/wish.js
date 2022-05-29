const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");
const movies = [];

// Default value of filtered if not exist is ""
const renderMovies = (filter = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
    return;
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  // If filter is falsy filteredMovies equal all movies else equal to filter
  const filteredMovies = !filter
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(filter);
      }
    );

  filteredMovies.forEach((movie) => {
    const movieElement = document.createElement("li");
    let text = movie.info.title + " - ";
    // Output dynamic extraName
    for (let key in movie.info) {
      if (key !== "title") {
        text += `${key}: ${movie.info[key]}`;
      }
    }
    movieElement.textContent = text;
    movieList.appendChild(movieElement);
  });
};

const searchMovieHandler = () => {
  const filteredValue = document.getElementById("filter-title").value;
  renderMovies(filteredValue);
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    alert("Title, Extra name and Extra value should not be empty!");
    return;
  }

  const newMovie = {
    info: {
      title: title,
      // Use [] for dynamic extraName
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  clearInputs();
  renderMovies();
};

const clearInputs = () => {
  const userInputs = document.querySelectorAll("input");
  for (let userInput of userInputs) {
    userInput.value = "";
  }
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);