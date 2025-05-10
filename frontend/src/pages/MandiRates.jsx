import React from 'react';
import { Table } from 'antd';
import UserLayout from '../component/UserLayout';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Potato',
    dataIndex: 'Potato',
    sorter: {
      compare: (a, b) => a.Potato - b.Potato,
      multiple: 5,
    },
  },
  {
    title: 'Corn',
    dataIndex: 'Corn',
    sorter: {
      compare: (a, b) => a.Corn - b.Corn,
      multiple: 4,
    },
  },
  {
    title: 'Wheat',
    dataIndex: 'Wheat',
    sorter: {
      compare: (a, b) => a.Wheat - b.Wheat,
      multiple: 3,
    },
},
{
    title: 'Rice',
    dataIndex: 'Rice',
    sorter: {
      compare: (a, b) => a.Rice - b.Rice,
      multiple: 2,
    },
    },
    {
    title: 'Watermelon',
    dataIndex: 'Watermelon',
    sorter: {
      compare: (a, b) => a.Watermelon - b.Watermelon,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'Sahiwal',
    Potato: 98,
    Corn: 60,
    Wheat: 70,
    Rice: 70,
    Watermelon: 70,
  },
  {
    key: '2',
    name: 'Lahore',
    Potato: 85,
    Corn: 75,
    Wheat: 65,
    Rice: 80,
    Watermelon: 60,
  },
  {
    key: '3',
    name: 'Faisalabad',
    Potato: 90,
    Corn: 68,
    Wheat: 72,
    Rice: 78,
    Watermelon: 65,
  },
  {
    key: '4',
    name: 'Multan',
    Potato: 70,
    Corn: 55,
    Wheat: 80,
    Rice: 75,
    Watermelon: 85,
  },
  {
    key: '5',
    name: 'Gujranwala',
    Potato: 95,
    Corn: 80,
    Wheat: 60,
    Rice: 90,
    Watermelon: 75,
  },
  {
    key: '6',
    name: 'Rawalpindi',
    Potato: 60,
    Corn: 50,
    Wheat: 85,
    Rice: 65,
    Watermelon: 90,
  },
  {
    key: '7',
    name: 'Sargodha',
    Potato: 80,
    Corn: 72,
    Wheat: 68,
    Rice: 78,
    Watermelon: 55,
  },
  {
    key: '8',
    name: 'Bahawalpur',
    Potato: 75,
    Corn: 62,
    Wheat: 77,
    Rice: 82,
    Watermelon: 67,
  },
  {
    key: '9',
    name: 'Sheikhupura',
    Potato: 88,
    Corn: 70,
    Wheat: 66,
    Rice: 85,
    Watermelon: 78,
  },
  {
    key: '10',
    name: 'Okara',
    Potato: 92,
    Corn: 74,
    Wheat: 63,
    Rice: 77,
    Watermelon: 80,
  },
  {
    key: '11',
    name: 'Jhang',
    Potato: 65,
    Corn: 58,
    Wheat: 70,
    Rice: 75,
    Watermelon: 88,
  },
  {
    key: '12',
    name: 'Kasur',
    Potato: 78,
    Corn: 67,
    Wheat: 72,
    Rice: 80,
    Watermelon: 85,
  },
  {
    key: '13',
    name: 'Mianwali',
    Potato: 55,
    Corn: 45,
    Wheat: 85,
    Rice: 60,
    Watermelon: 75,
  },
  {
    key: '14',
    name: 'Khushab',
    Potato: 66,
    Corn: 54,
    Wheat: 82,
    Rice: 68,
    Watermelon: 77,
  },
  {
    key: '15',
    name: 'Dera Ghazi Khan',
    Potato: 72,
    Corn: 60,
    Wheat: 75,
    Rice: 70,
    Watermelon: 80,
  },
  {
    key: '16',
    name: 'Rajanpur',
    Potato: 58,
    Corn: 52,
    Wheat: 79,
    Rice: 67,
    Watermelon: 83,
  },
  {
    key: '17',
    name: 'Vehari',
    Potato: 74,
    Corn: 66,
    Wheat: 70,
    Rice: 85,
    Watermelon: 72,
  },
  {
    key: '18',
    name: 'Muzaffargarh',
    Potato: 68,
    Corn: 62,
    Wheat: 73,
    Rice: 77,
    Watermelon: 80,
  },
  {
    key: '19',
    name: 'Pakpattan',
    Potato: 90,
    Corn: 75,
    Wheat: 68,
    Rice: 82,
    Watermelon: 65,
  },
  {
    key: '20',
    name: 'Narowal',
    Potato: 82,
    Corn: 70,
    Wheat: 74,
    Rice: 78,
    Watermelon: 88,
  }
  
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const MandiRates = () =>
    <UserLayout>
     <Table columns={columns} dataSource={data} onChange={onChange} />;
     </UserLayout>
export default MandiRates;