const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const gradients = document.querySelectorAll('.gradient');
const root=document.querySelector(":root")
const shoes=document.querySelectorAll(".shoe");
function changeSize () {
    sizes.forEach((item)=>{
        item.classList.remove("active")
    });
    this.classList.add("active");
  }

sizes.forEach((item)=>{
    item.addEventListener("click", changeSize)
});
function changeColor()
{
    colors.forEach((color)=>{
        color.classList.remove("active")
    });
    this.classList.add("active"); 
    let primary =this.getAttribute('primary');
    root.style.setProperty("--primary",primary)
    let color=this.getAttribute("color")
    const shoe = Array.from(shoes).find((s) => s.getAttribute("color") == color);
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');
    const gradient = Array.from(gradients).find((s) => s.getAttribute("color") == color);
    gradients.forEach(s => s.classList.remove('second'));
    gradient.classList.add('second');
}
colors.forEach((color)=>{
    color.addEventListener("click", changeColor)
});
  


