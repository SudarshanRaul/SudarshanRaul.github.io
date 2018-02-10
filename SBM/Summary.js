var Summary = React.createClass({

	getInitialState: function() {
		return {
			monthlyAverage : 0,		//per month starting Jan 2018
			currentMonthTotal : this.calMonthTotal(this.props, 0, new Date()),
			currentYearTotal : this.calYearTotal(this.props, 0, new Date()),
			yearlyAverage : 0		//per year starting Jan 2018
		}
	},

	componentWillReceiveProps: function(newProps) {
		this.setState({
			currentMonthTotal: this.calMonthTotal(newProps, 0, new Date()),
			currentYearTotal: this.calYearTotal(newProps, 0, new Date())
		});
	},

	calMonthTotal: function(props, initialValue, date) {
		if(!props.sbmData) {
			return initialValue;
		}
		return props.sbmData
			.reduce((finalValue, currentValue) => {
				if(currentValue.date.split("-")[0] == date.getFullYear() && currentValue.date.split("-")[1] == date.getMonth() + 1) {
					return finalValue + parseInt(currentValue.value);
				}
				return finalValue;
			}, initialValue);
	},

	calYearTotal: function(props, initialValue, date) {
		if(!props.sbmData) {
			return initialValue;
		}
		return props.sbmData
			.reduce((finalValue, currentValue) => {
				if(currentValue.date.split("-")[0] == date.getFullYear()) {
					return finalValue + parseInt(currentValue.value);
				}
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
