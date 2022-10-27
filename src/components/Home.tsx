import maleSmiling from '../../assets/male-smiling.png';

function BusinessSection() {
    return (
        <div className="border-b-2 py-12 bg-primary_white">
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
        </div>
    );
}

function QuoteSection() {
    return (
        <div className="grid grid-cols-5 my-20 bg-primary_white">
            <div className="col-span-3">
                <div className='w-9/12 mx-auto space-y-4'>
                    <h3 className="text-5xl">Make smarter business decisions with Pulse.</h3>
                    <p>
                        Do you know if you can hire another employee or take some money out of the company? Should you take on
                        that new project or should turn it down? With Pulse, you immediately see how business decisions will
                        impact your cash in the future, which in turn gives you the confidence you need to know if the decision is
                        right.
                    </p>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='border-2 bg-white w-10/12 p-12 text-center'>
                    <img src={maleSmiling} className="mx-auto" width={100} height={100}/>
                    <h4>
                        “Pulse makes my business smarter. We make better decisions because we can see further. You could say it
                        has lowered our stress level by removing the fear of not knowing.”
                    </h4>
                    <p className='text-darker_grey'>CARL SMITH, BUREAU OF DIGITAL</p>
                    <p className='text-secondary'>Read Customer Story →</p>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <>
            <BusinessSection />
            <QuoteSection />
        </>
    );
}
