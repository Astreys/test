# test
brand new check in

Current version includes:
  - display initial contact list
  - delete contact functionality
  - add new contact functionality
  - edit contact functionality
  - sort contact list by last name
  - filter contact list by province
  - basic route with two separate views (basic view, add contact view)
  - filter for phone numbers
  - two directives. first manipulates 'edit', 'delete' controls, second builds pagination (not completely finished)
  - one service to share data between controllers


Important details:

1. Add New Contact functionality is realised through the service just to show that data can be shared between controllers.
2. I didn't create unit test for 'saveContact' because it uses service and I just in process to figure out how create test for services.
3. Pagination is not finished completely, hope to update it soon.
4. Input validation also is on the way.
