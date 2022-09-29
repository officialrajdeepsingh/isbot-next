import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.text())
// const { data, error } = useSWR('/api/hello', fetcher)

export default function Index() {
  const { data, error } = useSWR('/api/hello', fetcher)

  console.log(error,' error ',data , " data ");

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return <div>{`Cookie from response: "${data}"`}</div>
}