import React, { useState } from 'react'

const useOpen = () => {
    const [open, setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(prev => !prev)
    }

    return {open , handleClick}
}

export default useOpen