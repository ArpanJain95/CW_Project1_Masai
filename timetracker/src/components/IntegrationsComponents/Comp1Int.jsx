import React, { useEffect, useState } from 'react'
import './Comp1Int.css'
import Comp6 from '../HomeComponents/Comp6'

export const Comp1Int = () => {
    const [integrationData, setIntegrationData] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch('/IntData.json')
                const data = await response.json()
                setIntegrationData(data)
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredIntegrationData = integrationData.filter((int) =>
        int.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='comp1Int-wrapper'>
            <div className='comp4Top comp1IntTop'>
                <h2>TRACKING TIME BUTTON FOR CHROME, FIREFOX, SAFARI, AND EDGE</h2>
                <h3>TrackingTime Integrations</h3>
                <p>Sync TrackingTime with the tools your team uses every day to fit their work habits. This way, they can keep track of every minute without switching between apps.</p>
                <input type="text" placeholder='Search your favorite app' className='search' onChange={handleSearch}/>
                <div className='intEleDiv'></div>
            </div>
            <div>
                <div className='comp1IntBottom'>
                    {filteredIntegrationData.map((int) => (
                        <div key={int.id} className='intCard'>
                            <img src={int.logoPath} className='intImg' alt={int.title} />
                            <h3>{int.title}</h3>
                            <p>{int.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Comp6 />
        </div>
    )
}