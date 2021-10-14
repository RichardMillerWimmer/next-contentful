import { createClient } from "contentful"
import RecipeCard from "../components/RecipeCard"

const client = createClient({ space: process.env.CONTENTFUL_SPACE_ID, accessToken: process.env.CONTENTFUL_ACCESS_KEY })

export default function Home({recipes}) {

  

  // console.log(recipes)

  return (
    <div className='recipe-list'>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.sys.id} recipe={recipe}/>
      ))}
      <style jsx>{
        `.recipe-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px 60px;
        }`
      }</style>
    </div>
   
  )
}

export async function getStaticProps() {
  

  const res = await client.getEntries({content_type: 'recipe'})

  return {
    props: {
      recipes: res.items,
      revalidate: 100
    }
  }
}
