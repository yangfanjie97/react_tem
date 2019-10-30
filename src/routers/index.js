import React, {lazy, Suspense} from "react";
import {Redirect} from "react-router-dom";
import NullLayout from "@/layouts/Null";

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
                        component: SuspenseComponent(Home, { title: '首页' })
                    },
                    {
                        path: "/login",
                        component: SuspenseComponent(Login)
                    },
                    {
                        path: "*",
                        component: SuspenseComponent(NotFound)
                    }
                ]
            }
        ]
    }
];
