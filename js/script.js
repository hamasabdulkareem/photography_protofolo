var all_img = document.getElementById("all");
var nature_img = document.getElementById("nature");
var baby_img = document.getElementById("baby");
var flower_img = document.getElementById("flower");
var coffee_img = document.getElementById("coffee");
var people_img = document.getElementById("people");
var food_img = document.getElementById("food");
var clothes_img = document.getElementById("clothes");
var animals_img = document.getElementById("animals")

function showDetails(img) {
       
      
         
            all_img.style.display="block";
            nature_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
         if(img==nature)
        {
            nature_img.style.display="block";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==baby)
        {
            baby_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==flower)
        {
            flower_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==coffee)
        {
            coffee_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==people)
        {
            people_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==food)
        {
            food_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            clothes_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==clothes)
        {
            clothes_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            animals_img.style.display="none";
        }
        else if(img==animals)
        {
            animals_img.style.display="block";
            nature_img.style.display="none";
            all_img.style.display="none";
            baby_img.style.display="none";
            flower_img.style.display="none";
            coffee_img.style.display="none";
            people_img.style.display="none";
            food_img.style.display="none";
            clothes_img.style.display="none";
        }
       
     // var animalType = animal.getAttribute("data-animal-type");
     // alert("The " + animal.innerHTML + " is a " + animalType + ".");
    }
<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>