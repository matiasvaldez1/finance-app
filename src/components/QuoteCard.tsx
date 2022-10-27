import { PATHS } from './NavBar';

interface IQuoteCard {
    text: string;
    name: string;
    img?: string;
}

export default function QuoteCard({ text, name, img }: IQuoteCard) {
    return (
        <div className="col-span-2">
            <div className="border-2 bg-white w-10/12 p-12 text-center space-y-4">
                {img && <img src={img} className="mx-auto" width={100} height={100} />}
                <h4 className="text-xl text-secondary">
                    “Pulse makes my business smarter. We make better decisions because we can see further. You could say it has
                    lowered our stress level by removing the fear of not knowing.”
                </h4>
                <p className="text-darker_grey">CARL SMITH, BUREAU OF DIGITAL</p>
                <p className="text-secondary">
                    <a href={PATHS.customer_stories}>Read Customer Story →</a>
                </p>
            </div>
        </div>
    );
}
