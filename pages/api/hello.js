
import { setBot } from '../../utils/bot'

export default function handler(_req, res) {
  
  setBot(res, 'bot dettor here ')
  // Return the `set-cookie` header so we can display it in the browser and show that it works!
  // res.end(res.getHeader('Set-bot'))
  res.status(200).json({ message: 'Hello from Next.js!' })

}
