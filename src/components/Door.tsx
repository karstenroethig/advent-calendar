import React from 'react';
import { Modal } from 'react-bootstrap';
import AdventCalendarService from '../services/AdventCalendarService';
import { DayContentType } from '../types/ContentType';
import './Door.css';

interface Props {
  day: number;
  content: DayContentType;
}

interface State {
  showModal: boolean;
}

class Door extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    const handleModalShow = () => {
      const localToday = new Date();
      const localTodaysYear = localToday.getFullYear();
      const localTodaysMonth = localToday.getMonth();
      const localTodaysDay = localToday.getDate();

      if (localTodaysMonth === 10 && localTodaysDay >= this.props.day) {
        AdventCalendarService.addOpenedDoor(localTodaysYear, localTodaysMonth, this.props.day);
        this.setState({ showModal: true });
      }
    };

    const handleModalClose = () => this.setState({ showModal: false });

    const today = new Date();
    const todaysYear = today.getFullYear();
    const todaysMonth = today.getMonth();
    const doorAlreadyOpened = AdventCalendarService.doorAlreadyOpened(todaysYear, todaysMonth, this.props.day)

    return (
      <>
      <div className="col-3 col-sm-2 p-1 px-lg-4" onClick={handleModalShow}>
        <div className={'card lead w-100 text-center rounded-0 border-thick py-3 py-md-4 door' + (doorAlreadyOpened ? ' open' : '')}>
          <div className="door_number">{this.props.day}</div>
        </div>
      </div>

      <Modal
        show={this.state.showModal}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.day}. Dezember</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">{this.props.content.title}</p>
          <figure>
            <blockquote className="blockquote">
              <p>{this.props.content.episodeTitle}</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Gelesen von <cite>{this.props.content.reader}</cite>
            </figcaption>
          </figure>
          <audio controls>
            <source src={this.props.content.audioFile} type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
        </Modal.Body>
      </Modal>
      </>
    );
  }
}

export default Door;
