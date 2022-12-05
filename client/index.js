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

let acc = undefined;

const buyTicket = async (ticket) => {
  await contract.methods.buyTicket(ticket.id).send({
    from: acc,
    value: ticket.price,
  });
  await refreshTickets();
};

const refreshTickets = async () => {
  ticketsEl.innerHTML = '';
  for (let i = 0; i < TOTAL_TICKETS; i++) {
    /**
     * ? need to learn more about call function @@..
     * ? why need call...?
     * @answer * .call return an object instead of tickets(i) function, in this case, we need object not function
     * console.log(await contract.methods.tickets(i), ticket) <- the first arguement/paramater will output function , the second arguement/paramater will output object
     **/
    const ticket = await contract.methods.tickets(i).call();
    ticket.id = i;
    if (ticket.owner === EMPTY_ADDRESS) {
      const ticketEl = createElementFromString(
        `<div class="ticket card" style="width: 18rem;">
                      <img src="${ticketImage}" class="card-img-top" alt="ticket">
                      <div class="card-body">
                        <h5 class="card-title">Ticket</h5>
                        <p class="card-text">${ticket.price / 1e18} Eth</p>
                        <button class="btn btn-primary">Buy Ticket</button>
                      </div>
                    </div>`
      );

      /**
       * ? need to learn more about bind function @@..
       * ? why and when need bind...?
       * @answer * .bind - the buyTicket method is bind to the onclick event, it does not execute immediately , It only execute when onclick event triggered.
       * ticketEl.onclick = buyTicket(ticket); <- this syntax will execute immdiately which is bad case for onclick event
       **/
      ticketEl.onclick = buyTicket.bind(null, ticket);
      ticketsEl.appendChild(ticketEl);
    }
  }
};

const main = async () => {
  const accs = await web3.eth.requestAccounts();
  acc = accs[0];
  accountEL.innerText = acc;
  await refreshTickets();
};

main();
