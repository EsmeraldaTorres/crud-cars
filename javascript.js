
const users = [
  {
    id: 1,
    brand: 'Dodge',        
    model: 'Attitude',
    year: 2010,
    price: 150000,         
    color: 'grey',       
  },
  {
    id: 2,
    brand: 'Mazda',
    model: 'Turbo-S',
    year: 2020,
    price: 300000,        
    color: 'red',
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Fiesta',
    year: 2015,
    price: 145000,        
    color: 'white',

  },
  {
    id: 4,
    brand: 'Jeep',
    model: 'Renegade',
    year: 2018,
    price: 400000,        
    color: 'black',

  },
  {
    id: 5,
    brand: 'Renault',
    model: 'Kangoo',
    year: 2016,
    price: 250000,        
    color: 'grey',

  },
];

let editingUser = false;

function printUsers() {
  const tableBody = document.getElementById('users-table-body')
  tableBody.innerHTML = ''
  users.forEach((user) => {
    const td = `<tr>
                  <td>
                    ${user.brand}
                  </td>
                  <td>
                    ${user.model}
                  </td>
                  <td>
                    ${user.year}
                  </td>
                  <td>
                    ${'$' + user.price}
                  </td>
                  <td>
                    ${user.color}
                  </td>
                  <td>
                    <div class="space-between">
                      <button class="btn btn-outline-dark" onclick="removeUser(${user.id})"> 
                      Eliminar </button>
                      <button class="btn btn-outline-dark" onclick="editUserButton(${user.id})"> 
                      Editar </button>
                    </div>
                  </td>
                </tr>`
    tableBody.innerHTML += td;
    })

}

function submitUser() {
  if(editingUser) {
    editUser();
  } else {
    addUser();
  }
}

function editUser() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  const color = document.getElementById('color').value;
  editingUser.brand = brand;
  editingUser.model = model;
  editingUser.year = year;
  editingUser.price = price;
  editingUser.color = color;
    printUsers();      
  editingUser = false;  
  document.getElementById('brand').value =" ";
  document.getElementById('model').value =" ";
  document.getElementById('year').value =" ";
  document.getElementById('price').value =" ";
  document.getElementById('color').value =" ";
}

function editUserButton(id) {
  const user = users.find((user) => user.id === id);
  document.getElementById('brand').value = user.brand;
  document.getElementById('model').value = user.model;
  document.getElementById('year').value = user.year;
  document.getElementById('price').value = user.price;
  document.getElementById('color').value = user.color;
  editingUser = user;
}

function addUser() {
  const brand = document.getElementById('brand').value;
  const model = document.getElementById('model').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  const color = document.getElementById('color').value;
  const newUser = {
    id: users.length +1,
    brand: brand,
    model: model,
    year: year,
    price: price,
    color: color,
  }
    users.push(newUser);    
    printUsers();

}

function removeUser(id){
  const position= users.findIndex((user) => user.id === id);
  users.splice(position, 1);
  printUsers();
}

printUsers();
