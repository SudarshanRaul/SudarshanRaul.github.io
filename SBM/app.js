var App = React.createClass({

	getInitialState: function() {
		return {
			sbmData : this.fetchFromStorage("sbmData", []),
			sbmCategory : this.fetchFromStorage("sbmCategory", []),
			currentData : "",
			currentIndex : -1
		}
	},

	sbmPush: function (newData) {
		let sbmData = this.state.sbmData;
		if(this.state.currentIndex === -1){
			sbmData.push(newData);
		}else{
			sbmData[this.state.currentIndex] = newData;
		}
		this.setState({
			sbmData: sbmData,
			currentData : "",
			currentIndex : -1
		}, this.updateStorage)
	},

	editData: function(index) {
		this.setState({
			currentData : JSON.stringify(this.state.sbmData[index]),
			currentIndex : index
		}, this.updateStorage);
	},

	deleteData: function(index) {
		let sbmData = this.state.sbmData;
		sbmData.splice(index, 1);
		this.setState({
			sbmData : sbmData
		}, this.updateStorage);
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
				<AddSbmData sbmPush={this.sbmPush} tags={this.state.sbmCategory} currentData={this.state.currentData}></AddSbmData>
				<Summary sbmData={this.state.sbmData} />
				<ListSbmData sbmData={this.state.sbmData} editData={this.editData} deleteData={this.deleteData} />
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById("app-container"));
