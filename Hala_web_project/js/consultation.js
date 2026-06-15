function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ) {
        alert("يرجى تعبئة جميع الحقول");
        return false;
    }

    alert("تم إرسال الطلب بنجاح");

    return false;
}