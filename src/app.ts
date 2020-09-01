import axios from "axios";

const form = document.querySelector("form")!;
const adressInput = (document.getElementById(
  "address"
)! as unknown) as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

declare var google: any;

function searchAdressHandler(event: Event) {
  event.preventDefault();
  const enteredAdress = adressInput.value;

  axios
    .get<{
      results: { geometry: { location: { lat: number; lng: number } } }[];
      status: "OK" | "ZERO RESULTS";
    }>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAdress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(
        document.getElementById("map") as HTMLElement,
        {
          center: coordinates,
          zoom: 5,
        }
      );
      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAdressHandler);
