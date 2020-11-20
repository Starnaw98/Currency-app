import React from 'react'

export default function Popup(props) {
    return (
        <div>
            <h2>Jesteś pewien, że chcesz usunąć tę walutę?</h2>
            <div>
                <span>
                    <button onClick={() => { props.turn_off_or_on(false); props.deleting_fun(props.deleted_element) }} > Tak </button>
                </span>
                <span>
                    <button onClick={() => props.turn_off_or_on(false)} > Nie </button>
                </span>
            </div>
        </div>
    )
}
