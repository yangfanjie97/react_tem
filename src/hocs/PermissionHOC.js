// 权限高阶组件， 对页面级权限进行控制, 我也不知道算不算高阶组件
import React from 'react'
import {updateUserToken} from '@/store/user/actionCreators'
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

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

// 这里做了一个简单的判断，如果没有token， 直接跳转到  toPath 页面
// 这里只是简单的控制， 如果需要后台返回前端路由，可在 routers 的路由中填写 meta 的 key值， key值需要前端告知后台由后台返回
// 这里就可修改为 在store 中拉取权限路由（key 值列表）， 然后使用 使用本路由的key  对比权限路由
// 如果有，正常显示， 如果没有，返回 Redirect
function PermissionHOC(WrappedComponent, toPath = '/login') { // toPath 是 字符类型
    class Permission extends React.Component {
        constructor(props) {
            super(props)
            // this.props.location.pathname + this.props.location.search
            const nowPath = this.props.location.pathname + this.props.location.search
            let toPathOver = toPath
            if (!this.props.token) {
                if (!toPathOver.includes('?')) {
                    toPathOver = toPathOver + ('?redirectTo=' + nowPath)
                } else {
                    toPathOver = toPathOver + ('redirectTo=' + nowPath)
                }
            }
            this.state = {
                nowPath,
                toPathOver
            }
        }

        render() {
            if (this.props.token) {
                return <WrappedComponent {...this.props} />;
            } else {
                return <Redirect to={this.state.toPathOver} />
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Permission);
}

// 将ui组件包装成容器组件
export default PermissionHOC
