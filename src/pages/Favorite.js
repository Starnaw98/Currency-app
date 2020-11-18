import React from 'react'
import {connect} from "react-redux";
import {get_currencies} from "../redux";

function Home() {
    return (
        <div>
            List of Favorites currencies
        </div>
    )
}

export default connect(() => ({}), {get_currencies})(Home)
