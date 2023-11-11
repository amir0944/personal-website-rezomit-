// best portfolio
const swiperWrapperbestPortfolio = document.querySelector("#bestPortfolio");
data = [
  {
    image: "../assets/star/img1.png",
    title: "طراحی رابط کاربری برای سیستم عامل مک",
    rating: "متوسط",
    score: "../assets/S5.png",
    category: "design",
  },
  {
    image: "../assets/star/img8.png",
    title: "مدیریت پروژه منابع انسانی",
    rating: "متوسط",
    score: "../assets/s5.png",
    category: "programming",
  },
  {
    image: "../assets/star/img7.png",
    title: "طراحی چارت ها و گزارش های ماهانه شرکت بهسان",
    rating: "متوسط",
    score: "../assets/s5.png",
    category: "programming",
  },
  {
    image: "../assets/star/img6.png",
    title: "ساخت اپ ورزشی برای لاغری و عضله سازی",
    rating: "متوسط",
    score: "../assets/s5.png",
    category: "programming",
  },
  {
    image: "../assets/star/img3.png",
    title: "برنامه نویسی پروژه های کاربری نسخه موبایل...",
    rating: "متوسط",
    score: "../assets/s5.png",
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
    href="./portfolio/portfolioDetails.html"
    ><img src="${item.image}" class="rounded-xl" alt="" /></a>
    <a 
    href="./portfolio/portfolioDetails.html"
    ><p class="font-[dana-light] text-[13px] text-center pt-4">
      ${item.title}
    </p></a>
    <div class="flex items-center mr-2 mt-2">
      <img src="../assets/v6-icon (free)4.png" class="pl-2" alt="" />
      <p class="text-[gray]">${item.rating}</p>
    </div>
    <div class="flex items-center justify-between py-6">
      <img src="${item.score}" alt="" />
      <a 
        href="./portfolio/portfolioDetails.html"
        class="flex border-[none] items-center bg-black text-white p-2 rounded-xl"
      >
        <img src="../assets/v6-icon (free)2.png" alt="" />
      </a>
    </div>
  </div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrapperbestPortfolio.appendChild(swiperSlide);
  }
});

// portfolio

function portfolioDataSet(category = "all") {
  const swiperWrapperportfolio = document.querySelector("#portfolio");
  const swiperWrapperportfolioD = document.querySelector("#portfolioD");

  $("#portfolio").empty();
  $("#portfolioD").empty();

  data = [
    {
      image: "../assets/star/img4.png",
      title: "طراحی اپلیکیشن خبری برای مجموعه رستا وب",
      rating: "متوسط",
      score: "../assets/s2.png",
      category: "design",
    },
    {
      image: "../assets/star/img3.png",
      title: "ساخت موزیک پلیر و برنامه برای کاهش نویز",
      rating: "متوسط",
      score: "../assets/s5.png",
      category: "game",
    },
    {
      image: "../assets/star/img2.png",
      title: " الگوریتم پیشرفته برای یادگیری آموزش برنامه نویسی",
      rating: "متوسط",
      score: "../assets/s3.png",
      category: "programming",
    },
    {
      image: "../assets/star/img1.png",
      title: "طراحی رابط کاربری برای سیستم عامل مک",
      rating: "متوسط",
      score: "../assets/S4.png",
      category: "design",
    },
    {
      image: "../assets/star/img8.png",
      title: "مدیریت پروژه منابع انسانی",
      rating: "متوسط",
      score: "../assets/s3.png",
      category: "programming",
    },
    {
      image: "../assets/star/img7.png",
      title: "طراحی چارت ها و گزارش های ماهانه شرکت بهسان",
      rating: "متوسط",
      score: "../assets/s3.png",
      category: "programming",
    },
    {
      image: "../assets/star/img6.png",
      title: "ساخت اپ ورزشی برای لاغری و عضله سازی",
      rating: "متوسط",
      score: "../assets/s1.png",
      category: "programming",
    },
    {
      image: "../assets/star/img3.png",
      title: "برنامه نویسی پروژه های کاربری نسخه موبایل...",
      rating: "متوسط",
      score: "../assets/s5.png",
      category: "programming",
    },
  ];

  let new_data = [];

  let data_filtre_length = 0;
  let maxL = 7;

  data.forEach((item, key) => {
    if (item.category == category || category == "all") {
      data_filtre_length++;
      new_data.push(item);
    }
  });
  data_filtre_length > 7 ? (maxL = 7) : (maxL = data_filtre_length);

  console.log(maxL);
  console.log("-------------------");

  new_data.forEach((item, key) => {
    if (key <= maxL) {
      console.log(key);
      const swiperSlide = document.createElement("div");
      const swiperSlideD = document.createElement("div");

      swiperSlide.className = "swiper-slide";

      const slideContent = `
      <div class="bg-[#fafafa] dark:bg-[#28293d] dark:text-white w-[290px] lg:w-[280px] h-[340px] p-2 m-2 mb-2 rounded-xl">
      <a 
      href="./portfolio/portfolioDetails.html"
      ><img src="${item.image}" class="rounded-xl" alt="" /></a>
      <a 
      href="./portfolio/portfolioDetails.html"
      ><p class="font-[dana-light] text-[13px] text-center pt-4">
        ${item.title}
      </p></a>
      <div class="flex items-center mr-2 mt-2">
        <img src="../assets/v6-icon (free)4.png" class="pl-2" alt="" />
        <p class="text-[gray]">${item.rating}</p>
      </div>
      <div class="flex items-center justify-between py-6">
        <img src="${item.score}" alt="" />
        <a 
          href="./portfolio/portfolioDetails.html"
          class="flex border-[none] items-center bg-black text-white p-2 rounded-xl"
        >
          <img src="../assets/v6-icon (free)2.png" alt="" />
        </a>
      </div>
    </div>
`;

      swiperSlide.innerHTML = slideContent;
      swiperSlideD.innerHTML = slideContent;

      swiperWrapperportfolio.appendChild(swiperSlide);
      swiperWrapperportfolioD.appendChild(swiperSlideD);
    }
  });
}

// education
const swiperWrappereducation = document.querySelector("#education");

data = [
  {
    image: "../assets/histori.png",
    title: "آموزش برنامه نویسی از صفر تا ورود به بازار کار آکا...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../assets/07.png",
    username: "محمد علی علیپور",
    job: "فرانت اند",
  },
  {
    image: "../assets/histori.png",
    title: "آموزش مدیریت کمپین های تبلیغاتی و دیجیتال...",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../assets/07.png",
    username: "میلاد شمسایی",
    job: "مدیر محصول",
  },
  {
    image: "../assets/histori.png",
    title: "آموزش استقرار روی سرور های AWS آمازون",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../assets/07.png",
    username: "سهیل خالد ابادی",
    job: "بک اند",
  },
  {
    image: "../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
  {
    image: "../assets/histori.png",
    title: "مدیریت کمپین های برگذار شده در تیم راست چین",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
    date: "سال: 1402",
    prof: "../assets/07.png",
    username: "محمد رضا  جوادی",
    job: "سئو ",
  },
];

data.forEach((item, key) => {
  if (key <= 3) {
    const swiperSlide = document.createElement("div");

    const slideContent = `
  <div
  class="grid grid-cols-1 lg:grid-cols-2 p-3 mb-4 rounded-xl bg-[#fafafa]  dark:bg-[#28293d] dark:text-white float-none gap-4"
>
  <div>
  <a href="./education/educationDetails.html"><img
      src="${item.image}"
      class="w-full lg:w-[90%] h-full rounded-xl"
    />
    </a>
  </div>
  <div>
    <a href="./education/educationDetails.html"><h1 class="text-[13px] font-[dana-bold]">${item.title}</h1></a>
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

// partners
const swiperWrapperpartners = document.querySelector("#partners");

data = [
  {
    image: "../assets/profile/1.png",
    username: "اقا جواد",
    job: "مدیر استارتاپ",
  },
  {
    image: "../assets/profile/2.png",
    username: "زهرا خانم",
    job: "سئو ",
  },
  {
    image: "../assets/profile/3.png",
    username: "اقا کامبیز",
    job: "برنامه نویس",
  },
  {
    image: "../assets/profile/4.png",
    username: "فاطمه خانم",
    job: "عکاس",
  },
  {
    image: "../assets/profile/5.png",
    username: "سارا خانم",
    job: "طراح",
  },
  {
    image: "../assets/profile/6.png",
    username: "اقا محسن",
    job: "مدیر سرور",
  },
];

data.forEach((item, key) => {
  if (key <= 5) {
    const swiperSlide = document.createElement("div");

    const slideContent = `
  <div class="bg-[#fafafa]  dark:bg-[#28293d] dark:text-white p-3 rounded-xl max-w-max m-2">
  <img src="${item.image}" class="rounded-xl" alt="" />
  <div class="flex justify-between mt-[1rem]">
    <p class="text-[gray]">${item.job}</p>
    <p class="dark:text-white>${item.username}</p>
  </div>
</div>
`;

    swiperSlide.innerHTML = slideContent;

    swiperWrapperpartners.appendChild(swiperSlide);
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
