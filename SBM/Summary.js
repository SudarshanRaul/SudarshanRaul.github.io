var Summary = React.createClass({
	
	getInitialState: function() {
		return {
			monthlyAverage : 0,
			currentMonthTotal : this.calCurrentMonthTotal(this.props, 0),
			currentYearTotal : 0,
			yearlyAverage : 0
		}
	},

	componentWillReceiveProps: function(newProps) {
		this.setState({
			currentMonthTotal: this.calCurrentMonthTotal(newProps, 0)
		});
	},

	calCurrentMonthTotal: function(props, initialValue) {
		if(!props.sbmData) {
			return initialValue;
		}
		return props.sbmData
			.reduce((finalValue, currentValue) => {
				if(currentValue.date.split("-")[0] == new Date().getFullYear() && currentValue.date.split("-")[1] == new Date().getMonth() + 1) {
					return finalValue + parseInt(currentValue.value);	
				}
				return finalValue;
			}, initialValue);
	},

	render: function() {
		console.log(this.props);
		return (
			<div className="sbm-summary-container">
				<div>
					This month total : {this.state.currentMonthTotal}
				</div>
				<div>
					This year total : {this.state.currentYearTotal}
				</div>
				<div>
					{this.state.monthlyAverage} per month
				</div>
				<div>
					{this.state.yearlyAverage} per year
				</div>
			</div>
		);
	}	
});