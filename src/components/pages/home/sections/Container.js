import classNames from 'classnames'
import React from 'react'
import { useContext } from 'react'
import { Context } from "../../../../Context/SiteContext"


const Container = ({ id, first = false, children }) => {

    return (
        <section
            id={id}
            className={classNames({
                "w-full h-screen border-none": true,
                "myclass": first === true,
                "bg-[rgb(26,26,25)]": first === false,

            })}>
            {children}
        </section>
    )
}

export default Container