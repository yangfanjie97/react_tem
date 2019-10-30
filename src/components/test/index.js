import { connect } from 'react-redux';
import { updateUserToken } from '@/store/user/actionCreators'
import React, { Component } from 'react'

class TestC extends  Component{
    render() {
        return(
            <div>
                {this.props.token}
            </div>
        )
    }
}


// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    token: state.getIn(['user', 'token']),
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeTokenDispatch(token) {
            dispatch(updateUserToken(token));
        }
    }
};

// 将ui组件包装成容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(React.memo(TestC));
export default connect(mapStateToProps, mapDispatchToProps)(TestC);
