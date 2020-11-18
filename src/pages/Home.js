import React from 'react'
import {connect} from "react-redux";
import {get_currencies} from "../redux";

function Home() {
    return (
        <div>
            Display examples
        </div>
    )
}

export default connect(() => ({}), {get_currencies})(Home)
