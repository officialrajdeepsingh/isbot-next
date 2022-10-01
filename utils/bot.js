export const getBots = (
  response,
  userAgent
) => {
  response.cookies.set("userAgent",userAgent)
}

