const form = document.querySelector("form")!;
import * as dotenv from "dotenv";

const adressInput = (document.getElementById(
  "address"
)! as unknown) as HTMLInputElement;

dotenv.config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = adressInput.value;

  // url = https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway, +Mountain+View,+CA&key=GOOGLE_API_KEY
}

form.addEventListener("submit", searchAdressHandler);
