import React from 'react'

function Overlay(props) {
    return (
        <section style={{ height: "calc(100vh - 54px)", display: "flex", justifyContent: "center", alignItems: 'center' }}>{props.children}</section>
    )
}

export default Overlay