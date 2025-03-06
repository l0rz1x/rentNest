/*
{
    id: '',
    image:'',
    isAvailable: '',
    dateAded: '',
    address: '',
    price: '',
    keywords: ''
}
*/



//TODO:add filters like all rooms and flats
//TODO:change the image slider
//TODO:make all scale changes to fit to mobile devices
export const products = [
    {
        id:'H-sisli-004',
        image:'images/H-sisli-004/S-004-01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/21',
        address: 'Şişli/Mecidiyeköy',
        price: '17.500',
        keywords: 'şişli 1+1 mecidiyeköy istanbul'
    },
    {
        id:'H-sisli-005',
        image:'images/H-sisli-005/06.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/21',
        address: 'Şişli/Mecidiyeköy',
        price: '16.000',
        keywords: 'şişli 2+1 mecidiyeköy istanbul'
    },
    {
        id:'H-sisli-006',
        image:'images/H-sisli-006/01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/21',
        address: 'Harmantepe/Şişli',
        price: '18.000',
        keywords: 'şişli 1+1 gültepe harmantepe istanbul'
    },
    {
        id:'H-sisli-001',
        image:'images/H-sisli-001/S-001-02.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/14',
        address: 'Şişli/Mecidiyeköy',
        price: '17.000',
        keywords: 'şişli 3+1 mecidiyeköy istanbul'
    },
    {
        id: 'S-fatih-002',
        image:'images/S-fatih-002/F-002-05.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/21',
        address: 'Fatih',
        price: '15.000',
        keywords: 'fatih 1+1 istanbul'
    },
    {
        id:'H-sisli-003',
        image:'images/H-sisli-003/S-003-01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/21',
        address: 'Harmantepe/Şişli',
        price: '17.000',
        keywords: 'şişli 1+1 gültepe harmantepe istanbul'
    },
    {
        id: 'H-sisli-002',
        image:'images/H-sisli-002/S-002-02.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/14',
        address: 'Şişli/Mecidiyeköy',
        price: '23.000',
        keywords: 'şişli 2+1 mecidiyeköy istanbul'
    },
    {
        id: 'H-kavacik-001',
        image:'images/H-kavacik-001/K-001-02.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/14',
        address: 'Soğuksu/Beykoz',
        price: '17.500',
        keywords: 'soğuksu 2+1 beykoz istanbul'
    },
    {
        id: 'H-kavacik-002',
        image:'images/H-kavacik-002/K-002-01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/14',
        address: 'Kavacık/Beykoz',
        price: '25.000',
        keywords: 'kavacık 3+1 kavacik beykoz istanbul'
    },
    {
        id: 'S-fatih-001',
        image:'images/S-fatih-001/F-001-08.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/17',
        address: 'Akdeniz/Fatih',
        price: '38.000',
        keywords: 'fatih istanbul 3+1'
    },
    {
        id: 'S-sisli-001',
        image:'images/S-sisli-001/S-001-02.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/17',
        address: 'Şişli/Mecidiyeköy',
        price: '20.000',
        keywords: 'şişli 2+1 mecidiyeköy istanbul'
    },
    {
        id: 'S-sisli-002',
        image:'images/S-sisli-002/S-002-01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/17',
        address: 'Şişli/Mecidiyeköy',
        price: '26.000',
        keywords: 'şişli 2+1 mecidiyeköy istanbul'
    },
    {
        id: 'S-sisli-003',
        image:'images/S-sisli-003/S-003-01.jpg',
        isAvailable: 'Available',
        dateAded: '2024/12/17',
        address: 'Şişli/Mecidiyeköy',
        price: '23.000',
        keywords: 'şişli 2+1 mecidiyeköy istanbul'
    }
    
    ];
    
    const categories = [...new Set(products.map((item) => {return item}))]
    document.getElementById('searchBar').addEventListener('keyup', (e) => {
        const searchData = e.target.value.toLowerCase();
        const filterData = categories.filter((item) => {
            return(
                item.keywords.toLocaleLowerCase().includes(searchData)
            )
        })
        displayItem(filterData)
    });
    const displayItem = (items) => {
        document.querySelector('.js-sales').innerHTML = items.map((item) =>{
            var {id, image,isAvailable,dateAded,address,price} = item;
            return(
                `<div class="products">
                <a href="second.html?id=${id}"> <img class="image" src="${image}" alt="image"></a>
                 <section class="information">
                 <div class="dateAddress">
                     <p class="date">${dateAded}</p>
                     <p class="isAvailable">${isAvailable}</p>
                </div>
                <div class="priceAvailable">
                     <p class="price">${price} tl</p>
                     <p class="address">${address}</p>
                </div>
                 </section>
                 
             </div>`
            )
        }).join('')
        
    };
    displayItem(categories);