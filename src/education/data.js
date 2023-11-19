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
    <div class="bg-[#fafafa] dark:bg-[#28293d] dark:text-white w-auto lg:w-[280px] h-[340px] p-2 m-2 mb-2 rounded-xl">
    <a 
    href="../portfolio/portfolioDetails.html"
    ><img src="${item.image}" class="rounded-xl" alt="" /></a>
    <a 
    href="../portfolio/portfolioDetails.html"
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
        href="../portfolio/portfolioDetails.html"
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
// all education
const swiperWrapperallEducation = document.querySelector("#allEducation");

data = [
  {
    image: "../../assets/histori.png",
    title: "آموزش برنامه نویسی از صفر تا ورود به بازار کار...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد علی علیپور",
    job: "فرانت اند",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش استقرار روی سرور های AWS آمازون",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "سهیل خالد ابادی",
    job: "بک اند",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش استقرار روی سرور های AWS آمازون",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "سهیل خالد ابادی",
    job: "بک اند",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
];

data.forEach((item, key) => {
  if (key <= 9) {
    const swiperSlide = document.createElement("div");
    swiperSlide.className = "swiper-slide";

    const slideContent = `
  <div
  class="lg:grid grid-cols-1 lg:grid-cols-2 p-3 mb-4 rounded-xl bg-[#fafafa]  dark:bg-[#28293d] dark:text-white  flex-none gap-4 w-auto"
>
  <div>
  <a href="./educationDetails.html"><img
      src="${item.image}"
      class="w-full lg:w-[90%] h-full rounded-xl"
    />
    </a>
  </div>
  <div>
    <a href="./educationDetails.html"><h1 class="text-[13px] font-[dana-bold]">${item.title}</h1></a>
    <p
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] dark:text-gray-300 text-justify"
    >
      ${item.text}
    </p>
    <p>${item.date}</p>
    <div
      class="flex justify-between pt-4 mt-2"
      style="border-top: 1px dashed gray"
    >
      <img src="${item.prof}" alt="" />
      <div class="text-[13px]">
        <p>${item.username}</p>
        <p class="text-[gray] text-left">${item.job}</p>
      </div>
    </div>
  </div>
</div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrapperallEducation.appendChild(swiperSlide);
  }
});
// education
const swiperWrappereducation = document.querySelector("#education");

data = [
  {
    image: "../../assets/histori.png",
    title: "آموزش برنامه نویسی از صفر تا ورود به بازار کار...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد علی علیپور",
    job: "فرانت اند",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش استقرار روی سرور های AWS آمازون",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "سهیل خالد ابادی",
    job: "بک اند",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
];

data.forEach((item, key) => {
  if (key <= 3) {
    const swiperSlide = document.createElement("div");

    const slideContent = `
  <div
  class="grid grid-cols-1 lg:grid-cols-2 p-3 mb-4 rounded-xl bg-[#fafafa]  dark:bg-[#28293d] dark:text-white  float-none gap-4"
>
  <div>
  <a href="./educationDetails.html"><img
      src="${item.image}"
      class="w-full lg:w-[90%] h-full rounded-xl"
    />
    </a>
  </div>
  <div>
    <a href="./educationDetails.html"><h1 class="text-[13px] font-[dana-bold]">${item.title}</h1></a>
    <p
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] dark:text-gray-300 text-justify"
    >
      ${item.text}
    </p>
    <p>${item.date}</p>
    <div
      class="flex justify-between pt-4 mt-2"
      style="border-top: 1px dashed gray"
    >
      <img src="${item.prof}" alt="" />
      <div class="text-[13px]">
        <p>${item.username}</p>
        <p class="text-[gray] text-left">${item.job}</p>
      </div>
    </div>
  </div>
</div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrappereducation.appendChild(swiperSlide);
  }
});
// all education 2
const swiperWrapperallEducation2 = document.querySelector("#allEducation2");
const swiperWrapperallEducation22 = document.querySelector("#allEducation22");

data = [
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش برنامه نویسی از صفر تا ورود به بازار کار...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "محمد علی علیپور",
    job: "فرانت اند",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
];

data.forEach((item) => {
  const swiperSlide = document.createElement("div");
  const swiperSlideD = document.createElement("div");
  swiperSlideD.className = "swiper-slide";

  const slideContent = `
  <div
  class="p-3 m-4 mb-4 rounded-xl bg-[#fafafa]  dark:bg-[#28293d] dark:text-white  float-none gap-4 lg:w-[280px] w-auto"
>
  <div>
  <a href="./educationDetails.html"><img
      src="${item.image}"
      class="w-full lg:w-[50%] m-auto h-full rounded-xl"
    />
    </a>
  </div>
  <div>
    <a href="./educationDetails.html"><h1 class="text-[13px]">${item.title}</h1></a>
    <p
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] dark:text-gray-300 text-justify"
    >
      ${item.text}
    </p>
    <p>${item.date}</p>
    <div
      class="flex justify-between pt-4 mt-2"
      style="border-top: 1px dashed gray"
    >
      <img src="${item.prof}" alt="" />
      <div class="text-[13px]">
        <p>${item.username}</p>
        <p class="text-[gray] text-left">${item.job}</p>
      </div>
    </div>
  </div>
</div>
`;

  swiperSlide.innerHTML = slideContent;
  swiperSlideD.innerHTML = slideContent;

  swiperWrapperallEducation2.appendChild(swiperSlide);
  swiperWrapperallEducation22.appendChild(swiperSlideD);
});
