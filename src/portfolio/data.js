// best portfolio
const swiperWrapperbestPortfolio = document.querySelector("#bestPortfolio");
data = [
  {
    image: "../../assets/star/img1.png",
    title: "طراحی رابط کاربری برای سیستم عامل مک",
    rating: "متوسط",
    score: "../../assets/S5.png",
    category: "design",
  },
  {
    image: "../../assets/star/img8.png",
    title: "مدیریت پروژه منابع انسانی",
    rating: "متوسط",
    score: "../../assets/s5.png",
    category: "programming",
  },
  {
    image: "../../assets/star/img7.png",
    title: "طراحی چارت ها و گزارش های ماهانه شرکت بهسان",
    rating: "متوسط",
    score: "../../assets/s5.png",
    category: "programming",
  },
  {
    image: "../../assets/star/img6.png",
    title: "ساخت اپ ورزشی برای لاغری و عضله سازی",
    rating: "متوسط",
    score: "../../assets/s5.png",
    category: "programming",
  },
  {
    image: "../../assets/star/img3.png",
    title: "برنامه نویسی پروژه های کاربری نسخه موبایل...",
    rating: "متوسط",
    score: "../../assets/s5.png",
    category: "programming",
  },
];

data.forEach((item, key) => {
  if (key <= 5) {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    const slideContent = `
    <div class="bg-[#fafafa] dark:bg-[#28293d] dark:text-white w-[290px] lg:w-[280px] h-[340px] p-2 m-2 mb-2 rounded-xl">
    <a 
    href="./portfolioDetails.html"
    ><img src="${item.image}" class="rounded-xl" alt="" /></a>
    <a 
    href="./portfolioDetails.html"
    ><p class="font-[dana-light] text-[13px] text-center pt-4">
      ${item.title}
    </p></a>
    <div class="flex items-center mr-2 mt-2">
      <img src="../../assets/v6-icon (free)4.png" class="pl-2" alt="" />
      <p class="text-[gray]">${item.rating}</p>
    </div>
    <div class="flex items-center justify-between py-6">
      <img src="${item.score}" alt="" />
      <a 
        href="./portfolioDetails.html"
        class="flex border-[none] items-center bg-black text-white p-2 rounded-xl"
      >
        <img src="../../assets/v6-icon (free)2.png" alt="" />
      </a>
    </div>
  </div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrapperbestPortfolio.appendChild(swiperSlide);
  }
});
// dark mode
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// ------
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// -----
const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};
// -----
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};
// ------
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle;
};
// ---------
sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();
});
// -----
themeCheck();
