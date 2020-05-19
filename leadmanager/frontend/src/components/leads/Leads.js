
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux' ;
import PropTypes from 'prop-types';
import {  getLeads, deleteLead } from '../../actions/leads';

export class Leads extends Component {

static propTypes = {
leads: PropTypes.array.isRequired,
getLeads: PropTypes.func.isRequired,
deleteLead: PropTypes.func.isRequired,
};

componentDidMount() {
    this.props.getLeads();
 }

render(){


     return(
      <Fragment>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="#">Lead List</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

    </ul>


  </div>
</nav>
<h2> Leads </h2>
    <table className ="table table-stripped">
    <thead>
        <tr>
            <th>ID</th>
             <th>Name</th>
              <th>Email</th>
               <th>Message</th>
               <th />
        </tr>
    </thead>
    <tbody>
         {this.props.leads.map(lead => (

         <tr key={lead.id}>
            <td>{lead.id}</td>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.message}</td>
            <td><button onClick={this.props.deleteLead.bind(this, lead.id)}
            className=" btn btn-danger btn-sm">{" "}Delete</button></td>

         </tr>
         ))}
    </tbody>

    </table>
</Fragment>
     );
     }
}

const mapStateToProps = state => ({
leads: state.leads.leads
 });

export default connect(mapStateToProps,
{getLeads, deleteLead }
)
(Leads);

