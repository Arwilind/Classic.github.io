 let header = document.getElementById('header');
        let bg = document.getElementById('bugatti');
        let ts = document.getElementById('tesla');
        let ms = document.getElementById('mercedes');
        let ps = document.getElementById('porsche');
        let car= document.getElementById('car');
        let nopeus= document.getElementById('nopeus');
        let hinta= document.getElementById('hinta');
        let aika= document.getElementById('aika');


        bg.onclick = function (){
            header.style.backgroundImage = "url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-02-bugatti-chiron-super-sport-windtunnel-front-tipped-up-hr-1623081668.jpg)";
            car.innerHTML = 'BUGATTI';
            aika.innerHTML = '1,4s';
            nopeus.innerHTML = '450 KM/H';
            hinta.innerHTML = '4,960,000€';
            
        }
        ts.onclick = function (){
            header.style.backgroundImage = "url(https://cdn.motor1.com/images/mgl/9MyGX/s3/mclaren-speedtail-top-speed-run.jpg)";
            car.innerHTML = 'MCLAREN SPEEDTAIL';
              aika.innerHTML = '1,3s'; 
            nopeus.innerHTML = '385 KM/H';
            hinta.innerHTML = '800,000€';
        }
        ms.onclick = function (){
            header.style.backgroundImage = "url(https://gtspirit.com/wp-content/uploads/2021/09/21C0550_001.jpg)";
            car.innerHTML = 'MERCEDES';
              aika.innerHTML = '5,9s';
            nopeus.innerHTML = '250 KM/H';
            hinta.innerHTML = '150,000€';
        }
        ps.onclick = function (){
            header.style.backgroundImage = "url(https://wallpapercave.com/uwp/uwp1328136.jpeg)";
            car.innerHTML = 'PORSCHE';
              aika.innerHTML = '1,5s';
            nopeus.innerHTML = '370 KM/H';
            hinta.innerHTML = '379,000€';
        }