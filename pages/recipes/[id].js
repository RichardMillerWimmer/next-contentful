import { createClient } from "contentful"

const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_KEY })


export default function RecipeDetails( {recipe} ) {
  
  console.log(recipe)
    return (
      <div>
        Recipe Details
      </div>
    )
  }

  export const getStaticPaths = async () => {
    const res = await client.getEntries({
      content_type: 'recipe'
    })
    console.log(res)
    const paths = res.items.map(item => {
      return { params: {id: item.fields.slug}}
    })
    // console.log(paths)
    return {
      paths, 
      fallback: false
    }
  }

  export const getStaticProps = async ({params}) => {
    const res = await client.getEntries({
      content_type: 'recipe',
      'fields.slug': params.id
    })
    // console.log(res)
    return {
      props: {}
    }

  }


  