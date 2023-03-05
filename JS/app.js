// Do not api key on your js file 
const  API_KEY = `00681c47bcac1829b752f5a9b46087d1`

const loadTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(data => showTemperature(data))
}


const showTemperature = (data) =>{
    console.log(data);
    document.getElementById('temperature').innerText = data.main?.temp; 
    document.getElementById('main').innerText = data.weather[0].main; 
}

document.getElementById('search-btn').addEventListener('click', function(){
    const  searchField = document.getElementById('input-field').value;
    document.getElementById('city-name').innerText = searchField;
    loadTemperature(searchField);
})

loadTemperature('dhaka')