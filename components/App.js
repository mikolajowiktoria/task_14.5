
var contacts = [
  {
    id: 1,
    firstName: 'Ania',
    lastName: 'Nowak',
    email: 'ania.nowak@example.com',
  },
  {
    id: 2,
    firstName: 'Jon',
    lastName: 'Snow',
    email: 'jon.snow@example.com',
  },
  {
    id: 3,
    firstName: 'Ariel',
    lastName: 'Love',
    email: 'ariel.love@example.com',
  }
];

var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
};

var App = React.createClass ({
    render: function() {
        return (
            React.createElement('div', {className: 'app'},
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});