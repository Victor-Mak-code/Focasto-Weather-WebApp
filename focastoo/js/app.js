const preloader = document.querySelector('.preloader');
const btnSearch = document.querySelector('.btn-search');
const searchInput = document.querySelector('.popup__input');
const errorMsg = document.querySelector('.error__msg');
const cityResult = document.querySelector('.popup__result-name');
const weatherResult = document.querySelector('.popup__result-weather');
const weatherIcon = document.querySelector('.popup__icon');

//STOP PRELOADER
const stopPreloader = () =>{
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('preloader__stop');
        }, 3000);
    });
};
stopPreloader();

//Event Listeners
const eventListeners = () =>{
    btnSearch.addEventListener('click', () =>{
        weatherSearch()
    });

    document.addEventListener('keypress', (event) =>{
        if(event.keyCode == '13'){
            weatherSearch()
        }
    });
};

eventListeners();

//Weather Search Algorithm
 function weatherSearch(){
        if(searchInput.value !== ''){
            errorMsg.textContent = '';
            cityResult.textContent = searchInput.value;
            searchAPI();
        }
        else{
           errorMsg.textContent = 'Form is Empty!!';
        }
};

function searchAPI(){
    let apiKey = 'b6cc0b5db70b4967a6d7ecf5cc67efe5';
    let cityname = searchInput.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;

    fetch(api)
    .then(res => {
        return res.json()
    })
    .then(data => {
       console.log(data);
       let weatherForecast = data.weather[0].main;
       weatherResult.textContent = weatherForecast;
       weatherIcon.src = `animated/${weatherForecast}.svg`;
      
    })
    .catch(error => console.log(error))
   
}












