import React, { FC } from 'react'

import { ArrowNav } from '../ArrowsNav'
import { Checkbox } from '../Checkbox'

type ItemCardProps = {
    image: {
        src: string,
        alt: string
    },
    text?: string,
    title: string,
}

export const ItemCard: FC<ItemCardProps> = ({image, title, text}) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt={image.alt} src={image.src} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {title}
                    </h1>

                    {
                        text ? (
                            <p className="mb-8 leading-relaxed">
                                {text}
                            </p>
                        ) : (
                            <>
                                <Checkbox />
                                <Checkbox />
                                <Checkbox />
                                <Checkbox />
                            </>
                        )
                    }



                    <ArrowNav />
                </div>
            </div>
        </section>
    )
}
