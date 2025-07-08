slides = [
    { img: "images/pic2.jpg", text1: "As a collector, Ive experienced many premium brands, but Longines consistently stands out. The craftsmanship, heritage, and precision are just on another level. Its not just a watch—its a legacy I plan to pass down to my son.", text2: "David L. Monroe" },
    { img: "images/pic3.jpg", text1: "From the moment I opened the box, I was in awe. The design was sleek, the finish immaculate, and the comfort undeniable. Longines has found the perfect balance between classic charm and modern innovation. I wear it every day with pride.", text2: "Sofia Ahmed" },
    { img: "images/pic4.jpg", text1: "I purchased a Longines Spirit Zulu Time model, and it has far exceeded my expectations. Whether I’m at a business meeting or out for dinner, it feels like the perfect accessory. It’s more than just a timepiece—it’s a symbol of class and confidence.", text2: "Jason Reed" },
];

image = document.querySelector("img");
para = document.querySelector("p");
sp = document.querySelector("span");
doc = document.querySelector(".container");
index = 0;



setInterval(() => {
    
    index = (index + 1) % slides.length;
    image.src = slides[index].img;
    para.textContent = slides[index].text1;
    sp.textContent = slides[index].text2;
        sp.style.transform = 'translateY(-200%)';

    
}, 2000)

