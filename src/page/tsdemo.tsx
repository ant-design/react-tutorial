import React from "react";

// name为必填
const Hello = ({ name }) => <div>Hello,{name}</div>;

// 约束 name 的类型
const SFCHello: React.SFC<{ name: string }> = ({ name }) => (
  <div>Hello,{name}</div>
);

class Message extends React.Component<
  {
    message: string;
  },
  {
    count: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  public increment = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };
  public render() {
    return (
      <div onClick={this.increment}>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}

const App = () => (
  <>
    <Hello name={123} />
    <SFCHello name="coder" />
    <Message message="点击" />
  </>
);

export default App;
