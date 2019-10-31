// 基础路由组件， 现阶段是对 title 做更改
import React from 'react'

function BaseRouterHOC(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            if (this.props.meta.title) {
                window.document.title = this.props.meta.title
            }
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default BaseRouterHOC
