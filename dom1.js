// function swetha(){
//       setTimeout(function(){
//         let contentdiv=document.getElementById("content")
//         contentdiv.innerHTML=`<h2>Mobiles</h2> <img src="https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$" width=300 /><p style="color:red">Samsungs245G</p> <button>Buynow</button>`
//       },2000)
// }
// function swetha() {
//     setTimeout(function() {
//       let contentdiv = document.getElementById("content");
//       let items = [
//         { title: "Samsung S245G", imgSrc: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$", color: "red" },
//         { title: "iPhone 14 Pro", imgSrc: "https://assets.hardwarezone.com/img/2022/09/iphone-14-model-unselect-gallery-2-202209.jpg", color: "blue" },
//         { title: "OnePlus 10T", imgSrc: "https://m.media-amazon.com/images/I/61mIUCd-37L.jpg", color: "green" },
//         { title: "Google Pixel 7", imgSrc: "https://lh3.googleusercontent.com/5reSt_zzW_ykyDNtZz8gTAwpAavJIZPLFa8C_MIr-T3XYbzCmuYK5hIYbA43F3JKpqJmo44EXheyso8BRKJmAX1jxmRu2Rf2Hg=rw-e365-nu-w657", color: "orange" },
//         { title: "Xiaomi Mi 12", imgSrc: "https://i03.appmifile.com/122_item_in/01/03/2024/ab9700f4cb886afae8b857adabd53c7c.jpg", color: "purple",border:"3px solid black" }
//       ];
//       contentdiv.innerHTML = ""; // Clear existing content
//       items.forEach(function(item) {
//         contentdiv.innerHTML += `
//           <div style="margin-bottom: 20px;">
//             <h2>${item.title}</h2> 
//             <img src="${item.imgSrc}" width="300" style="border:${item.border||"3px solid black"}/>
//             <p style="color:${item.color},">${item.title}</p> 
//             <button>Buy now</button>
//           </div> `;
//       });
//     }, 2000);
//   }
  function swetha() {
    setTimeout(function() {
        let contentdiv = document.getElementById("content");
        let items = [
            { title: "Samsung S245G", imgSrc: "https://images.samsung.com/is/image/samsung/assets/in/explore/brand/5-best-android-mobile-phones-2022-in-india/banner-mobile-720x761-080422.jpg?$720_N_JPG$", color: "red" },
            { title: "iPhone 14 Pro", imgSrc: "https://assets.hardwarezone.com/img/2022/09/iphone-14-model-unselect-gallery-2-202209.jpg", color: "blue" },
            { title: "OnePlus 10T", imgSrc: "https://m.media-amazon.com/images/I/61mIUCd-37L.jpg", color: "green" },
            { title: "Google Pixel 7", imgSrc: "https://lh3.googleusercontent.com/5reSt_zzW_ykyDNtZz8gTAwpAavJIZPLFa8C_MIr-T3XYbzCmuYK5hIYbA43F3JKpqJmo44EXheyso8BRKJmAX1jxmRu2Rf2Hg=rw-e365-nu-w657", color: "orange" },
            { title: "Xiaomi Mi 12", imgSrc: "https://i03.appmifile.com/122_item_in/01/03/2024/ab9700f4cb886afae8b857adabd53c7c.jpg", color: "purple", border: "3px solid black" }
        ];
        contentdiv.innerHTML = ""; // Clear existing content
        items.forEach(function(item) {
            contentdiv.innerHTML += `
                <div style="margin-bottom: 20px;">
                    <h2>${item.title}</h2> 
                    <img src="${item.imgSrc}" width="300" style="border: ${item.border || "3px solid black"};" />
                    <p style="color: ${item.color};">${item.title}</p> 
                    <button>Buy now</button>
                </div>`;
        });
    }, 2000);
}

  
