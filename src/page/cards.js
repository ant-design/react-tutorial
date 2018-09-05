import React, { Component } from 'react';
import { connect } from 'dva';
// import Link from 'umi/link';
import { Card, Icon, message } from 'antd';

class CardsPage extends Component {
  componentDidMount() {
    this.queryList();
  }

  queryList = () => {
    this.props.dispatch({
      type: 'cards/queryList',
    });
  };

  deleteOne = (id) => {
    this.props.dispatch({
      type: 'cards/deleteOne',
      payload: id,
    }).then(() => {
      message.success('delete success, refresh');
      this.queryList();
    });
  };

  render() {
    const { cardsList = [] } = this.props;
    console.log('cardsList');
    console.log(cardsList);

    return (
      <div>
        {cardsList.map(v => <Card
          key={v.id}
          title={v.name}
          style={{ width: 300, marginBottom: '16px' }}
          extra={<Icon type={'delete'} onClick={() => this.deleteOne(v.id)} />}
        >{v.desc}</Card>)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state');
  console.log(state);
  return {
    cardsList: state.cards.cardsList,
  };
}

export default connect(mapStateToProps)(CardsPage);

// TODO replace antd Card with own Card.
