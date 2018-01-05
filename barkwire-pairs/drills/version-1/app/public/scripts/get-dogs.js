fetch("api/dogs/")
  .then(response => response.json())
  .then(response => response.dogs.forEach(addDogs)
  );

function addDogs(dog){
  var ul = document.querySelector(".dogs");
  var li = document.createElement("li");
  var h3 = document.createElement("h3");
  h3.classList.add("name");
  var a = document.createElement("a");
  a.href = `/dogs/${dog.id}`;
  a.innerHTML = `${dog.name}`;
  h3.appendChild(a);
  var img = document.createElement("img");
  img.classList.add("profile-picture");
  img.src = `/${dog.profilePicture}`;
  img.alt = `${dog.name}`;
  li.appendChild(h3);
  li.appendChild(img);
  ul.appendChild(li);
}
