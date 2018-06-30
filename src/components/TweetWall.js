import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    })
  }

  shouldComponentUpdate(nextProps) {
    let tweetCopy = [...nextProps.newTweets, ...this.state.tweets]
    return (this.state.tweets.length !== tweetCopy.length)
  }

  componentWillReceiveProps(nextProps) {
    let tweetCopy = [...nextProps.newTweets, ...this.state.tweets]
    this.setState({
      tweets: tweetCopy
    })

  }
  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
