const panels = document.querySelectorAll(".panel");
const words = document.querySelectorAll(".panel h3");

panels.forEach(panel => {
    panel.addEventListener('click',()=>{
        panels.forEach(panel => {
            panel.classList.remove('active')
          })
        panel.classList.add('active');
    })
});
