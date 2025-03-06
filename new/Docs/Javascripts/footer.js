const footer = document.getElementById("footer");

footer.innerHTML = `
     <footer class="w-full mt-16 md:mt-28 bg-gray-800 overflow-hidden">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!--Grid-->
                <div
                    class="grid grid-cols-1 sm:grid-cols-3  gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                    <div class="mb-10 lg:mb-0">
                        <a href="./index.html" class="flex justify-center lg:justify-start">
                            <img src="./Docs/Images/logo.png" alt="logo" class=" h-32">
                        </a>
                    </div>
                    <!--End Col-->
                    <div class="lg:mx-auto text-left ">
                        <h4 class="text-lg text-[#fff] font-medium mb-7">Contact Us</h4>
                        <p class="text-gray-300 text-sm mb-5">Kingsway, Luton, LU1 1LP, Bedfordshire, UK</p>
                        <ul class="text-sm  transition-all duration-500">
                            <li class="mb-6 "><a href="tel:+447932574484"
                                    class="text-gray-300 hover:text-gray-100 flex items-center gap-3"> <i
                                        class="fa-solid fa-mobile-screen-button text-xl"></i> +44 7932574484</a></li>
                            <li class="mb-6 "><a href="tel:+971585383851"
                                    class="text-gray-300 hover:text-gray-100 flex items-center gap-3"> <i
                                        class="fa-solid fa-mobile-screen-button text-xl"></i> +97158 538 3851</a></li>
                            <li class="mb-6"><a href="mailto:Tradeflowmanagementservices@gmail.com"
                                    class=" text-gray-300 hover:text-gray-100 flex items-center gap-3"><i
                                        class="fa-solid fa-envelope text-xl"></i> Tradeflowmanagementservices@gmail.com</a></li>
                        </ul>
                    </div>
                    <!--End Col-->
                    <div class="lg:mx-auto text-left ">
                        <h4 class="text-lg text-[#fff] font-medium mb-7">Connect With Us</h4>
                        <ul class="text-sm  transition-all duration-500">
                            <li class="mb-4 "><a href="#"
                                class="text-gray-300 hover:text-gray-100 flex items-center gap-3"> <i
                                    class="fa-brands fa-linkedin text-xl"></i> LinkedIn</a></li>
                            <li class="mb-4 "><a href="#"
                                class="text-gray-300 hover:text-gray-100 flex items-center gap-3"> <i
                                    class="fa-brands fa-facebook text-xl"></i> Facebook</a></li>
                            <li class="mb-4 "><a href="#"
                                class="text-gray-300 hover:text-gray-100 flex items-center gap-3"> <i
                                    class="fa-brands fa-instagram text-xl"></i> Instagram</a></li>
                        </ul>
                    </div>
                  
                </div>
                <!--Grid-->
                <div class="py-7 border-t border-gray-200">
                    <div class="flex items-center justify-center">
                        <span class="text-sm text-gray-400 ">©<a href="./index.html">Tradeflow Management Services</a> 2025, All rights
                            reserved.</span>
                    </div>
                </div>
            </div>
        </footer>

`
