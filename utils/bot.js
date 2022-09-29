
/**
 * This sets `cookie` using the `res` object
 */

export const setBot = (
  res,
  name
) => {
   res.setHeader('Set-bot', String(name))
}

