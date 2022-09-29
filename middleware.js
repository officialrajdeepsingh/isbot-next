import { NextResponse, userAgent } from 'next/server'
import useSWR from 'swr'
const axios = require('axios');


const fetcher = (url) => fetch(url).then((res) => res.text())

export function middleware(request,event,response) {
   
   const {isBot} = userAgent(request)
    

    // event.waitUntil(
    //     (async () => {
    //         const newLocal = fetch('http://localhost:3000/api/test')
    //         .then(function (response) {
    //           console.log(response);
    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         })
    //       })()
    //     )


    console.log(isBot,' is bots ');
    
    if (isBot) {
        return NextResponse.redirect(new URL('/bot', request.url))
    }

    return NextResponse.next()
}