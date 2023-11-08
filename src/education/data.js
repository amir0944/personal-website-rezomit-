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
  class="grid grid-cols-1 lg:grid-cols-2 p-3 mb-4 rounded-xl bg-[#fafafa] float-none gap-4"
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
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] text-justify"
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
];

data.forEach((item, key) => {
  if (key <= 3) {
    const swiperSlide = document.createElement("div");

    const slideContent = `
  <div
  class="grid grid-cols-1 lg:grid-cols-2 p-3 mb-4 rounded-xl bg-[#fafafa] float-none gap-4"
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
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] text-justify"
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
  class="p-3 m-4 mb-4 rounded-xl bg-[#fafafa] float-none gap-4"
  style="width:280px"
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
      class="w-[80%] mx-auto text-[10px] my-2 text-[#000000a3] text-justify"
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
