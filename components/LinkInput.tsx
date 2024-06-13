"use client"
import { getComments } from '@/actions/commentActions';
import { useGenerationStore } from '@/context/ResponsesZustand';
import { Clipboard } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


function LinkInput() {
    const [linkValue, setLinkValue] = useState('');
    const [videoId, setVideoId] = useState('');
    const { setResponses}  =useGenerationStore()

    async function getResults(){
        if(linkValue.length <= 0 ){
            toast.error('Please enter a valid link')
            return
        }
        
        
        try {
            const url = new URL(linkValue);
            if (!url.hostname.includes('youtube.com')) {
                toast.error('Please enter a valid YouTube link');
                return;
            }
              const vId =   url.searchParams.get('v')
              if(!vId) {
                toast.error('Please enter a youtube video link!');
                return;
              }
              setVideoId(vId)
        } catch (error) {
            toast.error('Please enter a valid link');
            return;
        }

        
        const comments = await getComments(videoId)
        if(!comments) {
            toast.error('Error occurred, please try again!');
            return;
        }
        setResponses(comments)
    }

  return (

    <div className='w-2/3 mx-auto mt-5'>
        <form  className='relative' >
            <label htmlFor="" className='label-text'>Youtube video link</label>
            <input type="text" placeholder="Enter Video Link" className='input input-bordered border-2 w-full' name='linkValue' required value={linkValue} onChange={(e)=>setLinkValue(e.target.value)}/>
            <Clipboard className='absolute top-8 right-3 bg-base-200 hover:bg-base-300 transition-all p-1 w-auto h-8 text-primary-content rounded-lg hover:cursor-pointer' onClick={async ()=>{
                const val = await navigator.clipboard.readText()
                setLinkValue(val)
            }}/>
            <button type='button' className='btn btn-accent mt-3 w-full' onClick={getResults}>Get Random Comment</button>
        </form>
    </div>
  )
}

export default LinkInput