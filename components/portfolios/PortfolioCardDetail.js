import React, { Component, Fragment } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import moment from 'moment';

class PortfolioCardDetail extends Component {


  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <Fragment>
        <Modal isOpen={isOpen} toggle={toggle} className="card-modal">
          <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
          <ModalBody>
            <p><b>Description: </b>{portfolio.description}</p>
            <p><b>Company: </b>{portfolio.company}</p>
            <p><b>Position: </b>{portfolio.position}</p>
            <p><b>Location: </b>{portfolio.location}</p>
            <p><b>Start Date: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
            <p><b>End Date: </b>{moment(portfolio.endDate).format('MMMM YYYY')}</p>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default PortfolioCardDetail;