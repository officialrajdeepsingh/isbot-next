import { NextResponse, userAgent } from 'next/server'

export function middleware(request,_event) {
   
  
  const {isBot} = userAgent(request)
  
  
  
  if (!isBot) {
    return NextResponse.redirect(new URL('/bot', request.url))
  }
  
  const response = NextResponse.next()

  response.cookies.set("userAgent",userAgent(request))

  return response
}