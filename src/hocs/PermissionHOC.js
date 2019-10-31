// 权限高阶组件， 对页面级权限进行控制, 我也不知道算不算高阶组件
import React from 'react'
import {updateUserToken} from '@/store/user/actionCreators'
import {updatePermissionRouter} from '@/store/permission/actionCreators'
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

// 映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
    token: state.getIn(['user', 'token']),
    permissionRouter: state.getIn(['permission', 'permissionRouter']).toJS(), // 权限路由
    routerWhiteList: state.getIn(['permission', 'routerWhiteList']).toJS() // 白名单
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
    return {
        changeTokenDispatch(token) {
            dispatch(updateUserToken(token));
        },
        updatePermissionRouter(router) {
            dispatch(updatePermissionRouter(router))
        }
    }
};

// 对路由权限进行判断
// 主要是先核对 路由白名单，如果在白名单中，正常显示
// 然后核对 权限路由表， 如果在，正常显示
// 都不在， 重定向
function PermissionHOC(WrappedComponent) {
    class Permission extends React.Component {
        constructor(props) {
            super(props)
            const nowPath = this.props.location.pathname + this.props.location.search
            let toPathOver = this.props.token ? '/404' : '/login'
            if (!toPathOver.includes('?')) {
                toPathOver = toPathOver + ('?redirectTo=' + nowPath)
            } else {
                toPathOver = toPathOver + ('redirectTo=' + nowPath)
            }
            this.state = {
                nowPath,
                toPathOver
            }
        }

        render() {
            if (this.props.routerWhiteList.includes(this.props.meta.key)) {
                // 如果在白名单， 正常显示
                return <WrappedComponent {...this.props} />;
            } else if (this.props.permissionRouter.includes(this.props.meta.key)) {
                // 如果在权限路由中， 正常显示
                return <WrappedComponent {...this.props} />;
            } else {
                // 表示 无权限。 进行跳转
                return <Redirect to={this.state.toPathOver} />
            }
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Permission);
}

// 将ui组件包装成容器组件
export default PermissionHOC
