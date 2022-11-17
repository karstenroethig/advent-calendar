import React from 'react';

interface Props {
}

interface State {
}

class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="row h-100 no-gutters">
        <div className="col-12 mb-4">
          <h2 className="text-white text-center mt-5 mb-4"><strong>Adventskalender</strong></h2>
          <h2 className="text-white text-center">❄🎄☃🎁🎅</h2>
        </div>
      </div>
    );
  }
}

export default Header;
