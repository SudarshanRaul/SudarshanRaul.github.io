var AddSbmData = React.createClass({
	
	getInitialState: function() {
		return {
			date: "",
			description: "",
			value: 0,
			selectedTag: []
		}
	},

	updateState : function (stateName, newValue) {
		this.setState({
			[stateName] : newValue
		});
	},

	addData : function () {
		let newData = {
			date : this.state.date,
			description : this.state.description,
			value : this.state.value,
			selectedTag : this.state.selectedTag
		};
		this.props.sbmPush(newData);
	},

	render: function() {

		return (
			<div className="sbm-add-container">
				<div className="input-wrapper">
					<div>
						<lable>Date</lable>
						<input type="date" value={this.state.date} onChange={(event) => this.updateState('date', event.target.value)} />
					</div>
					<div>
						<lable>Description</lable>
						<input type="text" value={this.state.description} onChange={(event) => this.updateState('description', event.target.value)} />
					</div>
					<div>
						<lable>Value</lable>
						<input type="number" value={this.state.value} onChange={(event) => this.updateState('value', event.target.value)} />
					</div>
					<div>
						<lable>Tags</lable>

					</div>
					<div>
						<button onClick={this.addData}>Add</button>

					</div>
				</div>
			</div>
		);
	}	
});