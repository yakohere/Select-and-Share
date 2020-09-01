import axios from "axios";

const form = document.querySelector("form")!;
const adressInput = (document.getElementById(
  "address"
)! as unknown) as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = adressInput.value;

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAdress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

form.addEventListener("submit", searchAdressHandler);
