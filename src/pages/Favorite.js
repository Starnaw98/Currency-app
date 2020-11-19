import React from 'react'
import {connect} from "react-redux";

function Home() {
    return (
        <div>
            List of Favorites currencies
        </div>
    )
}

export default connect((state) => ({ favorites: state.favorites }), {})(Home)
