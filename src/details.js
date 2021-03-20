import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //发送Ajax请求获取远端的数据
            profile: {},
            // snippet: {}
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/getFirstPage')
            .then((res) => {
                let current_profile = {
                    "subject": res.data.title,
                    "location": res.data.rich_snippet.top.extensions[0],
                    "title": res.data.rich_snippet.top.extensions[1],
                    "company": res.data.rich_snippet.top.extensions[2],
                    "snippet": res.data.snippet
                }
                this.setState({
                    profile: current_profile
                })
                console.log(res);
            })
    }
    render() {
        return(
            <div>
                {/*<h1>detail</h1>*/}
                <h1 style={{color: '#1a0dab', 'font-size': '20px',
                    'line-height': '1.3'}}>{this.state.profile.subject}</h1>
                <div style={{color: '#70757a', 'line-height': '1.58'}}>
                    {this.state.profile.location} ·
                    {this.state.profile.title} ·
                    {this.state.profile.company}
                </div>
                <br/>
                <div style={{'line-height': '1.58'}}>
                    {this.state.profile.snippet}
                </div>
            </div>
        )
    }
}
export default Detail;