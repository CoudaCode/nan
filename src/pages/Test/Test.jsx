// import './Test.css'
function Test(){
    setTimeout(() => {
        var fname = document.getElementById('fname'),
    lname = document.getElementById('lname'),
    age = document.getElementById('age'),
    sexe = document.getElementsByClassName('control-group')[0],
    pays = document.getElementById('pays'),
    pseudo = document.getElementById('pseudo'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    passwordConf = document.getElementById('passwordConf'),
    send = document.getElementById('send'),
    tabBooleans = [false, false, false, false, false, false, false, false, false];

function up(label, str) {
    var s = document.getElementById(str);
    s.style.borderColor = "#66CC99";
    s.classList.add('up');
    document.getElementsByTagName('label')[label].style.color = "#66CC99";
    tabBooleans[label] = true;
}

function down(label, str) {
    var s = document.getElementById(str);
    s.style.borderColor = "#CACACA";
    s.classList.remove('up');
    tabBooleans[label] = false;
    document.getElementsByTagName('label')[label].style.color = "#CACACA";
}

function checkEmail(label) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.length > 0) {
        email.classList.add('up');
        if (reg.test(email.value)) up(label, "email");
        else {
            down(label, 'email');
            email.classList.add('up');
        }
    } else down(label,"email");
}

function checkTxt(id, label, n) {
    var str = document.getElementById(id);
    if (str.value.length >= n) {
        up(label, id);
        if (label == 7) checkPass(8);
    } else {
        if (label == 7) checkPass(8);
        down(label, id);
    }
}

function checkAge(id, label) {
    var Age = parseInt(age.value);
    if (Age > 4 && Age < 141) up(label, id);
    else down(label, id);
}

function checkSexe(sex1, sex2) {
    var sex1 = document.getElementById(sex1),
        sex2 = document.getElementById(sex2);
    if (sex1.checked || sex2.checked) {
        document.getElementsByClassName('sex')[0].style.color = "#66CC99";
        tabBooleans[3] = true;
    }
}

function checkPays(id) {
    var pays = document.getElementById(id);
    if (pays.value != "") {
        pays.style.borderColor = "#66CC99";
        pays.style.color = "#66CC99";
        tabBooleans[4] = true;
    } else {
        pays.style.borderColor = "#CACACA";
        pays.style.color = "#CACACA";
        tabBooleans[4] = false;
    }
}

function checkPass(label) {
    if (password.value.length > 0 && password.value == passwordConf.value)
        up(label, 'passwordConf');
    else
        down(label, 'passwordConf');
}

function verifiedForm() {
    var i = 0,
        valid = 1,
        inscrire = document.getElementById("send");
    for (i in tabBooleans)
        if(tabBooleans[i])
            valid++;
    if (valid == 10) {
        inscrire.removeAttribute("disabled");
    } else {
        inscrire.setAttribute("disabled", true);
    }
    document.getElementById("valid").innerHTML="Valid fields : "+valid+"/10";
}
/* Loading EventListener */
fname.addEventListener('input', function() {
    checkTxt('fname', 0, 2); //label 0 minimum de lettre 2
    verifiedForm();
});

lname.addEventListener('input', function() {
    checkTxt('lname', 1, 2); //label 1 minimum de lettre 2
    verifiedForm();
});

age.addEventListener('input', function() {
    checkAge('age', 2); //label 2 condition: 5<=age<=140
    verifiedForm();
});

sexe.addEventListener('click', function() {
    checkSexe('male', 'femelle'); //label 3 
    verifiedForm();
});

pays.addEventListener('change', function() {
    checkPays("pays");
    verifiedForm();
});

pseudo.addEventListener('input', function() {
    checkTxt('pseudo', 5, 4); //label 5 minimum de lettre 4
    verifiedForm();
});
email.addEventListener('input', function() {
    checkEmail(6); //label 6
    verifiedForm();
});

password.addEventListener('input', function() {
    checkTxt('password', 7, 6); //label 7 minimum de lettre 6
    verifiedForm();
});
passwordConf.addEventListener('input', function() {
    checkPass(8); //label 8 check if password == passwordConf
    verifiedForm();
});
send.addEventListener('click', function(e) {
    e.preventDefault();
    alert("Bravo!! Vous avez bien rempli la formulaire !");
})
    }, 500);
    return(
        <>
            <h1 className="myh1">Smart Registration Form</h1>
            <div className="details">Material Design Theme</div>
            <div className="details">Responsive Design</div>
            <form method="POST" action="">
                <div className="col">
                    <div className="minput">
                        <input type="text" id="fname" dir="auto" required/>
                        <span className="bar"></span>
                        <label>First Name</label>
                    </div>
                    <div className="minput">
                        <input type="text" id="lname" dir="auto" required/>
                        <span className="bar"></span>
                        <label>Last Name</label>
                    </div>
                    <div className="minput">
                        <input type="number" id="age" dir="auto" required/>
                        <span className="bar"></span>
                        <label>Age</label>
                    </div>
                    <div className="control-group">
                        <span className="sex">Sex :</span>
                        <label className="control control--radio">Male
                            <input type="radio" name="radio" id="male" />
                            <div className="control__indicator"></div>
                        </label>
                        <label className="control control--radio">Female
                            <input type="radio" name="radio" id="femelle" />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <div className="minput">
                        <div className="select">
                            <select id="pays">
                                <option value="">-- Country --</option>
                                <option value="morocco">Morocco</option>
                                <option value="algeria">Algeria</option>
                                <option value="tunisia">Tunisia</option>
                            </select>
                            <div className="select__arrow"></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="minput">
                        <input type="text" id="pseudo" dir="auto" required/>

                        <span className="bar"></span>
                        <label>Username</label>
                    </div>

                    <div className="minput">
                        <input type="email" id="email" dir="ltr" className="" required/>
                        <span className="bar"></span>
                        <label>Email</label>
                    </div>

                    <div className="minput">
                        <input type="password" id="password" dir="auto" required/>
                        <span className="bar"></span>
                        <label>Passwrod</label>
                    </div>

                    <div className="minput">
                        <input type="password" id="passwordConf" required/>
                        <span className="bar"></span>
                        <label>Retype Password</label>
                    </div>
                    <div className="control-group">

                        <label className="control control--checkbox">Join Our Newsletter & Marketing Communication.
                            <input type="checkbox" checked/>
                            <div className="control__indicator"></div>
                        </label>
                    </div>

                    <div className="minput">
                    <span id="valid" style="margin-bottom: 5px;">Valid fields : 1/10</span>
                        <input type="submit" id="send" value="Submit" disabled="true" style={{padding:'5px',paddingTop:'7px'}}/>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Test;