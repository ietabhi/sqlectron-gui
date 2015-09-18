import React, {Component, PropTypes} from 'react';

// material ui
import {AppBar, Dialog} from 'material-ui';

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;

// own widgets
import DatabaseListContainer from './containers/database-list.jsx';

export default class App extends Component {

  static childContextTypes = {muiTheme: React.PropTypes.object}

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  componentWillMount() {
    ThemeManager.setPalette({
      primary1Color: Colors.blueGrey500,
      accent1Color: Colors.deepOrange500
    });
  }

  render() {
    var standardActions = [
      { text: 'Cancel' },
      { text: 'Submit', onClick: this._onDialogSubmit, ref: 'submit' }
    ];

    return <div>
      <AppBar title='sqlectron' style={{position: 'fixed', top: 0}} />

      <main style={{background: '#ececec', paddingTop: 64}}>
        <DatabaseListContainer />
      </main>

    </div>
  }

  onMainClick() {
    // this.refs.dialog.show();
    console.info('[App.jsx] ', 'main click');
  }
}
