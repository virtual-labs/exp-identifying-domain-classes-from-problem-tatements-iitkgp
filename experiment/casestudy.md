## Case Study

**1. A Library Information System for SE VLabs Institute**

The SE VLabs Institute has been recently setup to provide state-of-the-art research facilities in the field of Software Engineering. Apart from research scholars (students) and professors, it also includes quite a large number of employees who work on different projects undertaken by the institution.

As the size and capacity of the institute is increasing with the time, it has been proposed to develop a Library Information System (LIS) for the benefit of students and employees of the institute. LIS will enable the members to borrow a book (or return it) with ease while sitting at his desk/chamber. The system also enables a member to extend the date of his borrowing if no other booking for that particular book has been made. For the library staff, this system aids them to easily handle day-to-day book transactions. The librarian, who has administrative privileges and complete control over the system, can enter a new record into the system when a new book has been purchased, or remove a record in case any book is taken off the shelf. Any non-member is free to use this system to browse/search books online. However, issuing or returning books is restricted to valid users (members) of LIS only.

The final deliverable would a web application (using the recent HTML 5), which should run only within the institute LAN. Although this reduces security risk of the software to a large extent, care should be taken no confidential information (eg., passwords) is stored in plain text.

From the given problem statement we can identify the following nouns and noun phrases:

- The SE VLabs Institute
- Software Engineering
- Research scholars
- Students
- Professors
- Employees
- Projects
- Institution
- Library Information System
- Members
- Book
- Desk
- Chamber
- System
- Library staff
- Librarian
- Transactions
- Record
- Shelf
- Non-member
- Web application
- LAN
- Software
- Information
- Passwords

#####  Let us put the above into different categories.

**People**
- Research scholars
- Students
- Professors
- Employees
- Members
- Library staff
- Librarian
- Non-member

**Places**
- Chamber

**Things**
- Projects
- Book
- Desk
- System
- Shelf
- LAN

**Organizations**
- The SE VLabs Institute
- Institution

**Concepts**
- Software Engineering
- Library Information System
- Record
- Web application
- Software
- Information
- Password

**Events**
- Transactions

The nouns and noun phrases in the problem statement gives us a list of 25 potential classes. However, all of them may not be relevant. For example, 'Chamber' is not something related to the Library Information System. And so are 'Projects', 'Desk', 'Shelf'. In a similar way, 'Software Engineering', 'Web application', 'Software' doesn't seem to be potential classes in this context. If we filter these entries, we might find that the follwong set of classes directly relate to the business activities of LIS:

- Member
- Book
- Transaction (of books)
- Librarian
- Employee

Although not explicitly mentioned in the problem statement, based on knowledge in related area one may point out few other potential classes:

- Book Inventory
- Distributor
- Order
- Order Line Item
- Payment
- Invoice

Among the classes listed above, 'Member', 'Librarian', 'Employee' share some common characteristics. For instance, everyone has a name, each has got an unique ID in the institution. In fact, 'Librarian' and 'Member' are some specialized category of the class 'Employee'. (This considers a student is also an "employee".) The above identified conceptual classes pave the way for modeling of design and implementation classes.