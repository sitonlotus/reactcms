import React from 'react';
import {connect} from 'react-redux';
import {loginDataAction} from '../Store/action';
import '../Assets/css/loginPage.less';
import {
    Icon,
    Form, 
    Input, 
    Button,
    message
} from 'antd';
class Login extends React.Component{
    // componentDidMount(){
    //     this.props.getLoginData();
    // }
    handleSubmit = e => {
        e.preventDefault();
        this.props.getLoginData(this.refs.username.state.value,this.refs.userpwd.state.value)
        if(this.props.loginData){
            // console.log(this.props.loginData)
            sessionStorage.setItem("username",this.refs.username.state.value);
            sessionStorage.setItem("userpwd",this.refs.userpwd.state.value);
            message.success("登录成功！")
            this.props.history.push("/home");
            // console.log(this.props)
        }else{
            message.error("登录失败！")
        }
    }
    handleReset = () =>{
        sessionStorage.clear();
    }
    render(){
        // const { getFieldDecorator } = this.props.form;
        // console.log(this.props);
        

        return(
            <div className="login-page">
                <div className="title">
                    <img src={require("../Assets/img/logo.png")} alt=""/>
                    <p>后台管理系统</p>
                </div>
                <div className="login-area">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            ref="username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            ref="userpwd"
                            />
                        </Form.Item>
                        
                        <Form.Item className="login-form-buts">
                            <Button  className="login-form-reset" onClick={this.handleReset.bind(this)}>
                                重置
                            </Button>
                            <Button type="primary" htmlType="submit" onClick={this.handleSubmit.bind(this)} className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    // console.log("state",state);
    return {
        loginData:state.loginStatus,
        username:state.username,
        userpwd:state.userpwd
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        getLoginData:(username,userpwd)=>{
            dispatch(loginDataAction([username,userpwd]));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);