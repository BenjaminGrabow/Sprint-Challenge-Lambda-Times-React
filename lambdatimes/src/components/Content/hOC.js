import React from 'react';

function hOC(ComponentOne, ComponentTwo) {
        return class extends React.Component {
          render() {
            return (
              this.props.loggedIn === "no" ? <ComponentOne {...this.props} /> : <ComponentTwo {...this.props} />
            )
          }
        }
      }
      
      export default hOC;