class TrackApp extends React.Component{
    
    render() {
        const {expTrackStore} = this.props;
        return (
            <AddExpence expTrackStore={expTrackStore}/>
        )
    }
};