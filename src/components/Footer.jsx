import React from 'react';
function Footer() {
    return (
        <footer className=" bg-base-300/30 p-10 flex justify-center items-center min-h-[200px] ">
            <nav className="text-center text-sm xxl:text-base">
                <h6 className="footer-title mb-4 text-center" >Contact me</h6>
                <div className="grid grid-flow-col gap-4">
                    <p>
                        <a href="mailto:marko.jurisa@proton.me" className="hover:underline">
                            marko.jurisa@proton.me
                        </a>
                    </p>
                </div>
            </nav>
        </footer>
    );
}

export default Footer;
