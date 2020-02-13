var list = new Array();
var input1 = document.getElementsByClassName("text")[0];
var input2 = document.getElementsByClassName("text")[1];
var input3 = document.getElementsByClassName("text")[2];
var listshow = document.getElementById("contact_table_body");
var error = document.getElementsByClassName("error-message")[0];
var str;
var flag = 0;
var pos = 0;

var counter = 0;
var countdel = 0;
var counted = 0;
class ContactList {
    constructor(name, email, phone) {
        this.id = counter++;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    addContact(contact) {
        list.push(contact);
        console.log(list);


    }

    removeContact(id) {
        list.splice(id, 1)

    }
    editContact(id, updatedObj) {


    }


}
function clickfun(e) {
    stri = "";
    e.preventDefault();
    if (flag == 0 && input1.value!="" && input2.value!="" && input3.value!="" ) {
        var contact1 = new ContactList(input1.value, input2.value, input3.value)
        if (contact1 != "") {
            contact1.addContact(contact1);
        }
        Object.defineProperty(contact1, 'id', { enumerable: false });
        for (i = 0; i < list.length; i++) {

            stri += "<tr>";

            for (k in list[i]) {

                stri += "<td>" + list[i][k] + "</td>"


            }

            stri += "<td><button "
            stri += "id=d-" + countdel++
            stri += ">del</button></td>"

            stri += "<td><button id=e-" + counted++
            stri += ">edit</button></td>"
            stri += "</tr>"
        }
        listshow.innerHTML = stri;
        input1.value = ""
        input2.value = ""
        input3.value = ""
    }else if(flag==1)
    {
       
                    list[pos].name=input1.value;
                    list[pos].email=input2.value;
                    list[pos].phone=input3.value;
                    
                    console.log(list[pos]);
                    flag=0;
                    submitbut.textContent="submit" 
                    
                     var childs=listshow.childNodes;
                     var mychild=childs[pos].childNodes;
                     mychild[0].textContent=input1.value;
                     mychild[1].textContent=input2.value;
                     mychild[2].textContent=input3.value;
                     console.log(mychild[1]);
                     input1.value = ""
                     input2.value = ""
                     input3.value = ""
    }
   
}

var submitbut = document.getElementById("submit");
submitbut.addEventListener('click', clickfun);
var contact3 = new ContactList("x", "x", "x")
listshow.addEventListener('click', function (ex) {
    var myid = ex.target.id;
    ex.preventDefault();
    console.log(myid)
    console.log("countdel: " + countdel)
    var objId = myid.split("-")[1];
    console.log("objId: " + objId)

    if (myid.charAt(0) === 'd') {
        for (i = 0; i < list.length; i++) {

            if (list[i].id == objId) {

                var myparent = ex.target.parentNode.parentNode;
                console.log(myparent)
                listshow.removeChild(myparent);
                console.log("your row is deleted")
                delete list[i];
            }

        }

    } else if (myid.charAt(0) === 'e') {
        for (i = 0; i < list.length; i++) {

            if (list[i].id == objId) {
                submitbut.textContent = "edit"
                input1.value = list[i].name
                input2.value = list[i].email
                input3.value = list[i].phone
                console.log(list[i])
                list[i].name = ""
                list[i].email = ""
                list[i].phone = ""
                flag = 1;
                pos = i

                //submitbut.textContent="submit" 
                //var childs=ex.target.parentNode.parentNode
                //console.log(childs)
                //var myid=list[i].id;
                // listshow.removeChild(childs)



                //    var updatedRow="<tr><td>" + input1.value +"</td><td>" 
                //                    + input2.value +"</td><td>" + input3.value +"</td><td>"
                //     listshow.innerHTML=updatedRow;

                //     list[i].name=input1.value
                //     list[i].email=input2.value;
                //     list[i].phone=input3.value




            }

        }


    }

})


