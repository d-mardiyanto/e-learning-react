"use client"
import Slider from "react-slick";
import React, { Component,useState } from "react";
import Image from "next/image";
import { getClasses } from "@/app/services/api_classes";

interface Classes {
    // Define the structure of your `Classes` type here
    id: number;
    class_name: string;
}

interface State {
    classes: Classes[] | null;
    loading: boolean;
    error: string | null;
}
// CAROUSEL SETTINGS

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center" , background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
            onClick={onClick}
        />
    );
}

export default class MultipleItems extends Component<{}, State> {
    constructor(props:{}) {
        super(props);
        this.state = {
            classes: null,
            loading: true,
            error: null,
        };
    }

    async componentDidMount() {
        try {
            const classesData = await getClasses();
            this.setState({ classes: classesData, loading: false });
        } catch (error) {
            this.setState({ error: 'Failed to fetch classes', loading: false });
        }
    }
    
    render() {
        const { classes } = this.state;
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
            speed: 4000,
            nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
            prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
            autoplaySpeed: 4500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 530,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="py-10 sm:py-24 bg-white" id="classes">

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 px-4 lg:px-8 relative'>
                    <h2 className="lh-82 text-midnightblue text-4xl md:text-55xl text-center md:text-start font-semibold">Our Classes</h2>

                    <Slider {...settings}>
                        {classes?.map((items, i) => (
                            <div key={i}>
                                <div className='m-3 py-14 md:my-10 text-center'>
                                    <div className="relative">
                                        <Image src={'/assets/classes/def_classes.png'} alt="user-image" width={306} height={0} className="inline-block m-auto" />
                                    </div>
                                    <div className="mt-10">
                                        <h3 className='text-2xl font-semibold text-lightblack'>{items.class_name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

        );
    }
}
