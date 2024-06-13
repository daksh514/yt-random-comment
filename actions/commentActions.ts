"use server"

export async function getComments(videoId: string){
    const response = await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&part=snippet&maxResults=20`)
    const data = await response.json()
    // console.log(data);
    return data.items;
}