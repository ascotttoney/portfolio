import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';

export default function SinglePost() {
	const [singlePost, setSinglePost] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		sanityClient
			.fetch(
				`*[slug.current == "${slug}"]{
                    title,
                    _id,
                    slug,
                    mainImage{
                        asset->{
                            _id,
                            url
                        }
                    },
                    body,
                    "name": author->name,
                    "authorImage": author->image
                }`
			)
			.then((data) => setSinglePost(data[0]))
			.catch(console.error);
	}, [slug]);

	if (!singlePost) return <div>Loading...</div>;

	return (
		<main className="w-full p-12">
			<article className="container w-4/5 shadow-lg mx-auto bg-green-100 rounded-3xl ">
				<header className="relative">
					<div className="absolute h-full w-full flex items-center justify-center p-8">
						<div className="bg-white bg-opacity-75 rounded p-10 shadow-lg">
							<h1 className="cursive text-3xl lg:text-4xl text-green-800">
								{singlePost.title}
							</h1>
						</div>
					</div>
					<img
						src={singlePost.mainImage.asset.url}
						alt={singlePost.title}
						className="w-full object-cover rounded-t-3xl"
						style={{ height: 400 }}
					/>
				</header>
				<div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl ">
					<BlockContent
						blocks={singlePost.body}
						projectId="jgsfvy37"
						dataSet="production"
					/>
				</div>
			</article>
		</main>
	);
}
