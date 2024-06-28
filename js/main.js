
var thaiDay =  new Date().toLocaleString('en-US', {timeZone: 'Asia/Bangkok', weekday: 'long'});

const thaiDaysAndColors = [
    {sunday : 'วันอาทิตย์', red: '#d13232', textColor: '#ff8b8b', 'pronunciation' : 'wan aa theet'},
    {monday :  'วันจันทร์', yellow: '#ecc137', textColor: '#ac0b0b', 'pronunciation' : 'wan jan'},
    {tuesday: 'วันอังคาร', pink : '#ffc4d4', textColor: '#d13232', 'pronunciation' : 'wan ang kaan'},
    {wednesday : 'วันพุธ', green: '#7aab5c', textColor: '#35601a', 'pronunciation' : 'wan phut'},
    {thursday :  'วันพฤหัสบดี', orange: '#e26a35', textColor: '#ffa985', 'pronunciation' : 'wan pha ru hat sa bor dii'},
    {friday :    'วันศุกร์',  blue: '#377dde', textColor: '#03224e', 'pronunciation' : 'wan suk'},
    {saturday : 'วันเสาร์', purple: '#9d5ad1', textColor: '#421366', 'pronunciation' : 'wan sao'}
];

function colorOfTheDay(){
    var formattedDay = format(thaiDay);
    for(const [_, value] of Object.entries(thaiDaysAndColors)){
      if(value[formattedDay]) {
           document.body.style.background = Object.values(value)[1];
           const div = document.createElement('div');
           const h1 = document.createElement('h1');
           const h2 = document.createElement('h2');
           const paragraph = document.createElement('p');
           const headingText = document.createTextNode(value[formattedDay]); 
           const paragraphText = document.createTextNode(Object.keys(value)[0]);
           const h2Text = document.createTextNode(`[ ${Object.values(value)[3]} ]`);
           h1.appendChild(headingText);
           h1.style.color=Object.values(value)[2];
           h2.appendChild(h2Text);
           h2.style.color=Object.values(value)[2];
           paragraph.style.color=Object.values(value)[2];
           paragraph.appendChild(paragraphText);
           div.appendChild(h1);
           div.appendChild(paragraph);
           div.appendChild(h2);
           document.querySelector('body').appendChild(div);           
      }
    }
}

function format(day) {
    return day.toString().toLowerCase();
}

window.addEventListener('load', () => {
    colorOfTheDay();
})
