import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-white font-jakarta">
            <div className="mx-auto w-full max-w-304 px-4 py-16 jus">
                {/* Main Footer */}
                <div className="footer sm:footer-horizontal p-0 text-base-content">
                    {/* Logo Section */}
                    <aside className="flex flex-col items-center text-center sm:items-start sm:text-left">
                        <img src={Logo} alt="Dev Stack" />
                        <p className="leading-6 text-[#64748B]">
                            Curated tools, technologies, and resources for developers building
                            <br className="hidden md:block" />
                            modern software.
                        </p>

                        <div className="flex gap-5 text-[#475569]">
                            <a className="cursor-pointer link-hover">GitHub</a>
                            <a className="cursor-pointer link-hover">Twitter</a>
                            <a className="cursor-pointer link-hover">LinkedIn</a>
                        </div>
                    </aside>

                    {/* Product */}
                    <nav className="[&_a]:text-[#64748B] max-md:hidden">
                        <h6 className="footer-title text-[#0F172A]">
                            Product
                        </h6>

                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Technologies</a>
                        <a className="link link-hover">Projects</a>
                    </nav>

                    {/* Company */}
                    <nav className="[&_a]:text-[#64748B] max-md:hidden">
                        <h6 className="footer-title text-[#0F172A]">
                            Company
                        </h6>

                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Careers</a>
                    </nav>

                    {/* Legal */}
                    <nav className="[&_a]:text-[#64748B] max-md:hidden">
                        <h6 className="footer-title text-[#0F172A]">
                            Legal
                        </h6>

                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms of use</a>
                    </nav>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-[#E2E8F0]" />

                {/* Bottom Footer */}
                <div className="my-0 flex flex-col items-center justify-between gap-5 text-[11px] font-normal text-[#94A3B8] md:flex-row md:items-center md:text-sm">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex justify-center gap-6">
                        <a href="#" className="hover:text-[#D91B7E]">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-[#D91B7E]">
                            Terms
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;