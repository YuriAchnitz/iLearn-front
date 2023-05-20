export const patterns = {
    email_pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"),
    name_pattern: new RegExp(""),
    password_pattern: new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),
    phone_pattern: new RegExp("^(\()?[1-9]{2}(\))? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$")
}