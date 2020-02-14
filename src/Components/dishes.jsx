import React from 'react';
import {connect} from 'react-redux';
import {dishesDataAction} from '../Store/action';
import json2array from '../Utils/json2array.js';
import {Table,Button,Divider} from 'antd';


const { Column } = Table;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};



class Dishes extends React.Component{
  componentDidMount(){
    this.props.getDishesData("lzl",12345678);
  }
    render(){
      console.log("dishesprops",this.props);
      return(
        <div className="dishes_tab">
          <Table rowSelection={rowSelection} dataSource={this.props.dishesData} pagination={{pageSize:3}} >
            <Column title="菜品编号" dataIndex="id_coach" key="id_coach" />
            <Column title="菜品名称" dataIndex="name_coach" key="name_coach" />
            <Column title="生产时间" dataIndex="dage_coach" key="dage_coach" />
            <Column title="失效时间" dataIndex="tage_coach" key="tage_coach" />
            <Column title="折扣" dataIndex="honor_coach" key="honor_coach" />
            <Column title="价格" dataIndex="type_coach" key="type_coach" />
            <Column title="评价" dataIndex="evaluate_coach" key="evaluate_coach" />
            {/* <span>
              <Icon type="star" />
              <Icon type="star" theme="twoTone" />
            </span> */}
              
            <Column title="菜品照片"
              dataIndex="path_coach" 
              key="path_coach" 
              render={(path_coach)=>(
                <img src={"http://www.qhdlink-student.top/"+path_coach} style={{width:100}} />
              )} 
            />
            <Column
              title="操作"
              render={(id_coach) => (
                  <span>
                  <Button type="primary" icon="edit">编辑</Button>
                  <Divider type="vertical" />
                  <Button type="danger" icon="delete">删除</Button>
                  </span>
              )}
            />
          </Table>
        </div>
      )
    }
}


const mapStateToProps=(state)=>{
  // console.log("dishesPageState",state);
  return {
      dishesData:json2array(state.dishesData)
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
      getDishesData:(username,userpwd)=>{
          dispatch(dishesDataAction([username,userpwd]));
      }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dishes);