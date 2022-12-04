import "bootstrap/dist/css/bootstrap.css"; //import bootstrap css
import configurationSim from "../build/contracts/SimpleContract.json";
import configurationTic from "../build/contracts/Tickets.json";
import Web3 from "web3";
import ticketImage from "./images/ticket.png";

const createElementFromString = (string) => {
  const el = document.createElement("div");
  el.innerHTML = string;
  return el.firstChild;
};

const configuration = configurationTic;

const CONTRACT_ADDRESS = configuration.networks["5777"].address;

const CONTRACT_ABI = configuration.abi;

const web3 = new Web3(Web3.givenProvider || "https://127.0.0.1:7545");

const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

const TOTAL_TICKETS = 10;
const EMPTY_ADDRESS = "0x0000000000000000000000000000000000000000";

const accountEL = document.getElementById("account");
const ticketsEl = document.getElementById("tickets");

let main = async () => {
  const accs = await web3.eth.requestAccounts();
  console.log(accs);
  let account0 = accs[0];
  accountEL.innerText = account0;
  for (let i = 0; i < TOTAL_TICKETS; i++) {
    const ticket = await contract.methods.tickets(i).call();
    ticket.id = i;
    if (ticket.owner === EMPTY_ADDRESS) {
      const ticketEl = createElementFromString(
        `<div class="ticket card" style="width: 18rem;">
                  <img src="${ticketImage}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Ticket</h5>
                    <p class="card-text">${ticket.price / 1e18} Eth</p>
                    <button class="btn btn-primary">Buy Ticket</button>
                  </div>
                </div>`
      );
      /**
       * ? need to learn more about bind and call functions @@..
      **/
      //   ticketEl.onclick = buyTicket.bind(null, ticket);
      ticketsEl.appendChild(ticketEl);
    }
  }
};

main();
