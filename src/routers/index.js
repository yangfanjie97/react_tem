import React, {lazy, Suspense} from "react";
import {Redirect} from "react-router-dom";
import NullLayout from "@/layouts/Null";
import PermissionHOC from '@/hocs/PermissionHOC'

const SuspenseComponent = (Component, meta) => props => {
    return (
        <Suspense fallback={null}>
            <Component meta={meta} {...props}></Component>
        </Suspense>
    )
}

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const NotFound = lazy(() => import("../pages/errPage/404"));

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
                        component: SuspenseComponent(Home, { title: '首页', key: 'Home' })
                    },
                    /*{
                        path: "/xx",
                        component: SuspenseComponent(PermissionHOC(Home), { title: '首页', key: 'Home' })
                    },*/
                    {
                        path: "/login",
                        component: SuspenseComponent(Login, { title: '登录页' })
                    },
                    {
                        path: "*",
                        component: SuspenseComponent(NotFound, { title: '404' })
                    }
                ]
            }
        ]
    }
];
