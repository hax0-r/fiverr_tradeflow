const navbar = document.getElementById("navbar");

navbar.innerHTML = `
            <nav class="z-40 relative">
                <div class="max-w-7xl text-white mx-auto flex justify-between items-center w-full p-5">
                    <a href="./index.html" class="bg-white rounded-lg block p-2">
                        <img src="./Docs/Images/logo.png" alt="logo" class=" h-24">
                    </a>
                    <ul class="md:flex hidden items-center gap-7">
                        <li><a href="./index.html"
                                class="hover:text-[#cfe8ec] text-white transition-all duration-500">Home</a>
                        </li> |
                        <li><a href="./about-us.html"
                                class="hover:text-[#cfe8ec] text-white transition-all duration-500">About
                                Us</a>
                        </li> |
                        <li><a href="./contactUs.html"
                                class="hover:text-[#cfe8ec] text-white transition-all duration-500">Contact
                                Us</a>
                        </li>
                    </ul>
                    <i id="mobileMenuBtn" class="fa-solid fa-bars md:hidden text-2xl cursor-pointer"></i>
                </div>
            </nav>

            <div id="mobileMenu"
                class="fixed right-0 top-0 bg-[#1c9fb5] max-w-full w-0 overflow-hidden h-screen z-50 transition-all duration-500">
                <i id="mobileMenuCloseBtn"
                    class="fa-solid text-white fa-x z-50 relative flex items-end justify-end p-5 text-2xl cursor-pointer"></i>
                <ul class="flex relative z-50 flex-col p-10 gap-7">
                    <li><a href="./index.html"
                            class="hover:text-[#cfe8ec] text-white transition-all duration-500">Home</a>
                    </li>
                    <li><a href="./about-us.html"
                            class="hover:text-[#cfe8ec] text-white transition-all duration-500">About
                            Us</a>
                    </li>
                    <li><a href="./contactUs.html"
                            class="hover:text-[#cfe8ec] text-white transition-all duration-500">Contact
                            Us</a>
                    </li>
                </ul>
            </div>
`


const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtn = document.getElementById("mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtn.addEventListener("click", () => {
    mobileMenu.style.width = "0";
});
