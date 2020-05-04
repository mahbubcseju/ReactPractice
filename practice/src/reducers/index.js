import { combineReducers } from 'redux';


const songReducer = () => {
    return [
        { title: 'Abu', duration: '1:02:04' },
        { title: 'Bbu', duration: '2:02:04' },
        { title: 'Cbu', duration: '3:02:04' },
        { title: 'Dbu', duration: '4:02:04' },
        { title: 'Ebu', duration: '5:02:04' },
        { title: 'Gbu', duration: '6:02:04' }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});