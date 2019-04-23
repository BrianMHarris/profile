import React, {Component} from 'react';
import './Alert.css'

class Alert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: null
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.message.type === 'hidden') {
      clearTimeout(this.state.timeout)
    } else {
      if (nextProps.lifetime) this.startTimeout();
    }
  }

  startTimeout() {
    this.setState({timeout: setTimeout(
      () => {
        this.props.onClose()
        clearTimeout(this.state.timeout)
        console.log("SHOULD CLOSE")
      },
      this.props.lifetime
    )})
  }

  render() {
    const message = this.props.message

    return (
      <div className={`alert-std alert-${message.type}`}>
        <div className="alert-msg">
          {message.text}
        </div>
        <div className="alert-close-btn">
          <button onClick={this.props.onClose}>X</button>
        </div>
      </div>
    );
  }
}

export default Alert;
