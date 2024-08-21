const generateUniqueId = require('generate-unique-id');
let volunteerStorage = [];

const defaultCon = (req, res) => {
    console.log('default running');
    res.render('index', { volunteer: volunteerStorage });
};

const createVolunteerCon = (req, res) => {
    res.render('create'); 
};

const addVolunteerCon = (req, res) => {
    console.log('Add Volunteer');
    const { yourname, lastname, email, age, gender, address, city, postcode, country, phonenum, emergency, skill, qualification, reason } = req.body;

    const newVolunteer = {
        id: generateUniqueId(),
        yourname,
        lastname,
        email,
        age,
        gender,
        address,
        city,
        postcode,
        country,
        phonenum,
        emergency,
        skill,
        qualification,
        reason,
    };

    volunteerStorage = [...volunteerStorage, newVolunteer];
    res.redirect('/');
};

const singleVolunteerCon = (req, res) => {
    const { id } = req.params;
    console.log(`${id} - edit id`);

    const singleVolunteer = volunteerStorage.find(volunteer => volunteer.id === id);

    if (singleVolunteer) {
        console.log(singleVolunteer, 'single record');
        res.render('edit', { singleVolunteer });
    } 
};

const updateVolunteerCon = (req, res) => {
    const { id } = req.params;
    console.log(`update Volunteer ${id}`);
    const { yourname, lastname, email, age, gender, address, city, postcode, country, phonenum, emergency, skill, qualification, reason } = req.body;

    let volunteerFound = false;

    volunteerStorage = volunteerStorage.map(volunteer => {
        if (volunteer.id === id) {
            volunteerFound = true;
            console.log("Found matching volunteer:", volunteer);
            return {
                ...volunteer,
                yourname,
                lastname,
                email,
                age,
                gender,
                address,
                city,
                postcode,
                country,
                phonenum,
                emergency,
                skill,
                qualification,
                reason,
            };
        }
        return volunteer;
    });

    if (volunteerFound) {
        res.redirect('/');
    } else {
        res.status(404).send('Volunteer not found');
    }
};

const deleteVolunteerCon = (req, res) => {
    const { id } = req.params;
    console.log(`delete Volunteer ${id}`);

    const initialLength = volunteerStorage.length;
    volunteerStorage = volunteerStorage.filter(volunteer => volunteer.id !== id);

    if (volunteerStorage.length < initialLength) {
        res.redirect('/');
    } else {
        res.status(404).send('Volunteer not found');
    }
};

module.exports = { defaultCon,createVolunteerCon, addVolunteerCon, singleVolunteerCon, updateVolunteerCon, deleteVolunteerCon };
