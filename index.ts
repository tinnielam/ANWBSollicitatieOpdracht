// Import stylesheets
import "./style.css";

//Challenge, Create User Class
class User {
  constructor() {
    this.makeCallToBackendTest();
  }

  public makeCallToBackendTest(): void {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://anwbtinlam.tinlam.repl.co/api/anwb");
    xhr.onload = () => {
      if (xhr.status === 200) {
        document.getElementById("app").innerHTML += xhr.responseText;
      } else {
        alert("Request failed.  Returned status of " + xhr.status);
      }
    };
    xhr.send();
  }
}

let bla = new User();
