import { PATHS } from './NavBar';

export default function Footer() {
    return (
        <footer className="bg-primary_black grid grid-cols-2 h-[70vh]">
            <div className="flex flex-col space-y-20 mt-auto w-11/12 ml-auto">
                <h2 className="text-primary">Logo</h2>
                <button className="text-primary_black bg-primary px-12 py-4 w-fit hover:translate-y-1">
                    Sign up for 30-day free trial
                </button>
                <p className="text-darker_grey text-xs font-sans w-5/6 pb-3">
                    ©2019 Pulseapp.com, Inc. All Rights Reserved | Terms of Use | Privacy Policy | EU Privacy Pulse is made by
                    Simple Focus. We also make Ballpark, Sifter, and Curated.
                </p>
            </div>
            <div className="grid grid-cols-3 place-content-center">
                <div className="text-secondary space-y-6 text-lg">
                    <h2 className="first:text-white">Product</h2>
                    <h2>
                        <a href={PATHS.features}>Features</a>
                    </h2>
                    <h2>
                        <a href={PATHS.prices}>Pricing</a>
                    </h2>
                    <h2>
                        <a href={PATHS.contact}>Contact</a>
                    </h2>
                </div>
                <div className="text-secondary space-y-6 text-lg">
                    <h2 className="first:text-white">Company</h2>
                    <h2>
                        <a href={PATHS.customer_stories}>Customer Stories</a>
                    </h2>
                    <h2>About</h2>
                    <h2>
                        <a href={PATHS.contact}>Contact</a>
                    </h2>
                </div>
                <div className="text-secondary space-y-6 text-lg">
                    <h2 className="first:text-white">Resources</h2>
                    <h2>Support</h2>
                    <h2>Blog</h2>
                </div>
            </div>
        </footer>
    );
}
