import maleSmiling from '../../public/assets/male-smiling.png';
import { PATHS } from './NavBar';
import QuoteCard from './QuoteCard';

function BusinessSection() {
    return (
        <section className="border-b-2 py-12 bg-primary_white">
            <div className="text-center my-16">
                <h3 className="text-5xl">Business owners trust Pulse.</h3>
                <p className="font-sans">Below are real quotes from business owners.</p>
            </div>
            <div className="flex flex-col w-4/12 mx-auto leading-8 space-y-8">
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl">“I like that it provides the opportunity to test scenarios.”</h3>
                    <p className="font-sans">
                        You can quickly toggle income and expenses off and on to see what happens based on different scenarios to
                        see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re
                        empowered to make smarter business decisions.
                    </p>
                </div>
            </div>
        </section>
    );
}

function QuoteSection() {
    return (
        <section className="grid grid-cols-5 my-20 bg-primary_white">
            <div className="col-span-3">
                <div className="w-9/12 mx-auto space-y-4">
                    <h3 className="text-5xl">Make smarter business decisions with Pulse.</h3>
                    <p className="text-xl">
                        Do you know if you can hire another employee or take some money out of the company? Should you take on
                        that new project or should turn it down? With Pulse, you immediately see how business decisions will
                        impact your cash in the future, which in turn gives you the confidence you need to know if the decision is
                        right.
                    </p>
                </div>
            </div>
            <QuoteCard
                img={maleSmiling}
                text={
                    '“Pulse makes my business smarter. We make better decisions because we can see further. You could say it has lowered our stress level by removing the fear of not knowing.”'
                }
                name={'CARL SMITH, BUREAU OF DIGITAL'}
            />
        </section>
    );
}

function FreeTrialSection() {
    return (
        <section>
            <div className='grid grid-cols-2 bg-[url("../../public/assets/hero-img.png")] py-16 lg:py-40 bg-gradient-green bg-cover bg-no-repeat bg-center text-white'>
                <div className="space-y-4 mx-12">
                    <h3 className="text-5xl">Pulse is specifically designed for small businesses.</h3>
                    <p className="text-xl">
                        Our customers include creative and technology agencies, service providers, restaurants, manufacturers,
                        retail shops, contractors, freelancers, and more.
                    </p>
                    <button className="bg-primary_white text-primary_black p-4">Sign Up for a Free 30-Day Trial</button>
                </div>
                <div />
            </div>
        </section>
    );
}

function SeeCustomerStoriesSection() {
    return (
        <div className="grid grid-cols-5 my-20 bg-primary_white">
            <div className="col-span-3 w-10/12 space-y-8 mx-auto">
                <h3 className="text-5xl">Pulse is the easy, online way to manage and project your cash flow.</h3>
                <button className="border-secondary border-2 text-secondary p-4 text-xl">
                    <a href={PATHS.customer_stories}>See All Customer Stories</a>
                </button>
            </div>
            <QuoteCard
                text={
                    '“Pulse has allowed us to visualize our cash flow before our brains turned to mush trying to deal with receipts, spreadsheets and accordion folders.”'
                }
                name={'CASIMIR LOEBER, REALTYNINJA'}
            />
        </div>
    );
}

export default function Home() {
    return (
        <main>
            <BusinessSection />
            <QuoteSection />
            <FreeTrialSection />
            <SeeCustomerStoriesSection />
        </main>
    );
}
