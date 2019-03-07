import React, { Component } from "react";

class Email extends Component {
  render() {
    return (
      <form>
        <div className="row">
          <div className="input-field col s12">
            <input
              placeholder="Email"
              id="email"
              type="text"
              className="validate"
            />
            <label>Email</label>
          </div>

          <button type="submit" className="btn btn-primary float-right">
            Send
          </button>
        </div>
      </form>
    );
  }
}

export default Email;
