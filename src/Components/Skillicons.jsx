import React from 'react'


function Skillicons(props) {
    const icons_url = "https://cdn.simpleicons.org/";
    const icon = icons_url + props.icon_slug;

    return (
        <div className='flex gap-4 items-center rounded-lg p-2'>
            <div className={`w-8`}>
                <img height="32" width="32" src={icon} alt="icon" />
            </div>
            <div className='flex flex-col'>
                <div>{props.icon_name}</div>
                <div className='text-slate-600'>
                    {props.icon_level}
                </div>
            </div>
        </div>
    )
}

export default Skillicons