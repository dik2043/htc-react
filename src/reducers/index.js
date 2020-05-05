
const reducer = (state, action) => {
    console.log(action);
    
    if (state === undefined) {
        return {
            ...state,
            films: [],
            currentFilm: false,
            filteredFilms: [],
            genres: [],
            channels: [],
            loading: false,
            error: null,
            currentPage: "/",
            isModalOpen: false,
            userName: localStorage.getItem('userName')
        };
    }

    switch (action.type) {

        case "FETCH_DATA_REQUEST":
            return {
                ...state,
                loading: true
            };

        case "FETCH_FILMS_SUCCESS":
            return {
                ...state,
                films: action.payload,
                loading: false,
                error: false
            };
        case "FETCH_CURRENT_FILM_SUCCESS":
            return {
                ...state,
                currentFilm: action.payload,
                loading: false,
                error: false
            };
        case "FETCH_FILTERED_FILMS_SUCCESS":
            return {
                ...state,
                filteredFilms: action.payload,
                loading: false,
                error: false
            };
        case "FETCH_CHANNELS_SUCCESS":
            return {
                ...state,
                channels: action.payload,
                loading: false,
                error: false
            };

        case "FETCH_GENRES_SUCCESS":
            return {
                ...state,
                genres: action.payload
            };

        case "FETCH_LOADING_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };


        case "PAGE_HAS_CHANGED":
            return {
                ...state,
                currentPage: action.payload,
                error: false
            };

        case "MODAL_HAS_OPENED":
            return {
                ...state,
                isModalOpen: true
            };
        case "MODAL_HAS_CLOSED":
            return {
                ...state,
                isModalOpen: false
            };

        case "USER_NAME_HAS_CHANGED":
            return {
                ...state,
                userName: action.payload 
            };

        default:
            return {
                ...state
            }
    }
};


export default reducer;