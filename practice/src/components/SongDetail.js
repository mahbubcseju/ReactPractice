import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (!props.selectedSong) {
        return <div></div>;
    }
    return (
        <div>
            SongDetail { props.selectedSong.title }
        </div>
    );
};

const mapStateToProps = state => {
    return {
      selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps)(SongDetail);
