import React from 'react';
import { Table,Button,Divider } from 'antd';
import {connect} from 'react-redux';
import json2array from '../Utils/json2array.js';

import {teacherDataAction} from '../Store/action';


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

const { Column } = Table;
class Teacher extends React.Component{
    componentDidMount(){
        this.props.getTeacherData(sessionStorage.getItem("username"),sessionStorage.getItem("userpwd"));
    }
    render(){
        // console.log(this.props);
        return(
            <div className="teacher_tab" style={{width:"100%",margin:0,padding:0}}>
                <Table rowSelection={rowSelection} dataSource={this.props.teacherData} pagination={{pageSize:3}}>
                    <Column title="老师编号" dataIndex="id_coach" key="id_coach" />
                    <Column title="姓名" dataIndex="name_coach" key="name_coach" />
                    <Column title="入行时间" dataIndex="dage_coach" key="dage_coach" />
                    <Column title="加入朗科时间" dataIndex="tage_coach" key="tage_coach" />
                    <Column title="目前职位" dataIndex="honor_coach" key="honor_coach" />
                    <Column title="以前职位" dataIndex="type_coach" key="type_coach" />
                    <Column title="评价星级" dataIndex="evaluate_coach" key="evaluate_coach" />
                    <Column title="老师照片"
                        dataIndex="path_coach" 
                        key="path_coach" 
                        render={(path_coach)=>(
                            <img src={"http://www.qhdlink-student.top/"+path_coach} style={{width:100}} />
                        )} />
                    <Column
                        title="操作"
                        key="action"
                        render={(id_banner) => (
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
    // console.log("teacherPageState",state);
    return {
        // bannerData:json2array(state.bannerData)
        teacherData:json2array(state.teacherData)
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        getTeacherData:(username,userpwd)=>{
            dispatch(teacherDataAction([username,userpwd]));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Teacher)