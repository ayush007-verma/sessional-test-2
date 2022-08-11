console.log('hello,,,')

const xhr = new XMLHttpRequest()
let url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET', url, true)

xhr.onreadystatechange = ()=> {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText)
        console.log(response)
        let flexCard = ``
        for(let i=0 ;i<response.length ;++i)
        {
            flexCard += `
            <div class="flex-card" style="
            box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
            border  : 2px solid red">
                <div class="logo1"></div>
                <div class="info">
                    <span class="name">${response[i].name}</span>
                    <br />
                    <i class="fa-solid fa-house-user"></i>&nbsp;&nbsp;${response[i].username}
                    <br />
                    <i class="fa-brands fa-google"></i>&nbsp;<i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;${response[i].email}
                    <br />
                    <br />
            
                    <h4>Address</h4>
                    <div class="addressDiv"  >
                        <i class="fa-solid fa-city"></i>
                        Street : ${response[i].address.street}
                        <br/>
                        <i class="fa-solid fa-house-user"></i>
                        ${response[i].address.suite}
                        <br/>
                        <i class="fa-solid fa-map-pin"></i>
                        City : ${response[i].address.city}
                        <br/>
                        <i class="fa-solid fa-map-location"></i>
                        ZIP : ${response[i].address.zipcode}
                        <br/>
                        <i class="fa-solid fa-earth-americas"></i>
                        Latitude : ${response[i].address.geo.lat}
                        <br/>
                        <i class="fa-solid fa-globe"></i>
                        Longitude : ${response[i].address.geo.lng}
                    </div>
                    <br />
                    <br />
                    <h4>Company Info</h4>
                    <div class="companyDiv" >
                    <i class="fa-brands fa-creative-commons-nd"></i>
                    &nbsp; Company : ${response[i].company.name}
                       <br/>
                       <i class="fa-solid fa-quote-left"></i>
                       &nbsp; ${response[i].company.catchPhrase} &nbsp;
                       <i class="fa-solid fa-quote-right"></i>
                        <br/>
                        <i class="fa-solid fa-shield-quartered"></i>
                        &nbsp;
                        Bussiness : ${response[i].company.bs}
                    </div>
                    <br /><br />
            
                    <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;${response[i].phone}
                    <br />
                    <i class="fa-brands fa-internet-explorer"></i>
                    &nbsp;
                    &nbsp;${response[i].website}
                </div>
            </div>
            `
        }

        document.getElementById('container').innerHTML += flexCard

    }
}

xhr.send()



$('#submit-btn').click(function() {
    var list = document.getElementsByClassName('form-control')
    let flexCard = ``

    flexCard += `
    <div class="flex-card" style="
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    border  : 2px solid red">
        <div class="logo1"></div>
        <div class="info">
            <span class="name">${list[0].value}</span>
            <br />
            <i class="fa-solid fa-house-user"></i>&nbsp;&nbsp;${list[1].value}
            <br />
            <i class="fa-brands fa-google"></i>&nbsp;<i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;${list[2].value}
            <br />
            <br />
    
            <h4>Address</h4>
            <div class="addressDiv"  >
                <i class="fa-solid fa-city"></i>
                Street : ${list[3].value}
                <br/>
                <i class="fa-solid fa-house-user"></i>
                ${list[4].value}
                <br/>
                <i class="fa-solid fa-map-pin"></i>
                City : ${list[5].value}
                <br/>
                <i class="fa-solid fa-map-location"></i>
                ZIP : ${list[6].value}
                <br/>
                <i class="fa-solid fa-earth-americas"></i>
                Latitude : ${list[7].value}
                <br/>
                <i class="fa-solid fa-globe"></i>
                Longitude : ${list[8].value}
            </div>
            <br />
            <br />
            <h4>Company Info</h4>
            <div class="companyDiv" >
            <i class="fa-brands fa-creative-commons-nd"></i>
            &nbsp; Company : ${list[9].value}
               <br/>
               <i class="fa-solid fa-quote-left"></i>
               &nbsp; ${list[10].value} &nbsp;
               <i class="fa-solid fa-quote-right"></i>
                <br/>
                <i class="fa-solid fa-shield-quartered"></i>
                &nbsp;
                Bussiness : ${list[11].value}
            </div>
            <br /><br />
    
            <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;${list[12].value}
            <br />
            <i class="fa-brands fa-internet-explorer"></i>
            &nbsp;
            &nbsp;${list[13].value}
        </div>
    </div>
    `
    
    document.getElementById('container').innerHTML += flexCard
})
