import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux"
import { getRocketsAction } from '../../redux/slices/actions/rockets.actions';

export const Rockets = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state) => state.rockets)

  useEffect(() => {
    dispatch(getRocketsAction());
  }, [dispatch])

  return (
    <div className='flex flex-col gap-4'>
    {data?.map((rocket) => {
      return (
        <div className='flex gap-x-5'>
        <div className='w-40'>
        <img className='w-100 h-100 object-cover' src={rocket.flickr_images[0]} alt='Rocket' />
        </div>
        <div className='flex-1'>
         <h3 className='text-xl font-semibold'>{rocket.name}</h3>
         <p>{rocket.description}</p>
        </div>
        </div>
      )
    })}
    </div>
  )
}
