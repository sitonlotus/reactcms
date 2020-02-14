import React from 'react';
import{
    Table, Button,Divider
} from 'antd';
import {connect} from 'react-redux';
import {bannerDataAction} from '../Store/action';
import json2array from '../Utils/json2array.js';


const { Column } = Table;

class Banner extends React.Component{
    componentDidMount(){
        this.props.getBannerData(sessionStorage.getItem("username"),sessionStorage.getItem("userpwd"));
    }
    render(){
        // console.log("bannerPageData",this.props.bannerData);
        return(
            <div className="banner_tab" style={{width:"100%",margin:0,padding:0}}>

                <Table dataSource={this.props.bannerData} pagination={{pageSize:3}} >
                    <Column title="ID号" dataIndex="id_banner" key="id_banner" />
                    <Column title="路径" dataIndex="path_banner" key="path_banner" />
                    <Column title="图片"
                    key="path_banner+'nn'"
                    dataIndex="path_banner"
                    render={(path_banner)=>(
                        <img src={"http://www.qhdlink-student.top/"+path_banner} style={{width:110}} />
                    )}
                    />
                    <Column title="标记" dataIndex="mark_banner" key="mark_banner" />
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
    // console.log("bannerPageState",state);
    return {
        bannerData:json2array(state.bannerData)
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        getBannerData:(username,userpwd)=>{
            dispatch(bannerDataAction([username,userpwd]));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Banner);