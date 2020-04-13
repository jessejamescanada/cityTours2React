import React, {useState} from 'react'
import './Tour.scss'
import TourList from './TourList'
import {tourData} from '../../tourData'

export default function Tour() {
  const [tours, setTours] = useState(tourData)

  const handleDeleteTour = (id) => {
    const newTourList = tours.filter((item) => {
      return item.id !== id
    })
    setTours(newTourList)
  }
  return (
    <section className='tourlist'>
      {
        tours.map(item => 
           ( <TourList key={item.id} item={item} handleDeleteTour={handleDeleteTour}></TourList>)
        )
      }
    </section>
  )
}
