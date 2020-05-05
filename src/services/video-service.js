
import _films from "./films-src/films"
import _channels from "./channels-src/channels";


import smileAlien from "./smiles/smile-alien.png";
import smileGhost from "./smiles/smile-ghost.png";
import smileHappy from "./smiles/smile-happy.png";
import smileSad from "./smiles/smile-sad.png";

import iconAmedia from "./channels-src/icons/amedia.svg";
import icon2x2 from "./channels-src/icons/2x2.svg";
import iconFirst from "./channels-src/icons/first.svg";
import iconRBK from "./channels-src/icons/rbk.svg";
import iconNatGeog from "./channels-src/icons/National_Geographic_Channel_logo.png";
import iconViasHis from "./channels-src/icons/Viasat_History_3.png";


const mapChannelsIcon = {
    "Первый канал": iconFirst,
    "2x2": icon2x2,
    "РБК": iconRBK,
    "AMEDIA PREMIUM": iconAmedia,
    "National Geographic": iconNatGeog,
    "Viasat History": iconViasHis
};


export default class VideoService {
    
    _genres = [
        {
            id: 1,
            genre: 'comedy',
            name: 'Комедии',
            coverImage: smileHappy
        },
        {
            id: 2,
            genre: 'drama',
            name: 'Драмы',
            coverImage: smileSad
        },
        {
            id: 3,
            genre: 'fantasy',
            name: 'Фантастика',
            coverImage: smileAlien
        },
        {
            id: 4,
            genre: 'horror',
            name: 'Ужасы',
            coverImage: smileGhost
        }
    ];
    
    
    returnPromiseWithData = (data, timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.9) {
                    reject(new Error("Похоже, что-то пошло не так :("));
                } else {
                    resolve(data)
                }
            }, timeout)
        })
    };
    
    
    getFilms = () => {
        const films = _films.slice(0, 4);
        return this.returnPromiseWithData(films, 800)
    };
    
    getCurrentFilm = (filmId) => {
        const film = _films[filmId - 1];
        return this.returnPromiseWithData(film, 400);
    };
    
    getRandomFilm = () => {
        const id = Math.floor(Math.random() * (_films.length));
        return _films[id];
    };
    
    getRandomFilms() {
        let randomFilms = [];
        let filmsId = [];
        while (randomFilms.length < 4) {
            let newFilm = this.getRandomFilm();
            if (filmsId.indexOf(newFilm.id) < 0) {
                filmsId.push(newFilm.id);
                randomFilms.push(newFilm);
            }
        }
        return this.returnPromiseWithData(randomFilms, 800);
    }
    
    getFilteredFilms = (genre) => {
        let filteredFilms = _films.filter((el) => {
            return el.genre === genre;
        });
        return this.returnPromiseWithData(filteredFilms, 500);
    };
    
    
    getGenres = () => {
        return this._genres;
    };
    
    
    getTimeInMilliseconds = (telecastTimeObj) => {
        const now = new Date();
        const time = telecastTimeObj[0];
        const telecastHour = parseInt(time.split(':')[0]);
        const telecastMinute = parseInt(time.split(':')[1]);
        return new Date
        (now.getFullYear(), now.getMonth(), now.getDate(), telecastHour, telecastMinute, 0, 0)
            .getTime();
    };
    
    getTransformChannels() {
        let channelsData = [];
        for (let i = 0; i < _channels.length; i++) {
            channelsData[i] = {};
            channelsData[i].id = _channels[i].id;
            channelsData[i].name = _channels[i].name;
            channelsData[i].timetable = [];
            channelsData[i].icon = mapChannelsIcon[_channels[i].name];
        
            for (let j = 0; j < _channels[i].timetable.length; j++) {
                let nextTelecastTimeObj;
                const telecast = _channels[i].timetable[j];
                const nextTelecast = _channels[i].timetable[j + 1];
                const firstTelecast = _channels[i].timetable[0];
                const telecastTimeObj = Object.keys(telecast);
            
                if (nextTelecast) {
                    nextTelecastTimeObj = Object.keys(nextTelecast);
                } else {
                    nextTelecastTimeObj = Object.keys(firstTelecast);
                }
            
                const title = telecast[telecastTimeObj];
            
                channelsData[i].timetable.push({
                    title: title,
                    time: telecastTimeObj,
                    startTime: this.getTimeInMilliseconds(telecastTimeObj),
                    endTime: this.getTimeInMilliseconds(nextTelecastTimeObj),
                    description: 'Описание передачи'
                });
            }
        }
        return channelsData;
    }
    
    
    getChannels() {        
        const channels = this.getTransformChannels();
        return this.returnPromiseWithData(channels, 800);
    }
}