// // modalebis shignit arsebuli elementebi
// const modal = document.querySelector('#form_modal')
// const modalOpenerBtn = document.querySelector("#modal_opener")
// const modalCloserBtn = document.querySelector("#form_closer_btn")
//
// // modal form
// const signupForm = document.querySelector('#user-signup-form');
// // modal form inputs
// const user_id = document.querySelector('#user_id');
// const first_name = document.querySelector('#first_name');
// const last_name = document.querySelector('#last_name');
// const zip = document.querySelector('#zip');
// const personal_number = document.querySelector('#personal_number');
// const mobile_number = document.querySelector('#mobile_number');
// const gender = document.querySelector('#gender');
// const email = document.querySelector('#email');
// const status = document.querySelector('#status');
//
// // modalis gagheba
// modalOpenerBtn.addEventListener("click", () => {
//   modal.classList.add('show')
// })
//
// // modalis daxurva
// modalCloserBtn.addEventListener("click", () => {
//   modal.classList.remove('show')
//   signupForm.reset()
// })
//
// async function getUsers() {
//   try {
//     const response = await fetch('http://api.kesho.me/v1/user-test/index');
//     const users = await response.json();
//
//     await renderUsers(users);
//   } catch (e) {
//     console.log('Error - ', e);
//   }
// }
//
// getUsers(); // ეს ფუნქცია გამოიძახება სულ პირველად როდესაც გვერდი ჩაიტვირთება.
//
// async function renderUsers(usersArray) {
//   // TODO: usersArray არის სერვერიდან დაბრუნებული ობიექტების მასივი
//   // TODO: ამ მონაცმების მიხედვით html ში ჩასვით ცხრილი როგორც "ცხრილი.png" შია
//   const tableBody = document.querySelector('#table_body')
//   let tableBodyContent = ''
//   for (let index = 0; index < usersArray.length; index++) {
//     const user = usersArray[index]
//     tableBodyContent = tableBodyContent +
//       `<tr>
//         <td>${user.id}</td>
//         <td>${user.email}</td>
//         <td>${user.first_name}</td>
//         <td>${user.last_name}</td>
//         <td>${user.gender}</td>
//         <td>${user.mobile}</td>
//         <td>${user.pn}</td>
//         <td>${user.zip}</td>
//         <td>${user.status}</td>
//         <td>
//             <button class="btn_edit" data-user-id="${user.id}">Edit</button>
//             <button class="btn_delete" data-user-id="${user.id}">Delete</button>
//         </td>
//       <tr>
//       `
//   }
//
//   tableBody.innerHTML = tableBodyContent
//   userActions(); // ყოველ რენდერზე ახლიდან უნდა მივაბათ ივენთ ლისნერები
// }
//
// function userActions() {
//   // 1. ცხრილში ღილაკებზე უნდა მიამაგროთ event listener-ები
//
//   const allDeleteBtns = document.querySelectorAll('.btn_delete')
//   const allEditBtns = document.querySelectorAll('.btn_edit')
//
//   for (let index = 0; index < allDeleteBtns.length; index++) {
//     const button = allDeleteBtns[index];
//     button.addEventListener('click', async (e) => {
//       await deleteUser(e.target.dataset.userId)
//     })
//   }
//
//   for (let index = 0; index < allEditBtns.length; index++) {
//     const button = allEditBtns[index];
//     button.addEventListener('click', async (e) => {
//       await getUser(e.target.dataset.userId)
//     })
//   }
//
//   // 2. იქნება 2 ღილაკი რედაქტირება და წაშლა როგორც "ცხრილი.png" ში ჩანს
//   // 3. id შეინახეთ data-user-id ატრიბუტად ღილაკებზე
//   // 4. წაშლა ღილაკზე დაჭერისას უნდა გაიგზავნოს წაშლის მოთხოვნა (deleteUser ფუნქციის მეშვეობით) სერვერზე და გადაეცეს id
//   // 5. ეიდტის ღილაკზე უნდა გაიხსნას მოდალი სადაც ფორმი იქნება იმ მონაცემებით შევსებული რომელზეც მოხდა კლიკი
//   // ეიდტის ღილაკზე უნდა გამოიძახოთ getUser ფუნქცია და რომ დააბრუნებს ერთი მომხმარებლის დატას (ობიექტს და არა მასივს)
//   // ეს დატა უნდა შეივსოს ფორმში
// }
//
// async function getUser(userId) {
//   try {
//     // TODO: დაასრულე
//     // const data = await response.json();
//     const response = await fetch(`http://api.kesho.me/v1/user-test/view?id=${userId}`);
//     const user = await response.json();
//
//     user_id.value = user.id;
//     first_name.value = user.first_name;
//     last_name.value = user.last_name;
//     zip.value = user.zip;
//     personal_number.value = user.pn
//     mobile_number.value = user.mobile
//     gender.value = user.gender;
//     email.value = user.email;
//     status.value = user.status;
//
//     modal.classList.add('show') // gaxseni modal, romelic iqneba shevsebuli serveridan wamoghebuli informaciit.
//   } catch (e) {
//     console.log('Error - ', e);
//   }
// }
//
// async function deleteUser(userId) {
//   try {
//     await fetch(`http://api.kesho.me/v1/user-test/delete?id=${userId}`, {
//       method: 'delete',
//       body: {},
//       headers: {'Content-Type': 'application/json'}
//     });
//     await getUsers();
//   } catch (e) {
//     console.log('Error - ', e);
//   }
// }
//
// async function createUser(userData) {
//   try {
//     const response = await fetch('http://api.kesho.me/v1/user-test/create', {
//       method: 'post',
//       body: JSON.stringify(userData),
//       headers: {'Content-Type': 'application/json'}
//     });
//     await response.json();
//     await getUsers(); // TODO: შენახვის ედიტირების და წაშლის შემდეგ ახლიდან წამოიღეთ დატა
//   } catch (e) {
//     console.log('Error - ', e);
//   }
// }
//
// async function updateUser(userObject) {
//   // TODO: დაასრულე
//   // method Post
//   try {
//     const response = await fetch(`http://api.kesho.me/v1/user-test/update?id=${userObject.id}`, {
//       method: 'post',
//       body: JSON.stringify(userObject),
//       headers: {'Content-Type': 'application/json'}
//     });
//     await response.json();
//     await getUsers();
//   } catch (e) {
//     console.log('Error - ', e);
//   }
// }
//
// signupForm.addEventListener('submit', async (e) => {
//   e.preventDefault();
//
//   const userData = { // es data sheizleba iyos axali useris an arsebulis(editis shemtxvevashi)
//     id: user_id.value,
//     first_name: first_name.value,
//     last_name: last_name.value,
//     zip: zip.value,
//     mobile: mobile_number.value,
//     pn: personal_number.value,
//     gender: gender.value,
//     email: email.value,
//     status: status.value,
//   };
//
//   if (user_id.value === '') {
//     // იქმნება
//     await createUser(userData); // TODO: თუ user_id.value არის ცარიელი მაშინ უნდა შევქმნათ
//   } else {
//     // ედითდება
//     await updateUser(userData); // TODO: თუ user_id.value არის მაშინ უნდა დავაედიტოთ
//   }
//   modal.classList.remove('show')
//   signupForm.reset()
// });

// Websockets
const enterMessengerForm = document.querySelector('#enter-messenger-from');
const enterMessengerInput = document.querySelector('#enter-messenger-input');
const messengerWrapper = document.querySelector('.messenger-wrapper');
const activeUsersContainer = document.querySelector('.active-users');
const messagesContainer = document.querySelector('.messages');
const messageForm = document.querySelector('#message-form');
const messageInput = document.querySelector('#message-input');

enterMessengerForm.addEventListener('submit' , e => {
  e.preventDefault();
  initMessenger(enterMessengerInput.value);
  enterMessengerForm.classList.add('hide');
  messengerWrapper.classList.add('visible');
})

function initMessenger(newUserName){
  const ws = new WebSocket('ws://localhost:8080');
  ws.addEventListener('open', e => {
    console.log('Connected');
    ws.send(JSON.stringify({type: 'newUser', data: newUserName}));
  });
  ws.addEventListener('error', e => {
    console.log('Error - ', e);
  });
  ws.addEventListener('message', e => {
    const messageData = JSON.parse(e.data);
    if(messageData.type === 'activeUsers'){
      handleActiveUsers(messageData);
    }
    if(messageData.type === 'newUser'){
      handleNewUser(messageData);
    }
    if(messageData.type === 'chatMessage'){
      handleNewMessage(messageData);
    }
    console.log('Message incoming', e);
    console.log('Message parsed', messageData);
  });

  messageForm.addEventListener('submit', e => {
    e.preventDefault();
    sendMessage(messageInput.value, ws);
    messageInput.value = '';
  });
}

function handleNewUser(userData){
  const newUserDiv = document.createElement('div');
  newUserDiv.classList.add('user-item');
  newUserDiv.innerText = userData.data;

  activeUsersContainer.appendChild(newUserDiv);
}

function handleActiveUsers(usersData){
  activeUsersContainer.innerHTML = '';
  usersData.data.forEach(user => {
    handleNewUser(user)
  });
}

function sendMessage(message, ws) {
  ws.send(JSON.stringify({ type: 'chatMessage', data: message }));
}

function handleNewMessage(messageData) {
  const messageLikes = document.createElement('span');
  const newMessageDiv = document.createElement('div');
  newMessageDiv.innerHTML = messageData.data;
  newMessageDiv.setAttribute('data-id', messageData.id);
  newMessageDiv.appendChild(messageLikes);
  newMessageDiv.innerText = messageData.data;

  messagesContainer.appendChild(newMessageDiv);
}
