
const dataRequested = () => {
    return {
        type: "FETCH_DATA_REQUEST"
    }
};

const filmsLoaded = (newFilms) => {
    return {
        type: "FETCH_FILMS_SUCCESS",
        payload: newFilms
    }
};
const filteredFilmsLoaded = (newFilms) => {
    return {
        type: "FETCH_FILTERED_FILMS_SUCCESS",
        payload: newFilms
    }
};
const currentFilmLoaded = (film) => {
    return {
        type: "FETCH_CURRENT_FILM_SUCCESS",
        payload: film
    }
};
const channelsLoaded = (newChannels) => {
    return {
        type: "FETCH_CHANNELS_SUCCESS",
        payload: newChannels
    }
};

const loadingError = (error) => {
    return {
        type: "FETCH_LOADING_FAILURE",
        payload: error
    }
};


const fetchFilms = (videoService, dispatch) => () => {
    dispatch(dataRequested());
    videoService.getFilms()
        .then((data) => dispatch(filmsLoaded(data)))
        .catch((error) => dispatch(loadingError(error)));
};
const fetchRandomFilms = (videoService, dispatch) => () => {
    dispatch(dataRequested());
    videoService.getRandomFilms()
        .then((data) => dispatch(filmsLoaded(data)))
        .catch((error) => dispatch(loadingError(error)));
};
const fetchCurrentFilm = (id, videoService, dispatch) => {
    dispatch(dataRequested());
    videoService.getCurrentFilm(id)
        .then((data) => dispatch(currentFilmLoaded(data)))
        .catch((error) => dispatch(loadingError(error)));
};
const fetchFilteredFilms = (genre, videoService, dispatch) => {
    dispatch(dataRequested());
    videoService.getFilteredFilms(genre)
        .then((data) => dispatch(filteredFilmsLoaded(data)))
        .catch((error) => dispatch(loadingError(error)));
};

const fetchChannels = (videoService, dispatch) => () => {
    dispatch(dataRequested());
    videoService.getChannels()
        .then((data) => dispatch(channelsLoaded(data)))
        .catch((error) => dispatch(loadingError(error)));
};

const genresLoaded = (videoService) => {
    return {
        type: "FETCH_GENRES_SUCCESS",
        payload: videoService.getGenres()
    }
};


const pageChanged = (currentPage) => {
    return {
        type: "PAGE_HAS_CHANGED",
        payload: currentPage
    }
};

const modalOpened = () => {
    return {
        type: "MODAL_HAS_OPENED"
    }
};
const modalClosed = () => {
    return {
        type: "MODAL_HAS_CLOSED"
    }
};

const userNameChanged = (name) => {
    return {
        type: "USER_NAME_HAS_CHANGED",
        payload: name
    }
};

export {
    fetchFilms,
    fetchRandomFilms,
    fetchCurrentFilm,
    fetchFilteredFilms,
    genresLoaded,
    fetchChannels,
    pageChanged,
    modalOpened,
    modalClosed,
    userNameChanged
}