let table = document.getElementsByTagName('table')[0];
let getStandings = async () =>{
    let city = document.querySelector('#city').value;
    let key =  "da423346dfae295ecc7eed83cf5eb330";
    let response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    return response.data
}

let loadData = async () =>{
    let data = await getStandings();
    table.setAttribute('style','');
    let convert_temp = (K) =>{
        let temp = K*(9/5) - 459.67;
    return Math.round(temp)
    }

    for(let i = 0; i<1; i++){
        let city = data.name
        let city_show = document.createElement('td')
        city_show.innerHTML = city
        document.querySelector(`#tr-${i}`).append(city_show)

        let current_temp = (convert_temp(data.main.temp))
        let current_show = document.createElement('td')
        current_show.innerHTML = current_temp + "\u00B0" + "F"
        document.querySelector(`#tr-${i}`).append(current_show)

        let high_temp = (convert_temp(data.main.temp_max))
        let high_show = document.createElement('td')
        high_show.innerHTML = high_temp  + "\u00B0" + "F"
        document.querySelector(`#tr-${i}`).append(high_show)

        let low_temp = (convert_temp(data.main.temp_min))
        let low_show = document.createElement('td')
        low_show.innerHTML = low_temp + "\u00B0" + "F"
        document.querySelector(`#tr-${i}`).append(low_show)

        let condition = data.weather[0].main
        let cond_show = document.createElement('td')
        cond_show.innerHTML = condition
        document.querySelector(`#tr-${i}`).append(cond_show)

        let humidity = data.main.humidity
        let humid_show = document.createElement('td')
        humid_show.innerHTML = humidity + "%"
        document.querySelector(`#tr-${i}`).append(humid_show)

        let wind_speed = data.wind.speed
        let wind_show = document.createElement('td')
        wind_show.innerHTML = wind_speed + " mph"
        document.querySelector(`#tr-${i}`).append(wind_show)
    }
}

let clearData = () => {
    for(let i = 0; i<1; i++){
        let row = document.querySelector(`#tr-${i}`);
        row.innerHTML = ''
    }
}