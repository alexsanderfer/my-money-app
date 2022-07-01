import React, { Component } from "react";
import { getList } from "./billingCycleActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class BillingCycleList extends Component {
	componentWillMount() {
		this.props.getList();
	}

	renderRows() {
		const list = this.props.list || [];
		return list.map((bc) => (
			<tr key={bc._id}>
				<td>{bc.name}</td>
				<td>{bc.month}</td>
				<td>{bc.year}</td>
			</tr>
		));
	}

	render() {
		return (
			<div>
				<table className={"table"}>
					<thead>
						<tr>
							<th>Name</th>
							<th>Month</th>
							<th>Year</th>
						</tr>
					</thead>
					<tbody>{this.renderRows()}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ list: state.billingCycle.list });
const mapDispatchToProps = (dispatch) => bindActionCreators({ getList }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);
