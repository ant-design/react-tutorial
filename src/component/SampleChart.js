import React from 'react';
import G2 from '@antv/g2';

class SampleChart extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    this.chart = new G2.Chart({
      container: this.containerRef.current,
      width: 450,
      height: 300
    });
    this.refreshChart();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.refreshChart();
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  refreshChart = () => {
    this.chart.source(this.props.data);
    this.chart.interval().position('genre*sold').color('genre');
    this.chart.render();
  };

  render() {
    return (
      <div ref={this.containerRef} />
    );
  }
}

export default SampleChart;