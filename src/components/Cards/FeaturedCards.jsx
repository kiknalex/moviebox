import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';
export default function FeaturedCards(props) {
    const [emblaRef] = useEmblaCarousel();
    return (
        <section className='container'>
            <h2>Featured Movies</h2>
            <div className='flex gap-2'>
                <button>left</button>
                <div className='embla' ref={emblaRef}>
                    <div className='embla__container flex'>
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                        <Card className="embla__slide" />
                    </div>
                </div>
                <button>right</button>
            </div>
        </section>
    )
}