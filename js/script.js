var request_countries= new XMLHttpRequest();
request_countries.onreadystatechange= function(){
    if (this.readyState==XMLHttpRequest.DONE && this.status == 200) {
        let respond = JSON.parse(this.responseText);
        for (let index = 0; index < respond.length; index++) {
            
            if(respond[index].name=="Morocco")
            {
                $('#country').append('<option value="'+respond[index].name+'" selected>'+respond[index].name+'</option>');
            }
            else $('#country').append('<option value="'+respond[index].name+'">'+respond[index].name+'</option>');
            
        }
    }
    else if(this.readyState==XMLHttpRequest.DONE){
        console.log("oups");
    }
}
request_countries.open("GET","https://restcountries.eu/rest/v2/all?fields=name");
request_countries.send();
