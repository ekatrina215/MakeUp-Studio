const items=document.querySelectorAll('.item');
items.forEach( item =>{
    item.addEventListener('mouseover',()=>{
        removeFocus();
       // console.log("LEO");
       item.classList.add('selected');

    })
    removeFocus=()=>{
        items.forEach(item=>{
            item.classList.remove('selected');
        })
    }
})

const image =document.querySelector("#myImage");
const text=document.querySelector("h2");

const buttonOne=document.querySelector("#one");
const buttonTwo=document.querySelector("#two");

buttonOne.addEventListener("click", deep);
function deep(){
    image.setAttribute("src","https://skinglowclinic.co.uk/wp-content/uploads/2021/07/face-cleansing.png");
    text.innerHTML="Have you done deep cleaning more than 3 months ago?";
    buttonOne.innerHTML="Yes";
    buttonTwo.innerHTML="No";

    buttonOne.addEventListener("click", deepcleaning);
    function deepcleaning(){
        image.setAttribute("src","https://img.grouponcdn.com/bynder/i8GH2tzf5TGBwkSRzYwyMu4QWbf/i8-2048x1229/v1/c870x524.jpg");
        text.textContent="We reccomend 30% Glycolic peel";
        buttonOne.style="display:none";
        buttonTwo.style="display:none";
    }

    buttonTwo.addEventListener("click", noDeep);
    function noDeep(){
        image.setAttribute( "src", "https://img.grouponcdn.com/iam/2PoGCtA3t2PakwB4KVWpJFJr8y1m/2P-2048x1228/v1/c870x524.jpg");
        text.innerHTML="We reccomend: `Microdermabrasion Facial` ";
        buttonOne.style="display:none";
        buttonTwo.style="display:none";
    }
}

buttonTwo.addEventListener("click", hydrating);
function hydrating(){
    image.setAttribute("src","https://www.medicadepot.com/shop_image/news_pics/cached/6101_460.jpeg");
    text.innerHTML="What type of skin do you have?"
    buttonOne.innerHTML="Normal,Combination";
    buttonTwo.innerHTML="Sensitive";

    buttonOne.addEventListener("click",normal);
    function normal(){
        image.setAttribute("src", "http://cdn.shopify.com/s/files/1/2028/2057/articles/Skin-Hydrated_1024x1024.jpg?v=1580281159");
        text.textContent="We reccomend Hydro Facial-Hydro-Dermabrasion";
        buttonOne.style="display:none";
        buttonTwo.style="display:none";
    }

        buttonTwo.addEventListener("click", classic);
        function classic(){
            image.setAttribute("src", "https://media.allure.com/photos/5e865ce8ba1b1f0009d3482e/16:9/w_2560%2Cc_limit/diy%2520facial.jpg");
            text.textContent="We reccomend Classic Relaxation Facial";
            buttonOne.style="display:none";
            buttonTwo.style="display:none";
        }
    }
