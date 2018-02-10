var AddSbmData = React.createClass({

	getInitialState: function() {
		return {
			date: "",
			description: "",
			value: 0,
			selectedTag: [],
			outgoing: true
		}
	},

	componentWillReceiveProps: function(newProps) {
		if(!newProps.currentData){
			return
		}
		let newState = JSON.parse(newProps.currentData);
		this.setState({
			date: newState.date,
			description: newState.description,
			value: newState.value,
			selectedTag: newState.selectedTag,
			outgoing : newState.outgoing
		})
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
			selectedTag : this.state.selectedTag,
			outgoing : this.state.outgoing
		};
		this.props.sbmPush(newData);
		this.setState(this.getInitialState());
	},

	render: function() {

		return (
			<div className="sbm-add-container">
				<div className="input-wrapper" style={style().table}>
					<div style={style().tableRow}>
						<div style={style().tableCell}>
							<lable>Date</lable>
						</div>
						<div style={style().tableCell}>
							<input type="date" value={this.state.date} onChange={(event) => this.updateState('date', event.target.value)} />
						</div>
					</div>
					<div style={style().tableRow}>
						<div style={style().tableCell}>
							<lable>Description</lable>
						</div>
						<div style={style().tableCell}>
							<input type="text" value={this.state.description} onChange={(event) => this.updateState('description', event.target.value)} />
						</div>
					</div>
					<div style={style().tableRow}>
						<div style={style().tableCell}>
							<lable>Value</lable>
						</div>
						<div style={style().tableCell}>
							<input type="number" value={this.state.value} onChange={(event) => this.updateState('value', event.target.value)} />
						</div>
					</div>
					<div style={style().tableRow}>
						<div style={style().tableCell}>
							<lable>Out Going</lable>
						</div>
						<div style={style().tableCell}>
							<input type="checkbox" checked={this.state.outgoing} onChange={(event) => this.updateState('outgoing', !this.state.outgoing)} />
						</div>
					</div>
					<div style={style().tableRow}>
						<div style={style().tableCell}>
							<lable>Tags</lable>
						</div>
<div style={style().tableCell}>

</div>
					</div>
					<div>
						<button onClick={this.addData}>Add</button>

					</div>
				</div>
			</div>
		);
	}
});
