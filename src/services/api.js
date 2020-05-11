import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
* iOS com emulador: localhost
* iOS com device físico: IP da máquina
* Android com device físico: IP da máquina
* Android com emulador: para usar o localhost com o emulador aberto rodar `adb reverse tcp:3333 tcp:3333`
* Android com emulador: 10.0.2.2 (Android studio)
* Android com emulador: 10.0.3.2 (Genymotion)
*/