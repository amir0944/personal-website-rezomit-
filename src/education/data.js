// best portfolio
const swiperWrapperbestPortfolio = document.querySelector("#bestPortfolio");
data = [
  {
    image: "../../assets/star/img8.png",
    title: "مدیریت پروژه منابع انسانی",
    score: "../../assets/s1.png",
  },
  {
    image: "../../assets/star/img7.png",
    title: "طراحی چارت ها و گزارش های ماهانه شرکت بهسان",
    score: "../../assets/s2.png",
  },
  {
    image: "../../assets/star/img6.png",
    title: "ساخت اپ ورزشی برای لاغری و عضله سازی",
    score: "../../assets/s1.png",
  },
  {
    image: "../../assets/star/img3.png",
    title: "برنامه نویسی پروژه های کاربری نسخه موبایل...",
    score: "../../assets/s3.png",
  },
  {
    image: "../../assets/star/img7.png",
    title: "طراحی چارت ها و گزارش های ماهانه شرکت بهسان",
    score: "../../assets/s2.png",
  },
  {
    image: "../../assets/star/img6.png",
    title: "ساخت اپ ورزشی برای لاغری و عضله سازی",
    score: "../../assets/s1.png",
  },
  {
    image: "../../assets/star/img3.png",
    title: "برنامه نویسی پروژه های کاربری نسخه موبایل...",
    score: "../../assets/s4.png",
  },
];

data.forEach((item, key) => {
  if (key <= 5) {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    const slideContent = `
<div class="bg-[#fafafa] w-[290px] lg:w-[280px] h-[340px] p-2 mb-2 rounded-xl">
 <img src="${item.image}" class="rounded-xl" alt="" />
 <p class="font-[dana-light] text-[13px] text-center pt-2">${item.title}</p>
 <div class="flex items-center mt-[4rem]">
   <img src="${item.score}" alt="" />
 </div>
</div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrapperbestPortfolio.appendChild(swiperSlide);
  }
});
