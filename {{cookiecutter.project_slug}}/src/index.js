import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { TextInput } from '@contentful/forma-36-react-components';
import { init } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';

export class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired
  };

  detachExternalChangeHandler = null;

  constructor(props) {
    super(props);
    this.state = {
      value: props.sdk.field.getValue() || ''
    };
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange);
    let self = this;
    $('.summernote').summernote({
      height: 300, // set editor height
      focus: true,
      toolbar: [
           ['style', ['style']],
           ['font', ['bold', 'italic', 'underline', 'strikethrough', 'clear']],
           ['insert',['picture', 'link', 'hr', 'math']],
           ['para', ['ul', 'ol', 'paragraph']],
           ['view',['fullscreen', 'codeview']]
      ],
      callbacks: {
        onInit: function() {
          $(this).summernote('code', self.state.value);
        },
        // If we don't bubble these changes up nothing gets saved...
        onChange: function(contents, $editable) {
          const value = $(this).summernote('code');
          self.setState({ value });
          if (value) {
            self.props.sdk.field.setValue(value);
          } else {
            self.props.sdk.field.removeValue();
          }
        },
        onBlur: function() {
          const value = $(this).summernote('code');
          self.setState({ value });
          if (value) {
            self.props.sdk.field.setValue(value);
          } else {
            self.props.sdk.field.removeValue();
          }
        }
      }
    });
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  onExternalChange = value => {
    this.setState({value});
  };

  onChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
    if (value) {
      this.props.sdk.field.setValue(value);
    } else {
      this.props.sdk.field.removeValue();
    }
  };

  render() {
    return (<div className='summernote'/>);
  }
}

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
