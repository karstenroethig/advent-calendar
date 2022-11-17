import React from 'react';
import { DayType } from '../types/ContentType';
import Door from './Door';

interface Props {
}

interface State {
  isLoading: boolean;
  days: DayType[];
  error?: string;
}

class Calendar extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      days: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch('content.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ days: data.days, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }));
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="row h-100 no-gutters">
          <div className="col-12 mb-4">
            <p className="lead text-white text-center mt-5 mb-4">Loading ...</p>
          </div>
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className="row h-100 no-gutters">
          <div className="col-12 mb-4">
            <p className="lead text-danger text-center mt-5 mb-4">{this.state.error}</p>
          </div>
        </div>
      );
    }
    return (
      <div className="row no-gutters my-2 mt-md-0">
        {this.state.days.map(day =>
          <Door key={day.day} day={day.day} content={day.content}/>
        )}
      </div>
    );
  }
}

export default Calendar;
