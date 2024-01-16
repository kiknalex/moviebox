import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';
export default function FeaturedCards({category, categoryItems}) {
    const [emblaRef] = useEmblaCarousel();
    return (
        <section className='container w-full'>
            <h2>{category}</h2>
            <div className='flex gap-2'>
                <button><img src="src\assets\left.svg" alt="Previous" /></button>
                <div className='embla' ref={emblaRef}>
                    <div className='embla__container flex gap-20'>
                        {categoryItems.map(item => {
                            return <Card className="embla__slide" key={item.id} item={item} />
                        })}
                        
                    </div>
                </div>
                <button><img src="src\assets\right.svg" alt="Next" /></button>
            </div>
        </section>
    )
}