import { createClient } from "contentful"
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Fallback from "../../components/Fallback"

const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_KEY })


export default function RecipeDetails( {recipe} ) {
  if(!recipe) return <Fallback />

  const { featuredImage, title, cookingTime, ingredients, method} = recipe.fields
  
  // console.log('recipe', recipe)
    return (
      <div>
        <div className='banner'>
          <Image src={`https:${featuredImage.fields.file.url}`} width={featuredImage.fields.file.details.image.width} height={featuredImage.fields.file.details.image.height}/>
          <h2>{title}</h2>
        </div>
        <div className='info'>
          <p>Takes about {cookingTime} to prepare.</p>
          <h3>Ingredients:</h3>
          {ingredients.map(ing => (
            <span key={ing}>{ing}</span>
          ))}
        </div>
        <div className='method'>
          <h3>Method:</h3>
          <div>{documentToReactComponents(method)}</div>
        </div>
        <style jsx>{`
        h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }
      `}</style>
      </div>
    )
  }

  export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'recipe'
    })
    // console.log('staticpath', res)
    const paths = res.items.map(item => {
      return { params: {id: item.fields.slug}}
    })
    // console.log('paths', paths)
    return {
      paths, 
      fallback: true
    }
  }

  export const getStaticProps = async ({params}) => {
    const res = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': params.id
    })
    // console.log('staticprops', res)
    return {
      props: {recipe: res.items[0]},
      revalidate: 100
    }

  }


  