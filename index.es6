import React from 'react';

export default class Icon extends React.Component {

  static get propTypes() {
    return {
      icon: React.PropTypes.oneOf(Icon.options.icon).isRequired,
      background: React.PropTypes.string,
      color: React.PropTypes.string,
      size: React.PropTypes.string,
      className: React.PropTypes.string,
      uri: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      className: '',
      uri: '/assets/icons.svg',
      size: '60px',
    };
  }

  shouldComponentUpdate(nextProps) {
    return (
      this.props.icon !== nextProps.icon ||
      this.props.background !== nextProps.background ||
      this.props.color !== nextProps.color ||
      this.props.size !== nextProps.size ||
      this.props.className !== nextProps.className ||
      this.props.uri !== nextProps.uri
    );
  }

  static get options() {
    return {
      icon: [
        'facebook',
        'twitter',
        'googleplus',
        'linkedin',
        'whatsapp',
        'mail',
        'rss',
        'down',
        'up',
        'right',
        'left',
        'close',
        'worldif',
        'home',
        'hamburger',
        'user',
        'magnifier',
        'share',
        'economist-small',
        'economist',
      ],
    };
  }

  render() {
    /* eslint "react/no-danger": 0 */
    return (
      <svg
        role="img"
        aria-labelledby="title desc"
        className={`Icon Icon-${this.props.icon} ${this.props.className || ''}`}
        width={this.props.size}
        height={this.props.size}
        fill={this.props.color}
        style={{
          background: this.props.background,
        }}
        dangerouslySetInnerHTML={{
          // use string literals here to avoid extraneous newlinw chars
          '__html':
            '<title id="title">Icon</title>' +
            `<desc id="desc">${this.props.icon}</desc>` +
            '<use ' +
            'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
            `xlink:href="${this.props.uri}#${this.props.icon}"` +
          '></use>',
        }}
      />
    );
  }
}
