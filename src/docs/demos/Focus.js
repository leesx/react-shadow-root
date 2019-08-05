import React from "react";
import ShadowRoot from "../../../lib";

export default class FocusDemo extends React.Component {
  render() {
    const { delegatesFocus } = this.props;
    const style = `:host {
      border: 1px dotted black;
      display: flex;
      padding: 16px;
    }
    :focus {
      outline: 2px solid blue;
    }`;

    return (
      <div className="focus-demo">
        <ShadowRoot delegatesFocus={delegatesFocus}>
          <style>{style}</style>
          <div>Clickable Shadow DOM text</div>
          <input type="text" placeholder="Input inside shadow dom" />
        </ShadowRoot>
      </div>
    );
  }
}