import React, {Component} from 'react'
import css from './index.module.less'

class Home extends Component {
    componentDidMount() {
        console.log(this.props, 'props');
        console.log(this.state, 'state');
    }

    render() {
        return (
            <div className={`${css.txt} xx`}>
                home
            </div>
        )
    }
}

export default Home
