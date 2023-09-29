import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { SearchQuery } from "utils/getQuery";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Image from 'next/image';
import Link from 'next/link';


export const BlogSearch = () => {

    const router = useRouter();
    const { search } = router.query;
    // const search = "ai"
    // console.log(search)


const { loading, error, data } = useQuery(SearchQuery, {
    variables: { search },
    });
    if (loading) return <p className='flex justify-center'>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const searchResults = data.blogsposts.nodes
    console.log(data.blogsposts.nodes)

    return (
        <div className="flex flex-wrap justify-center gap-7 my-10">

        {searchResults && 
            searchResults.map((item) => (
                    <Card key={item.postTitle} className="mt-6 w-96 h-[500px] hover:drop-shadow-2xl">
                        <CardHeader color="blue-gray" className="relative h-56 flex items-center">
                            <Image src={item.blogFeatures.metaImage.sourceUrl}
                            className="h-[230px] object-cover"
                            alt={item.blogFeatures.metaImage.altText}
                            width={500}
                            height={500}
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {item.blogFeatures.postTitle}
                            </Typography>
                            <Typography>
                                {item.blogFeatures.metaInfo}
                            </Typography>
                        </CardBody>
                        <Link href={item.uri}>
                            <CardFooter className="pt-0">
                                <Button>Read More</Button>
                            </CardFooter>
                        </Link>
                    </Card>
                ))
        }
            
        </div>
    )
}