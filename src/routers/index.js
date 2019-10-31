import React, {lazy, Suspense} from "react";
import {Redirect} from "react-router-dom";
import NullLayout from "@/layouts/Null";
import PermissionHOC from '@/hocs/PermissionHOC'
import BaseRouterHOC from '@/hocs/BaseRouterHOC'

// 这里是对路由级别的组件进行 装饰
const SuspenseComponent = (Component, meta) => props => {
    // 使用高阶组件进行title 修改
    const Base = BaseRouterHOC(Component)
    const Permission = PermissionHOC(Base)
    return (
        <Suspense fallback={null}>
            <Permission meta={meta} {...props} />
        </Suspense>
    )
}

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const NotFound = lazy(() => import("../pages/errPage/404"));

export const RouterKeys = {
    'Home': 'Home',
    'Login': 'Login',
    'NotFound': 'NotFound'
}

export default [
    {
        component: NullLayout,
        routes: [
            {
                path: "/",
                component: NullLayout,
                routes: [
                    {
                        path: "/",
                        exact: true,
                        render: () => <Redirect to={"/index"}/>
                    },
                    {
                        path: "/index",
                        component: SuspenseComponent(Home, { title: '首页', key: RouterKeys.Home })
                    },
                    {
                        path: "/xx",
                        component: SuspenseComponent(Home, { title: 'xxx', key: 'Home' })
                    },
                    {
                        path: "/login",
                        component: SuspenseComponent(Login, { title: '登录页', key: RouterKeys.Login })
                    },
                    {
                        path: "*",
                        component: SuspenseComponent(NotFound, { title: '404', key: RouterKeys.NotFound })
                    }
                ]
            }
        ]
    }
];
