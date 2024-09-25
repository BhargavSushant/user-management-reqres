# Made for Aspirant Infotech as an exercise

## TODO

- Do this in React JS, choose any design template and this will be to check your api integration ability.
  1.  Create a login page
      Email: user@mail.com (apply required and email validation)
      Password: Test@1234 (apply required and password(should be upper case, lower case, number and special character) validation)
  2.  Apply Bearer authentication, use this string as authentication => "Bearer Token Redacted".
  3.  Create a page that show list of users (use user list api)
  4.  Create a page to create user (use Create user api)
  5.  Create a page to edit user (use User details api to show user information on edit user page)
  6.  Step 3 > On user list page, add a "Files" button for each user, on clicking file a new open opens and file preview shows (file should be pdf|doc|docx|txt)
      Eg: there are total 3 users, so when I click on 1st user's Files button, on the new page preview of PDF file shows, and when click on 2nd user's Files button, preview of docx file shows, and so on.. I have attached the pdf and docx files

APIs

1. User List:
   Method: GET, Endpoint: https://reqres.in/api/users
   Response: {"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}

2. User details:
   Method GET, Endpoint: https://reqres.in/api/users/2
   Response: {"data":{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://reqres.in/img/faces/2-image.jpg"},"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}

3. Create User:
   Method: POST, Endpoint: https://reqres.in/api/users
   Request: {
   "name": "morpheus",
   "job": "leader"
   }
   Response: {
   "name": "morpheus",
   "job": "leader",
   "id": "66",
   "createdAt": "2024-05-01T06:14:37.425Z"
   }
