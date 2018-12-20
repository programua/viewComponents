function openCity(cityName,elemnt,color){
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for( var i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for( var i = 0; i < tablinks.length; i++){
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";
    elemnt.style.backgroundColor = color;
}

document.getElementById('defaultOpen').click();