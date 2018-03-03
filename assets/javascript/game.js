var underscores = [];
var wrongletter=true;
var correctGuesses=0;
var win=0;
var loss=0;
var counter=12;
var guessletters="";
var imago=document.getElementById("imag");
var cwordo = document.getElementById("cword");
var wino = document.getElementById("win");
var losso = document.getElementById("loss");
var guesso = document.getElementById("guess");
var aguesso = document.getElementById("aguess");
var rand=getword();
function getword()
{
underscores=[];
var arr=["mumbai","kolkata","ahmedabad"];
var randu = arr[Math.floor(Math.random() * arr.length)];
for(var i=0;i<randu.length;i++)
{
underscores[i] = "_ ";

}
console.log(randu);
guessletters="";

var under=underscores.join("");
cwordo.textContent=under;
return randu;
}


	


	
document.onkeyup=function (event)
{
if(counter>0)
{
var texo=event.key;
if(guessletters.match(texo))
{
alert("that key is already been pressed");
}
else
{
guessletters+=texo + ",";
console.log(texo);
console.log(counter);
           for(var e=0;e<rand.length;e++)
          { 
          	if(rand.charAt(e)===texo.toLowerCase())
          	{
               underscores[e]=texo;
               wrongletter=false;
               correctGuesses++;
				
			}
          	if(correctGuesses===rand.length)
          	{
          		//if all letters have been guessed that mean u guessed all the correct letters and u win
          		//call the drawCanvas
          		//drawCanvas();
			win++;
			if(rand=="mumbai")
			{
			imago.src='assets/images/mumbai.jpg';
			}
			else if(rand=="kolkata")
			{
			imago.src='assets/images/kolkata.jpg';
			}
			else
			{
			imago.src='assets/images/ahmedabad.jpg';
			}
			wrongletter=true;
			correctGuesses=0;
			
			rand=getword();
			counter=13;
          	}
          }
          	//if ur guess was wrong
    	if(wrongletter)  /////////I think you mistakenly gave the variable name here\\\\\\\\\\\
    	{
    		counter--;  /////////I think you mistakenly gave the variable name here\\\\\\\\\\\
    		//drawCanvas();//this function to draw the body of the victim
    	}
under=underscores.join("");
cwordo.textContent=under;
		}
		}
		
		else
		{
		loss++;
		wrongletter=true;
			correctGuesses=0;
			
			rand=getword();
			counter=13;
		}
		wino.textContent=win;
		losso.textContent=loss;
		guesso.textContent=counter;
		aguesso.textContent=guessletters;
		}
