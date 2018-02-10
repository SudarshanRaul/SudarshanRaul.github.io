var ListSbmData = React.createClass({

	getInitialState: function() {
		return {

		}
	},

	render: function() {

		return (
			<div className="sbm-list-container">
				{this.props.sbmData.map((sbmCard, index) => {
					return (
						<div className="sbm-card" key={index} style={style().card}>
							<div>{index + 1}</div>
							<div>{sbmCard.date}</div>
							<div>{sbmCard.description}</div>
							<div>{sbmCard.value}</div>
							<div>
								<a href="javascript:void(0)" onClick={() => this.props.editData(index)}>edit</a>
								&nbsp;&nbsp;
								<a href="javascript:void(0)" onClick={() => this.props.deleteData(index)}>delete</a>
							</div>
						</div>
					)
				})}
			</div>
		);
	}
});
