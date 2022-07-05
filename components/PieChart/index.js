import { Pie } from '@ant-design/plots';

const PieChart = ({
    data =  [
        {
        type: 'Sale',
        value: 27,
        },
        {
        type: 'Distribution',
        value: 25,
        },
        {
        type: 'Return',
        value: 18,
        },
        
    ]
}) => {
   
    
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 12,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize:'15px'
        },
        content: '100%\nTransactions',
      },
    },
  };
  return <Pie {...config} />;
};

export default PieChart;