var App = React.createClass({
	
	getInitialState: function() {
		return {
			sbmData : this.fetchFromStorage("sbmData", []),
			sbmCategory : this.fetchFromStorage("sbmCategory", [])
		}
	},

	sbmPush: function (newData) {
		let sbmData = this.state.sbmData;
		sbmData.push(newData);
		this.setState({
			sbmData: sbmData
		}, this.updateStorage)
	},

	updateStorage: function() {
		let sbmMasterData = {
			sbmData : this.state.sbmData,
			sbmCategory : this.state.sbmCategory
		};
		localStorage.setItem("SBM_Master_Data", JSON.stringify(sbmMasterData));
	},

	fetchFromStorage: function(key, defaultValue) {
		let sbmMasterData = localStorage.getItem("SBM_Master_Data");
		if(sbmMasterData){
			return JSON.parse(sbmMasterData)[key];			
		}
		return defaultValue
	},

	render: function() {

		return (
			<div className="sbm-container">
				<AddSbmData sbmPush={this.sbmPush} tags={this.state.sbmCategory} ></AddSbmData>
				<ListSbmData sbmData={this.state.sbmData} />
			</div>
		);
	}	
});


ReactDOM.render(<App />, document.getElementById("app-container"));