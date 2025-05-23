import MovieView from '@/components/movie-view/MovieView'
import { useFetch } from '@/hooks/useFetch'
import { Loading } from '@/utils'
import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

const url = import.meta.env.VITE_IMAGE_URL

const SingleMovie = () => {
   const {id} = useParams()
   const {data, loading} = useFetch(`/movie/${id}`)
   const {data: images} = useFetch(`/movie/${id}/images`)
   const {data: similars} = useFetch(`/movie/${id}/similar`)

   useLayoutEffect(()=>{
    scrollTo(0,0)
   }, [id])
    
  return (
    <div >
        {loading && <Loading/>} 
        <div className='container mx-auto'>
            <img src={url + data?.backdrop_path} alt="" />
        </div>
        <div className='container mx-auto'>
            <h1 className='text-4xl'>{data?.title}</h1>
            <p>{data?.overview}</p>
            <p>{data?.vote_average}</p>
            <strong>{data?.budget?.toLocaleString()} USD</strong>
            <div className='flex gap-4'>
                {
                    data?.origin_country?.map((country) => <span key={country}>{country}</span>)
                }
            </div>
        </div>
        <div className='container mx-auto grid grid-cols-5'>
            {
                images?.backdrops?.slice(0, 10)?.map((image)=> (
                    <img key={image.file_path} src={url + image.file_path} alt='' />
                ))
            }
        </div>
        <div>
            <h3 className='container mx-auto text-2xl font-bold'>Similar</h3>
            <MovieView movies={similars?.results?.slice(0, 4)}/>
        </div>
    </div>
  )
}

export default SingleMovie