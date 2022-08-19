import hamburguerMenu from"./hamburguesa.js";
import {digitalClock,alarm} from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {

    hamburguerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("assets/alarm_clock.mp3","#activar-alarma","#desactivar-alarma");
})

