
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRef } from "react";




export const BlogPostFeature = ({data}) => {


    const blog1 = [data.blogPost_url1, data.blogPost_image1, data.blogPost_title1, data.blogPost_info1]
    const blog2 = [data.blogPost_url2, data.blogPost_image2, data.blogPost_title2, data.blogPost_info2]
    const blog3 = [data.blogPost_url3, data.blogPost_image3, data.blogPost_title3, data.blogPost_info3]
    const blog4 = [data.blogPost_url4, data.blogPost_image4, data.blogPost_title4, data.blogPost_info4]
    const blog5 = [data.blogPost_url5, data.blogPost_image5, data.blogPost_title5, data.blogPost_info5]
    const blogFeatures = [blog1,blog2,blog3,blog4,blog5]
    
    console.log(blog1[0])

    // console.log(data)

    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.clientX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 3; // Adjust the sensitivity as needed
        containerRef.current.scrollLeft = scrollLeft - walk;
    };


    return (
        <div className="flex overflow-x-auto pb-10"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}>
            <div className="flex">
                {blogFeatures.map((item) => (
                    <Card key={item[0]} className="mt-6 w-96 mx-5 h-[500px] slide-animation hover:drop-shadow-2xl">
                        <CardHeader color="blue-gray" className="relative h-56 flex items-center">
                            <Image src={item[1]}
                            className="h-[230px] object-cover"
                            alt="card-image"
                            width={500}
                            height={500}
                            />
                        </CardHeader>
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                {item[2]}
                            </Typography>
                            <Typography>
                                {item[3]}
                            </Typography>
                        </CardBody>
                        <Link href={item[0]}>
                            <CardFooter className="pt-0">
                                <Button>Read More</Button>
                            </CardFooter>
                        </Link>
                    </Card>
                ))}
            </div>
        </div>
    )
}