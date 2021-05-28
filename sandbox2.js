const forms = document.querySelector('.form input');
const titles = document.querySelectorAll('h5.card-title')
const titlee = document.querySelectorAll('.card-body')
const btn = document.querySelectorAll('.btn')
let matter = document.querySelector('h1.cart')
let title = [];

titles.forEach((data) =>{
    title.push(data.textContent)
});

// title.forEach((data) => {
//     if(!data.includes('Horlicks')){
//         console.log(data);
//     }
// });
console.log(title)
const todos = (terms) =>{
    
    title.forEach((date) =>{
        const dates = date.toLowerCase();
        if(!dates.includes(terms)){
            titles.forEach((data) => {
                if(data.innerText  === date){
                    const elem = data.parentElement
                    elem.parentElement.className = 'filtered';
                }
            });
        }
        else if(date.includes(terms)){
            titles.forEach((data) => {
                if(data.innerText  === date){
                    const elem = data.parentElement
                    elem.parentElement.className = 'filtered1 mx-auto my-40';
                }
            });
        };
    });
};

forms.addEventListener('keyup', (e)=>{
    e.preventDefault();
    todos(forms.value);
});

btn.forEach((data) => {
    data.addEventListener('click', (e) => {
        e.preventDefault();
        if(data.innerText === 'clicked'){
            data.textContent = "Add To Cart";
        }
        else{
            data.textContent = 'clicked';
        }
        
    });
});

const myFunction = () =>{
    const quantity = document.querySelectorAll('tr .checks');
    quantity.forEach((quants) =>{
        if(quants.checked == true){
            // console.log(quants.value);
            let quant = quants.value;
            btn.forEach((btns) =>{
                btns.addEventListener('click', () => {
                    const html = `${quant} Quantity`;
                    // console.log(matter.innerText);  
            });
            

            })

        }
    });
    
};