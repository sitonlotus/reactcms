import React from 'react';
import {connect} from 'react-redux';
import json2array from '../Utils/json2array.js';
import {newsDataAction,searchNewsDataAction} from '../Store/action';

import {Table,Button,Divider,Row,Col,Input} from 'antd';

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
const { Search } = Input;
class News extends React.Component{
    componentDidMount(){
        this.props.getNewsData(sessionStorage.getItem("username"),sessionStorage.getItem("userpwd"));
    }
    searchNews=(value)=>{
        this.props.searchNewsData("lzl",12345678,value);
        // console.log(this.props)
    }
    render(){
        return(
            <div className="news-page">
                <Row gutter={[20,20]}>
                    <Col span={5}>
                        <Search 
                            placeholder="input search text" 
                            onSearch={this.searchNews.bind(this)} 
                            enterButton
                            style={{width:200}}
                        />
                    </Col>
                    <Col span={2}>
                        <Button type="primary" icon="edit">编辑</Button>
                    </Col>
                    <Col span={2}>
                        <Button type="danger" icon="delete">删除</Button>
                    </Col>
                </Row>
                <Table rowSelection={rowSelection} dataSource={this.props.newsData} pagination={{pageSize:3}}>
                    <Column title="新闻编号" dataIndex="id_news" key="id_news" />
                    <Column title="新闻标题" dataIndex="title_news" key="title_news" />
                    <Column title="发布时间" dataIndex="time_news" key="time_news" />
                    <Column
                        title="操作"
                        dataIndex="id_news"
                        key="action"
                        render={(id_news)=>(
                            <span>
                                <a href={"#/home/newsdetail/"+id_news}><Button type="" icon="eye">详情</Button></a>
                                <Divider type="vertical" />
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
    // console.log("newsPageState",state);
    return {
        newsData:json2array(state.newsData)
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        getNewsData:(username,userpwd)=>{
            dispatch(newsDataAction([username,userpwd]));
        },
        searchNewsData:(username,userpwd,keywords)=>{
            dispatch(searchNewsDataAction([username,userpwd,keywords]));
        }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(News)