import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const RecipeCard = ({recipe}) => {
    const { title, slug, cookingTime, thumbnail } = recipe.fields;

    console.log(thumbnail)
     
    return (
        <div className='card'>
            <div className='featured'> 
                <Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height}/>
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
