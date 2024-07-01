import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 ">
                <div className="flex-initial text-[17px] text-Snow font-medium"><b>{data.title}</b></div>
                <div className="text-sm text-Snow font-normal mt-1 ">
                    <a><b>Role: </b></a>
                    <a className="italic text-LightGray opacity-50">
                        {data.role}
                    </a>
                </div>
                <div className="text-Snow text-xs font-normal">
                    <a><b>Link: </b></a>
                    <a className="italic text-LightGray opacity-50" href={`${data.url}`} target="_blank" rel="noreferrer">
                        {data.url}
                    </a>
                </div>
                <ul>
                    <div className="list-decimal text-LightGray text-sm font-normal mt-4 ml-4 text-justify">
                        {data.desc.split(';').map((point, index) => (
                            <li key={index}>{point.trim()}</li>
                        ))}
                    </div>
                </ul>
                <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
                    <div>{data.year}</div> <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card