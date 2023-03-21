// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListen('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// URI: alamat web/ alamat lokasi file
// base url -> alamat web
// endpoint -> alamat lokasi file/ resource/ data

const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "37a375dceb584aa79209ce4c6d508edb";
const url = baseUrl + apiKey;
const endpointMahasiswa = `${url}/mahasiswa`;
const endpointDosen = `${url}/dosen`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getMahasiswa = () => {
  fetch(endpointMahasiswa).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`).then(handleSuccess).catch(handleError);
};

// POST data/ menambah data
const postMahasiswa = (mahasiswa) => {
  fetch(endpointMahasiswa, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// DELETE data
const deleteMahasiswa = (id) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "DELETE",
  })
    .then(handleSuccess)
    .catch(handleError);
};

// PUT data/ update data
const updateMahasiswa = (id, mahasiswa) => {
  fetch(`${endpointMahasiswa}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mahasiswa),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// async
getMahasiswa();
deleteMahasiswa("6418143b22534003e8c8ea63");
getMahasiswa();