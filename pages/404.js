import React, {useEffect} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])

    return (
        <div className='not-found'>
            <h2>404</h2>
            <h3>That page cannot be found</h3>
            <p>Redirecting to the <Link href='/'>Homepage</Link>...</p>
            <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
        </div>
    )
}

export default NotFound
