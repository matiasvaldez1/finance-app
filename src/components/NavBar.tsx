export const PATHS = {
    features: '/features',
    customer_stories: '/customer-stories',
    prices: '/prices',
    contact: '/contact',
};

export default function NavBar({ url }: { url: string }) {
    return (
        <div className="flex justify-between p-12 bg-light_primary text-md">
            <div>
                <a href="/">Logo</a>
            </div>
            <div>
                <ul className="flex gap-12 text-secondary">
                    <li className={`cursor-pointer ${PATHS.features == url && 'text-black'}`}>
                        <a href={PATHS.features}>Features</a>
                    </li>
                    <li className={`cursor-pointer ${PATHS.customer_stories == url && 'text-black'}`}>
                        <a href={PATHS.customer_stories}>Customer stories</a>
                    </li>
                    <li className={`cursor-pointer ${PATHS.prices == url && 'text-black'}`}>
                        <a href={PATHS.prices}>Pricing</a>
                    </li>
                    <li className={`cursor-pointer ${PATHS.contact == url && 'text-black'}`}>
                        <a href={PATHS.contact}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
