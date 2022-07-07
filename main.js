var dummyText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis dapibus faucibus. Etiam nibh metus, tempor et ullamcorper id, commodo ac lacus. Mauris congue eget ipsum a vestibulum. Sed porta, lorem non iaculis elementum, est velit aliquet magna, in laoreet urna quam vel magna. Cras cursus ligula dolor. Aliquam non sagittis eros. In dignissim faucibus nibh, eu congue quam posuere eu. Donec sollicitudin commodo ex et iaculis. Fusce sagittis, augue vel ornare pretium, lacus ante eleifend justo, quis tempor ligula tortor vel massa.",
  "Praesent facilisis a sapien vel mattis. Sed non accumsan libero, sed rutrum sem. Nulla congue magna at nunc maximus, quis auctor ex faucibus. Donec iaculis turpis a rutrum accumsan. Proin risus nisi, malesuada vel efficitur a, finibus sed leo. Maecenas sed est lectus. Fusce mattis leo velit, sagittis porttitor est tempor ut. Nunc molestie mauris eros, aliquet facilisis sem porttitor ac. In ornare condimentum ante, eget vulputate tortor facilisis fringilla. Morbi ac turpis non ex pulvinar sodales. Aenean eget risus non urna aliquet congue convallis at tellus. Maecenas aliquet lobortis consectetur. Integer vitae augue urna. Sed eu ipsum ut urna sodales tempus a lobortis dolor.",
  "In posuere, arcu eget interdum fermentum, arcu lorem imperdiet quam, id vulputate urna sapien eget metus. Donec at mi nec sem tempus consectetur ac nec est. Aenean vitae dapibus enim. Suspendisse euismod nisl non auctor cursus. Sed in gravida nulla, sed posuere libero. Sed vel metus vitae nunc imperdiet pharetra. Praesent sollicitudin sit amet odio vel tincidunt. Nulla eu neque purus. Ut ornare, mauris at auctor ullamcorper, leo velit malesuada lectus, quis dapibus orci neque eu enim. Praesent a magna id nisl ornare volutpat sit amet ac elit. Pellentesque dictum metus at lobortis tempor. Pellentesque convallis tincidunt lorem eget faucibus. Donec elementum arcu sagittis, posuere ipsum vel, fermentum justo.",
  "Etiam tristique sem sed felis cursus mattis. In dapibus accumsan quam, eget lacinia sem. Aenean sit amet faucibus elit, eget faucibus justo. In hac habitasse platea dictumst. Pellentesque pellentesque nunc massa, ut fermentum sem tincidunt vitae. Proin at aliquam eros. Ut id dolor id velit malesuada maximus at et erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam lacinia id libero ut tempor. Cras a turpis mollis, blandit arcu congue, ornare ante. Vivamus sapien quam, sollicitudin eget consequat at, ultricies ac diam.",
  "Nunc molestie turpis quis semper finibus. Duis lacus dolor, convallis vel urna quis, maximus dictum nisl. Curabitur vel viverra purus. Vestibulum in turpis placerat, bibendum augue vitae, vulputate diam. Sed vel justo gravida, tempus ligula a, pellentesque tellus. Nulla imperdiet vel odio ut porta. In viverra porttitor nunc, ac elementum dui elementum eu.",
  "Aenean felis magna, ornare id sapien sit amet, sagittis tincidunt risus. Phasellus posuere tortor vitae ex lobortis, sed ornare quam sollicitudin. Nam egestas feugiat leo ac venenatis. Curabitur bibendum tincidunt congue. Suspendisse sed neque efficitur magna facilisis hendrerit eget vel ante. Donec eu elit a dolor ultrices fringilla. Praesent ultricies blandit rutrum. Etiam id placerat elit. Etiam vitae tempor diam. Nulla a dictum neque, et pretium justo. Donec enim mi, pharetra et semper consectetur, cursus non magna.",
  "Nulla id massa tortor. Curabitur nec arcu imperdiet, luctus mi et, euismod urna. Praesent finibus mauris elit, sed malesuada massa sodales a. Praesent pretium vestibulum leo, in elementum justo interdum non. Donec lacinia auctor consequat. Quisque convallis molestie leo, a ultricies mi cursus in. Sed sed sapien et lectus iaculis varius vitae commodo velit. Proin maximus augue ut massa pharetra pretium. Quisque mattis, nisl ac tincidunt finibus, neque metus commodo dui, non venenatis lacus sem ac eros. Cras ligula augue, cursus et finibus sit amet, ornare in purus. Maecenas posuere blandit enim nec pellentesque. Duis ut pellentesque lorem. Aliquam facilisis ac lorem eget faucibus. Vestibulum tincidunt, nisl vitae interdum elementum, massa sapien scelerisque felis, nec gravida nisl nunc eget turpis.",
];
var start="Lorem Ipsum";

// functions

function generateFunction(){
    choose();
}

//clear the text

function cls(){
    document.getElementById('display').innerHTML="";
}

//select options

function choose(){
        var num=document.getElementById('num').value;
        var type=document.getElementById('type').value;
        if(type === 'p'){
            generatePara(num);
        }
        else if(type === 's'){
            generateSen(num);
        }
        else{
            generateWords(num);
        }
}

//generate paragraph

function generatePara(n){
    for(var i=0;i<=(n-1);i++){
        var para="<p>";
        for(var j=0;j<=2;j++){
            var ranpara=Math.floor(Math.random()*dummyText.length);
            para =para+start+" "+dummyText[ranpara];
            
        }
        para=para+"</p><br>";
        $("#display").append(para);
    }
}

//Generate words
function generateWords(n){
    var words=" <p> ";
    for(var i=0;i<=(n-1);i++){
        var ranwords=Math.floor(Math.random()*dummyText.length);
        var splitsent=dummyText[ranwords].split(" ");
        var b=Math.floor(Math.random()*splitsent.length);
        words=words+splitsent[b]+" ";
    }
    words=" "+words+"</p><br>";
    $("#display").append(" "words);
}

//generate sentence

function generateSen(n){

    for(var i=0;i<=(n-1);i++){
        var sent="<p>";
        for(var j=0;j<=6;j++){
            var ransentence=Math.floor(Math.random()*dummyText.length);
            var splicesent=dummyText[ransentence].split(/[.,?!]+/);
            var s =Math.floor(Math.random()*splicesent.length);
            sent =sent+" "+splicesent[s];
            }
        sent=`${sent}</p><br>`;
        $("#display").append(sent);
    }
}
