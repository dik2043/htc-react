import React, { Component } from "react";
import { connect } from "react-redux";

import compose from "../../utils/compose";
import { fetchChannels, pageChanged } from "../../actions";
import { WithVideoService } from "../hoc";
import ChannelItem from "../channel-item";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./channels.css";


class ChannelsList extends Component {
    constructor(props) {
        super(props);
        this.channelsRef = React.createRef();
    }
    
    componentDidMount() {
        this.addAnimation();
    }
    
    addAnimation() {
        const channels = this.channelsRef.current;
        window.setTimeout(() => channels.classList.add('shown'), 100);
    }
    
    
    render() {
        const { channels } = this.props;
        
        return (
            <ul ref={this.channelsRef} className="channels__list">
                {
                    channels.map((channel) => {
                        return <ChannelItem channel={channel} key={channel.id}/>
                    })
                }
            </ul>
        )
    }
}


class Channels extends Component {
    
    componentDidMount() {
        this.props.pageChanged('channels');
        if (!this.props.channels.length) {
            this.props.fetchChannels();
        }
    }
    
    
    render() {
        
        const { channels, loading, error } = this.props;
        
        if (error) {
            return <ErrorIndicator error={error}/>
        }
        
        const content = loading ? <Spinner/> : <ChannelsList channels={channels} />;
        
        return (
            <section className="channels">
                {content}
            </section>
        )
    }
}


const mapStateToProps = ({ channels, loading, error }) => {
    return { channels, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    
    const { videoService } = ownProps;
    
    return {
        fetchChannels: fetchChannels(videoService, dispatch),
        pageChanged: (page) => dispatch(pageChanged(page))
    }
};


export default compose(
    WithVideoService(),
    connect(mapStateToProps, mapDispatchToProps)
)(Channels);