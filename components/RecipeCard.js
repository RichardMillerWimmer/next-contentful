import React from 'react'
import Link from 'next/link';

const RecipeCard = ({recipe}) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields
     
    return (
        <div className='card'>
            <div className='featured'> 
                {/* image-thumbnail */}
            </div>
            <div className='content'>
                <div className='info'>
                    <h4>{ title }</h4>
                    <p>Takes Appox. { cookingTime } minutes to make</p>
                </div>
                <div className='action'>
                    <Link href={`/recipes/${slug}`}>Cook This</Link>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
