const chartCol = document.querySelectorAll(".lang-col");
const flutuant = document.querySelectorAll(".flutuant");

console.log(chartCol);
chartCol.forEach((element,i)=>{
    element.addEventListener("mouseover",()=>{
        flutuant[i].style.backgroundColor = "#1d1a1a";
        flutuant[i].style.color = "#efefef";
    })
    element.addEventListener("mouseout",()=>{
        flutuant[i].style.backgroundColor = "transparent";
        flutuant[i].style.color = "transparent";
    })
})